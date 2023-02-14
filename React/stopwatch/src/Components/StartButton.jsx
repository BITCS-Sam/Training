import React from 'react'

const StartButton = ({ handleStart }) => {
    return (
        <button className="stopwatch-button start-button" onClick={handleStart}>
            Start
        </button>
    )
}

export default StartButton