import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {add, selectCustomer} from './custumerSlice'
import {Button, Form} from 'react-bootstrap';
import CountrySelect from "../../Components/CountrySelect";

const Customer = () => {
    const data = useSelector(selectCustomer);

    const [validated, setValidated] = useState(false);
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const nameHandler = (event) => { setName(event.target.value)}

    const [email, setEmail] = useState('');
    const emailHandler = (event) => { setEmail(event.target.value)}

    const [address, setAddress] = useState('');
    const addressHandler = (event) => { setAddress(event.target.value)}

    const [city, setCity] = useState('');
    const cityHandler = (event) => { setCity(event.target.value)}

    const [country, setCountry] = useState('');
    const countryHandler = (event) => { setCountry(event.target.value)}

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        event.preventDefault();
        setValidated(true);
        let customer = {
            name,
            email,
            address,
            city,
            country
        };
        console.log(customer)
        dispatch(add(customer))
    };

    return (
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" required onChange={nameHandler}/>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required onChange={emailHandler}/>
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
                   <CountrySelect onChange={countryHandler}/>
                </Form.Group>
                <Button type="submit">Submit</Button>
            </Form>
    )
}

export default Customer;
