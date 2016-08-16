import {Injectable} from "@angular/core";
declare var $:any;
declare var Materialize:any;

@Injectable()
export class Toast{

    public show(text)
    {
        Materialize.toast(text, 4000)
    }
    
}