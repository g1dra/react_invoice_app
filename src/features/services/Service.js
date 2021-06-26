import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {add, selectServices} from './serviceSlice'
import {Form, Input, Button} from 'antd';

export const Service = () => {
    const services = useSelector(selectServices);
    const dispatch = useDispatch();

    const onFinish = (service) => {
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
                <Input/>
            </Form.Item>

            <Form.Item
                label="Description"
                name="description"
                rules={[{required: true, message: 'Please insert service Description'}]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                label="Price"
                name="price"
                rules={[{required: true, message: 'Please insert service price'}]}
            >
                <Input type="number"/>
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

            <p>
                {JSON.stringify(services)}
            </p>
        </Form>
    )
}
