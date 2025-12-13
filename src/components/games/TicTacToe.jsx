import { useState, useCallback, useEffect, useRef } from 'react';

const WINNING_LINES = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

const calculateWinner = (squares) => {
    for (let [a, b, c] of WINNING_LINES) {
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
};

const TicTacToe = ({ onClose }) => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    const [gameStatus, setGameStatus] = useState('playing');
    const timeoutRef = useRef(null);
    
    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    const minimax = useCallback((squares, isMaximizing) => {
        const winner = calculateWinner(squares);
        if (winner === 'O') return 10;
        if (winner === 'X') return -10;
        if (squares.every(s => s !== null)) return 0;

        if (isMaximizing) {
            let best = -Infinity;
            for (let i = 0; i < 9; i++) {
                if (!squares[i]) {
                    squares[i] = 'O';
                    best = Math.max(best, minimax(squares, false));
                    squares[i] = null;
                }
            }
            return best;
        } else {
            let best = Infinity;
            for (let i = 0; i < 9; i++) {
                if (!squares[i]) {
                    squares[i] = 'X';
                    best = Math.min(best, minimax(squares, true));
                    squares[i] = null;
                }
            }
            return best;
        }
    }, []);

    const getAIMove = useCallback((squares) => {
        let bestScore = -Infinity;
        let bestMove = null;
        for (let i = 0; i < 9; i++) {
            if (!squares[i]) {
                squares[i] = 'O';
                const score = minimax(squares, false);
                squares[i] = null;
                if (score > bestScore) {
                    bestScore = score;
                    bestMove = i;
                }
            }
        }
        return bestMove;
    }, [minimax]);

    const handleClick = (index) => {
        if (board[index] || gameStatus !== 'playing' || !isXNext) return;

        const newBoard = [...board];
        newBoard[index] = 'X';
        setBoard(newBoard);

        const winner = calculateWinner(newBoard);
        if (winner) {
            setGameStatus(winner === 'X' ? 'won' : 'lost');
            return;
        }
        if (newBoard.every(s => s !== null)) {
            setGameStatus('draw');
            return;
        }

        setIsXNext(false);

        timeoutRef.current = setTimeout(() => {
            const aiMove = getAIMove([...newBoard]);
            if (aiMove !== null) {
                const updatedBoard = [...newBoard];
                updatedBoard[aiMove] = 'O';
                setBoard(updatedBoard);

                const aiWinner = calculateWinner(updatedBoard);
                if (aiWinner) {
                    setGameStatus('lost');
                } else if (updatedBoard.every(s => s !== null)) {
                    setGameStatus('draw');
                }
            }
            setIsXNext(true);
        }, 300);
    };

    const resetGame = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        setBoard(Array(9).fill(null));
        setIsXNext(true);
        setGameStatus('playing');
    };

    return (
        <div className="game-modal">
            <div className="game-container tictactoe-container">
                <button className="game-close" onClick={onClose}>×</button>
                <h3 className="game-title">Tic Tac Toe</h3>
                <p className="game-subtitle">You are X. Beat the AI!</p>

                <div className="tictactoe-board">
                    {board.map((cell, index) => (
                        <button
                            key={index}
                            className={`tictactoe-cell ${cell ? 'filled' : ''}`}
                            onClick={() => handleClick(index)}
                            disabled={cell || gameStatus !== 'playing'}
                        >
                            {cell}
                        </button>
                    ))}
                </div>

                {gameStatus !== 'playing' && (
                    <div className={`game-result ${gameStatus}`}>
                        <span className="result-text">
                            {gameStatus === 'won' ? 'You Won!' : gameStatus === 'lost' ? 'AI Wins!' : "It's a Draw!"}
                        </span>
                        <button className="game-reset" onClick={resetGame}>Play Again</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TicTacToe;

