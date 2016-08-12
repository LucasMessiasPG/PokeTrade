import {Component} from "@angular/core";
@Component({
    selector:'poke-search',
    templateUrl:'/templates/search'
})
export class SearchComponent{

    teste(str){
        console.log(str);
    }
}