import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanDefinicionComponent } from './plan-definicion.component';

describe('PlanDefinicionComponent', () => {
  let component: PlanDefinicionComponent;
  let fixture: ComponentFixture<PlanDefinicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanDefinicionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanDefinicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
