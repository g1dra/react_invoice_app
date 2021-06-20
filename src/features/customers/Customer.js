import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {add, selectCustomer} from './custumerSlice'
import { Button, Form } from 'react-bootstrap';
import CountrySelect from "../../Components/CountrySelect";

const Customer = () => {
    const data = useSelector(selectCustomer);
    console.log(data)
    const dispatch = useDispatch();
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter address" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="city">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter city" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="city">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="Enter city" />
                </Form.Group>
                <Form.Group>
                   <CountrySelect/>
                </Form.Group>
                <Button type="submit">Submit</Button>
            </Form>

            {/*<h2>{JSON.stringify(data)}</h2>*/}
        </>
    )
}

export default Customer;
