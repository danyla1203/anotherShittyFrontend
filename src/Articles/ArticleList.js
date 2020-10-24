import * as React from "react";
import { inject, observer } from "mobx-react";

import {Article} from "./Article";

@inject("ArticleStore")
@observer
export class ArticleList extends React.Component {

    componentDidMount() {
        this.props.ArticleStore.loadArticles();
    }

    getRenderedArticles() {
        return this.props.ArticleStore.articles.map((el) => {
            return (
                <Article
                    key={el.article_id}
                    article_id={el.article_id}
                    title={el.title}
                    text={el.text}
                />
            )
        })
    }

    render() {
        let articles = this.getRenderedArticles();
        return (
            <div>{ articles }</div>
        )
    }
}

