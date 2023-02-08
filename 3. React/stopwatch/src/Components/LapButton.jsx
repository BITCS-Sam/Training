import React from 'react'

const LapButton = ({ handleLap }) => {
    return (
        <button className="stopwatch-button lap-button" onClick={handleLap}>
            Lap
        </button>
    )
}

export default LapButton