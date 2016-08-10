import { bootstrap }    from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from "@angular/http";
import {MasterComponent} from "./components/master.component";
import {appRouterProviders} from "./routes";
import {ROUTER_PROVIDERS} from "@angular/router-deprecated";

bootstrap(MasterComponent,[
    ROUTER_PROVIDERS,
    appRouterProviders,
    HTTP_PROVIDERS,
]);
