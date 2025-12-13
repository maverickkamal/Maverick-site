import { useState, useEffect, useRef, useCallback } from 'react';

const TypingSpeed = ({ onClose }) => {
    const quotes = [
        "The only way to do great work is to love what you do.",
        "Code is like humor. When you have to explain it, it's bad.",
        "First, solve the problem. Then, write the code.",
        "The best error message is the one that never shows up.",
        "Programming isn't about what you know; it's about what you can figure out.",
        "In biology, nothing makes sense except in the light of evolution.",
        "Science is a way of thinking much more than it is a body of knowledge.",
    ];

    const [quote, setQuote] = useState('');
    const [input, setInput] = useState('');
    const [gameState, setGameState] = useState('ready');
    const [startTime, setStartTime] = useState(null);
    const [wpm, setWpm] = useState(0);
    const [accuracy, setAccuracy] = useState(100);
    const [bestWpm, setBestWpm] = useState(() => {
        const saved = localStorage.getItem('typingBestWpm');
        return saved ? parseInt(saved) : null;
    });
    const inputRef = useRef(null);

    const getRandomQuote = useCallback(() => {
        return quotes[Math.floor(Math.random() * quotes.length)];
    }, []);

    const initGame = useCallback(() => {
        setQuote(getRandomQuote());
        setInput('');
        setGameState('ready');
        setStartTime(null);
        setWpm(0);
        setAccuracy(100);
    }, [getRandomQuote]);

    useEffect(() => {
        initGame();
    }, [initGame]);

    useEffect(() => {
        if (gameState === 'playing' && inputRef.current) {
            inputRef.current.focus();
        }
    }, [gameState]);

    const startGame = () => {
        setGameState('playing');
        setStartTime(Date.now());
        setTimeout(() => inputRef.current?.focus(), 50);
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInput(value);

        if (!startTime) {
            setStartTime(Date.now());
        }

        let correctChars = 0;
        for (let i = 0; i < value.length; i++) {
            if (value[i] === quote[i]) {
                correctChars++;
            }
        }
        const acc = value.length > 0 ? Math.round((correctChars / value.length) * 100) : 100;
        setAccuracy(acc);

        if (value === quote) {
            const timeElapsed = (Date.now() - startTime) / 1000 / 60;
            const words = quote.split(' ').length;
            const calculatedWpm = Math.round(words / timeElapsed);
            setWpm(calculatedWpm);
            setGameState('finished');

            if (!bestWpm || calculatedWpm > bestWpm) {
                setBestWpm(calculatedWpm);
                localStorage.setItem('typingBestWpm', calculatedWpm.toString());
            }
        }
    };

    const renderQuote = () => {
        return quote.split('').map((char, index) => {
            let className = 'char';
            if (index < input.length) {
                className += input[index] === char ? ' correct' : ' incorrect';
            } else if (index === input.length) {
                className += ' current';
            }
            return (
                <span key={index} className={className}>
                    {char}
                </span>
            );
        });
    };

    return (
        <div className="game-modal">
            <div className="game-container typing-container">
                <button className="game-close" onClick={onClose}>×</button>
                <h3 className="game-title">Typing Speed</h3>
                <p className="game-subtitle">Type as fast as you can!</p>

                {bestWpm && (
                    <p className="typing-best">Best: <strong>{bestWpm} WPM</strong></p>
                )}

                {gameState === 'ready' && (
                    <div className="typing-start">
                        <p className="typing-preview">{quote}</p>
                        <button className="game-reset" onClick={startGame}>
                            Start Typing
                        </button>
                    </div>
                )}

                {gameState === 'playing' && (
                    <div className="typing-game">
                        <div className="typing-quote">
                            {renderQuote()}
                        </div>
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={handleInputChange}
                            className="typing-input"
                            placeholder="Start typing..."
                            autoComplete="off"
                            autoCorrect="off"
                            autoCapitalize="off"
                            spellCheck="false"
                        />
                        <div className="typing-stats">
                            <span>Accuracy: <strong>{accuracy}%</strong></span>
                        </div>
                    </div>
                )}

                {gameState === 'finished' && (
                    <div className="game-result won">
                        <span className="result-text">{wpm} WPM</span>
                        <span className="result-accuracy">Accuracy: {accuracy}%</span>
                        <span className="result-rating">
                            {wpm >= 60 ? 'Amazing!' : wpm >= 40 ? 'Great!' : wpm >= 25 ? 'Good job!' : 'Keep practicing!'}
                        </span>
                        <button className="game-reset" onClick={initGame}>Try Again</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TypingSpeed;

