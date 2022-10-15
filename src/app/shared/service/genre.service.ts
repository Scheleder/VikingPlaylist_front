import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genre } from '../model/genre.model';
import { ResponsePageable } from '../model/responsePageable.model';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  apiUrl = 'http://localhost:8080/genres/';
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  public getGenres(): Observable<ResponsePageable> {
    return this.httpClient.get<ResponsePageable>(this.apiUrl);
}

  public postGenres(genre: any): Observable<Genre>{
  return this.httpClient.post<any>(this.apiUrl, genre, this.httpOptions); 
  }

  public deleteGenres(id: string):Observable<unknown>{
    const url = this.apiUrl+id;
    console.log(url);
    return this.httpClient.delete(url, this.httpOptions).pipe();
  }
  
}
