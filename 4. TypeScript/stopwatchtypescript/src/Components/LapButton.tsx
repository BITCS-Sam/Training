import React from 'react'

interface LapButtonProps {
    handleLap: () => void;
}

const LapButton = ({ handleLap }: LapButtonProps) => {
    return (
        <button className="stopwatch-button lap-button" onClick={handleLap}>
            Lap
        </button>
    )
}

export default LapButton