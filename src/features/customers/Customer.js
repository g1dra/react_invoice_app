import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {add, selectCustomers} from './CustomerSlice'
import {Button, Form} from 'react-bootstrap';

const Customer = () => {
    const customers = useSelector(selectCustomers);

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all?fields=name;alpha2Code;region;flag').then(response => {
            return response.json();
        }).then(data => {
            setCountries(data)
        })
    }, [])

    const [validated, setValidated] = useState(false);

    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const nameHandler = (event) => {
        setName(event.target.value)
    }

    const [email, setEmail] = useState('');
    const emailHandler = (event) => {
        setEmail(event.target.value)
    }

    const [address, setAddress] = useState('');
    const addressHandler = (event) => {
        setAddress(event.target.value)
    }

    const [city, setCity] = useState('');
    const cityHandler = (event) => {
        setCity(event.target.value)
    }

    const [country, setCountry] = useState('');
    const countryHandler = (event) => {
        setCountry(event.target.value)
    }

    const [zipCode, setZipCode] = useState('');
    const zipCodeHandler = (event) => {
        setZipCode(event.target.value)
    }

    const [phone, setPhone] = useState('');
    const phoneHandler = (event) => {
        setPhone(event.target.value)
    }

    const [vat, setVat] = useState('');
    const vatHandler = (event) => {
        setVat(event.target.value)
    }

    const [business, setBusiness] = useState('');
    const businessHandler = (event) => {
        setBusiness(event.target.value)
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();

        } else {
            event.preventDefault();
            setValidated(true);

            let customer = {
                name,
                email,
                address,
                business,
                city,
                country,
                region: countries.filter(ele => ele.name === country)[0].region,
                zipCode,
                phone,
                vat
            };
            console.log(customer)
            dispatch(add(customer))
        }

    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" required onChange={nameHandler}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required onChange={emailHandler}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="business">
                <Form.Label>Business</Form.Label>
                <Form.Control as="select" required onChange={businessHandler}>
                    <option>Open this select menu</option>
                    <option value="natural">Natural</option>
                    <option value="legal">Legal</option>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="address">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Enter address" required onChange={addressHandler}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="Enter city" required onChange={cityHandler}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Country</Form.Label>
                <Form.Control as="select" required onChange={countryHandler}>
                    {countries && countries.map(ele => {
                        return <option key={ele.alpha2Code} value={ele.name}>
                            {ele.name}
                        </option>
                    })}
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="zipCode">
                <Form.Label>Zip code</Form.Label>
                <Form.Control type="text" placeholder="Enter zip code" required onChange={zipCodeHandler}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="phone">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" placeholder="Enter phone" required onChange={phoneHandler}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="vat">
                <Form.Label>VAT</Form.Label>
                <Form.Control type="text" placeholder="Enter vat" required onChange={vatHandler}/>
            </Form.Group>
            <Button type="submit">Submit</Button>
            <p>
                {JSON.stringify(customers)}
            </p>
        </Form>
    )
}

export default Customer;
