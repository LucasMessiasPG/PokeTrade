import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {User} from "../services/usuer.service";
@Component({
    selector:'poke-nav-bar',
    template:`
    <nav>
     <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-bar" aria-expanded="false">
            <i class="fa fa-2x fa-bars"></i>
          </button>
          <a class="navbar-brand" href="#">PokeTrade.com.br</a>
        </div>
    
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="nav-bar">
          <ul class="nav navbar-nav navbar-right">
            <li><a routerLink="/home" routerLinkActive="active">Home</a></li>
            <li><a routerLink="/search" routerLinkActive="active">Search</a></li>
            <li><a href="#">List</a></li>
            <li><a href="#">Trades</a></li>
            <li><a href="#">Send</a></li>
            <li><a href="#">My Cards</a></li>
            <li><a href="#">Buy</a></li>
            <li><a href="#">Hitory</a></li>
            <li><a href="#">Profile</a></li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Messages <span class="badge">0</span><span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><span>Nothing to show</span></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">History Mensagens</a></li>
              </ul>
            </li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
    `,
    directives:[
        ROUTER_DIRECTIVES
    ],
})
export class NavBarComponent{

    constructor(user: User){

    }
}