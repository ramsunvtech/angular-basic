import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';

// Custom Modules.
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

import { AppComponent } from './app.component';

import { NavBarComponent } from './shared/components/common/nav-bar/nav-bar.component';
import { BannerComponent } from './shared/components/common/banner/banner.component';

import { AccountNumberComponent } from './shared/components/form/account-number/account-number.component';
import { InputBoxComponent } from './shared/components/form/input/input.component';
import { SubmitButtonComponent } from './shared/components/form/submit-button/submit-button.component';

export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, './assets/i18n/US', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BannerComponent,
    AccountNumberComponent,
    InputBoxComponent,
    SubmitButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
		TranslateModule.forRoot({
			provide: TranslateLoader,
			useFactory: (createTranslateLoader),
			deps: [Http]
		})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
