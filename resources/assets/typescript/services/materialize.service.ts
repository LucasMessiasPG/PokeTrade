import {Injectable} from "@angular/core";
declare var $:any;
declare var Materialize:any;

@Injectable()
export class MaterializeCuston{

    public box()
    {
        $('.materialboxed').materialbox();
    }

    public tooltip()
    {
        $('.tooltipped').tooltip({html:true});
    }

    public modal(tag?,close?)
    {
        $('.modal-trigger').leanModal()
        if(tag){
            if(close)
                $(tag).closeModal();
            else
                $(tag).openModal();

        }
    }

    public toast(text)
    {
        Materialize.toast(text, 4000)
    }

    public select()
    {
        $('select').material_select();
    }
}