import { bootstrap }    from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from "@angular/http";
import {MasterComponent} from "./components/master.component";

bootstrap(MasterComponent,[HTTP_PROVIDERS]);
