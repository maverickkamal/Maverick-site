const ShapesMobile = ({ className = '' }) => {
    return (
        <svg 
            width="396" 
            height="674" 
            viewBox="0 0 396 674" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Red circles */}
            <g opacity="0.3">
                <ellipse opacity="0.5" cx="334.816" cy="206.241" rx="31.8164" ry="32.2406" fill="var(--destructive)"/>
                <ellipse opacity="0.5" cx="84.3536" cy="509.984" rx="15.054" ry="15.2547" fill="var(--destructive)"/>
                <ellipse opacity="0.5" cx="204.054" cy="30.2547" rx="15.054" ry="15.2547" fill="var(--destructive)"/>
                <ellipse opacity="0.5" cx="319.46" cy="458.746" rx="21.4603" ry="21.7464" fill="var(--destructive)"/>
            </g>
            {/* Orange/warning squares */}
            <g opacity="0.3">
                <rect opacity="0.5" x="241" y="282" width="64.487" height="64.487" fill="var(--warning)"/>
                <rect opacity="0.5" x="111.586" y="250" width="64.487" height="64.487" transform="rotate(53.1249 111.586 250)" fill="var(--warning)"/>
                <rect opacity="0.5" x="-11" y="433.625" width="34.393" height="34.393" transform="rotate(-43.3864 -11 433.625)" fill="var(--warning)"/>
            </g>
            {/* Green/primary rectangles */}
            <g opacity="0.3">
                <rect opacity="0.5" x="255.515" width="193.461" height="64.487" transform="rotate(43.6529 255.515 0)" fill="var(--primary)"/>
                <rect opacity="0.5" x="101" y="571.654" width="193.461" height="64.487" transform="rotate(-25.6206 101 571.654)" fill="var(--primary)"/>
                <rect opacity="0.5" x="-112" y="642.654" width="193.461" height="64.487" transform="rotate(-25.6206 -112 642.654)" fill="var(--primary)"/>
                <rect opacity="0.5" width="137.151" height="30.7844" transform="matrix(-0.285308 0.958436 -0.999683 -0.0251577 323.905 348.774)" fill="var(--primary)"/>
            </g>
            {/* Dark triangles */}
            <g opacity="0.3">
                <path opacity="0.5" d="M319.255 233L341.993 281.309H296.518L319.255 233Z" fill="var(--foreground)"/>
                <path opacity="0.5" d="M77.3402 623.174L130.668 625.811L109.294 665.95L77.3402 623.174Z" fill="var(--foreground)"/>
                <path opacity="0.5" d="M73.2471 529.825L88.1296 561.445H58.3646L73.2471 529.825Z" fill="var(--foreground)"/>
            </g>
        </svg>
    );
};

export default ShapesMobile;

