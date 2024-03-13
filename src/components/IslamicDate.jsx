import React from 'react'
import { formateTime } from '../functions/formateTime';

function IslamicDate({ year, month, day, monthName }) {
    return (
        <div className='islamic-date mb-3' data-aos="fade-left">
            <span className='text-white-50'>التاريخ الهجري: </span>
            <span>{day}-{formateTime(month)}-{year} ( {monthName} )</span>
        </div>
    );
}
export default IslamicDate;