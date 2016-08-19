<div class="container row" *ngIf="card">
    <div class="col s12">
        <h4 class="center">{{ card.name }} (#{{ card.card_set }})</h4>
    </div>
    <div class="col s12 m3 center-align">
        <img src="{{ card.image_url }}" alt="{{ card.name }}">
    </div>
    <div class="col s12 m9">
        <div class="col s12 m6">
            <h5>Attacks</h5>
            <ul>
                <li *ngFor="let ability of card.ability">
                    <poke-ability [single_ability]="ability"></poke-ability>
                </li>

                <li *ngFor="let attack of card.attack">
                    <poke-attack [single_attack]="attack"></poke-attack>
                </li>
            </ul>
        </div>
    </div>
</div>