<div class="container row">
    <div class="col s12 m6" *ngIf="(messages && messages.length > 0)">
        <h5>Message</h5>
        <ul>
            <li *ngFor="let message of messages; let mi = index">
                <span *ngIf="(mi < 5)">
                    <strong>{{ message.created_at }}</strong> - {{ message.text }} - <a>{{ message.from.login }}</a>
                </span>
            </li>
            <li *ngIf="messages.length > 5"><a>See more</a></li>
        </ul>
    </div>
    <div class="col s12 m6" *ngIf="(trades && trades.length > 0)">
        <h5>Trades</h5>
        <ul>
            <li *ngFor="let trade of trades; let ti = index">
                <span *ngIf="(ti < 5)">
                    <strong>{{ trade.created_at }}</strong> - {{ trade.text }}
                </span>
            </li>
            <li *ngIf="trades.length > 5"><a>See more</a></li>
        </ul>
    </div>
    <div class="col s12 m6" *ngIf="(cards && cards.length > 0)">
        <h5>Card</h5>
        <ul>
            <li *ngFor="let card of cards; let ci = index">
                <span *ngIf="(ci < 5)">
                    <strong>{{ card.created_at }}</strong> - {{ card.text }}
                </span>
            </li>
            <li *ngIf="cards.length > 5"><a>See more</a></li>
        </ul>
    </div>
    <div class="col s12 m6" *ngIf="(system && system.length > 0)">
        <h5>System</h5>
        <ul>
            <li *ngFor="let sys of system; let si = index">
                <span *ngIf="(si < 5)">
                    <strong>{{ sys.created_at }}</strong> - {{ sys.text }}
                </span>
            </li>
            <li *ngIf="system.length > 5"><a>See more</a></li>
        </ul>
    </div>
    <div class="col s12 m6" *ngIf="(logs && logs.length > 0)">
        <h5>Log</h5>
        <ul>
            <li *ngFor="let log of logs; let li = index">
                <span *ngIf="(li < 5)">
                    <strong>{{ log.created_at }}</strong> - {{ log  .text }}
                </span>
            </li>
            <li *ngIf="logs.length > 5"><a>See more</a></li>
        </ul>
    </div>
</div>
