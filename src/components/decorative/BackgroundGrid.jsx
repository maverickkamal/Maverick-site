const BackgroundGrid = ({ className = '' }) => {
    // Generate grid cells programmatically
    const generateGridCells = () => {
        const cells = [];
        const rows = 13;
        const cols = 20;
        const cellSize = 73;
        const startX = -9.5;
        const startY = -33.5;

        // Define which cells have special fills (light gray variations)
        const specialFills = {
            // Format: "row-col": "fill-type" (1 = random-grid1, 2 = random-grid2)
            "2-2": 1, "2-3": 1, "2-4": 1, "2-7": 2, "2-9": 2, "2-11": 2, "2-17": 1, "2-18": 1, "2-19": 1,
            "3-2": 1, "3-19": 1,
            "6-2": 1, "6-8": 1, "6-9": 1, "6-18": 1,
            "9-2": 1, "9-18": 1,
            "10-2": 1, "10-3": 1, "10-9": 2, "10-11": 2, "10-13": 2, "10-17": 1, "10-18": 1,
            "11-3": 1, "11-17": 1,
        };

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                const x = startX + col * cellSize;
                const y = startY + row * cellSize;
                const key = `${row}-${col}`;
                const fillType = specialFills[key];
                
                let fill = "none";
                if (fillType === 1) {
                    fill = "var(--random-grid1)";
                } else if (fillType === 2) {
                    fill = "var(--random-grid2)";
                }

                cells.push(
                    <rect
                        key={key}
                        x={x}
                        y={y}
                        width={cellSize}
                        height={cellSize}
                        fill={fill}
                        stroke="var(--grid-border)"
                    />
                );
            }
        }
        return cells;
    };

    return (
        <div className={`background-grid ${className}`}>
            <svg 
                width="1440" 
                height="1086" 
                viewBox="0 0 1440 1086" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="grid-svg"
            >
                <g opacity="0.5" clipPath="url(#clip0_grid)">
                    <rect 
                        width="1440" 
                        height="1120" 
                        transform="translate(0 -34)" 
                        fill="var(--main-fill)"
                    />
                    {generateGridCells()}
                </g>
                <defs>
                    <clipPath id="clip0_grid">
                        <rect 
                            width="1440" 
                            height="1120" 
                            fill="var(--main-fill)" 
                            transform="translate(0 -34)"
                        />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
};

export default BackgroundGrid;

