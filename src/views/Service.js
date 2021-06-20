import React from "react";
import {Form} from 'react-bootstrap';

export const Service = () => {
    return (
        <div>
            <h2>Service</h2>
            <Form.Control as="select">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Control>
        </div>
    )
}
