import pt from 'prop-types';
import React from "react";
import { Link } from "react-router-dom";

export function Article(props) {
    return (
        <div className="article_item">
            <h3>{ props.title }</h3>
            <p>{ props.text }</p>
            <Link to={ "/article/" + props.article_id }>Go to article</Link>
        </div>
    )
}

Article.propTypes = {
    article_id: pt.number,
    title: pt.string,
    text: pt.string
};