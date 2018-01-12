import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesTomorrowComponent } from './games-tomorrow.component';

describe('GamesTomorrowComponent', () => {
  let component: GamesTomorrowComponent;
  let fixture: ComponentFixture<GamesTomorrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesTomorrowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesTomorrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
