import {ADD_ARTICLE, FETCH_ARTICLES, UPDATE_ARTICLE, DELETE_ARTICLE} from './actionTypes';
import { ArticleActionTypes } from './actionTypes';
import { IArticleState } from './interfaces/articles.interface';

const initialState: IArticleState = {
    articles: [],
    articlesLoading: false
}


export const articleReducer = (
    state = initialState,
    action: ArticleActionTypes
): IArticleState => {
    switch (action.type) {
        case ADD_ARTICLE:
            return{
                ...state,
                articles: [...state.articles, action.payload.article],
                articlesLoading: action.payload.articlesLoading
            }
        case FETCH_ARTICLES:
            return{
                ...state,
                ...action.payload
            }
        case UPDATE_ARTICLE:
            return{
                ...state,
                articles: state.articles.map((article) => article?.id === action.payload.article.id ? action.payload.article : article),
            }
        case DELETE_ARTICLE:
            return{
                ...state,
                articles: state.articles.filter((article) => article?.id !== action.payload.article.id)
            }
        default:
            return state
    }
}
