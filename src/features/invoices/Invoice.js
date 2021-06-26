import React from "react";
import {Form, Button, Select} from 'antd';
import {useSelector} from "react-redux";
import {selectCustomers} from "../customers/CustomerSlice";
import {selectServiceProviders} from "../serviceProviders/serviceProviderSlice";
import {selectServices} from "../services/serviceSlice";

const Invoice = () => {

    const {Option} = Select;

    const customers = useSelector(selectCustomers);

    const serviceProviders = useSelector(selectServiceProviders);

    const services = useSelector(selectServices);

    const onFinish = (values) => {
        console.log('Success:', values);
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
                label="Customer"
                name="customer"
                rules={[{required: true, message: 'Please select Customer'}]}
            >
                <Select
                    allowClear
                    style={{width: '100%'}}
                    placeholder="Please select customer"
                >
                    {customers && customers.map(customer => {
                        return <Option key={customer.name} value={customer.name}>
                            {customer.name}
                        </Option>
                    })}
                </Select>
            </Form.Item>

            <Form.Item
                label="Service provider"
                name="serviceProvider"
                rules={[{required: true, message: 'Please select Service Provider'}]}
            >
                <Select
                    allowClear
                    style={{width: '100%'}}
                    placeholder="Please select Service Provider"
                >
                    {serviceProviders && serviceProviders.map(serviceProvider => {
                        return <Option key={serviceProvider.name} value={serviceProvider.name}>
                            {serviceProvider.name}
                        </Option>
                    })}
                </Select>
            </Form.Item>

            <Form.Item
                label="Services"
                name="services"
                rules={[{required: true, message: 'Please select Service Provider'}]}
            >
                <Select
                    mode="multiple"
                    allowClear
                    style={{width: '100%'}}
                    placeholder="Please select Services "
                >
                    {services && services.map(service => {
                        return <Option key={service.name} value={service.name}>
                            {service.name}
                        </Option>
                    })}
                </Select>
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
        </Form>

    )
}

export default Invoice;


