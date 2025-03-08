import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    // Asegurar que localStorage está disponible antes de usarlo
    if (typeof window !== 'undefined' && window.localStorage) {
      const token = localStorage.getItem('token');
      if (token) {
        headers = headers.set('Authorization', `Bearer ${token}`);
      }
    }

    return headers;
  }

  get<T>(path: string, params: any = {}): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${path}`, {
      headers: this.getHeaders(),
      params
    });
  }

  post<T>(path: string, body: any = {}): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}/${path}`, body, {
      headers: this.getHeaders()
    });
  }

  put<T>(path: string, body: any = {}): Observable<T> {
    return this.http.put<T>(`${this.apiUrl}/${path}`, body, {
      headers: this.getHeaders()
    });
  }

  delete<T>(path: string): Observable<T> {
    return this.http.delete<T>(`${this.apiUrl}/${path}`, {
      headers: this.getHeaders()
    });
  }
}
