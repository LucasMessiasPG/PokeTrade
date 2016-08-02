import {Component} from "@angular/core";
@Component({
    selector:'poke-footer',
    template:`
    <div class="footer panel">
      <div class="container">
        <ul class="list-inline text-right">
          <li><a href="#"><i class="fa fa-facebook fa-2x"></i></a></li>
          <li><a href="#"><i class="fa fa-twitter fa-2x"></i></a></li>
          <li><a href="#"><i class="fa fa-youtube fa-2x"></i></a></li>
          <li><a href="#"><i class="fa fa-github fa-2x"></i></a></li>
        </ul>
      </div>
    </div>
    `,
    styles:[`
    .panel.footer{
        margin:0;
        padding:0;
    }
    `]
})

export class FooterComponent{}