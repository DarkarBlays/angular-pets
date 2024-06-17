import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pet } from '../models/pet';

@Injectable({
  providedIn: 'root'
})

export class PetService {

  private api = 'http://52.53.204.176:4000/api/pets/post';
  private token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiJhZG1pbiIsImlhdCI6MTcxODQyNjAzNSwiZXhwIjoxNzE4NDI5NjM1fQ.7wXOMI3ibCXp2eeSkM-2QO7U9OcXMnStYL8rpufVDCY';

  constructor(private http: HttpClient) { }

  createPet(pet: Pet): Observable<any> {
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.post(this.api, pet, {headers});
  }
}
