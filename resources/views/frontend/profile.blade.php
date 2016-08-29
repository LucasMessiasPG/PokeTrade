<div class="container">
    <div class="row">
        <div class="col s12 m2 center-align margin-top">
            <img class="img-profile" src="{{ (user_profile == false)?user_profile.img:'/img/user-default.png' }}" alt="">
        </div>
        <div class="col s8 m8" *ngIf="(user_profile && user_profile.email)">
            <h4>{{ user_profile.login }}</h4>
            <p>PokePoint {{ user_profile.pp | PokePoint }}</p>
        </div>
        <div class="col s4 m2 right-align margin-top">
            <button [routerLink]="['/profile',user.id_user,'edit']" *ngIf="(user_profile && user_profile.id_user == user.id_user)" class="btn waves-light waves-effect">Edit Profile</button>
        </div>
        <div [hidden]="!user_profile">
            <div class="col s12">
                <ul class="tabs">
                    <li class="tab col s4"><a href="#tab1">Profile</a></li>
                    <li class="tab col s4"><a class="active" href="#tab2">Cards</a></li>
                    <li class="tab col s4"><a href="#tab3">Trades</a></li>
                </ul>
            </div>
            <div id="tab1" class="col s12">
                <div *ngIf="user_profile">
                    <p>Country:</p>
                    <p>State:</p>
                    <p>District:</p>
                    <p>Address 1:</p>
                    <p>Number:</p>
                </div>
            </div>
            <div id="tab2" class="col s12">
                <div *ngIf="user_profile">
                    <div class="col s12 m4">
                        <ul class="collection with-header">
                            <li class="collection-header"><h4>Resume Card</h4></li>
                            <li class="collection-item">Total cards: <span class="right">{{ user_profile.cards.length }}</span></li>
                            <li class="collection-item">Total Wants: <span class="right">{{ user_profile.wants.length }}</span></li>
                            <li class="collection-item">Total Trades: <span class="right">{{ user_profile.trades.length }}</span></li>
                        </ul>
                    </div>
                    <div class="col s12 m4">
                        <ul class="collection with-header">
                            <li class="collection-header"><h4>Last Card</h4></li>
                            <li class="collection-item">Card: <span class="right">{{ (user_profile.cards[0])?user_profile.cards[0].card.name_card:'' }}</span></li>
                            <li class="collection-item">Want: <span class="right">{{ (user_profile.wants[0])?user_profile.wants[0].card.name_card:'' }}</span></li>
                            <li class="collection-item">Trade: <span class="right">{{ (user_profile.trades[0])?user_profile.trades[0].card.name_card:'' }}</span></li>
                        </ul>
                    </div>
                    <div class="col s12 m4">
                        <ul class="collection with-header">
                            <li class="collection-header"><h4>Total PokePoint</h4></li>
                            <li class="collection-item">Want: <span class="right"><i class="fa fa-rub"></i> {{ user_profile.pp_wants }}</span></li>
                            <li class="collection-item">Trade: <span class="right"><i class="fa fa-rub"></i> {{ user_profile.pp_trades }}</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="tab3" class="col s12">
                <div *ngIf="user_profile">
                    <div class="row">
                        <div class="col s12">
                            <p>Total PokePoint Trade: {{ user_profile.pp_trades }}</p>
                            <p>Total Cards Trade: {{ user_profile.trades.length }}</p>
                        </div>
                        <table class="col s12" *ngIf="user_profile.trades.length > 0">
                            <thead>
                                <tr>
                                    <th>Card</th>
                                    <th>Name / Number</th>
                                    <th>PokePoint</th>
                                    <th>To</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr *ngFor="let trade of user_profile.trades">
                                    <td></td>
                                    <td>{{ trade.card.name_card }}</td>
                                    <td>{{ trade.pp }}</td>
                                    <td>{{ trade.id_user_to }}</td>
                                    <td>{{ trade.created_at }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>