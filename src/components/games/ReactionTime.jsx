import { useState, useRef, useCallback } from 'react';

const ReactionTime = ({ onClose }) => {
    const [gameState, setGameState] = useState('waiting');
    const [reactionTime, setReactionTime] = useState(null);
    const [bestTime, setBestTime] = useState(() => {
        const saved = localStorage.getItem('reactionBestTime');
        return saved ? parseInt(saved) : null;
    });
    const startTimeRef = useRef(null);
    const timeoutRef = useRef(null);

    const startGame = useCallback(() => {
        setGameState('ready');
        setReactionTime(null);

        const delay = Math.random() * 3000 + 2000;

        timeoutRef.current = setTimeout(() => {
            setGameState('go');
            startTimeRef.current = Date.now();
        }, delay);
    }, []);

    const handleClick = useCallback(() => {
        if (gameState === 'waiting') {
            startGame();
        } else if (gameState === 'ready') {
            clearTimeout(timeoutRef.current);
            setGameState('too-early');
        } else if (gameState === 'go') {
            const time = Date.now() - startTimeRef.current;
            setReactionTime(time);
            setGameState('result');

            if (!bestTime || time < bestTime) {
                setBestTime(time);
                localStorage.setItem('reactionBestTime', time.toString());
            }
        } else if (gameState === 'too-early' || gameState === 'result') {
            setGameState('waiting');
        }
    }, [gameState, startGame, bestTime]);

    const getStateColor = () => {
        switch (gameState) {
            case 'ready': return 'var(--destructive)';
            case 'go': return 'var(--primary)';
            case 'too-early': return 'var(--warning)';
            case 'result': return 'var(--primary)';
            default: return 'var(--border)';
        }
    };

    const getMessage = () => {
        switch (gameState) {
            case 'waiting': return 'Click to Start';
            case 'ready': return 'Wait for green...';
            case 'go': return 'CLICK NOW!';
            case 'too-early': return 'Too early! Click to try again';
            case 'result': return `${reactionTime}ms`;
            default: return '';
        }
    };

    return (
        <div className="game-modal">
            <div className="game-container reaction-container">
                <button className="game-close" onClick={onClose}>×</button>
                <h3 className="game-title">Reaction Time</h3>
                <p className="game-subtitle">Test your reflexes!</p>

                <div
                    className={`reaction-area ${gameState}`}
                    onClick={handleClick}
                    style={{ backgroundColor: getStateColor() }}
                >
                    <span className="reaction-message">{getMessage()}</span>
                    {gameState === 'result' && (
                        <span className="reaction-label">Click to try again</span>
                    )}
                </div>

                <div className="reaction-stats">
                    {bestTime && (
                        <p className="best-time">
                            Best: <strong>{bestTime}ms</strong>
                        </p>
                    )}
                    {reactionTime && (
                        <p className="rating">
                            {reactionTime < 200 ? 'Amazing!' : 
                             reactionTime < 300 ? 'Great!' : 
                             reactionTime < 400 ? 'Good' : 'Keep practicing'}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ReactionTime;

