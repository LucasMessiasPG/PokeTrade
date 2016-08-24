import {Injectable} from "@angular/core";
declare var $:any;
declare var Materialize:any;

@Injectable()
export class MaterializeCuston {

    public box() {
        $('.materialboxed').materialbox();
    }

    public listFade(tag) {
        Materialize.showStaggeredList(tag);
    }

    public imgFade(tag) {
        Materialize.fadeInImage(tag);
    }

    public tooltip() {
        $('.tooltipped').tooltip();
    }

    public parallax() {
        $('.parallax').parallax();
    }


    public tabs() {
        $('ul.tabs').tabs();
    }

    public modal(tag?, close?) {
        if (!close)
            $('.modal-trigger').leanModal()

        if (tag) {
            if (close)
                $(tag).closeModal();
            else {
                $(tag).openModal();
            }

        }
    }

    public toast(text) {
        Materialize.toast(text, 4000)
    }

    public select(tag?) {
        if (tag)
            $(tag).material_select();
        else
            $('select').material_select();
    }

    public getValSelect(tag?, value?) {
        if (tag && tag != '') {
            if (value)
                $(tag).val(value);
            else
                return $(tag).val(value+'');
        } else {
            if (value) {
                console.log(0,value)
                $('select').val(value);
            }else {
                return $('select').val();
            }
        }
    }

    public dropdown() {
        $(".dropdown-button").dropdown({
                inDuration: 300,
                outDuration: 225,
                constrain_width: false, // Does not change width of dropdown to that of the activator
                hover: false, // Activate on hover
                gutter: 0, // Spacing from edge
                belowOrigin: true, // Displays dropdown below the button
                alignment: 'left' // Displays dropdown with edge aligned to the left of button
            }
        );
    }

    public sidenav() {
        $(".button-collapse").sideNav();
    }

    scrollFire(options) {
        Materialize.scrollFire(options);
    }
}