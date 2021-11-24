import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanAvanzadoComponent } from './plan-avanzado.component';

describe('PlanAvanzadoComponent', () => {
  let component: PlanAvanzadoComponent;
  let fixture: ComponentFixture<PlanAvanzadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanAvanzadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanAvanzadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
