import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Genre } from 'src/app/shared/model/genre.model';
import { GenreService } from 'src/app/shared/service/genre.service';
import { PlaylistService } from 'src/app/shared/service/playlist.service';

@Component({
  selector: 'app-playlist-add-dialog',
  templateUrl: './playlist-add-dialog.component.html',
  styleUrls: ['./playlist-add-dialog.component.css']
})
export class PlaylistAddDialogComponent implements OnInit {
  public playlistForm!: FormGroup;
  allGenres!: Genre[];
  //selectedValue: string = '';
  //novo : any = [{id:999999999, name:'Novo...'}];
  

  constructor(
    public genreService : GenreService,
    private fb: FormBuilder, 
    private rest: PlaylistService,
    public dialogRef: MatDialogRef<PlaylistAddDialogComponent>  
  ) { }

  ngOnInit(): void {
    this.getGenres();
    this.playlistForm = this.fb.group({
      name: ['',[Validators.nullValidator]],
      link: ['',[Validators.required]],
      style: ['',[Validators.required]]
    });
  }


  getOptionText(genre : Genre) {
    return genre.name;
  }

  getGenres(){
    this.genreService.getGenres().subscribe(data=>{
      this.allGenres = data.content;
      // console.log(this.allGenres);
      // this.novo.name="Novo...";
      // this.allGenres.push(this.novo);
      
    });

  }

  createLive(){
    //let newDate: moment.Moment = moment.utc(this.playlistForm.value.date).local();
    //this.playlistForm.value.date = newDate.format("YYYY-MM-DD") + 'T' + this.playlistForm.value.liveTime;
    //console.log(this.playlistForm.value);
    let embed : string = this.playlistForm.value.link;
    let inicio_url = embed.indexOf("src=")+5;
    let fim_url = embed.indexOf("title=")-2;
    let inicio_title = embed.indexOf("title=")+7;
    let fim_title = embed.indexOf("frameborder=")-2;
    this.playlistForm.value.link = embed.slice(inicio_url, fim_url);
    this.playlistForm.value.name = embed.slice(inicio_title, fim_title);
    console.log("LINK => "+this.playlistForm.value.link);
    console.log("TITLE ==> "+this.playlistForm.value.name);
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