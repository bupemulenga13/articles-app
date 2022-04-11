export interface IArticle{
    id: number
    title: string
    body: string
}

export type IArticleState={
    articles: IArticle[]
    articlesLoading: boolean
}

export type ArticleAction = {
    type: string
    article: IArticle
}


export type DispatchType = (args: ArticleAction) => ArticleAction