import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ICat } from '../cats.interface';

@Injectable({
  providedIn: 'root',
})
export class CatsListService {
  constructor(private httpClient: HttpClient) {}

  url: string = 'http://localhost:3000/cats';

  fetchCatsList(): Observable<ICat[]> {
    return this.httpClient
      .get<ICat[]>(this.url, {
        headers: { Accept: 'application/json' },
        params: {},
      })
      .pipe(map((response) => response));
  }
}
