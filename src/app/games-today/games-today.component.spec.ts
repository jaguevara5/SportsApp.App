import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesTodayComponent } from './games-today.component';

describe('GamesTodayComponent', () => {
  let component: GamesTodayComponent;
  let fixture: ComponentFixture<GamesTodayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesTodayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
