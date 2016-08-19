<div class="container row">
    <div class="col s12 m6" *ngIf="(messages && messages.length > 0)">
        <h5>Message</h5>
        <ul>
            <li *ngFor="let message of messages"><strong>{{ message.created_at }}</strong> - {{ message.text }} - <a>{{ message.from.login }}</a></li>
        </ul>
    </div>
    <div class="col s12 m6" *ngIf="(trades && trades.length > 0)">
        <h5>Trades</h5>
        <ul>
            <li *ngFor="let trade of trades"><strong>{{ trade.created_at }}</strong> - {{ trade.text }}</li>
        </ul>
    </div>
    <div class="col s12 m6" *ngIf="(cards && cards.length > 0)">
        <h5>Card</h5>
        <ul>
            <li *ngFor="let card of cards"><strong>{{ card.created_at }}</strong> - {{ card.text }}</li>
        </ul>
    </div>
    <div class="col s12 m6" *ngIf="(system && system.length > 0)">
        <h5>System</h5>
        <ul>
            <li *ngFor="let sys of system"><strong>{{ sys.created_at }}</strong> - {{ sys.text }}</li>
        </ul>
    </div>
    <div class="col s12 m6" *ngIf="(logs && logs.length > 0)">
        <h5>Log</h5>
        <ul>
            <li *ngFor="let log of logs"><strong>{{ log.created_at }}</strong> - {{ log  .text }}</li>
        </ul>
    </div>
</div>