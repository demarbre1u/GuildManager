import { Component, OnInit } from '@angular/core';
import { Quest } from '../models/quest.model.js';
import * as QuestActions from '../actions/quest.actions';
import * as AdventurerActions from './../actions/adventurer.actions';
import * as quests from '../../assets/quests/quests.json';
import * as adventurers from '../../assets/adventurers/names.json'
import { AppState } from '../app.state.js';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Adventurer } from '../models/adventurer.model.js';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.css']
})
export class DailyComponent implements OnInit {

  adventurers: Adventurer[]

  readonly MIN_NEW_ADVENTURER = 2
  readonly MAX_NEW_ADVENTURER = 3

  quests: Quest[]

  readonly MIN_NEW_QUEST = 2
  readonly MAX_NEW_QUEST = 3

  constructor(private store: Store<AppState>, private router: Router) 
  { 
    this.pickNewQuests()
    this.pickNewAdventurers()
  }

  ngOnInit() {
  }

  pickNewAdventurers()
  {
    this.adventurers = []

    let adventurerDiff = this.MAX_NEW_ADVENTURER - this.MIN_NEW_ADVENTURER
    let newAdventurerNumber = Math.round(Math.random() * adventurerDiff) + this.MIN_NEW_ADVENTURER

    for(let i = 0 ; i < newAdventurerNumber ; i++)
    {
      let newAdventurer: Adventurer = {name: '', rank: 1, xp: 0}

      let randomGender = Math.round( Math.random() * 1 )
      let nameList = randomGender === 1 ? adventurers.female : adventurers.male
      let randomNameIndex = Math.round( Math.random() * (nameList.length-1) )
      
      newAdventurer.name = nameList[randomNameIndex]

      this.adventurers.push(newAdventurer)
    }
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

  addAvailableAdventurer(adv: Adventurer, index: number)
  {
    this.store.dispatch(new AdventurerActions.AddAvailableAdventurer({...adv}))    
    this.adventurers.splice(index, 1)
  }

  addQuest(quest: Quest, index: number)
  {
    this.store.dispatch(new QuestActions.AddAvailableQuest({...quest}))    
    this.quests.splice(index, 1)
  }
}
