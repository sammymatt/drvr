import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CoursefinderComponent } from './coursefinder/coursefinder.component';
import { ScoresComponent } from './scores/scores.component'; 
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: 'coursefinder', component: CoursefinderComponent },
  { path: 'scores', component: ScoresComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CoursefinderComponent,
    ScoresComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
