import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {add, selectServiceProviders} from './serviceProviderSlice'
import {Form, Input, Select, Button} from 'antd';

export const ServiceProvider = () => {
    const serviceProviders = useSelector(selectServiceProviders);
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

    const onFinish = (serviceProvider) => {
        dispatch(add(serviceProvider))
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
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Service provider name"
                name="name"
                rules={[{required: true, message: 'Please insert Service provider name'}]}
            >
                <Input placeholder="Please insert service provider description"/>
            </Form.Item>

            <Form.Item
                label="Email"
                name="email"
                rules={[{required: true, message: 'Please insert Service provider email'}]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                label="Address"
                name="address"
                rules={[{required: true, message: 'Please insert Service provider address'}]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                label="City"
                name="city"
                rules={[{required: true, message: 'Please insert Service provider city'}]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                label="Country"
                name="country"
                rules={[{required: true, message: 'Please select Country'}]}
            >
                <Select
                    allowClear
                    style={{ width: '100%' }}
                    placeholder="Please select Country "
                >
                    {countries && countries.map(country => {
                        return <Option key={country.name} value={country.name}>
                            <div className="demo-option-label-item">
                                <span role="img">
                                    <img srcSet={country.flag} height="10px"/>
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
                <Input/>
            </Form.Item>

            <Form.Item
                label="Phone number"
                name="phone"
                rules={[{required: true, message: 'Please insert phone number'}]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                label="VAT Id"
                name="vatId"
                rules={[{required: true, message: 'Please insert VAT IT'}]}
            >
                <Input/>
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
                {JSON.stringify(serviceProviders)}
            </p>

        </Form>
    )
}

export default ServiceProvider;
