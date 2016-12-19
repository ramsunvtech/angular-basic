/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';

// Custom Modules.
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

import { NavBarComponent } from './shared/components/common/nav-bar/nav-bar.component';
import { BannerComponent } from './shared/components/common/banner/banner.component';

import { AccountNumberComponent } from './shared/components/form/account-number/account-number.component';
import { InputBoxComponent } from './shared/components/form/input/input.component';
import { SubmitButtonComponent } from './shared/components/form/submit-button/submit-button.component';

export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, './assets/i18n/US', '.json');
}

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
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
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

/*
  it('should render title in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('NG2 CLI - Account Look Up');
  }));
*/

});
