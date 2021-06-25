import React, {useState} from "react";
import {Form} from "react-bootstrap";
import {useSelector} from "react-redux";
import {selectCustomers} from "../customers/CustomerSlice";
import {selectServiceProviders} from "../serviceProviders/serviceProviderSlice";
import Select from 'react-select';
import {selectServices} from "../services/serviceSlice";

const Invoice = () => {

    const [validated, setValidated] = useState(false);

    const customers = useSelector(selectCustomers);
    const [customer, setCustomer] = useState('');
    const customerHandler = (event) => {
        setCustomer(event.target.value)
    }

    const serviceProviders = useSelector(selectServiceProviders);

    const services = useSelector(selectServices);
    let servicesForSelect = JSON.parse(JSON.stringify(services))

    servicesForSelect = servicesForSelect.map(ele=>{
        ele.value = ele.name;
        ele.label = ele.name;
        return ele;
    })

    const [serviceProvider, setServiceProviders] = useState('');
    const serviceProviderHandler = (event) => {
        setServiceProviders(event.target.value)
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            setValidated(true);
        }
    }

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="customer">
                <Form.Label>Customer</Form.Label>
                <Form.Control as="select" required onChange={customerHandler}>
                    {customers && customers.map(customer => {
                        return <option key={customer.name} value={customer.name}>
                            {customer.name}
                        </option>
                    })}
                </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="serviceProvider">
                <Form.Label>Service Provider</Form.Label>
                <Form.Control as="select" required onChange={serviceProviderHandler}>
                    {serviceProviders && serviceProviders.map(serviceProvider => {
                        return <option key={serviceProvider.name} value={serviceProvider.name}>
                            {serviceProvider.name}
                        </option>
                    })}
                </Form.Control>
            </Form.Group>
            <p>Select Services</p>
            <Select options={servicesForSelect} isMulti onChange={serviceHandler}/>
        </Form>
    )
}

export default Invoice;


