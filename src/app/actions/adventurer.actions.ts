import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Adventurer } from '../models/adventurer.model'

export const ADD_AVAILABLE_ADVENTURER       = 'AddAvailableAdventurer'
export const REMOVE_AVAILABLE_ADVENTURER    = 'RemoveAvailableAdventurer'

// Action to add an adventurer to the available adventurer list
export class AddAvailableAdventurer implements Action 
{
    readonly type = ADD_AVAILABLE_ADVENTURER

    constructor(public payload: Adventurer) {}
}

// Action to remove an adventurer from the available adventurer list
export class RemoveAvailableAdventurer implements Action 
{
    readonly type = REMOVE_AVAILABLE_ADVENTURER

    constructor(public payload: number) {}
}

export const ADD_DAILY_ADVENTURER       = 'AddDailyAdventurer'
export const REMOVE_DAILY_ADVENTURER    = 'RemoveDailyAdventurer'
export const EMPTY_DAILY_ADVENTURER    = 'EmptyDailyAdventurer'

// Action to add an adventurer to the daily adventurer list
export class AddDailyAdventurer implements Action 
{
    readonly type = ADD_DAILY_ADVENTURER

    constructor(public payload: Adventurer) {}
}

// Action to remove an adventurer from the daily adventurer list
export class RemoveDailyAdventurer implements Action 
{
    readonly type = REMOVE_DAILY_ADVENTURER

    constructor(public payload: number) {}
}

// Action to empty the daily adventurer list
export class EmptyDailyAdventurer implements Action 
{
    readonly type = EMPTY_DAILY_ADVENTURER

    constructor() {}
}

export type Actions = AddAvailableAdventurer | RemoveAvailableAdventurer | AddDailyAdventurer | RemoveDailyAdventurer | EmptyDailyAdventurer