import React from "react";
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";

import { FrontPage } from "./FrontPage/FrontPage";

export class UserRouter extends React.Component {
    render() {
        return (
            <Router>
                <Route path="/">
                    <FrontPage/>
                </Route>
            </Router>
        )
    }
}