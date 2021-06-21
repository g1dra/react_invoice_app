import React, {useState, useEffect} from "react";
import {Form} from "react-bootstrap";

const CountrySelect = () => {

    const [countries, setCountries] = useState();

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all?fields=name;alpha2Code;region;flag').then(response => {
            return response.json();
        }).then(data => {
            setCountries(data)
        })
    }, [])

    return (
        <>
            <Form.Label>Country</Form.Label>
            <Form.Control as="select" required>
                {countries && countries.map(ele => {
                    return <option key={ele.alpha2Code} value={ele.alpha2Code}>
                                {ele.name}
                            </option>
                })}
            </Form.Control>
        </>
    )
}
// todo show country flag, mb using different component
export default CountrySelect;
