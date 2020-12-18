import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEnrolleesComponent } from './list-enrollees.component';

describe('ListEnrolleesComponent', () => {
  let component: ListEnrolleesComponent;
  let fixture: ComponentFixture<ListEnrolleesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEnrolleesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEnrolleesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
