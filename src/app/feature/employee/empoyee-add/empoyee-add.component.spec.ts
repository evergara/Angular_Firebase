import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpoyeeAddComponent } from './empoyee-add.component';

describe('EmpoyeeAddComponent', () => {
  let component: EmpoyeeAddComponent;
  let fixture: ComponentFixture<EmpoyeeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpoyeeAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpoyeeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
