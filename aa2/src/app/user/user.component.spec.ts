import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { UserService } from './user.service';
import { UsermockService } from './Mock/usermock.service';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent],
      providers: [{ provide: UserService, useClass: UsermockService }]
    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(UserComponent);
        component = fixture.componentInstance;
      });
  }));


  it('should have one user', async(() => {
    expect(component.users.length).toEqual(1);
  }));

  it(`html should render one user`, async(() => {
    fixture.detectChanges();
    // const e1 = fixture.nativeElement.querySelector('p');
    // expect(e1.innertext).toContain('user1');
    const e1 = fixture.nativeElement;
    expect(e1.querySelector('div').textContent).toContain('user1');

  }));
});
