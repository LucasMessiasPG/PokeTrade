<div class="container">
    <table>
        <thead>
            <tr>
                <th>Card</th>
                <th>Name / Number</th>
                <th>PokePoint</th>
                <th>Trainer</th>
                <th>Foil</th>
                <th>Reverse Foil</th>
                <th class="right">Option</th>
            </tr>
        </thead>
        <tbody>
            <tr *ngFor="let want of list_want">
                <td class="div-my-card-img">
                    <div>
                        <img class="very-small-card materialboxed" src="{{ want.card.image_url }}" alt="{{ want.card.name }}">
                    </div>
                </td>
                <td>{{ want.card.name_card }}</td>
                <td>{{ want.pp }}</td>
                <td><a [routerLink]="['/profile',want.user.id_user]">{{ want.user.login }}</a></td>
                <td>{{ want.foil }}</td>
                <td>{{ want.reverse_foil }}</td>
                <td class="right-align">
                    <a *ngIf="user.id_user != want.user.id_user" class="btn waves-effect waves-light">Send this card</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>