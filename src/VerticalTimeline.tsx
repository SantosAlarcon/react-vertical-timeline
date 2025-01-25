import React from 'react';
import classNames from 'classnames';

export interface VerticalTimelineProps {
    animate?: boolean;
    className?: string;
    layout?: '1-column-left' | '1-column' | '2-columns' | '1-column-right';
    lineColor?: string;
    children: React.ReactNode | React.ReactNode[];
}

const VerticalTimeline = ({
    animate = true,
    className = '',
    layout = '2-columns',
    lineColor = '#FFF',
    children,
}: VerticalTimelineProps) => {
    if (typeof window === 'object') {
        document.documentElement.style.setProperty('--line-color', lineColor);
    }

    const verticalTimeLineClass = classNames(className, 'vertical-timeline', {
        'vertical-timeline--animate': animate,
        'vertical-timeline--two-columns': layout === '2-columns',
        'vertical-timeline--one-column-left':
            layout === '1-column' || layout === '1-column-left',
        'vertical-timeline--one-column-right': layout === '1-column-right',
    });

    return (
        <div className={verticalTimeLineClass}>{ children }</div>
    );
};

export default VerticalTimeline;
