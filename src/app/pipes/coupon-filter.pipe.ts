import { Pipe, PipeTransform} from "@angular/core";
import { ICoupon } from '../components/coupon/ICoupon';

@Pipe({

    name: 'couponFilter'

})

export class CouponFilterPipe implements PipeTransform {
    
    transform(value: ICoupon[], filterBy: string) : ICoupon[] {
       
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;

        return filterBy ? value.filter((coupon : ICoupon) => coupon.title.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
    
}