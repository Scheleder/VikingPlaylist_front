import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import * as moment from 'moment';
import { PlaylistService } from 'src/app/shared/service/playlist.service';

@Component({
  selector: 'app-playlist-add-dialog',
  templateUrl: './playlist-add-dialog.component.html',
  styleUrls: ['./playlist-add-dialog.component.css']
})
export class PlaylistAddDialogComponent implements OnInit {

  public playlistForm!: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private rest: PlaylistService,
    public dialogRef: MatDialogRef<PlaylistAddDialogComponent>  
  ) { }

  ngOnInit(): void {
    this.playlistForm = this.fb.group({
      name: ['',[Validators.required]],
      link: ['',[Validators.required]],
      style: ['',[Validators.required]]
    });
  }

  createLive(){
    //let newDate: moment.Moment = moment.utc(this.playlistForm.value.date).local();
    //this.playlistForm.value.date = newDate.format("YYYY-MM-DD") + 'T' + this.playlistForm.value.liveTime;
    //console.log(this.playlistForm.value);
    this.rest.postPlaylists(this.playlistForm.value).subscribe(result => {});
    this.dialogRef.close();
    this.playlistForm.reset();
    window.location.reload();
  }

  cancel(): void {
    this.dialogRef.close();
    this.playlistForm.reset();
  }

  closeDialog() {
    this.dialogRef.close(false);
  }

}
