import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class RestService {
  constructor(private http: HttpClient) {}

  endpoint = "https://jsonplaceholder.typicode.com/";
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getPosts(): Observable<any> {
    return this.http.get(this.endpoint + "posts").pipe(map(this.extractData));
  }
}
