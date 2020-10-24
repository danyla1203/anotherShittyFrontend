import pt from 'prop-types';

export function Article(props) {
    return (
        <div className="article_item">
            <h3>{ props.title }</h3>
            <p>{ props.text }</p>
        </div>
    )
}

Article.propTypes = {
    title: pt.string,
    text: pt.string
};