<div class="container panel">
    <fieldset class="row margin-top">
        <lagend>Filter</lagend>
        <form (submit)="searchCards(filter)" #f="ngForm" class="col s12" autocomplete="off">
            <div class="input-field col s12 m4 l3">
                <select name="set" id="id_set">
                    <option value="">All</option>
                    <option *ngFor="let set of sets" value="{{ set.id_set }}">{{ set.name }}</option>
                </select>
                <label>Set</label>
            </div>
            <div class="input-field col s12 m6 l5">
                <input id="name" type="text" class="validate" name="name" [(ngModel)]="filter.name">
                <label for="name" [ngClass]="{'active':filter.name.length > 0}">Name</label>
            </div>
            <div class="input-field col s12 m2 l2">
                <input id="number" type="text" class="validate" name="number" [(ngModel)]="filter.number">
                <label for="number" [ngClass]="{'active':filter.number.length > 0}">Number</label>
            </div>
            <div class="input-field col s12 m12 l2">
                <button type="submit" class="waves-effect waves-light btn">Search</button>
            </div>
        </form>
    </fieldset>
    <div class="row margin-top">
        <div class="col s12 m4 l4 poke-card" [style.height]="height+'px'" *ngFor="let single_card of list_card">
            <poke-card [card]="single_card"></poke-card>
        </div>
    </div>
</div>