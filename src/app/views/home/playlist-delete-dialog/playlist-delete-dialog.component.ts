import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PlaylistService } from 'src/app/shared/service/playlist.service';

@Component({
  selector: 'app-playlist-delete-dialog',
  templateUrl: './playlist-delete-dialog.component.html',
  styleUrls: ['./playlist-delete-dialog.component.css']
})
export class PlaylistDeleteDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
    private rest: PlaylistService,
    public dialogRef: MatDialogRef<PlaylistDeleteDialogComponent>) { }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close(false);
  }


  deleteLive(id: string){
    console.log("Deletando "+id);
    this.rest.deletePlaylists(id).subscribe();
    this.dialogRef.close(false);
    window.location.reload(); 
  }

}
