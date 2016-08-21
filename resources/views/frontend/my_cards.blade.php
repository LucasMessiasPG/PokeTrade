<div class="container">
    <div class="row">
        <div class="col s12 m4 margin-top">
            <ul class="collection with-header">
                <li class="collection-header center"><h5>Resume Cards</h5></li>
                <li class="collection-item">Total Cards <span data-badge-caption="cards"
                                                              class="badge">{{ (cards)?cards.length:0 }}</span></li>
                <li class="collection-item">Total Wants: <span data-badge-caption="cards" class="badge">10</span></li>
                <li class="collection-item">Total Trades: <span data-badge-caption="cards" class="badge">6</span></li>
            </ul>
        </div>
        <div class="col m8 margin-top">
            <div class="card blue-grey darken-1 my-card">
                <div class="card-content white-text">
                    <span class="card-title"><strong>Last Message</strong></span>
                    <p *ngIf="message">{{ message.text }} - <a>{{ message.from.login }}</a> <span class="right">{{ message.created_at }}</span></p>
                    <p *ngIf="!message">Nothing to show</p>
                </div>
            </div>
            <div class="card blue-grey darken-1 my-card">
                <div class="card-content white-text ">
                    <span class="card-title"><strong>Last Trade</strong></span>
                    <p *ngIf="message_trade">{{ message_trade.text }} - <a>{{ message_trade.from.login }}</a> <span class="right">{{ message_trade.created_at }}</span></p>
                    <p *ngIf="!message_trade">Nothing to show</p>
                </div>
            </div>
        </div>
        <div class="col s8 right">
            <div class="right">
                <a class="waves-effect waves-light btn" (click)="addCard()">
                    <i class="material-icons right">playlist_add</i> Add Card
                </a>
            </div>
        </div>
    </div>
    <div class="row" *ngIf="cards">
        <table class="bordered highlight my-card col s12">
            <thead>
            <tr>
                <th>Card</th>
                <th class="hide-on-small-and-down">Name</th>
                <th class="hide-on-small-and-down">Set</th>
                <th class="cente hide-on-small-and-down">Foil</th>
                <th class="center hide-on-small-and-down">Reverse Foil</th>
                <th class="right"></th>
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
                    <a class="btn waves-light waves-effect icon small red"><i class="fa fa-trash-o"></i></a>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</div>
