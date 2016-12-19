/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InputBoxComponent } from '../input/input.component';
import { AccountNumberComponent } from './account-number.component';

describe('AccountNumberComponent', () => {
  let component: AccountNumberComponent;
  let fixture: ComponentFixture<AccountNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
				InputBoxComponent,
				AccountNumberComponent
			]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
