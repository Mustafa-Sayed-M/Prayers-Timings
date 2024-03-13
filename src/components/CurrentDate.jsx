import React from 'react'
import { arrOfDays, arrOfMonths } from '../utils/constant';

function CurrentDate() {
    const date = new Date();

    return (
        <div className='current-date'>
            <span className='text-white-50'>التاريخ الميلادي: </span>
            <span>{arrOfDays[date.getDay()]} {date.getDate()} {arrOfMonths[date.getMonth()]}</span>
        </div>
    )
}

export default CurrentDate;