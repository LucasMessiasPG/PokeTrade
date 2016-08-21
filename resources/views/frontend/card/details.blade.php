<div class="container row" *ngIf="card">
    <div class="col s12">
        <h4 class="center">{{ card.name_card }}</h4>
    </div>
    <div class="col s12 l3">
        <div class="img-center">
            <img class="img img-responsive materialboxed" src="{{ card.image_url }}" alt="{{ card.name }}">
        </div>
    </div>
    <div class="col s12 l9">
        <div class="col s12 l8 margin-top">
            <p class="no-margin">
                <span class="col s12 m4" *ngIf="card.set">Set: <strong>{{ card.set }}</strong></span>
                <span class="col s12 m3" *ngIf="card.hp">
                    HP: <strong>{{ card.hp }}</strong>
                </span>
                <span *ngIf="card.types">Types</span>
                <span class="type" *ngFor="let type of card.types">
                    <span *ngIf="type" class="img {{ type }}" title="{{ type }}"></span>
                </span>
            </p>
            <ul>
                <li *ngIf="card.ability">
                    <poke-ability [ability]="card.ability"></poke-ability>
                </li>
                <li *ngIf="(card.texts && card.texts.length > 0)">
                    <poke-text [texts]="card.texts"></poke-text>
                </li>
                <li *ngIf="card.attack">
                    <poke-attack [attack]="card.attack"></poke-attack>
                </li>
            </ul>
            <div class="col s12 l4 " *ngIf="card.retreat && card.retreat.length > 0">
                <poke-retreat-cost [retreat]="card.retreat"></poke-retreat-cost>
            </div>
            <div class="col s12 l4 " *ngIf="card.weakness">
                <poke-weaknesses [weaknesses]="card.weakness"></poke-weaknesses>
            </div>
            <div class="col s12 l4 " *ngIf="card.resistances">
                <poke-resistances [resistances]="card.resistances"></poke-resistances>
            </div>
            <div class="col s12">
                <hr>
                <span class="col s12 m4" *ngIf="card.supertype">Supertype: <strong>{{ card.supertype }}</strong></span>
                <span class="col s12 m4" *ngIf="card.subtype">Subtype: <strong>{{ card.subtype }}</strong></span>
                <span class="col s12 m4" *ngIf="card.rarity">Rarity: <strong>{{ card.rarity }}</strong></span>
                <span class="col s12 m4" *ngIf="card.artist">Artist: <strong>{{ card.artist }}</strong></span>
                <span class="col s12 m4" *ngIf="card.national_pokedex_number">Number Pokedex: <strong>{{ card.national_pokedex_number }}</strong></span>
            </div>
        </div>
        <div class="col s12 l4">
            <ul class="collection with-header">
                <li class="collection-header center"><h5>Resume</h5></li>
                <li class="collection-item">Total Cards <span data-badge-caption="cards"
                                                              class="badge">{{ (cards)?cards.length:0 }}</span></li>
                <li class="collection-item">Total Wants: <span data-badge-caption="cards" class="badge">10</span></li>
                <li class="collection-item">Total Trades: <span data-badge-caption="cards" class="badge">6</span></li>
            </ul>
        </div>
    </div>
</div>