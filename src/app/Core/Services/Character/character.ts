import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AllCharacters } from '../../interfaces/character';
import { Observable } from 'rxjs';
import { API_URL } from '../const';

@Injectable({
  providedIn: 'root',
})
export class characterService {

  private constructor(private http: HttpClient) { }

  getALLCharacters(): Observable<AllCharacters> {
    return this.http.get<AllCharacters>(`${API_URL}/character`);
  }

  getCharacterById(id: number): Observable<AllCharacters> {
    return this.http.get<AllCharacters>(`${API_URL}/character/${id}`);
  }

  getMultipleCharacters(ids: number[]): Observable<AllCharacters> {
    const idsString = ids.join(',');
    return this.http.get<AllCharacters>(`${API_URL}/character/${idsString}`);
  }

}
