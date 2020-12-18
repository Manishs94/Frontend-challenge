import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnrolleesService } from '../services/enrollees.service';

@Component({
  selector: 'app-list-enrollees',
  templateUrl: './list-enrollees.component.html',
  styleUrls: ['./list-enrollees.component.css']
})
export class ListEnrolleesComponent implements OnInit {

  public enrolleesList;
  public error = false;

  constructor(
    private router: Router,
    private enrolleeService: EnrolleesService
  ) { }

  ngOnInit(): void {
    this.enrolleeService.getEnrolleesList()
    .subscribe(enrolleesList => {
      this.error = false;
      debugger;
      this.enrolleesList = enrolleesList;
    },
    error => {
      this.error = true;
      console.error(error);
    });
  }

  public navigateToEditEnrollee(id: string): void{
    this.router.navigate(['/enrollee/' + id]);
  }
}
