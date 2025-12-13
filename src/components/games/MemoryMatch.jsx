import { useState, useEffect, useCallback } from 'react';

const MemoryMatch = ({ onClose }) => {
    const symbols = ['🧬', '🐍', '⚛️', '🔬', '💻', '🧠', '🌿', '📊'];
    
    const [cards, setCards] = useState([]);
    const [flipped, setFlipped] = useState([]);
    const [matched, setMatched] = useState([]);
    const [moves, setMoves] = useState(0);
    const [gameWon, setGameWon] = useState(false);
    const [bestMoves, setBestMoves] = useState(() => {
        const saved = localStorage.getItem('memoryBestMoves');
        return saved ? parseInt(saved) : null;
    });

    const initGame = useCallback(() => {
        const shuffled = [...symbols, ...symbols]
            .sort(() => Math.random() - 0.5)
            .map((symbol, index) => ({ id: index, symbol, isFlipped: false }));
        setCards(shuffled);
        setFlipped([]);
        setMatched([]);
        setMoves(0);
        setGameWon(false);
    }, []);

    useEffect(() => {
        initGame();
    }, [initGame]);

    useEffect(() => {
        if (matched.length === symbols.length * 2 && matched.length > 0) {
            setGameWon(true);
            if (!bestMoves || moves < bestMoves) {
                setBestMoves(moves);
                localStorage.setItem('memoryBestMoves', moves.toString());
            }
        }
    }, [matched, moves, bestMoves]);

    useEffect(() => {
        if (flipped.length === 2) {
            const [first, second] = flipped;
            if (cards[first].symbol === cards[second].symbol) {
                setMatched(prev => [...prev, first, second]);
                setFlipped([]);
            } else {
                const timeout = setTimeout(() => {
                    setFlipped([]);
                }, 800);
                return () => clearTimeout(timeout);
            }
        }
    }, [flipped, cards]);

    const handleCardClick = (index) => {
        if (
            flipped.length === 2 ||
            flipped.includes(index) ||
            matched.includes(index)
        ) return;

        setFlipped(prev => [...prev, index]);
        if (flipped.length === 1) {
            setMoves(prev => prev + 1);
        }
    };

    return (
        <div className="game-modal">
            <div className="game-container memory-container">
                <button className="game-close" onClick={onClose}>×</button>
                <h3 className="game-title">Memory Match</h3>
                <p className="game-subtitle">Match pairs of cards!</p>

                <div className="memory-stats">
                    <span>Moves: <strong>{moves}</strong></span>
                    {bestMoves && <span>Best: <strong>{bestMoves}</strong></span>}
                </div>

                <div className="memory-board">
                    {cards.map((card, index) => (
                        <button
                            key={card.id}
                            className={`memory-card ${
                                flipped.includes(index) || matched.includes(index) ? 'flipped' : ''
                            } ${matched.includes(index) ? 'matched' : ''}`}
                            onClick={() => handleCardClick(index)}
                            disabled={flipped.length === 2 || matched.includes(index)}
                        >
                            <span className="card-front">?</span>
                            <span className="card-back">{card.symbol}</span>
                        </button>
                    ))}
                </div>

                {gameWon && (
                    <div className="game-result won">
                        <span className="result-text">You Won in {moves} moves!</span>
                        <button className="game-reset" onClick={initGame}>Play Again</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MemoryMatch;

