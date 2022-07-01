import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpoyeeDetailComponent } from './empoyee-detail.component';

describe('EmpoyeeDetailComponent', () => {
  let component: EmpoyeeDetailComponent;
  let fixture: ComponentFixture<EmpoyeeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpoyeeDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpoyeeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
