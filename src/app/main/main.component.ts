import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Quest } from '../models/quest.model';
import { Adventurer } from '../models/adventurer.model';
import * as QuestActions from './../actions/quest.actions';
import * as AdventurerActions from './../actions/adventurer.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  // Available quests from the store
  availableQuests: Observable<Quest[]>;

  // Available adventurers from the store
  availableAdventurers: Observable<Adventurer[]>;

  constructor(private store: Store<AppState>, private router: Router) 
  { 
    this.availableQuests = store.select('availableQuests');
    this.availableAdventurers = store.select('availableAdventurers');
  }

  ngOnInit() {
  }

  // Remove a quest from the available quest list
  removeAvailableQuest(index: number)
  {
    this.store.dispatch(new QuestActions.RemoveAvailableQuest(index))  
  }

  // Remove an adventurer from the available adventurer list
  removeAvailableAdventurer(index: number)
  {
    this.store.dispatch(new AdventurerActions.RemoveAvailableAdventurer(index))    
  }
}
