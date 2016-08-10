import {Component} from "@angular/core";
@Component({
    selector:'poke-profile-float',
    template:`
    <div class="container">
        <div class="profile-float">
            <ul class="nav navbar-nav navbar-right">
                <li><a href="#"><i class="fa fa-rub"></i> 0,00</a></li>
                <li><a href="#"><i class="fa fa-user"></i> Lucas Messias</a></li>
                <li class="margin-left"><input type="text" class="form-control search" placeholder="Search For ..."></li>
                <li>
                    <span>
                        <button class="btn btn-success search"><i class="fa fa-search"></i></button>
                    </span>
                </li>
            </ul>
        </div>
    </div>

    `,
    styles:[`
    .profile-float li>a:hover,.profile-float li>a:focus{
        border: 0px solid transparent !important;
        color: black;
    }
    
    .margin-left{
        margin-left: 20px;
    }
    
    .form-control.search{
        margin: 10px 0;
        max-width: 300px;
        border-radius: 0;
    }
    
    button.search{
        margin: 11px 0;
        border-radius: 0;
        height: 32px;
    }

    .nav.navbar-nav{
        padding: 1px;
        margin-top: 0px;
        margin-right: 20px;
        margin-left: 20px;
    }
    `]
})
export class ProfileFloatComponent{}