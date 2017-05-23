import { Component } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Params, ActivatedRoute } from '@angular/router';
import { AppSettings } from './config/app.settings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    // Options
    toastOptions = AppSettings.TOASTR;
  
    title = 'InfraxisDev';

    constructor(private translate: TranslateService,
                private route: ActivatedRoute) {

    }

}
