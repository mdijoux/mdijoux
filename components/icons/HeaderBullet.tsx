import React from "react";


export const HeaderBullet = ({className}: {className?: string;}) => {
    return (
        <svg width="245px" height="155px" viewBox="0 0 245 155" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className={className}>
            <defs>
                <rect id="path-1" x="0" y="0" width="245" height="155"></rect>
            </defs>
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Group">
                    <mask id="mask-2" fill="white">
                        <use xlinkHref="#path-1"></use>
                    </mask>
                    <use id="Mask" fill="#D8D8D8" opacity="0" xlinkHref="#path-1"></use>
                    <g mask="url(#mask-2)">
                        <g transform="translate(-21.000000, -147.000000)">
                            <polygon id="sh1" fill="var(--primary-color-darkest)" points="75.5 222 130 302 21 302"></polygon>
                            <rect id="sh2" fill="var(--primary-color-darker)" transform="translate(130.035861, 219.684641) rotate(-35.000000) translate(-130.035861, -219.684641) " x="83.0358609" y="60.0969925" width="94" height="319.175298"></rect>
                            <rect id="sh3" fill="var(--primary-color)" transform="translate(212.179501, 162.382818) rotate(-35.000000) translate(-212.179501, -162.382818) " x="157.679501" y="2.7951692" width="109" height="319.175298"></rect>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};