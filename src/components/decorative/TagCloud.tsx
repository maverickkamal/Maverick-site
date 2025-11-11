import React from 'react';

interface Tag {
  text: string;
  color: string;
  left: string;
  top: string;
}

interface TagCloudProps {
  className?: string;
}

const tags: Tag[] = [
  { text: 'bio', color: '#006b3d', left: '540px', top: '308px' },
  { text: 'ml', color: '#8a5500', left: '1104px', top: '806px' },
  { text: 'bme', color: '#bfbfbf', left: '1289px', top: '650px' },
  { text: 'dl', color: '#8a5500', left: '757px', top: '110px' },
  { text: 'ai', color: '#c91f1f', left: '1255px', top: '142px' },
];

export default function TagCloud({ className = '' }: TagCloudProps) {
  return (
    <>
      {tags.map((tag, index) => (
        <p
          key={index}
          className="absolute font-['Syne:SemiBold',sans-serif] font-semibold leading-[normal] text-[48px] text-nowrap whitespace-pre"
          style={{
            color: tag.color,
            left: tag.left,
            top: tag.top,
          }}
        >
          {tag.text}
        </p>
      ))}
    </>
  );
}

