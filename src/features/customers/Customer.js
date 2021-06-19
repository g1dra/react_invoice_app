import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import {add, customerSlice, selectCustomer} from './custumerSlice'

const Customer = () => {
    const data = useSelector(selectCustomer);
    console.log(data)
    const dispatch = useDispatch();

    return (
        <>
        <h1> Add Customers</h1>
            <form>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name"/>
            </form>
            <input type="submit" value="Submit" />
        <h2>{JSON.stringify(data)}</h2>
        </>
    )
}

export default Customer;
