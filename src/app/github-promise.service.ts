import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { count } from 'console';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubPromiseService {

  constructor(private httpClient: HttpClient) { }
  //gitHub profile
  public getProfile(SearchQuery: any): Observable<any> {

    let dataURL = 'https://api.github.com/users/${searchQuerry}';
    return this.httpClient.get<any>(dataURL).pipe(retry(count: 1),
      catchError(this.handleErrors)
    );
  }

  //gitHub Repositories
  public getRepos(SearchQuery: any): Observable<any> {

    let dataURL = 'https://api.github.com/users/${searchQuerry}/repos';
    return this.httpClient.get<any>(dataURL).pipe(retry(count: 1),
      catchError(this.handleErrors)
    );
  }

  public handleErrors(error: HttpErrorResponse) {
    let errorMessage: string;

    if (error.error instanceOf ErrorEvent)
    errorMessage = 'MESSAGE:$(error.error.message)';

  }
  else {
  const errorMessage = 'STATUS:${error.status} MESSAGE :${error.message}';
}
return throwError(errorMessage);
}


