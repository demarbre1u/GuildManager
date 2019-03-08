import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { questReducer } from './reducers/quest.reducer';
import { adventurerReducer } from './reducers/adventurer.reducer';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
import { MainComponent } from './main/main.component';
import { Routes, RouterModule } from '@angular/router';
import { DailyComponent } from './daily/daily.component';
import { NewAdventurersComponent } from './new-adventurers/new-adventurers.component';

const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'daily', component: DailyComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    CreateComponent,
    MainComponent,
    DailyComponent,
    NewAdventurersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    RouterModule.forRoot(
      appRoutes
    ),
    StoreModule.forRoot({
      availableQuests: questReducer,
      availableAdventurers: adventurerReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
