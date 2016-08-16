import {Injectable} from "@angular/core";
declare var $:any;
@Injectable()
export class Modal{

    public init()
    {
        $('.modal-trigger').leanModal()
    }

    public show(tag)
    {
        $(tag).openModal();
    }

    public close(tag)
    {
        $(tag).closeModal();
    }
}