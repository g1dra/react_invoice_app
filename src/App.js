import './App.css';
import 'antd/dist/antd.css'

import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import {ServiceView} from "./views/ServiceView";
import {ServiceProviderView} from "./views/ServiceProviderView";
import {CustomerView} from "./views/CustomerView";

import {InvoiceView} from "./views/InvoiceView";
import {Layout, Menu} from 'antd';

const App = () => {
    const { Header, Footer, Content, Sider } = Layout;
    return (
        <Layout>
            <Router>
                <Header  style={{ width: '100%', padding: 0 }}>
                    <Menu mode="horizontal" className="mb-5">
                        <Menu.Item key="services">
                            <Link to="/services">Services</Link>
                        </Menu.Item>
                        <Menu.Item key="service-providers">
                            <Link to="/service-providers">Service Providers</Link>
                        </Menu.Item>
                        <Menu.Item key="customers">
                            <Link to="/customers">Customers</Link>
                        </Menu.Item>
                        <Menu.Item key="invoice">
                            <Link to="/invoice">Make Invoice</Link>
                        </Menu.Item>
                    </Menu>
                </Header>
                <Content>
                    <Switch>
                        <Route path="/service-providers">
                            <ServiceProviderView/>
                        </Route>
                        <Route path="/customers">
                            <CustomerView/>
                        </Route>
                        <Route path="/services">
                            <ServiceView/>
                        </Route>
                        <Route path="/invoice">
                            <InvoiceView/>
                        </Route>
                        <Route path="/">
                            <ServiceView/>
                        </Route>
                    </Switch>
                </Content>
                <Footer></Footer>
            </Router>
        </Layout>
    );
}

export default App;
