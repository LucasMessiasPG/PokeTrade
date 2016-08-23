import {Component, Input, Output} from "@angular/core";
@Component({
    selector:'poke-paginate',
    template:`
    <ul class="pagination" *ngIf="pagination.pages.length > 1">
        <li style="display: none;" [class.disabled]="pagination.isFirstPage()">
            <a *ngIf="!pagination.isFirstPage()" (click)="pagination.previous()"><i class="material-icons">chevron_left</i></a>
        </li>
        <li *ngFor="let page of pagination.pages" [class.active]="pagination.getCurrent() === page.value">
            <a (click)="pagination.setCurrent(page.value)" *ngIf="pagination.getCurrent() !== page.value">
                <span>{{ page.label }}</span>
            </a>
            <a *ngIf="pagination.getCurrent() === page.value"><span>{{ page.label }}</span></a>
        </li>
        <li style="display: none;" class="pagination-next" [class.disabled]="pagination.isLastPage()" *ngIf="pagination.directionLinks">
            <a *ngIf="!pagination.isLastPage()" (click)="pagination.next()"><i class="material-icons">chevron_right</i></a>
        </li>
    </ul>
    `
})
export class PaginateComponent{
    @Input('pagination') pagination;
}