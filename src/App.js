import './App.css';

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
import {Container} from "react-bootstrap";
import {InvoiceView} from "./views/InvoiceView";

const App = () => {
    return (
        <Container>
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/services">Services</Link>
                            </li>
                            <li>
                                <Link to="/service-providers">Service Providers</Link>
                            </li>
                            <li>
                                <Link to="/customers">Customers</Link>
                            </li>
                            <li>
                                <Link to="/invoice">Make Invoice</Link>
                            </li>
                        </ul>
                    </nav>
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
                </div>
            </Router>
        </Container>
    );
}

export default App;
