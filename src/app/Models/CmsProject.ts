export class CmsProject {
    id? :number;
    idLanguage?: number;
    code?: string;
    title?: string;
    subject?: string;
    imageUrl?: string;
    lng?:number;
    lat?:number;
    description?: string;
    status?: number;
    modified?: Date;
    modifiedBy?: number;
    modifiedByName?: string;
    codeLanguage?: string;
};

export class CmsProjectFind{
    keyword?: string;
    status?: number;
    pageIndex?: number;
    pageSize?: number;
    orderCol?: string;
    isDesc?: boolean;
    idLanguage?: number;
}