import { bootstrap }    from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from "@angular/http";
import {MasterComponent} from "./components/master.component";
import {ROUTER_PROVIDERS} from "@angular/router-deprecated";
import {appRouterProviders} from "./routes";

bootstrap(MasterComponent,[
    appRouterProviders,
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS
]);
