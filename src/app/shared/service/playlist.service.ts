import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Playlist } from '../model/playlist.model';
import { ResponsePageable } from '../model/responsePageable.model';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  apiUrl = 'http://localhost:8080/playlists';
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };

  constructor(
    private httpClient : HttpClient
  ) { }

  public getPlaylists(): Observable<ResponsePageable> {
    return this.httpClient.get<ResponsePageable>(this.apiUrl);
}

  public postPlaylists(playlist: any): Observable<Playlist>{
  return this.httpClient.post<any>(this.apiUrl, playlist, this.httpOptions); 
  }

  public getPlaylistsWithFlag(flag: string): Observable<ResponsePageable> {
    return this.httpClient.get<ResponsePageable>(this.apiUrl + '?flag=' + flag);
}

  public deletePlaylists(id: string):Observable<unknown>{
    const url = this.apiUrl+id;
    console.log(url);
    return this.httpClient.delete(url, this.httpOptions).pipe();
  }

}
