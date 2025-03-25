import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WorkersService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  addWorker(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  getWorkers(): Observable<any>{
    return this.http.get(this.apiUrl);
  }
}
