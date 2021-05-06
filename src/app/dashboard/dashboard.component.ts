import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Site } from './site';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {

  sites: any[] = [];
  private url = 'http://localhost:4200';

  constructor(
    private http: HttpClient
  ) {
    this.getSites().subscribe(res => {
      this.sites = res;
    });
  }

  getSites(): Observable<any> {
    return this.http.get<any>(`api/sites`)
      .pipe(
        catchError(this.handleError('getSites', []))
      );
  }

  setSite(site: Site): Observable<Site> {
    const id = site.id;
    return this.http.post<Site>(`api/sites`, site)
      .pipe(
        catchError(this.handleError<Site>(`setUser id=${id}`))
      );
  }

  // getSite(id: number): Observable<any> {
  //   return this.http.get<any>(`${this.url}/api/sites/${id}`)
  //     .pipe(
  //       catchError(this.handleError<any>(`getSite id=${id}`))
  //     );
  // }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}