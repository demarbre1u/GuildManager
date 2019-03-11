import { Component, OnInit } from '@angular/core';
import { Quest } from '../models/quest.model.js';
import { AppState } from '../app.state.js';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Adventurer } from '../models/adventurer.model.js';
import { Observable } from 'rxjs';
import * as QuestActions from './../actions/quest.actions';
import * as AdventurerActions from './../actions/adventurer.actions';


@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.css']
})
export class DailyComponent implements OnInit {

  // Daily quests from the store
  dailyQuests: Observable<Quest[]>;

  // Daily adventurers from the store
  dailyAdventurers: Observable<Adventurer[]>;

  constructor(private store: Store<AppState>, private router: Router) 
  { 
    this.dailyQuests = store.select('dailyQuests');
    this.dailyAdventurers = store.select('dailyAdventurers');
  }

  ngOnInit() {}

  // Adds an adventurer from the daily list to the available list 
  addAdventurer(adv: Adventurer, index: number)
  {
    this.store.dispatch(new AdventurerActions.AddAvailableAdventurer({...adv}))    
    this.store.dispatch(new AdventurerActions.RemoveDailyAdventurer(index))
  }

  // Adds a quest from the daily list to the available list 
  addQuest(quest: Quest, index: number)
  {
    this.store.dispatch(new QuestActions.AddAvailableQuest({...quest}))    
    this.store.dispatch(new QuestActions.RemoveDailyQuest(index))    
  }
}
