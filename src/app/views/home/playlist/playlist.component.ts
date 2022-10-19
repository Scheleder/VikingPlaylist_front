import { Component, Injectable, OnInit, Pipe, PipeTransform } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { Genre } from 'src/app/shared/model/genre.model';
import { Playlist } from 'src/app/shared/model/playlist.model';
import { GenreService } from 'src/app/shared/service/genre.service';
import { PlaylistService } from 'src/app/shared/service/playlist.service';
import { PlaylistDeleteDialogComponent } from '../playlist-delete-dialog/playlist-delete-dialog.component';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})

export class PlaylistComponent implements OnInit {

  playlistsByStyle!: Playlist[];
  playlist!: Playlist;
  genre!: Genre;
  ready: boolean = false;
  allGenres!: Genre[];
  
  constructor(
    public genreService : GenreService,
    public playlistService : PlaylistService,
    public sanitizer : DomSanitizer,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getGenres();
    this.getPlaylists();
  }

  getPlaylists(){

    this.playlistService.getPlaylistsWithFlag("all").subscribe(data=>{
      this.playlistsByStyle = data.content;
      console.log(this.playlistsByStyle);
      this.playlistsByStyle.forEach(playlist => {
        playlist.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(playlist.link);

      });
      this.ready=true;
    });
  
  }

  getGenres(){
    this.genreService.getGenres().subscribe(data=>{
      this.allGenres = data.content;
      console.log(this.allGenres);
    });

  }

  onDelete(key:string){
    this.dialog.open(PlaylistDeleteDialogComponent, {
      width: '320px',
      panelClass: 'confirm-dialog-container',
      position: { top: "10px" },
      disableClose: true,
      data :{
        message : 'Deseja excluir esta música?',
        id: key
      }
    });
  }

}
