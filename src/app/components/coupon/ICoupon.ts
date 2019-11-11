export interface ICoupon {
    couponId:number;
    title:string;
    startDate:IStartDate;
    endDate:IEndDate;
    amount:number;
    type: string;
    couponMessage: string;
    price: number;
    image: string;
    customStartDate:string;
    customeEndDate:string;
    active:boolean; 
}

export interface IStartDate {
    year: number;
    month: number;
    day: number;
}

export interface IEndDate {
    year: number;
    month: number;
    day: number;
}