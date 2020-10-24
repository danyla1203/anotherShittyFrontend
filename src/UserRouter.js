import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import FrontPage from "./FrontPage/FrontPage";

class UserRouter extends React.Component {
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

export default UserRouter