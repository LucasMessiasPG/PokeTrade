<div class="container row">
    <form class="margin-top">
        <div class="col s6 right">
            <button type="button" class="right waves-effect waves-light btn" routerLink="/my-cards"><i
                        class="material-icons right">list</i> List
            </button>
        </div>
        <div class="col s6 left">
            <h5>Add New Card</h5>
        </div>
        <div class="col s12">
            <hr>
        </div>
        <fieldset class="col s12 m6 margin-top">
            <legend>Filter</legend>
            <div class="input-field col s12 margin-top">
                <select name="set">
                    <option value="">All</option>
                    <option *ngFor="let set of sets" value="{{ set.id_set }}">{{ set.name }}</option>
                </select>
                <label>Set</label>
            </div>
            <div class="input-field col s12">
                <input autocomplete="off" type="text" id="name" name="name" [(ngModel)]="filter.name">
                <label for="name">Card Name</label>
            </div>
            <div class="input-field col s12">
                <input autocomplete="off" type="text" id="number" name="number" [(ngModel)]="filter.number">
                <label for="number">Card Number</label>
            </div>
            <div class="col s12 margin-bot">
                <button (click)="searchCard(filter)" class="btn waves-light waves-effect right"> Search Card</button>
            </div>
        </fieldset>
        <fieldset class="col s12 m5 right margin-top" *ngIf="selectCard">
            <legend>Add</legend>
            <div class="col s6">
                <img class="new-card-img" class="img-responsive" src="{{ selectCard.image_url }}" alt="">
            </div>
            <div class="col s6">
                <div class="col s12">
                    <h6 class="right"><strong>{{ selectCard.name }} (#{{ selectCard.card_set }})</strong></h6>
                </div>
                <div class="col s12">
                    <div class="input-field col s12">
                        <input type="text" id="price" name="price" [(ngModel)]="new_card.price">
                        <label for="price">PokePoint</label>
                    </div>
                    <div class="input-field col s12">
                        <input type="text" id="amount" name="amount" [(ngModel)]="new_card.amount">
                        <label for="amount">Amount</label>
                    </div>
                    <div class="col s12">
                        <div class="switch">
                            <label>
                                Foil
                                <input type="checkbox" [(ngModel)]="new_card.foil" name="foil">
                                <span class="lever"></span>
                            </label>
                        </div>
                    </div>
                    <div class="col s12 margin-top">
                        <button (click)="searchCard(filter)" class="btn waves-light waves-effect right"> Add</button>
                    </div>
                </div>
            </div>
        </fieldset>
        <div class="col s12">
            <table *ngIf="(cardsFilter && cardsFilter.length > 0)">
                <thead>
                <tr>
                    <th>Card</th>
                    <th>Name</th>
                    <th>Number</th>
                    <th>Add</th>
                </tr>
                </thead>
                <tbody>
                <tr *ngFor="let card of cardsFilter">
                    <td class="div-my-card-img">
                        <div>
                            <img class="very-small-card materialboxed" src="{{ card.image_url }}" alt="">
                        </div>
                    </td>
                    <td>{{ card.name }} (#{{ card.card_set }})</td>
                    <td>{{ card.card_set }}</td>
                    <td>
                        <button (click)="selectCard = card" type="button" class="right waves-effect waves-light btn"><i
                                    class="material-icons">list</i></button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </form>
</div>