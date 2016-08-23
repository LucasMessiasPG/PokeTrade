import {Pipe, PipeTransform} from "@angular/core";
@Pipe({name:'PokePoint'})
export class PokePointPipe implements PipeTransform{
    transform(value,exponent){
        if(value) {
            value += '';
            if (value.length > 3) {
                if (value.length > 6) {
                    return value.slice(0, -6) + '.' + value.slice(-6, -3) + '.' + value.slice(-3, value.length)
                }
                return value.slice(0, -3) + '.' + value.slice(-3, value.length)
            }
        }else{
            value = 0;
        }
        return value;
    }
}