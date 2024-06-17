import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Adoption } from '../models/adoption';

@Injectable({
  providedIn: 'root'
})
export class AdoptionService {
  private api = 'http://52.53.204.176:4000/api/adoptions';
  private token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiJhZG1pbiIsImlhdCI6MTcxODQyNjAzNSwiZXhwIjoxNzE4NDI5NjM1fQ.7wXOMI3ibCXp2eeSkM-2QO7U9OcXMnStYL8rpufVDCY';

  constructor(private http: HttpClient) { }

  getAdoptions(): Observable<Adoption[]> {
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.get<Adoption[]>(this.api, { headers });
  }

  getAdoption(id: number): Observable<Adoption> {
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.get<Adoption>(`${this.api}/${id}`, { headers });
  }

  createAdoption(adoption: Adoption): Observable<any> {
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.post(this.api, adoption, { headers });
  }

  updateAdoption(adoption: Adoption): Observable<any> {
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.put(`${this.api}/${adoption.id}`, adoption, { headers });
  }

  deleteAdoption(id: number): Observable<any> {
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.delete(`${this.api}/${id}`, { headers });
  }
}
