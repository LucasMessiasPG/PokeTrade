import {Component, NgZone} from "@angular/core";
import {MaterializeCuston} from "../Services/materialize.service";
import {User} from "../Services/user.service";
import {CardService} from "../Services/card.service";
@Component({
    selector: 'poke-home',
    templateUrl: '/templates/home'
})
export class HomeComponent {
    private data;
    private heightScreen;
    private height;
    private width;

    constructor(private user:User,
                private card:CardService,
                private materialize:MaterializeCuston,
                private ngZone: NgZone
    ) {

        window.onresize = (e) =>
        {
            window.onresize = (e) =>
            {
                ngZone.run(() => {
                    this.width = window.innerWidth;
                    this.height = window.innerHeight;
                    this.heightScreen = (this.height - 64);
                });
            };
        };

        var heightScreen = document.body.offsetHeight;
        this.heightScreen = (heightScreen - 64);
    }

    ngOnInit() {
        this.materialize.parallax();

        var options = [
            {selector: '#pokepoint', offset: 200, callback: () => {
                this.materialize.imgFade('#pokepoint')
            }},
            {selector: '#pokepoint', offset: 450, callback: () => {
                this.materialize.listFade('#pokepoint-text')
            }}
        ];

        this.materialize.scrollFire(options)


        this.card.dataHome()
            .subscribe(res => {
                this.data = res;
                setTimeout(()=> {
                    this.materialize.listFade('#list-cards')
                    this.materialize.imgFade('#img-home-pikachu')
                }, 10)
            })
    }
}