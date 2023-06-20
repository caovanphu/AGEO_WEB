export class CmsCategory {
    id? :number;
    idParent?: number;
    code?: number;
    icon?: string;
    imgUrl?: string;
    title?: string;
    fullTitle?: string;
    label?: string;
    level : number = 0;
    orderNo?: string;
};