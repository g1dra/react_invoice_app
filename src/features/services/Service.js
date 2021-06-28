import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {add, selectServices} from './serviceSlice'
import {Form, Input, Button, Table} from 'antd';
import moment from 'moment';
import {getColumnKeys} from "../../helper";

export const Service = () => {

    const services = useSelector(selectServices);

    const dispatch = useDispatch();

    const onFinish = (service) => {
        service.date = moment().format("DD.MM.YYYY");
        dispatch(add(service))
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            name="basic"
            labelCol={{
                span: 4,
            }}
            wrapperCol={{
                span: 16,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Service name"
                name="name"
                rules={[{required: true, message: 'Please insert service name'}]}
            >
                <Input placeholder="Insert service name"/>
            </Form.Item>

            <Form.Item
                label="Description"
                name="description"
                rules={[{required: true, message: 'Please insert service description'}]}
            >
                <Input placeholder="Insert service description"/>
            </Form.Item>

            <Form.Item
                label="Price"
                name="price"
                rules={[{required: true, message: 'Please insert service price'}]}
            >
                <Input type="number" placeholder="Insert service price"/>
            </Form.Item>

            <Form.Item
                label="Vat rate"
                name="vatRate"
                rules={[{required: true, message: 'Please insert VAT rate'}]}
            >
                <Input type="number" placeholder="Insert service VAT rate"/>
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 4,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 4,
                    span: 16,
                }}
            >
                <Table columns={getColumnKeys(services[0])} dataSource={services} pagination={false} rowKey="name"/>
            </Form.Item>
        </Form>
    )
}
