import React from 'react'
import getFormattedTime from '../script/getFormattedTime';

interface StopWatchTimerProps {
    time: number;
}

function StopWatchTimer({ time }: StopWatchTimerProps) {
    return (
        <div className="stopwatch-timer">{getFormattedTime(time)}</div>
    )
}

export default StopWatchTimer