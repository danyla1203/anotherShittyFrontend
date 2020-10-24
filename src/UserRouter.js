import React from "react";
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";

import { FrontPage } from "./FrontPage/FrontPage";
import {ArticleList} from "./Articles/ArticleList";

export class UserRouter extends React.Component {
    render() {
        return (
            <Router>
                <Route path="/">
                    <FrontPage/>
                </Route>
                <Route path="/articles">
                    <ArticleList/>
                </Route>
            </Router>
        )
    }
}