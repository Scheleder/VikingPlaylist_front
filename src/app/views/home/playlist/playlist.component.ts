import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { Playlist } from 'src/app/shared/model/playlist.model';
import { PlaylistService } from 'src/app/shared/service/playlist.service';
import { PlaylistDeleteDialogComponent } from '../playlist-delete-dialog/playlist-delete-dialog.component';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  livesPrevious!: Playlist[];
  livesNext!: Playlist[];
  next: boolean = false;
  previous: boolean = false;
  
  constructor(
    public playlistService : PlaylistService,
    public sanitizer : DomSanitizer,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getPlaylists();
  }

  getPlaylists(){

    this.playlistService.getPlaylistsWithFlag('previous').subscribe(data=>{
      this.livesPrevious = data.content;
      console.log(this.livesPrevious);
      this.livesPrevious.forEach(live => {
        live.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(live.link);
      });
        this.previous=true;
    });

    this.playlistService.getPlaylistsWithFlag('next').subscribe(data=>{
      this.livesNext = data.content;
      console.log(this.livesNext);
      this.livesNext.forEach(live => {
        live.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(live.link);
      });
      this.next=true;
    });

  }

  onDelete(key:string){
    this.dialog.open(PlaylistDeleteDialogComponent, {
      width: '300px',
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
