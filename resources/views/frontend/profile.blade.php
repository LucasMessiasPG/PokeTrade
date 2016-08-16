<div class="container">
    <div *ngIf="(user_profile && user_profile.email)">
        <p>Username: {{ user_profile.login }}</p>
        <p>Email: {{ user_profile.email }}</p>
    </div>
</div>