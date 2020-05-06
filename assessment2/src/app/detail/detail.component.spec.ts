import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailComponent } from './detail.component';
import { DetailService } from './detail.service';
import { DetailmockService } from './Mock/detailmock.service';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DetailComponent],  
      providers: [{ provide: DetailService, useClass: DetailmockService }]
    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(DetailComponent);
        component = fixture.componentInstance;
      });
  }));


  it('should create component', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should have text as Detail Page : ', async(() => {
    expect(component.text).toContain(' Detail Page : ');
  }));

  it(`should have received to be true `,async(()=>{
    expect(component.received).toBeTruthy();
  }));

  it(`should have one Employee Detail`, async(() => {
    expect(component.employees.length).toEqual(1);
  }));

  it(`html should render one detail`, async(() => {
    fixture.detectChanges();
    const e1 = fixture.nativeElement;
    expect(e1.querySelector('p').textContent).toContain('chennai');

  }));
});
