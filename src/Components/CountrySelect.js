import React, {useState, useEffect} from "react";
import {Form} from "react-bootstrap";

const CountrySelect = () => {

    const [countries, setCountries] = useState();

    useEffect(()=>{
        fetch('https://restcountries.eu/rest/v2/all?fields=name;alpha2Code;region;flag').then( response => {
            return response.json();
        }).then(data => {
            console.log(data)
            setCountries(data)
        })
    })

    return (
        <>
            <Form.Label>Country</Form.Label>
            <Form.Control as="select">
                <option>{JSON.stringify(countries[0])}</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Control>
        </>
    )
}

export default CountrySelect;
