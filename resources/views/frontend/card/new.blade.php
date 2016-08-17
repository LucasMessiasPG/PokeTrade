<div class="container row">
    <form class="margin-top">
        <div class="col s6 right">
            <button type="button" class="right waves-effect waves-light btn" routerLink="/my-cards"><i class="material-icons right">list</i> Minha Lista</button>
        </div>
        <div class="col s6 left">
            <h5>Add New Card</h5>
        </div>
        <div class="col s12">
            <hr>
        </div>
        <div class="col s4 l2 switch input-field">
            <label>
                Foil
                <input type="checkbox" [(ngModel)]="new_card.foil" name="foil">
                <span class="lever"></span>
            </label>
        </div>
        <div class="input-field col s4 l2">
            <input type="text" id="price" name="price" [(ngModel)]="new_card.price">
            <label for="price">PokePoint</label>
        </div>
        <div class="input-field col s4 m2">
            <input type="text" id="amount" name="amount" [(ngModel)]="new_card.amount">
            <label for="amount">Amount</label>
        </div>
        <div class="input-field col s6">
            <select>
                <option value="" disabled selected>Choose your option</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
            </select>
            <label>Set</label>
        </div>
    </form>
</div>