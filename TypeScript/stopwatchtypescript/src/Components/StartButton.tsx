import React from 'react'

interface StartButtonProps {
    handleStart: () => void;
}

const StartButton = ({ handleStart }: StartButtonProps) => {
    return (
        <button className="stopwatch-button start-button" onClick={handleStart}>
            Start
        </button>
    )
}

export default StartButton