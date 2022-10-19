import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Genre } from 'src/app/shared/model/genre.model';
import { GenreService } from 'src/app/shared/service/genre.service';
import { HomeComponent } from '../home.component';

@Component({
  selector: 'app-genre-manage-dialog',
  templateUrl: './genre-manage-dialog.component.html',
  styleUrls: ['./genre-manage-dialog.component.css']
})
export class GenreManageDialogComponent implements OnInit {
  public genreForm!: FormGroup;
  allGenres!: Genre[];
  
  constructor(
    private genreService : GenreService,
    private fb: FormBuilder, 
    public dialogRef: MatDialogRef<GenreManageDialogComponent>  
  ) { }

  ngOnInit(): void {
    this.getGenres();
    this.genreForm = this.fb.group({
      name: ['',[Validators.required]]
    });
  }

  getGenres(){
    this.genreService.getGenres().subscribe(data=>{
      this.allGenres = data.content;
    });

  }

  addGenre(){
    this.genreService.postGenres(this.genreForm.value).subscribe(result=>{});
    this.dialogRef.close();
    this.genreForm.reset();
    window.location.reload();
  }

  deleteGenre(id : string){
    this.genreService.deleteGenres(id).subscribe();
    this.dialogRef.close(false);
    //HomeComponent.manageGenre();
    window.location.reload();
  }

  cancel(): void {
    this.dialogRef.close();
    this.genreForm.reset();
  }

  closeDialog() {
    this.dialogRef.close(false);
  }
}
