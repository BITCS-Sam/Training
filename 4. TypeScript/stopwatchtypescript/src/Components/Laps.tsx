import React from 'react'
import getFormattedTime from '../script/getFormattedTime'


interface LapsProps {
    laps: number[];
}

function Laps({ laps }: LapsProps) {
    return (


        <ul className="laps">
            {laps.slice().reverse().map((lap, index) => (
                <li className="lap" key={index}>
                    {getFormattedTime(lap)}
                </li>
            ))}
        </ul>

    )
}

export default Laps