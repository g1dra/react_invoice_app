import './App.css';

import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Service } from "./views/Service";
import {ServiceProvider} from "./views/ServiceProvider";
import {Customers} from "./views/Customer";

const App = () => {
    return (
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
                    </ul>
                </nav>
                <Switch>
                    <Route path="/service-providers">
                        <ServiceProvider/>
                    </Route>
                    <Route path="/customers">
                        <Customers/>
                    </Route>
                    <Route path="/services">
                        <Service/>
                    </Route>
                    <Route path="/">
                        <Service/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
