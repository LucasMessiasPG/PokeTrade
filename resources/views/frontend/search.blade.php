<div class="container panel">
    <fieldset class="row margin-top">
        <lagend>Filter</lagend>
        <form (ngSubmit)="searchCards(filter)" #f="ngForm" class="col s12" autocomplete="off">
            <div class="input-field col s3">
                <input id="set_name" type="text" class="validate" name="set_name" [(ngModel)]="filter.set_name">
                <label for="set_name" [ngClass]="{'active':filter.set_name.length > 0}">Set</label>
            </div>
            <div class="input-field col s5">
                <input id="name" type="text" class="validate" name="name" [(ngModel)]="filter.name">
                <label for="name" [ngClass]="{'active':filter.name.length > 0}">Name</label>
            </div>
            <div class="input-field col s2">
                <input id="number" type="text" class="validate" name="number" [(ngModel)]="filter.number">
                <label for="number" [ngClass]="{'active':filter.number.length > 0}">Number</label>
            </div>
            <div class="input-field col s12 m2">
                <button type="submit" class="waves-effect waves-light btn">Search</button>
            </div>
        </form>
    </fieldset>
    <div class="row margin-top">
        <div class="col s3" [style.height]="height+'px'" *ngFor="let single_card of list_card">
            <poke-card [card]="single_card"></poke-card>
        </div>
    </div>
</div>