import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { InformationComponent } from './information.component';
import { By } from '@angular/platform-browser';

describe('InformationComponent', () => {
  let component: InformationComponent;
  let fixture: ComponentFixture<InformationComponent>;
  let de: DebugElement;
  let he: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InformationComponent]
    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(InformationComponent)
        component = fixture.componentInstance
        de = fixture.debugElement.query(By.css('form'))
        he = de.nativeElement
      })
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(InformationComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it(`should have form as invalid`, async(() => {
    component.informationForm.controls['firstname'].setValue('');
    component.informationForm.controls['lastname'].setValue('');
    component.informationForm.controls['salary'].setValue('');
    component.informationForm.controls['street1'].setValue('');
    component.informationForm.controls['street2'].setValue('');
    component.informationForm.controls['location'].setValue('');
    expect(component.informationForm.valid).toBeFalsy();
  }));

  it(`should have form as valid`, async(() => {
    component.informationForm.controls['firstname'].setValue('asdasd');
    component.informationForm.controls['lastname'].setValue('dsadsa');
    component.informationForm.controls['salary'].setValue('25000');
    component.informationForm.controls['street1'].setValue('qwert');
    component.informationForm.controls['street2'].setValue('asdfg');
    component.informationForm.controls['location'].setValue('chennai');
    expect(component.informationForm.valid).toBeTruthy();
  }));

  it('should have submitted to be true', async(() => {
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
  }));

  it('should have text as  Information Page : ', async(() => {
    expect(component.text).toEqual('Information Page :');
  }));

  it(`should create component`,async(()=>{
    expect(component).toBeTruthy();
  }));

  it('should have title in h4', async(() => {
    fixture.detectChanges();
    const e1=fixture.nativeElement.querySelector('h4');
    expect(e1.innerText).toContain('Information Page :');
  }));

});
