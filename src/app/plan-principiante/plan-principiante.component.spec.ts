import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanPrincipianteComponent } from './plan-principiante.component';

describe('PlanPrincipianteComponent', () => {
  let component: PlanPrincipianteComponent;
  let fixture: ComponentFixture<PlanPrincipianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanPrincipianteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanPrincipianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
