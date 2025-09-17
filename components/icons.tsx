
import React from 'react';

const iconProps = {
    className: "w-full h-full",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: "1.5",
};

export const FishIcon: React.FC = () => (
    <svg {...iconProps}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 2.25c-.25-.25-.6-.25-.85 0l-1.5 1.5-1.5-1.5c-.25-.25-.6-.25-.85 0L8.25 3.5c0 .25.25.6.25.85L10 6l-1.5 1.5c-.25.25-.25.6 0 .85l1.5 1.5-1.5 1.5c-.25.25-.25.6 0 .85l1.5 1.5-1.5 1.5c-.25.25-.25.6 0 .85l1.5 1.5c.25.25.6.25.85 0l1.5-1.5 1.5 1.5c.25.25.6.25.85 0l1.25-1.25c.25-.25.25-.6 0-.85L15 15l1.5-1.5c.25-.25.25-.6 0-.85l-1.5-1.5 1.5-1.5c.25-.25.25-.6 0-.85L15 6l1.5-1.5c.25-.25.25-.6 0-.85L14.25 2.25zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" />
    </svg>
);

export const DnaIcon: React.FC = () => (
    <svg {...iconProps}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5M5.25 4.5v15M18.75 4.5v15" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5c0 2.25 1.5 4.5 3.75 4.5s3.75-2.25 3.75-4.5M8.25 19.5c0-2.25 1.5-4.5 3.75-4.5s3.75 2.25 3.75 4.5" />
    </svg>
);

export const WaveIcon: React.FC = () => (
    <svg {...iconProps}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 6.75c3-3 6 3 9 0s6-3 9 0M3 11.25c3-3 6 3 9 0s6-3 9 0m-18 4.5c3-3 6 3 9 0s6-3 9 0" />
    </svg>
);

export const GlobeIcon: React.FC = () => (
    <svg {...iconProps}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 0a9 9 0 1016.5 0h-16.5a9 9 0 01-16.5 0z" />
    </svg>
);
