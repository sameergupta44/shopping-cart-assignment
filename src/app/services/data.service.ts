import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private HOST_NAME = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  getBannersData(): Observable<any> {
    return this.http.get(this.HOST_NAME + '/banners');
  }

}
