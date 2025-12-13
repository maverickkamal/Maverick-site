import { useState, useRef, useEffect } from 'react';
import TicTacToe from '../components/games/TicTacToe';
import ReactionTime from '../components/games/ReactionTime';
import MemoryMatch from '../components/games/MemoryMatch';
import TypingSpeed from '../components/games/TypingSpeed';
import XIcon from '../assets/images/X.png';
import InstagramIcon from '../assets/images/Instagram.png';

const FORMSUBMIT_EMAIL = import.meta.env.VITE_FORMSUBMIT_EMAIL;

const CURATED_OPINIONS = [
    "AI and its applications in healthcare",
    "The future of bioinformatics in personalized medicine",
    "Open-source tools for scientific research",
    "Learning to code changed everything for me",
];

const Que = () => {
    const [activeGame, setActiveGame] = useState(null);
    const [messageStatus, setMessageStatus] = useState(null);
    const [friendStatus, setFriendStatus] = useState(null);
    const [opinionStatus, setOpinionStatus] = useState(null);
    const [formLoadTime] = useState(Date.now());
    
    const messageFormRef = useRef(null);
    const friendFormRef = useRef(null);
    const opinionFormRef = useRef(null);
    const timeoutRefs = useRef({ message: null, friend: null, opinion: null });
    
    useEffect(() => {
        return () => {
            Object.keys(timeoutRefs.current).forEach(key => {
                if (timeoutRefs.current[key]) {
                    clearTimeout(timeoutRefs.current[key]);
                    timeoutRefs.current[key] = null;
                }
            });
        };
    }, []);

    const isSpam = (formData) => {
        if (formData.get('_honey')) return true;
        if (formData.get('website')) return true;
        
        const timeSinceLoad = Date.now() - formLoadTime;
        if (timeSinceLoad < 3000) return true; 
        
        return false;
    };

    const handleFormSubmit = async (e, formType, setStatus, formRef) => {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        
        if (isSpam(formData)) {
            setStatus('sent'); 
            formRef.current?.reset();
            timeoutRefs.current[formType] = setTimeout(() => {
                setStatus(null);
            }, 3000);
            return;
        }

        setStatus('sending');
        
        try {
            const response = await fetch(`https://formsubmit.co/ajax/${FORMSUBMIT_EMAIL}`, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus('sent');
                formRef.current?.reset();
                timeoutRefs.current[formType] = setTimeout(() => {
                    setStatus(null);
                }, 3000);
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            console.error('Form error:', error);
            setStatus('error');
            timeoutRefs.current[formType] = setTimeout(() => {
                setStatus(null);
            }, 3000);
        }
    };

    return (
        <div className="que-page page-container">
            <header className="page-header">
                <h1>Que?</h1>
                <p>Wanna say something? Or play a game? Or share your opinion? This is the place for you!</p>
            </header>

            <div className="que-grid">
                <section className="que-section bulletin-card">
                    <div className="section-header">
                        <h2>Send an Anonymous Message</h2>
                    </div>
                    <p className="section-desc">
                        Have something to say? Send me a message anonymously. I read every single one!
                    </p>

                    <form 
                        ref={messageFormRef}
                        onSubmit={(e) => handleFormSubmit(e, 'anonymous', setMessageStatus, messageFormRef)} 
                        className="que-form"
                    >
                        <input type="hidden" name="_subject" value="Anonymous Message" />
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_template" value="table" />
                        
                        <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
                        <input type="text" name="website" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" placeholder="Your website" />
                        
                        <textarea
                            name="message"
                            placeholder="Your message here..."
                            rows={4}
                            maxLength={500}
                            required
                            disabled={messageStatus === 'sending'}
                        />
                        <button 
                            type="submit" 
                            className={`submit-btn ${messageStatus || ''}`}
                            disabled={messageStatus === 'sending'}
                        >
                            {messageStatus === 'sending' ? 'Sending...' : 
                             messageStatus === 'sent' ? '✓ Sent!' : 
                             messageStatus === 'error' ? 'Error - Try Again' : 'Send Message'}
                        </button>
                    </form>
                    <p className="form-note">Completely anonymous. I won't know who you are</p>
                </section>

                <section className="que-section bulletin-card">
                    <div className="section-header">
                        <h2>Let's Be Friends</h2>
                    </div>
                    <p className="section-desc">
                        Want to connect? Drop your details and let's chat!
                    </p>

                    <form 
                        ref={friendFormRef}
                        onSubmit={(e) => handleFormSubmit(e, 'friend', setFriendStatus, friendFormRef)} 
                        className="que-form friend-form"
                    >
                        <input type="hidden" name="_subject" value="Friend Request" />
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_template" value="table" />
                        
                        <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
                        <input type="text" name="website" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
                        
                        <div className="form-field">
                            <label htmlFor="friend-name">Name</label>
                            <input 
                                type="text" 
                                id="friend-name" 
                                name="name" 
                                placeholder="Your name"
                                required 
                            />
                        </div>

                        <div className="form-field">
                            <label>How to reach you</label>
                            <div className="contact-options">
                                <div className="contact-option">
                                    <img src={XIcon} alt="X" className="contact-icon" />
                                    <input type="text" name="twitter" placeholder="@username" />
                                </div>
                                <div className="contact-option">
                                    <img src={InstagramIcon} alt="Instagram" className="contact-icon" />
                                    <input type="text" name="instagram" placeholder="@username" />
                                </div>
                                <div className="contact-option">
                                    <img 
                                        src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/discord.svg" 
                                        alt="Discord" 
                                        className="contact-icon"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.nextSibling.style.marginLeft = '0';
                                        }}
                                    />
                                    <input type="text" name="discord" placeholder="user#1234" />
                                </div>
                                <div className="contact-option">
                                    <img 
                                        src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/gmail.svg" 
                                        alt="Email" 
                                        className="contact-icon"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.nextSibling.style.marginLeft = '0';
                                        }}
                                    />
                                    <input type="email" name="email" placeholder="email@example.com" />
                                </div>
                            </div>
                        </div>

                        <div className="form-field">
                            <label htmlFor="friend-note">Quick note (optional)</label>
                            <textarea 
                                id="friend-note" 
                                name="note" 
                                placeholder="Say hi!"
                                rows={2}
                            />
                        </div>

                        <button 
                            type="submit" 
                            className={`submit-btn ${friendStatus || ''}`}
                            disabled={friendStatus === 'sending'}
                        >
                            {friendStatus === 'sending' ? 'Sending...' : 
                             friendStatus === 'sent' ? '✓ Friend Request Sent!' : 
                             friendStatus === 'error' ? 'Error - Try Again' : 'Send Friend Request'}
                        </button>
                    </form>
                </section>

                <section className="que-section bulletin-card games-section">
                    <div className="section-header">
                        <h2>Play Something</h2>
                    </div>
                    <p className="section-desc">
                        Take a break and play a quick game!
                    </p>

                    <div className="games-grid">
                        <button 
                            className="game-card"
                            onClick={() => setActiveGame('tictactoe')}
                        >
                            <svg className="game-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="3" y="3" width="6" height="6" stroke="currentColor" strokeWidth="2"/>
                                <rect x="9" y="3" width="6" height="6" stroke="currentColor" strokeWidth="2"/>
                                <rect x="15" y="3" width="6" height="6" stroke="currentColor" strokeWidth="2"/>
                                <rect x="3" y="9" width="6" height="6" stroke="currentColor" strokeWidth="2"/>
                                <rect x="9" y="9" width="6" height="6" stroke="currentColor" strokeWidth="2"/>
                                <rect x="15" y="9" width="6" height="6" stroke="currentColor" strokeWidth="2"/>
                                <rect x="3" y="15" width="6" height="6" stroke="currentColor" strokeWidth="2"/>
                                <rect x="9" y="15" width="6" height="6" stroke="currentColor" strokeWidth="2"/>
                                <rect x="15" y="15" width="6" height="6" stroke="currentColor" strokeWidth="2"/>
                            </svg>
                            <span className="game-name">Tic Tac Toe</span>
                            <span className="game-desc">Beat the AI</span>
                        </button>

                        <button 
                            className="game-card"
                            onClick={() => setActiveGame('reaction')}
                        >
                            <img 
                                src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/lightning.svg" 
                                alt="Reaction Time" 
                                className="game-icon"
                                onError={(e) => {
                                    e.target.outerHTML = '<svg class="game-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg>';
                                }}
                            />
                            <span className="game-name">Reaction Time</span>
                            <span className="game-desc">Test reflexes</span>
                        </button>

                        <button 
                            className="game-card"
                            onClick={() => setActiveGame('memory')}
                        >
                            <img 
                                src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/brain.svg" 
                                alt="Memory Match" 
                                className="game-icon"
                                onError={(e) => {
                                    e.target.outerHTML = '<svg class="game-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zm-1 13v3h-2v-3H8v-2h2v-2H8V9h2V7h2v2h2v2h-2v2h2v2h-2z"/></svg>';
                                }}
                            />
                            <span className="game-name">Memory Match</span>
                            <span className="game-desc">Find pairs</span>
                        </button>

                        <button 
                            className="game-card"
                            onClick={() => setActiveGame('typing')}
                        >
                            <img 
                                src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/keyboard.svg" 
                                alt="Typing Speed" 
                                className="game-icon"
                                onError={(e) => {
                                    e.target.outerHTML = '<svg class="game-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M20 5H4c-1.1 0-1.99.9-1.99 2L2 17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-9 3h2v2h-2V8zm0 3h2v2h-2v-2zM8 8h2v2H8V8zm0 3h2v2H8v-2zm-1 2H5v-2h2v2zm0-3H5V8h2v2zm9 7H8v-2h8v2zm0-4h-2v-2h2v2zm0-3h-2V8h2v2zm3 3h-2v-2h2v2zm0-3h-2V8h2v2z"/></svg>';
                                }}
                            />
                            <span className="game-name">Typing Speed</span>
                            <span className="game-desc">Test WPM</span>
                        </button>
                    </div>
                </section>

                <section className="que-section bulletin-card opinions-section">
                    <div className="section-header">
                        <h2>Opinions Wall</h2>
                    </div>
                    <p className="section-desc current-question">
                        <strong>Current Question:</strong><br />
                        "What technology excites you most right now?"
                    </p>

                    <div className="opinions-list">
                        {CURATED_OPINIONS.map((opinion, index) => (
                            <div key={index} className="opinion-item">
                                <span className="opinion-quote">"</span>
                                {opinion}
                            </div>
                        ))}
                    </div>

                    <form 
                        ref={opinionFormRef}
                        onSubmit={(e) => handleFormSubmit(e, 'opinion', setOpinionStatus, opinionFormRef)} 
                        className="que-form opinion-form"
                    >
                        <input type="hidden" name="_subject" value="Opinion Submission" />
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_template" value="table" />
                        <input type="hidden" name="question" value="What technology excites you most right now?" />
                        
                        <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
                        <input type="text" name="website" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
                        
                        <label htmlFor="opinion-input">Share your opinion:</label>
                        <div className="opinion-input-wrapper">
                            <input
                                type="text"
                                id="opinion-input"
                                name="opinion"
                                placeholder="Your answer..."
                                maxLength={150}
                                required
                                disabled={opinionStatus === 'sending'}
                            />
                            <button 
                                type="submit"
                                className={`submit-btn compact ${opinionStatus || ''}`}
                                disabled={opinionStatus === 'sending'}
                            >
                                {opinionStatus === 'sending' ? '...' : 
                                 opinionStatus === 'sent' ? '✓' : 
                                 opinionStatus === 'error' ? '!' : 'Submit'}
                            </button>
                        </div>
                        <p className="form-note opinion-note">Your opinion may be featured on the wall!</p>
                    </form>
                </section>
            </div>

            {activeGame === 'tictactoe' && (
                <TicTacToe onClose={() => setActiveGame(null)} />
            )}
            {activeGame === 'reaction' && (
                <ReactionTime onClose={() => setActiveGame(null)} />
            )}
            {activeGame === 'memory' && (
                <MemoryMatch onClose={() => setActiveGame(null)} />
            )}
            {activeGame === 'typing' && (
                <TypingSpeed onClose={() => setActiveGame(null)} />
            )}
        </div>
    );
};

export default Que;
