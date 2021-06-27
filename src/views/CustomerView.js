import React from "react";
import Customer from "../features/customers/Customer"
import { PageHeader } from 'antd'

export const CustomerView = () => {
    return (
        <div>
            <PageHeader
                className="site-page-header"
                title="Customers"
            />
            <Customer/>
        </div>
    )
}
