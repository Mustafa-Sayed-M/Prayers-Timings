import React from 'react'
import { Form } from 'react-bootstrap';

function SelectCountry({ handelChangeCountry }) {
    return (
        <div className='select-country w-100' data-aos="fade-up" data-aos-delay="500" data-aos-offset="0">
            <Form.Label>الدولة</Form.Label>
            <Form.Select
                aria-label="Default select example"
                className='shadow-none'
                onChange={handelChangeCountry}
            >
                <option value={JSON.stringify({ displayName: "مصر", apiName: "egypt" })}>مصر</option>
                <option value={JSON.stringify({ displayName: "السعودية", apiName: "saudi" })}>السعودية</option>
            </Form.Select>
        </div>
    )
}

export default SelectCountry;