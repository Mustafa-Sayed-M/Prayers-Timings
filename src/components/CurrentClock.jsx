import React, { useEffect, useState } from 'react'
import { formateTime } from '../functions/formateTime';
import { formateHour } from '../functions/formateHour';

function CurrentClock() {
    const date = new Date();
    const [time, setTime] = useState({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
    });

    useEffect(() => {
        const intervalId = setInterval(() => {
            const date = new Date();
            setTime({
                hours: date.getHours(),
                minutes: date.getMinutes(),
                seconds: date.getSeconds()
            });
        }, 1000);

        // Clean up the interval to avoid memory leaks
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className='current-clock'>
            <span>{formateHour(time.hours)}:{formateTime(time.minutes)}:{formateTime(time.seconds)}</span>
        </div>
    )
}

export default CurrentClock;