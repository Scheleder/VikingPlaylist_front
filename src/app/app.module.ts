import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './views/home/home.component';
import { PlaylistComponent } from './views/home/playlist/playlist.component';
import { PlaylistAddDialogComponent } from './views/home/playlist-add-dialog/playlist-add-dialog.component';
import { PlaylistDeleteDialogComponent } from './views/home/playlist-delete-dialog/playlist-delete-dialog.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LocalDateTimePipe } from './shared/pipe/local-date-time.pipe';

import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { GenreManageDialogComponent } from './views/home/genre-manage-dialog/genre-manage-dialog.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FilterPipe } from './shared/pipe/filter.pipe';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlaylistComponent,
    PlaylistAddDialogComponent,
    PlaylistDeleteDialogComponent,
    LocalDateTimePipe,
    GenreManageDialogComponent,
    FilterPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDividerModule,
    MatChipsModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatAutocompleteModule,
    FlexLayoutModule,
    MatMenuModule
  ],
  providers: [LocalDateTimePipe, FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
