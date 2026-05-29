import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Pais } from '../models/paises.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisesService {
  private http = inject(HttpClient);

  private apiUrl = 'https://restcountries.com/v3.1/all';

  getPaises(): Observable<Pais[]> {
    return this.http.get<Pais[]>(this.apiUrl);
  }
}
