// import { EditEnrolleeComponent } from './edit-enrollee/edit-enrollee.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEnrolleesComponent } from './list-enrollees/list-enrollees.component';
import { UpdateEnrolleesComponent } from './update-enrollees/update-enrollees.component';

const routes: Routes = [
  {
    path: 'home',
    component: ListEnrolleesComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'enrollee/:id',
    component: UpdateEnrolleesComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
