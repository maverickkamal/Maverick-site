const Shapes = ({ className = '' }) => {
    return (
        <svg 
            width="1328" 
            height="884" 
            viewBox="0 0 1328 884" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Red circles */}
            <g opacity="0.3">
                <ellipse opacity="0.5" cx="945" cy="477" rx="74" ry="75" fill="var(--destructive)"/>
                <ellipse opacity="0.5" cx="431" cy="657.5" rx="35" ry="35.5" fill="var(--destructive)"/>
                <ellipse opacity="0.5" cx="720" cy="35.5" rx="35" ry="35.5" fill="var(--destructive)"/>
                <ellipse opacity="0.5" cx="1278" cy="276.5" rx="50" ry="50.5" fill="var(--destructive)"/>
            </g>
            {/* Dark triangles */}
            <g opacity="0.3">
                <path opacity="0.5" d="M945 556L997.828 668.5H892.172L945 556Z" fill="var(--foreground)"/>
                <path opacity="0.5" d="M400 688L434.641 761.5H365.359L400 688Z" fill="var(--foreground)"/>
            </g>
            {/* Orange/warning squares */}
            <g opacity="0.3">
                <rect opacity="0.5" x="773" y="668" width="150" height="150" fill="var(--warning)"/>
                <rect opacity="0.5" x="734" y="69" width="150" height="150" fill="var(--warning)"/>
                <rect opacity="0.5" x="554" y="405.953" width="80" height="80" transform="rotate(-43.3864 554 405.953)" fill="var(--warning)"/>
            </g>
            {/* Green/primary rectangles */}
            <g opacity="0.3">
                <rect opacity="0.5" x="848.41" y="218" width="450" height="150" transform="rotate(14.442 848.41 218)" fill="var(--primary)"/>
                <rect opacity="0.5" x="-67.1428" y="748.263" width="450" height="150" transform="rotate(-25.6206 -67.1428 748.263)" fill="var(--primary)"/>
                <rect opacity="0.5" x="476.659" y="564" width="339.58" height="64.937" transform="rotate(29.1784 476.659 564)" fill="var(--primary)"/>
            </g>
        </svg>
    );
};

export default Shapes;

