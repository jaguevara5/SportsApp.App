import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesYesterdayComponent } from './games-yesterday.component';

describe('GamesYesterdayComponent', () => {
  let component: GamesYesterdayComponent;
  let fixture: ComponentFixture<GamesYesterdayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesYesterdayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesYesterdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
