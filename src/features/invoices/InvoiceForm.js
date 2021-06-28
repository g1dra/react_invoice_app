import React, {useEffect, useState} from "react";
import {Divider, Table, Row, Col} from "antd";
import moment from "moment";
import {getColumnKeys} from "../../helper";

const InvoiceForm = ({customer, serviceProvider, services}) => {
    const [columns, setColumns] = useState([]);
    useEffect(() => {
        if (services && services[0]?.name) {
            let testColumns = getColumnKeys(services[0])
            setColumns(testColumns)
        }
    }, [services])

    return (
        <>
            <h2>Company: {serviceProvider.name}</h2>
            <p>Invoice ID: {Math.random().toString(36).substring(7)}</p>
            <p>Invoice Date : {moment().format("DD.MM.YYYY")}</p>
            <Row>

                <Col span={6}>
                    <p>Customer:</p>
                    <p>Name: {customer.name}</p>
                    <p>Address: {customer.address}</p>
                    <p>Country: {customer.country}</p>
                    <p>City: {customer.city}</p>
                    <p>Zip: {customer.zipCode}</p>
                    <p>Phone: {customer.phone}</p>
                    <p>Email: {customer.email}</p>
                    <p>VAT: {customer.vatId}</p>
                </Col>
                <Col span={6}>
                    <p>Company:</p>
                    <p>Name: {serviceProvider.name}</p>
                    <p>Address: {serviceProvider.address}</p>
                    <p>Country: {serviceProvider.country}</p>
                    <p>City: {serviceProvider.city}</p>
                    <p>Zip: {serviceProvider.zipCode}</p>
                    <p>Phone: {serviceProvider.phone}</p>
                    <p>Email: {serviceProvider.email}</p>
                    <p>VAT: {serviceProvider.vatId}</p>
                </Col>
            </Row>
            <Divider></Divider>

            <Table columns={columns} dataSource={services} pagination={false} rowKey="name"/>
        </>
    )
}

export default InvoiceForm
