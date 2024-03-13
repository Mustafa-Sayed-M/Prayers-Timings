import React from 'react'
import Prayer from './Prayer/Prayer';
import { formatePrayerTime } from '../functions/formatePrayerTime';
import fajrImage from '../assets/fajr-prayer.png';
import dhhrImage from '../assets/dhhr-prayer-mosque.png';
import asrImage from '../assets/asr-prayer-mosque.png';
import sunsetImage from '../assets/sunset-prayer-mosque.png';
import nightImage from '../assets/night-prayer-mosque.png';

function Prayers({ prayersTimings }) {
    return (
        <div className='prayers d-flex flex-wrap align-items-center justify-content-center gap-4 mb-5'>
            <Prayer
                prayerImage={fajrImage}
                prayerName={'الفجر'}
                prayerTime={prayersTimings.Fajr}
                aosData={{
                    behavior: "fade-down",
                    delay: 100,
                }}
            />
            <Prayer
                prayerImage={dhhrImage}
                prayerName={'الظهر'}
                prayerTime={formatePrayerTime(prayersTimings.Dhuhr)}
                aosData={{
                    behavior: "fade-down",
                    delay: 200,
                }}
            />
            <Prayer
                prayerImage={asrImage}
                prayerName={'العصر'}
                prayerTime={formatePrayerTime(prayersTimings.Asr)}
                aosData={{
                    behavior: "fade-down",
                    delay: 300,
                }}
            />
            <Prayer
                prayerImage={sunsetImage}
                prayerName={'المغرب'}
                prayerTime={formatePrayerTime(prayersTimings.Maghrib)}
                aosData={{
                    behavior: "fade-down",
                    delay: 400,
                }}
            />
            <Prayer
                prayerImage={nightImage}
                prayerName={'العشاء'}
                prayerTime={formatePrayerTime(prayersTimings.Isha)}
                aosData={{
                    behavior: "fade-down",
                    delay: 500,
                }}
            />
        </div>
    )
}

export default Prayers;