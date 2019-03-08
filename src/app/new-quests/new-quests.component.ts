import { Component, OnInit } from '@angular/core';
import { Quest } from '../models/quest.model.js';
import * as QuestActions from './../actions/quest.actions';
import * as quests from '../../assets/quests/quests.json';
import { AppState } from '../app.state.js';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-quests',
  templateUrl: './new-quests.component.html',
  styleUrls: ['./new-quests.component.css']
})
export class NewQuestsComponent implements OnInit {

  quests: Quest[]

  readonly MIN_NEW_QUEST = 2
  readonly MAX_NEW_QUEST = 3

  availableQuests: Observable<Quest[]>;

  constructor(private store: Store<AppState>, private router: Router) 
  { 
    this.availableQuests = store.select('availableQuests');

    this.pickNewQuests()
  }

  ngOnInit() {
  }

  pickNewQuests() 
  {
    this.quests = []
    let questsList = quests.quests
    let questDiff = this.MAX_NEW_QUEST - this.MIN_NEW_QUEST
    let newQuestNumber = Math.round(Math.random() * questDiff) + this.MIN_NEW_QUEST

    for(let i = 0 ; i < newQuestNumber ; i++)
    {
      let randomIndex = Math.round(Math.random() * (questsList.length-1))
      let randomQuest = questsList[randomIndex];
      this.quests.push(randomQuest)  
    }
  }

  addQuest(quest: Quest, index: number)
  {
    this.store.dispatch(new QuestActions.AddAvailableQuest({...quest}))    
    this.quests.splice(index, 1)
  }

  nextStep() 
  {
    this.router.navigate([''])
  }
}
