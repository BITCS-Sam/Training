import React from 'react'

function StopButton({ handleStop }) {
    return (
        <button className="stopwatch-button stop-button" onClick={handleStop}>
            Stop
        </button>
    )
}

export default StopButton