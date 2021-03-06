import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}

  registerUser(userData): Observable<any> {
    return this.http.post("http://localhost:3001/register", userData);
  }

  loginUser(loginData): Observable<any> {
    return this.http.post("http://localhost:3001/login", loginData);
  }
}
