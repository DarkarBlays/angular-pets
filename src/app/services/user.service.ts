import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, Auth, Location } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private api = 'http://52.53.204.176:4000/swagger/api/users';
  private token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiJhZG1pbiIsImlhdCI6MTcxODQyNjAzNSwiZXhwIjoxNzE4NDI5NjM1fQ.7wXOMI3ibCXp2eeSkM-2QO7U9OcXMnStYL8rpufVDCY';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.get<User[]>(this.api, { headers });
  }

  getUser(id: number): Observable<User> {
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.get<User>(`${this.api}/${id}`, { headers });
  }

  createUser(user: User): Observable<any> {
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.post(this.api, user, { headers });
  }

  updateUser(user: User): Observable<any> {
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.put(`${this.api}/${user.id}`, user, { headers });
  }

  deleteUser(id: number): Observable<any> {
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.delete(`${this.api}/${id}`, { headers });
  }

  getAuth(id: number): Observable<Auth> {
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.get<Auth>(`${this.api}/auth/${id}`, { headers });
  }

  getLocation(id: number): Observable<Location> {
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.get<Location>(`${this.api}/locations/${id}`, { headers });
  }
}
