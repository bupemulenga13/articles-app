import * as actionTypes from './actionTypes';

export function simulateHttpRequest(action: ArticleAction){
    return (dispatch: DispatchType) =>{
        setTimeout(() => {
            dispatch(action)
        }, 500)
    }
}

export function addArticle(article: IArticle){
    const action: ArticleAction ={
        type: actionTypes.ADD_ARTICLE,
        article
    }
    return simulateHttpRequest(action);
}

export function updateArticle(article: IArticle){
    const action: ArticleAction ={
        type: actionTypes.UPDATE_ARTICLE,
        article
    }
    return simulateHttpRequest(action);
}

export function deleteArticle(article:IArticle){
    const action: ArticleAction ={
        type: actionTypes.DELETE_ARTICLE,
        article: article

    }
    return simulateHttpRequest(action);
}

