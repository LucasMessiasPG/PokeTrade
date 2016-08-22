import {Pipe, PipeTransform} from "@angular/core";
import {isBoolean, isString} from "@angular/forms/src/facade/lang";
import {TradesComponent} from "../Components/trades.component";
@Pipe({name:'filter'})
export class FilterPipe implements PipeTransform{

    constructor(private tradesComponent: TradesComponent){}

    transform(values,object){
        if(values) {
            var result = values.filter(item => {
                var check = true;

                if (object.have != '' && object.have != item.have)
                    check = false;

                if (object.number != '' && object.number != item.card.number)
                    check = false;

                if (object.name != '' && item.card.name.toLowerCase().indexOf(object.name.toLowerCase()) == -1)
                    check = false;

                if(check)
                    return item;
            })

            this.tradesComponent.filter$.emit('up');

            return result
        }
    }
}