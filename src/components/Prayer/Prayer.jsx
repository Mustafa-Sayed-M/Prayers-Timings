import React from 'react'
import { Image } from 'react-bootstrap';
import './Prayer.css';

function Prayer({ prayerImage, prayerName, prayerTime, aosData }) {
    return (
        <div className='prayer-card bg-white text-black' data-aos={aosData.behavior} data-aos-delay={aosData.delay}>
            {/* Prayer Image */}
            <Image
                src={prayerImage}
                alt={prayerName}
                className='prayer-image img-fluid'
            />
            {/* Prayer info */}
            <div className='prayer-info p-2'>
                {/* Prayer Name */}
                <p className='prayer-name'>{prayerName}</p>
                {/* Prayer Time */}
                <h1 className='prayer-time'>{prayerTime}</h1>
            </div>
        </div>
    )
}

export default Prayer;