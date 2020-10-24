import {observable} from "mobx";

export class ArticleStore {
    @observable articles = [];

    loadArticles() {
        fetch("http://localhost:3001/articles")
            .then(( response ) => {
                return response.json();
            })
            .then((articles) => {
                this.articles = articles;
            })
    }
}