import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeMatchComponent } from './poke-match.component';

describe('PokeMatchComponent', () => {
  let component: PokeMatchComponent;
  let fixture: ComponentFixture<PokeMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeMatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
