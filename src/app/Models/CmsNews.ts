export class CmsNews {
    id? :number;
    idLanguage?: number;
    idCategory?: number;
    title?: string;
    imageUrl?: string;
    subject?: string;
    bodyHtml?: string;
    publishedDate?: Date;
    status?: number;
    modified?: Date;
    modifiedBy?: number;
    isHot?: number;
    viewCount?: number;
    modifiedByName?: string;
    titleCategory?: string;
    codeLanguage?: string;
};

export class CmsNewsFind{
    keyword?: string;
    status?: number;
    pageIndex?: number;
    pageSize?: number;
    orderCol?: string;
    isDesc?: boolean;
    idLanguage?: number;
    idCategory?: number
}