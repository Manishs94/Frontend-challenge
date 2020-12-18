import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEnrolleesComponent } from './update-enrollees.component';

describe('UpdateEnrolleesComponent', () => {
  let component: UpdateEnrolleesComponent;
  let fixture: ComponentFixture<UpdateEnrolleesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEnrolleesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEnrolleesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
