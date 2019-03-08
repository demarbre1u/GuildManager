import { Component, OnInit } from '@angular/core';
import * as adventurers from '../../assets/adventurers/names.json'
import * as AdventurerActions from './../actions/adventurer.actions';
import { Adventurer } from '../models/adventurer.model.js';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state.js';

@Component({
  selector: 'app-new-adventurers',
  templateUrl: './new-adventurers.component.html',
  styleUrls: ['./new-adventurers.component.css']
})
export class NewAdventurersComponent implements OnInit {

  adventurers: Adventurer[]

  readonly MIN_NEW_ADVENTURER = 2
  readonly MAX_NEW_ADVENTURER = 3

  constructor(private store: Store<AppState>, private router: Router) {
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

  ngOnInit() {
  }

  addAvailableAdventurer(adv: Adventurer, index: number)
  {
    this.store.dispatch(new AdventurerActions.AddAvailableAdventurer({...adv}))    
    this.adventurers.splice(index, 1)
  }

  nextStep()
  {
    this.router.navigate([''])
  }
}
