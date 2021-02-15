import { Injectable } from '@angular/core';
import { Observable, combineLatest, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { delay, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private HOST_NAME = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  getBannersData(): Observable<any> {
    return this.http.get(this.HOST_NAME + '/banners');
  }

  getProductsData(): Observable<any> {
    return this.http.get(this.HOST_NAME + '/products');
  }

  getCategoryData(): Observable<any> {
    return this.http.get(this.HOST_NAME + '/categories');
  }

  loginCheck(data: any): Observable<any> {
    console.log(data);
    return of(data).pipe(
      map(val => {
        if (val.username === 'sameer@gupta.com' && val.password === 'Hello@1234') {
          return true;
        }
        return false;
      }),
      delay(1000));
  }

}
