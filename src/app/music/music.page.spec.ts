import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MusicPage } from './music.page';

describe('MusicPage', () => {
  let component: MusicPage;
  let fixture: ComponentFixture<MusicPage>;
  let musicPage: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MusicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of 10 elements', () => {
    musicPage = fixture.nativeElement;
    const items = musicPage.querySelectorAll('ion-item');
    expect(items.length).toEqual(10);
  });

});
