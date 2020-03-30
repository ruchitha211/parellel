// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ApiService {

//   constructor() { }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/index";
import { User } from './admin/user.model';
import { ApiResponse } from './admin/api.response';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'https://reqres.in/api/login';

  login(loginPayload) : Observable<ApiResponse> {
    return this.http.post<ApiResponse>('https://reqres.in/api' + 'token/generate-token', loginPayload);
  }

  getUsers() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl);
  }

  getUserById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + id);
  }

  createUser(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, user);
  }

  updateUser(user: User): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + user.id, user);
  }

  deleteUser(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + id);
  }
}
