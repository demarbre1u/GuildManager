import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { questReducer } from './reducers/quest.reducer';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
import { MainComponent } from './main/main.component';
import { Routes, RouterModule } from '@angular/router';
import { NewQuestsComponent } from './new-quests/new-quests.component';

const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'new-quests', component: NewQuestsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    CreateComponent,
    MainComponent,
    NewQuestsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    RouterModule.forRoot(
      appRoutes
    ),
    StoreModule.forRoot({
      availableQuests: questReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
