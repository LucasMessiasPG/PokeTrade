import {Component, ElementRef, Renderer} from "@angular/core";
import {Router} from "@angular/router";
import {User} from "../services/user.service";
@Component({
    selector: 'poke-my-cards',
    templateUrl: '/templates/my_cards'
})
export class MyCardsComponents{

    private cards;
    private img_fixed = false;
    private show_img = 'https://s3.amazonaws.com/pokemontcg/base1/14.jpg';
    private globalListenFunc;

    constructor(
        private router: Router,
        private user: User,
        private renderer: Renderer,
        private el: ElementRef
    ){
        if(!this.user.checkLogin())
            this.router.navigateByUrl('/login');
    }

    ngOnInit()
    {
        var body = document.body,
            html = document.documentElement;

        var height = Math.max( body.scrollHeight, body.offsetHeight,
            html.clientHeight, html.scrollHeight, html.offsetHeight );

        this.globalListenFunc = this.renderer.listenGlobal('document','scroll',()=>{

            if(document.body.scrollTop > 200 && height > 600)
                this.img_fixed = true;
            else
                this.img_fixed = false;
        });
        if(this.user.checkLogin())
            this.user.getCards( )
                .subscribe(cards => {
                    this.cards = cards;
                });
    }

    ngOnDestroy()
    {
        this.globalListenFunc();
    }

    public changeImg(card)
    {
        this.show_img = card.image_url

        // this.show_img = '/img/'+card.id_set+'/'+card.number_int+".jpg"
    }
}