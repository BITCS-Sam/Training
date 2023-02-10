import React from 'react'

interface ResetButtonProps {
    handleReset: () => void;
    isDisabled: boolean;
}
function ResetButton({ handleReset, isDisabled }: ResetButtonProps) {
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