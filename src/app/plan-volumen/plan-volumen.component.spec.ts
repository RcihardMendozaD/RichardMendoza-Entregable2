import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanVolumenComponent } from './plan-volumen.component';

describe('PlanVolumenComponent', () => {
  let component: PlanVolumenComponent;
  let fixture: ComponentFixture<PlanVolumenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanVolumenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanVolumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
