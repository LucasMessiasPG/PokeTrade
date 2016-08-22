<div class="container" *ngIf="start">
    <div class="row">
        <div class="col s12">
            <a class="margin-top waves-effect waves-light btn right" routerLink="/want-list/new">Want a card ?</a>
        </div>
        <div class="col s12">
            <div *ngIf="!cards">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <span class="card-title">Try it</span>
                        <ul>
                            <li>Try clicking the button "Want a card ?" and searching the card in our data base.</li>
                            <li>Select the amount you want.</li>
                            <li>Set how many PokePoint you will pay for the trade.</li>
                            <li>And finish the process.</li>
                            <li>Now wait for another trainer send that card for you.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div *ngIf="cards">
            <table class="bordered highlight my-card col s12">
                <thead>
                <tr>
                    <th>Card</th>
                    <th class="hide-on-small-and-down">Name</th>
                    <th class="center">PokePoints</th>
                    <th class="hide-on-small-and-down">Set</th>
                    <th class="cente hide-on-small-and-down">Foil</th>
                    <th class="center hide-on-small-and-down">Reverse Foil</th>
                    <th class="right">Options</th>
                </tr>
                </thead>
                <tbody>
                <tr *ngFor="let item of cards">
                    <td class="div-my-card-img">
                        <div>
                            <img class="very-small-card materialboxed" src="{{ item.card.image_url }}" alt="{{ item.card.name }}">
                        </div>
                    </td>
                    <td class="hide-on-small-and-down"><a [routerLink]="['/details',item.card.id_card]">{{ item.card.name_card }}</a></td>
                    <td class="right-align"><i class="fa fa-rub"></i> {{ item.pp | PokePoint }}</td>
                    <td class="hide-on-small-and-down">{{ item.card.set }}</td>
                    <td class="hide-on-small-and-down"><p class="center" *ngIf="item.foil" title="Foil">
                            <input disabled type="checkbox" id="foil[]" [checked]="item.foil" />
                            <label for="foil"></label>
                        </p>
                    </td>
                    <td class="hide-on-small-and-down"><p class="center" *ngIf="item.reverse_foil" title="Reverse Foil">
                            <input disabled type="checkbox" id="reverse_foil[]" [checked]="item.reverse_foil" />
                            <label for="reverse_foil"></label>
                        </p>
                    </td>
                    <td class="right">
                        <a class="btn waves-light waves-effect icon orange modal-trigger" href="#edit" (click)="setAction(item)"><i class="fa fa-pencil"></i></a>
                        <a class="btn waves-light waves-effect icon red modal-trigger" href="#confirmation" (click)="setAction(item)"><i class="fa fa-trash-o"></i></a>
                    </td>
                </tr>
                </tbody>
            </table>
            <div id="confirmation" class="modal" *ngIf="action">
                <div class="modal-content">
                    <h4>Confirmation</h4>
                    <p>You will remove this card <strong>{{ action.card.name_card }}</strong></p>
                </div>
                <div class="modal-footer">
                    <a class=" modal-action modal-close waves-effect waves-green btn-flat red white-text">Cancel</a>
                    <a (click)="removeWant(action)" class=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
                </div>
            </div>
            <div id="edit" class="modal" *ngIf="action">
                <form (submit)="editWant(action)">
                    <div class="modal-content">
                        <h4>Edit</h4>
                        <p>Edit <strong>{{ action.card.name_card }}</strong></p>
                        <div class="row">
                            <div class="input-field col s12 m6">
                                <input autocomplete="off" type="text" id="pp" name="pp" (ngModelChange)="action.new_pp = $event" [ngModel]="action.pp">
                                <label for="pp" class="active">PokePoint</label>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <a class=" modal-action modal-close waves-effect waves-green btn-flat red white-text">Cancel</a>
                        <button type="submit" class=" modal-action modal-close waves-effect waves-green btn-flat">Agree</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>