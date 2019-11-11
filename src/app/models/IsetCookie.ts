export interface IsetCookie{
    name:string;
    value:string;
    version:number;
    comment: string;
    maxAge : number;
    secure: boolean;
    httpOnly: boolean;
}