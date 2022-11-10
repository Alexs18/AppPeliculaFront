import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliscardsComponent } from './peliscards.component';

describe('PeliscardsComponent', () => {
  let component: PeliscardsComponent;
  let fixture: ComponentFixture<PeliscardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeliscardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeliscardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
