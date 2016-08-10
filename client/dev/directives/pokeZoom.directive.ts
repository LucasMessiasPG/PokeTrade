import {Directive, ElementRef, HostListener} from "@angular/core";
@Directive({
    selector: '[pokeZoom]'
})

export class PokeZoomDirective {
    constructor(private el:ElementRef) {
    }

    @HostListener('mouseenter') onMouseEnter() {
        // this.el.nativeElement.innerHTML += `
        // <div>teste</div>
        // `;
    }
}