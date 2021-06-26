import React from "react";
import Invoice from "../features/invoices/Invoice";
import {PageHeader} from "antd";

export const InvoiceView = () => {
    return (
        <>
            <PageHeader
                className="site-page-header"
                title="Invoices"
            />
            <Invoice/>
        </>
    )
}
