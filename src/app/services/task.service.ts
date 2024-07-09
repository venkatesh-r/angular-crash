import { Injectable } from '@angular/core';
import { employees } from '../mock';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../Task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/employees';
  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }
}
