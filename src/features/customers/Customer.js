import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {add, selectCustomers} from './CustomerSlice'
import {Form, Input, Select, Button, Radio, Table} from 'antd';
import {getColumnKeys, getRegion} from "../../helper";


const Customer = () => {
    const customers = useSelector(selectCustomers);

    const { Option } = Select;

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all?fields=name;alpha2Code;region;flag').then(response => {
            return response.json();
        }).then(data => {
            setCountries(data)
        })
    }, [])

    const dispatch = useDispatch();



    const onFinish = (customer) => {
        const region = getRegion(customer.country, countries)
        dispatch(add({ ...customer, region}))
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
                'business': 'natural',
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Customer name"
                name="name"
                rules={[{required: true, message: 'Please insert customer name'}]}
            >
                <Input placeholder="Insert name"/>
            </Form.Item>

            <Form.Item
                label="Email"
                name="email"
                rules={[{required: true, message: 'Please insert email'}]}
            >
                <Input placeholder="Insert email"/>
            </Form.Item>

            <Form.Item
                label="Business"
                name="business"
                rules={[{required: true, message: 'Please select business'}]}
            >
                <Radio.Group>
                    <Radio value="natural">Natural</Radio>
                    <Radio value="legal">Legal</Radio>
                </Radio.Group>
            </Form.Item>

            <Form.Item
                label="Address"
                name="address"
                rules={[{required: true, message: 'Please insert Address'}]}
            >
                <Input placeholder="Insert address"/>
            </Form.Item>

            <Form.Item
                label="City"
                name="city"
                rules={[{required: true, message: 'Please insert City'}]}
            >
                <Input placeholder="Insert city"/>
            </Form.Item>

            <Form.Item
                label="Country"
                name="country"
                rules={[{required: true, message: 'Please select Country'}]}
            >
                <Select
                    allowClear
                    style={{ width: '100%' }}
                    placeholder="Select Country "
                >
                    {countries && countries.map(country => {
                        return <Option key={country.name} value={country.name}>
                            <div className="demo-option-label-item">
                                <span role="img">
                                    <img alt={country.flag} srcSet={country.flag} height="10px"/>
                                </span>
                                <span> </span>
                                {country.name}
                            </div>

                        </Option>
                    })}
                </Select>
            </Form.Item>

            <Form.Item
                label="Zip code"
                name="zipCode"
                rules={[{required: true, message: 'Please insert zip Code'}]}
            >
                <Input placeholder="Insert zip code"/>
            </Form.Item>

            <Form.Item
                label="Phone number"
                name="phone"
                rules={[{required: true, message: 'Please insert phone number'}]}
            >
                <Input placeholder="Insert phone number"/>
            </Form.Item>

            <Form.Item
                label="VAT Id"
                name="vatId"
                rules={[{required: true, message: 'Please insert VAT Id'}]}
            >
                <Input placeholder="Insert VAT Id"/>
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
                <Table columns={getColumnKeys(customers[0])} dataSource={customers} pagination={false} rowKey="name"/>
            </Form.Item>
        </Form>
    )
}

export default Customer;
