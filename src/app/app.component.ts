import { Component } from '@angular/core';
import { Adventurer } from './models/adventurer.model';
import { Quest } from './models/quest.model';
import * as QuestActions from './actions/quest.actions';
import * as AdventurerActions from './actions/adventurer.actions';
import * as quests from '../assets/quests/quests.json';
import * as adventurers from '../assets/adventurers/names.json'
import { Store } from '@ngrx/store';
import { AppState } from './app.state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Guild Manager';

  readonly MIN_NEW_ADVENTURER = 2
  readonly MAX_NEW_ADVENTURER = 3

  readonly MIN_NEW_QUEST = 2
  readonly MAX_NEW_QUEST = 3

  constructor(private store: Store<AppState>, private router: Router) {
    this.pickNewAdventurers()
    this.pickNewQuests()
  }

  // Pick new daily quests and adventurers for each new day
  nextDay() 
  {
    this.pickNewAdventurers()
    this.pickNewQuests()
  }

  // Pick randomly new adventurers and add them the the daily adventurers list
  pickNewAdventurers()
  {
    this.store.dispatch(new AdventurerActions.EmptyDailyAdventurer())

    let adventurerDiff = this.MAX_NEW_ADVENTURER - this.MIN_NEW_ADVENTURER
    let newAdventurerNumber = Math.round(Math.random() * adventurerDiff) + this.MIN_NEW_ADVENTURER

    for(let i = 0 ; i < newAdventurerNumber ; i++)
    {
      let newAdventurer: Adventurer = {name: '', rank: 1, xp: 0}

      let randomGender = Math.round( Math.random() * 1 )
      let nameList = randomGender === 1 ? adventurers.female : adventurers.male
      let randomNameIndex = Math.round( Math.random() * (nameList.length-1) )
      
      newAdventurer.name = nameList[randomNameIndex]

      this.store.dispatch(new AdventurerActions.AddDailyAdventurer(newAdventurer))      
    }
  }

  // Pick randomly new quests and add them the the daily quests list
  pickNewQuests() 
  {
    this.store.dispatch(new QuestActions.EmptyDailyQuest())

    let questsList = quests.quests
    let questDiff = this.MAX_NEW_QUEST - this.MIN_NEW_QUEST
    let newQuestNumber = Math.round(Math.random() * questDiff) + this.MIN_NEW_QUEST

    for(let i = 0 ; i < newQuestNumber ; i++)
    {
      let randomIndex = Math.round(Math.random() * (questsList.length-1))
      let randomQuest = questsList[randomIndex];

      this.store.dispatch(new QuestActions.AddDailyQuest(randomQuest))      
    }
  }
}
