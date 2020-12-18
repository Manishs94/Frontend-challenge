import { Enrollee } from '../models/enrollee';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrolleesService {

  private readonly ENROLLEES_URI = '/enrollees';

  constructor(private http: HttpClient) { }

  public getEnrolleesList(): Observable<any>{
    return this.http.get(this.ENROLLEES_URI);
  }

  public getEnrolleeById(id: string): Observable<any>{
    return this.http.get(this.ENROLLEES_URI + '/' + id);
  }

  public updateEnrollee(id: string, enrollee: Enrollee): Observable<any>{
    return this.http.put(this.ENROLLEES_URI + '/' + id, enrollee);
  }

}
