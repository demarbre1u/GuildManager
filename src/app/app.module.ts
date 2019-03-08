import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { dailyQuestReducer, availableQuestReducer } from './reducers/quest.reducer';
import { availableAdventurerReducer, dailyAdventurerReducer } from './reducers/adventurer.reducer';
import { MainComponent } from './main/main.component';
import { Routes, RouterModule } from '@angular/router';
import { DailyComponent } from './daily/daily.component';

const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'daily', component: DailyComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DailyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    RouterModule.forRoot(
      appRoutes
    ),
    StoreModule.forRoot({
      availableQuests: availableQuestReducer,
      availableAdventurers: availableAdventurerReducer,

      dailyQuests: dailyQuestReducer,
      dailyAdventurers: dailyAdventurerReducer,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
