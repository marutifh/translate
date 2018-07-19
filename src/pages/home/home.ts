import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslateService } from "@ngx-translate/core";
import * as MyConfig from '../../providers/MyConfig';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public translatePrefix: any;
  constructor(private translate: TranslateService, public navCtrl: NavController) {
    this.translatePrefix = MyConfig.settings.i18n;
    console.log(this.translatePrefix, "i18n");
  }

  public changeLanguage(language) {
    this.translate.use(language);
  }

}
