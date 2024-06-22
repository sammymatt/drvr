import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  private apiUrl = 'localhost:';

  constructor(private http: HttpClient) { }

  saveScore(score: any): Observable<any> {
    return this.http.post(this.apiUrl, score);
  }

  // add userid parameter 
  getScores(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
