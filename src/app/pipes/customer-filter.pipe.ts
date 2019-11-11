import { Pipe, PipeTransform} from "@angular/core";
import { ICustomer } from '../components/customer/ICustomer';

@Pipe({

    name: 'customerFilter'

})

export class CustomerFilterPipe implements PipeTransform {
    
    transform(value: ICustomer[], filterBy: string) : ICustomer[] {
       
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;

        return filterBy ? value.filter((customer : ICustomer) => customer.customerName.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
    
}