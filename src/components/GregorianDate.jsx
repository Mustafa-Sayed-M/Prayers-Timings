import React from 'react'
import CurrentDate from './CurrentDate';
import CurrentClock from './CurrentClock';

function GregorianDate() {
    return (
        <div className='Gregorian date d-flex align-items-center gap-2 mb-3' data-aos="fade-left" data-aos-delay="100">
            {/* Current date */}
            <CurrentDate />
            {/* Split between date and clock */}
            <span> | </span>
            {/* Current clock */}
            <CurrentClock />
        </div>
    )
}

export default GregorianDate;