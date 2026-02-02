import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AllEpisodes, Episode } from '../../interfaces/episode';
import { API_URL } from '../const';

@Injectable({
  providedIn: 'root',
})

export class EpisodeService {
  constructor(private http: HttpClient) { }

  getAllEpisodes(): Observable<AllEpisodes> {
    return this.http.get<AllEpisodes>(`${API_URL}/episode`)
  }

  getEpisodeById(id: number): Observable<Episode>{
    return this.http.get<Episode>(`${API_URL}/episode/${id}`);
  }
  getMultipleEpisodesByIds(ids: number[]): Observable<Episode[]>{
    const idsString= ids.join(',')
    return this.http.get<Episode[]>(`${API_URL}/episode/${idsString}`);
  }
}
