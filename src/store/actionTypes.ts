export const ADD_ARTICLE = "ADD_ARTICLE";
export const UPDATE_ARTICLE = "UPDATE_ARTICLE";
export const FETCH_ARTICLES = "FETCH_ARTICLES";
export const FETCH_ARTICLE = "FETCH_ARTICLE";
export const DELETE_ARTICLE = "DELETE_ARTICLE";

interface GetArticlesAction {
    type: typeof FETCH_ARTICLES;
    payload:{
        articles: IArticle[],
        articlesLoading: boolean
    }
}


interface GetArticleAction {
    type: typeof FETCH_ARTICLE;
    payload: {
        article: IArticle
        articlesLoading: boolean
    }
}


interface AddArticleAction {
    type: typeof ADD_ARTICLE;
    payload: {
        article: IArticle
        articlesLoading: boolean
    }
}


interface UpdateArticleAction {
    type: typeof UPDATE_ARTICLE;
    payload: {
        article: IArticle
        articlesLoading: boolean
    }
}


interface DeleteArticleAction {
    type: typeof DELETE_ARTICLE;
    payload: {
        article: IArticle
        articlesLoading: boolean
    }
}


export type ArticleActionTypes = GetArticlesAction | GetArticleAction | AddArticleAction | UpdateArticleAction | DeleteArticleAction;