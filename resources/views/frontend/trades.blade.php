<div id="trade" (window:event)="handle($event)" class="container">
    <div class="margin-top">
        <form class="row">
            <div class="input-field col s12 m3">
                <select name="set">
                    <option value="">All</option>
                    <option *ngFor="let set of sets" value="{{ set.id_set }}">{{ set.name }}</option>
                </select>
                <label>Set</label>
            </div>
            <div class="input-field col s12 m5">
                <input autocomplete="off" type="text" id="name" name="name" [(ngModel)]="filtro.name">
                <label for="name" class="active">Name {{ teste }}</label>
            </div>
            <div class="input-field col s12 m2">
                <input autocomplete="off" type="text" id="number" name="number" [(ngModel)]="filtro.number">
                <label for="number" class="active">Number</label>
            </div>
            <div class="input-field col s12 m2 right-align">
                <button (click)="filterCard()" class="btn waves-effect waves-light">Filter</button>
            </div>
        </form>
    </div>
    <div id="trade" class="row">
        <div class="input-field col s12 switch margin-bot-40">
            <label class="center-align" >
                All
                <input type="checkbox" name="have" (change)="onlyHave()" [(ngModel)]="have">
                <span class="lever"></span>
                Have
            </label>
        </div>
        <div class="col s12 margin-top">
            <div class="col s12 m6 l4" *ngFor="let single_card of list_want">
                <poke-card [card]="single_card.card" [want]="single_card"></poke-card>
            </div>
        </div>
    </div>
</div>