import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ColorsPage } from './colors.page';

describe('ColorsPage', () => {
  let component: ColorsPage;
  let fixture: ComponentFixture<ColorsPage>;
  let colorsPage: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ColorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of 10 elements', () => {
    colorsPage = fixture.nativeElement;
    const items = colorsPage.querySelectorAll('ion-item');
    expect(items.length).toEqual(10);
  });

});
