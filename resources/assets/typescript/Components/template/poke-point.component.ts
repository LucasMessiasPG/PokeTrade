import {Component, ElementRef, Input} from "@angular/core";
@Component({
    selector:'poke-point',
    template:`<i class="fa fa-rub"></i> <span>{{pokepoint}}</span>`
})
export class PokePointComponent{
    @Input('value') pokepoint

}