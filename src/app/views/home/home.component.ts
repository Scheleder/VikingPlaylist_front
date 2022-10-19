import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GenreManageDialogComponent } from './genre-manage-dialog/genre-manage-dialog.component';
import { PlaylistAddDialogComponent } from './playlist-add-dialog/playlist-add-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  static manageGenre() {
    this.manageGenre();
  }

  constructor( public dialog: MatDialog) {  }


  ngOnInit(): void {
  }

  addMusic(): void {
    
    const dialogRef = this.dialog.open(PlaylistAddDialogComponent, {
      minWidth: '400px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The add dialog was closed');
    });
    
  }

   manageGenre(): void {
    
    const dialogRef = this.dialog.open(GenreManageDialogComponent, {
      minWidth: '400px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The manage dialog was closed');
    });
    
  }
  

}