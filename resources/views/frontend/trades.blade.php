<div id="trade" (window:event)="handle($event)" class="container">
    <div class="margin-top">
        <form class="row">
            <div class="input-field col s12 m3">
                <input autocomplete="off" type="text" id="name" name="name" [(ngModel)]="filtro.name">
                <label for="name" class="active">Name</label>
            </div>
            <div class="input-field col s12 m2">
                <input autocomplete="off" type="text" id="number" name="number" [(ngModel)]="filtro.number">
                <label for="number" class="active">Number</label>
            </div>
            <div class="input-field col s12 m2 switch margin-bot-40">
                <label class="center-align">
                    All
                    <input type="checkbox" name="have" [(ngModel)]="filtro.have">
                    <span class="lever"></span>
                    Have
                </label>
            </div>
            <div class="input-field col s12 m3 right-align">
                <button (click)="clearFilter()" class="btn waves-effect waves-light">Clear</button>
            </div>
        </form>
    </div>
    <hr>
    <div id="trade" class="row">
        <div class="col s12">
            <div class="col s12 m4" *ngFor="let single_card of list_want">
                <poke-card [card]="single_card.card" [want]="single_card"></poke-card>
            </div>
        </div>
    </div>
</div>