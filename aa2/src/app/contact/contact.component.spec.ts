import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import { DebugElement } from '@angular/core';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('ContactComponent', () => {
  let comp: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let de: DebugElement;
  let e1: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactComponent],
      imports: [BrowserModule, FormsModule, ReactiveFormsModule]
    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(ContactComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('form'));
        e1 = de.nativeElement;
      });
  }));

  it(`should have as text 'contact page'`, async(() => {
    expect(comp.text).toEqual('Contact Page :');
  }));

  it(`should set submitted to true`, async(() => {
    comp.onSubmit();
    expect(comp.submitted).toBeTruthy();
  }));

  it(`form should be invalid`, async(() => {
    comp.contactForm.controls['email'].setValue('');
    comp.contactForm.controls['name'].setValue('');
    comp.contactForm.controls['text'].setValue('');
    expect(comp.contactForm.valid).toBeFalsy();
  }));

  it(`form should be valid`, async(() => {
    comp.contactForm.controls['email'].setValue('asd@asd.com');
    comp.contactForm.controls['name'].setValue('aada');
    comp.contactForm.controls['text'].setValue('text');
    expect(comp.contactForm.valid).toBeTruthy();
  }));
});