import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Enrollee } from '../models/enrollee';
import { EnrolleesService } from '../services/enrollees.service';

@Component({
  selector: 'app-update-enrollees',
  templateUrl: './update-enrollees.component.html',
  styleUrls: ['./update-enrollees.component.css']
})
export class UpdateEnrolleesComponent implements OnInit {

  public enrolleeForm = this.formBuilder.group({
    id: [''],
    name: [''],
    active: [''],
    dateOfBirth: ['']
  });

  private enrollmentId: string;
  public message: string;

constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private enrolleeService: EnrolleesService
  ) { }

ngOnInit(): void {
    this.route.params
        .subscribe(param => {
          console.log(param.id);
          this.enrollmentId = param.id;
          debugger;
          this.loadEnrollee(param.id);
        });
  }

private loadEnrollee(id: string): void {
  debugger;
  this.enrolleeService.getEnrolleeById(id)
  .subscribe((data: Enrollee) => {
    this.enrolleeForm.patchValue({
      id : data.id,
      name: data.name,
      active : data.active,
      dateOfBirth : data.dateOfBirth
  });
  },
  error => {
    console.log(error);
  });
}

public onSubmit(data: Enrollee): void {
  debugger;
    this.enrolleeService.updateEnrollee(this.enrollmentId, data)
    .subscribe(val => {
      console.log('Updated enrollee successfully');
      this.message = 'success';
      this.router.navigate(['/home']);
    },
    error => {
      console.error(error);
      this.message = 'failed';
    });
  }

}
