import React, {useState} from "react";
import {Form, Button, Select, Modal} from 'antd';
import {useSelector} from "react-redux";
import {selectCustomers} from "../customers/CustomerSlice";
import {selectServiceProviders} from "../serviceProviders/serviceProviderSlice";
import {selectServices} from "../services/serviceSlice";
import InvoiceForm from "./InvoiceForm";
import {calculateVat} from './vatService';

const Invoice = () => {

    const {Option} = Select;

    const customers = useSelector(selectCustomers);
    const [selectedCustomer, setSelectedCustomer] = useState({});

    const serviceProviders = useSelector(selectServiceProviders);
    const [selectedServiceProvider, setSelectedServiceProvider] = useState({});

    const services = useSelector(selectServices);
    const [selectedServices, setSelectedServices] = useState([]);

    const [visible, setVisible] = useState(false);

    const onFinish = (values) => {
        setVisible(true); // display modal

        let sServices = services.filter(service => values.services.includes(service.name));

        let sCustomer = customers.filter(customer => customer.name === values.customer)[0];
        setSelectedCustomer(sCustomer);

        let sSelectedProvider = serviceProviders.filter(serviceProvider => serviceProvider.name === values.serviceProvider)[0];

        let servicesWithVat = calculateVat(sSelectedProvider, sCustomer, sServices);

        setSelectedServiceProvider(sSelectedProvider);

        setSelectedServices(servicesWithVat);
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
                    placeholder="Select customer"
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
                    placeholder="Select Service Provider"
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
                    placeholder="Select Services"
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
                    Generate Invoice
                </Button>
                <Modal
                    title="Invoice"
                    centered
                    visible={visible}
                    onOk={() => setVisible(false)}
                    onCancel={() => setVisible(false)}
                    width={1000}
                >
                    <InvoiceForm services={selectedServices} customer={selectedCustomer} serviceProvider={selectedServiceProvider}/>
                </Modal>
            </Form.Item>
        </Form>

    )
}

export default Invoice;


