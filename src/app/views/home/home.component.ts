import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GenreManageDialogComponent } from './genre-manage-dialog/genre-manage-dialog.component';
import { PlaylistAddDialogComponent } from './playlist-add-dialog/playlist-add-dialog.component';

export interface MenuItem {
  label: string;
  icon: string;
  link: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  static manageGenre() {
    this.manageGenre();
  }
  menuItems: MenuItem[] = [
    {
      label: ' Tocar Selecionadas',
      icon: 'playlist_add_check',
      link: ''
    },
    {
      label: ' Pausar',
      icon: 'pause',
      link: ''
    },
    {
      label: ' Adicionar Música',
      icon: 'add',
      link: "(click)='addMusic()'"
    },
    {
      label: ' Gerenciar Estilos',
      icon: 'favorite_border',
      link: "(click)='manageGenre()'"
    }
  ];


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