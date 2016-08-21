import {Component} from "@angular/core";
@Component({
    selector:'poke-text',
    template: `
    <div class="margin-top">
        Texts: 
        <p class="no-margin" *ngFor="let text of texts">
          <span>{{ text }}</span>
        </p>
    </div>
    `,
    inputs:['texts']
})
export class TextComponent{}