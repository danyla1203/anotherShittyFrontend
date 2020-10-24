import React from "react";
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";

import { FrontPage } from "./FrontPage/FrontPage";
import {ArticleList} from "./Articles/ArticleList";
import {FullArticle} from "./FullArticle/FullArticle";

export class UserRouter extends React.Component {
    render() {
        return (
            <Router>
                <Route exact path="/">
                    <FrontPage/>
                </Route>
                <Route exact path="/articles">
                    <ArticleList/>
                </Route>
                <Route
                    exact
                    path="/article/:article_id"
                    component={ FullArticle }
                />
            </Router>
        )
    }
}