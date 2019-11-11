import {Pipe, PipeTransform} from '@angular/core';
import { ICoupon } from './ICoupon';

@Pipe ({
    name: 'couponFilter'
})

export class couponFilterPipe implements PipeTransform {

    transform(value: ICoupon[], filterBy: string) : ICoupon[] {

        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;

        return filterBy ? value.filter((coupon:ICoupon) =>
            coupon.title.toLocaleLowerCase().indexOf(filterBy) !== -1) : value; 

    }

}