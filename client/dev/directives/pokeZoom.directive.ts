import {Directive, ElementRef, HostListener, Renderer} from "@angular/core";
@Directive({
    selector: '[pokeZoom]',
    inputs:['pokeZoom','showZoom']
})

export class PokeZoomDirective {
    private pokeZoom;
    private timeout;
    private showZoom;

    constructor(private el:ElementRef, private renderer: Renderer) {}

    @HostListener('mouseenter') onMouseEnter() {
        if(this.showZoom) {
            this.timeout = setTimeout(() => {
                this.pokeZoom.detalhes_show = true;
            }, 500)
        }
    }

    @HostListener('mouseleave') onMouseLeave() {
        if(this.showZoom) {
            clearTimeout(this.timeout);
            this.pokeZoom.detalhes_show = false;
            this.pokeZoom.zoom = false;
        }
    }
}