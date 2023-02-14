const getFormattedTime = (time) => {
    const milliseconds = time % 100;
    const totalSeconds = Math.floor(time / 100);
    const seconds = totalSeconds % 60;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const hours = Math.floor(totalSeconds / 3600);

    return (
        `${hours.toString().padStart(2, "0")}:` +
        `${minutes.toString().padStart(2, "0")}:` +
        `${seconds.toString().padStart(2, "0")}.` +
        `${milliseconds.toString().padStart(2, "0")}`
    );
};

export default getFormattedTime;