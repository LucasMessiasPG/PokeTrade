import {Injectable} from "@angular/core";
declare var $:any;
@Injectable()
export class Tooltip{

    public init()
    {
        console.log('tooltip init()')
        $('.tooltipped').tooltip({html:true});
    }
}