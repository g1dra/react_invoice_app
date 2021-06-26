import React from "react";
import {Service} from "../features/services/Service";
import {PageHeader} from 'antd';


export const ServiceView = () => {
    return (
        <div>
            <PageHeader
                className="site-page-header"
                title="Services"
            />
            <Service/>
        </div>
    )
}
