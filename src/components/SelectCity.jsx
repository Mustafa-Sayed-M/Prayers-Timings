import React from 'react'
import { Form } from 'react-bootstrap';

function SelectCity({ country, handelChangeCity }) {
    return (
        <div className='select-city w-100' data-aos="fade-up" data-aos-delay="600" data-aos-offset="0">
            <Form.Label>المدينة</Form.Label>
            <Form.Select
                aria-label="Default select example"
                className='shadow-none'
                onChange={handelChangeCity}
            >
                {
                    country.apiName === 'egypt' ?
                        <>
                            <option value={JSON.stringify({ displayName: "القاهرة", apiName: "cairo" })}>القاهرة</option>
                            <option value={JSON.stringify({ displayName: "الأسكندرية", apiName: "alexandria" })}>الأسكندرية</option>
                        </>
                        :
                        <>
                            <option value={JSON.stringify({ displayName: "الرياض", apiName: "riyadh" })}>الرياض</option>
                            <option value={JSON.stringify({ displayName: "مكة المكرمة", apiName: "makkah al mukarramah" })}>مكة المكرمة</option>
                        </>
                }
            </Form.Select>
        </div>
    )
}

export default SelectCity;