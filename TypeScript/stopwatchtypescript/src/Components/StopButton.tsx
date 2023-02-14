import React from 'react'

interface StopButtonProps {
    handleStop: () => void;
}

function StopButton({ handleStop }: StopButtonProps) {
    return (
        <button className="stopwatch-button stop-button" onClick={handleStop}>
            Stop
        </button>
    )
}

export default StopButton