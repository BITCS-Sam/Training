import React, { useState, useEffect } from "react";
import StopWatchTimer from "./StopWatchTimer";
import StartButton from "./StartButton";
import LapButton from "./LapButton";
import ResetButton from "./ResetButton";
import StopButton from "./StopButton";
import Laps from "./Laps";


const StopWatch = () => {
    const [start, setStart] = useState(false);
    const [time, setTime] = useState(0);
    const [laps, setLaps] = useState([]);

    useEffect(() => {
        let intervalId;
        if (start) {
            intervalId = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 10);
        }
        return () => clearInterval(intervalId);
    }, [start]);

    const handleStart = () => setStart(true);

    const handleLap = () => {
        setLaps([...laps, time]);
    };

    const handleReset = () => {
        if (!start) {
            setTime(0);
            setLaps([]);
        }
    };

    const handleStop = () => setStart(false);

    return (
        <div className="stopwatch-container">
            <StopWatchTimer time={time} />
            <div className="stopwatch-buttons">
                <StartButton handleStart={handleStart} />
                <LapButton handleLap={handleLap} />
                <ResetButton handleReset={handleReset} isDisabled={start} />
                <StopButton handleStop={handleStop} />
            </div>
            <Laps laps={laps} />
        </div>
    )
};

export default StopWatch;