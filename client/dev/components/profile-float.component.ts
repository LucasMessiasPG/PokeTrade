import {Component} from "@angular/core";
@Component({
    selector:'poke-profile-float',
    template:`
    <div class="container">
        <div class="profile-float">
            <ul class="nav navbar-nav navbar-right">
                <li><a href="#"><i class="fa fa-rub"></i> 0,00</a></li>
                <li><a href="#"><i class="fa fa-user"></i> Lucas Messias</a></li>
            </ul>
        </div>
    </div>

    `,
    styles:[`
    .profile-float li>a:hover,.profile-float li>a:focus{
        border: 1px solid transparent !important;
        color: black;
    }

    .nav.navbar-nav.navbar-right{
        padding: 1px;
        margin-top: 0px;
        margin-right: 20px;
        margin-left: 20px;
    }
    `]
})
export class ProfileFloatComponent{}