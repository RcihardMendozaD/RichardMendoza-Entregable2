import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanObjetivoComponent } from './plan-objetivo.component';

describe('PlanObjetivoComponent', () => {
  let component: PlanObjetivoComponent;
  let fixture: ComponentFixture<PlanObjetivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanObjetivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanObjetivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
