import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeGuessComponent } from './poke-guess.component';

describe('PokeGuessComponent', () => {
  let component: PokeGuessComponent;
  let fixture: ComponentFixture<PokeGuessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokeGuessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeGuessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
