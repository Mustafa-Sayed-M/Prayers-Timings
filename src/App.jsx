import { Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import IslamicDate from './components/IslamicDate';
import SelectCity from './components/SelectCity';
import SelectCountry from './components/SelectCountry';
import Prayers from './components/Prayers';
import Aos from 'aos';
import GregorianDate from './components/GregorianDate';
import './App.css';

function App() {

  const [prayersTimings, setPrayersTimings] = useState({
    Fajr: '',
    Dhuhr: '',
    Asr: '',
    Maghrib: '',
    Isha: '',
  });

  const [islamicDate, setIslamicDate] = useState({
    year: '',
    month: '',
    day: '',
  })

  const [country, setCountry] = useState({
    displayName: 'مصر',
    apiName: 'egypt',
  });

  const [city, setCity] = useState({
    displayName: 'القاهرة',
    apiName: 'cairo',
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://api.aladhan.com/v1/timingsByCity/13-03-2024?city=${city.apiName}&country=${country.apiName}`);
      const result = await res.json();
      setPrayersTimings({ ...result.data.timings });
      setIslamicDate({ year: result.data.date.hijri.year, month: result.data.date.hijri.month, day: result.data.date.hijri.day })
    }
    fetchData();
  }, [city.apiName, country.apiName]);

  useEffect(() => {
    Aos.init({
      easing: 'ease'
    });
  }, [])

  const handelChangeCountry = (e) => {
    const selectedCountry = JSON.parse(e.target.value);
    setCountry(selectedCountry);

    if (selectedCountry.apiName === 'egypt') {
      setCity({ displayName: "القاهرة", apiName: "cairo" });
    } else if (selectedCountry.apiName === 'saudi') {
      setCity({ displayName: "الرياض", apiName: "riyadh" });
    }
  }

  const handelChangeCity = (e) => {
    const selectedCity = JSON.parse(e.target.value);
    setCity(selectedCity);
  }

  return (
    <div className="App py-5">
      <Container>
        {/* Head */}
        <div className='head'>
          <div className='details-today mb-5'>
            {/* Islamic date */}
            <IslamicDate year={islamicDate.year} month={islamicDate.month.number} day={islamicDate.day} monthName={islamicDate.month.ar} />
            <GregorianDate />
            <h3 data-aos="fade-up" data-aos-delay="200">{country.displayName} ( {city.displayName} )</h3>
          </div>
        </div>
        {/* Prayers */}
        <Prayers prayersTimings={prayersTimings} />
        {/* Select */}
        <div className='d-flex flex-column flex-sm-row align-items-center gap-3 justify-content-center'>
          {/* Country */}
          <SelectCountry handelChangeCountry={handelChangeCountry} />
          {/* City */}
          <SelectCity country={country} handelChangeCity={handelChangeCity} />
        </div>
      </Container>
    </div>
  );
}

export default App;