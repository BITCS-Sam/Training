import React from 'react'

function ResetButton({ handleReset, isDisabled }) {
    return (
        <button
            className="stopwatch-button reset-button"
            onClick={handleReset}
            disabled={isDisabled}
        >
            Reset
        </button>
    )
}

export default ResetButton