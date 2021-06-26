import React from "react";
import ServiceProviders from "../features/serviceProviders/ServiceProviders"
import {PageHeader} from 'antd';

export const ServiceProviderView = () => {
    return (
        <div>
            <PageHeader
                className="site-page-header"
                title="Service providers"
            />
            <ServiceProviders/>
        </div>
    )
}

