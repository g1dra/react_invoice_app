import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {add, selectServices} from './serviceSlice'

export const Service = () => {
    const services = useSelector(selectServices);

    const [validated, setValidated] = useState(false);
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const nameHandler = (event) => {
        setName(event.target.value)
    }

    const [description, setDescription] = useState('');
    const descriptionHandler = (event) => {
        setDescription(event.target.value)
    }

    const [price, setPrice] = useState('');
    const priceHandler = (event) => {
        setPrice(event.target.value)
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        event.preventDefault();
        setValidated(true);

        let service = {
            name,
            description,
            price,
        };

        console.log(service)
        dispatch(add(service))
    }

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" required onChange={nameHandler}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Description" required onChange={descriptionHandler}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="price">
                <Form.Label>Name</Form.Label>
                <Form.Control type="number" placeholder="Price" required onChange={priceHandler}/>
            </Form.Group>
            <Button type="submit">Submit</Button>
            <p>
                {JSON.stringify(services)}
            </p>
        </Form>
    )
}