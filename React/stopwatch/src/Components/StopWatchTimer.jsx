import React from 'react'
import getFormattedTime from '../script/getFormattedTime';

function StopWatchTimer({ time }) {
    return (
        <div className="stopwatch-timer">{getFormattedTime(time)}</div>
    )
}

export default StopWatchTimer