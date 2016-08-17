<div class="container">
    <div class="row">
        <div class="col s4 margin-top">
            <ul class="collection with-header">
                <li class="collection-header center"><h5>Resume Cards</h5></li>
                <li class="collection-item">Total Cards <span data-badge-caption="cards"
                                                              class="badge">{{ (cards)?cards.length:0 }}</span></li>
                <li class="collection-item">Total Wants: <span data-badge-caption="cards" class="badge">10</span></li>
                <li class="collection-item">Total Trades: <span data-badge-caption="cards" class="badge">6</span></li>
            </ul>
        </div>
        <div class="col s8 margin-top">
            <div class="card blue-grey darken-1 my-card">
                <div class="card-content white-text">
                    <span class="card-title"><strong>Last Message</strong></span>
                    <p>I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.</p>
                </div>
            </div>
            <div class="card blue-grey darken-1 my-card">
                <div class="card-content white-text ">
                    <span class="card-title"><strong>Last Trade</strong></span>
                    <p>I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.</p>
                </div>
            </div>
        </div>
        <div class="col s8 right">
            <div class="right">
                <button class="btn waves-light waves-effect"><i class="material-icons right">playlist_add</i> Add Card
                </button>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col l3 my-card img center hide-on-med-and-down">
            <img class="img-card" [ngClass]="{'fixed':img_fixed}" src="{{ show_img }}" alt="">
        </div>
        <table class="bordered highlight my-card col l9 m12 s12">
            <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Set</th>
                <th>Amount</th>
                <th>Foil</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            <tr (mouseover)='changeImg(card)' *ngFor="let card of cards">
                <td>{{ card.name }}</td>
                <td></td>
                <td>{{ card.set.name }}</td>
                <td></td>
                <td></td>
                <td class="center">
                    <a><i class="fa fa-arrow-circle-o-up"></i></a>
                    <a><i class="fa fa-arrow-circle-o-down"></i></a>
                    <a><i class="fa fa-eye"></i></a>
                    <a><i class="fa fa-pencil"></i></a>
                    <a><i class="fa fa-remove"></i></a>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</div>