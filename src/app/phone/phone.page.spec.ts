import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PhonePage } from './phone.page';

describe('PhonePage', () => {
  let component: PhonePage;
  let fixture: ComponentFixture<PhonePage>;
  let phonePage: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PhonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of 10 elements', () => {
    phonePage = fixture.nativeElement;
    const items = phonePage.querySelectorAll('ion-item');
    expect(items.length).toEqual(10);
  });

});
