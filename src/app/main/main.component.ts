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

  availableQuests: Observable<Quest[]>;
  availableAdventurers: Observable<Adventurer[]>;

  constructor(private store: Store<AppState>, private router: Router) 
  { 
    this.availableQuests = store.select('availableQuests');
    this.availableAdventurers = store.select('availableAdventurers');
  }

  ngOnInit() {
  }

  removeAvailableQuest(index: number)
  {
    this.store.dispatch(new QuestActions.RemoveAvailableQuest(index))  
  }

  removeAvailableAdventurer(index: number)
  {
    this.store.dispatch(new AdventurerActions.RemoveAvailableAdventurer(index))    
  }
}
