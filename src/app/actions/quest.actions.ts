import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Quest } from './../models/quest.model'

export const ADD_AVAILABLE_QUEST       = 'AddAvailableQuest'
export const REMOVE_AVAILABLE_QUEST    = 'RemoveAvailableQuest'

// Action to add a quest to the avaialble quest list
export class AddAvailableQuest implements Action 
{
    readonly type = ADD_AVAILABLE_QUEST

    constructor(public payload: Quest) {}
}

// Action to remove a quest from the avaialble quest list
export class RemoveAvailableQuest implements Action 
{
    readonly type = REMOVE_AVAILABLE_QUEST

    constructor(public payload: number) {}
}

export const ADD_DAILY_QUEST    = 'AddDailyQuest'
export const REMOVE_DAILY_QUEST    = 'RemoveDailyQuest'
export const EMPTY_DAILY_QUEST    = 'EmptyDailyQuest'

// Action to add a quest to the daily quest list
export class AddDailyQuest implements Action 
{
    readonly type = ADD_DAILY_QUEST

    constructor(public payload: Quest) {}
}

// Action to remove a quest from the daily quest list
export class RemoveDailyQuest implements Action 
{
    readonly type = REMOVE_DAILY_QUEST

    constructor(public payload: number) {}
}

// Action to empty the daily quest list
export class EmptyDailyQuest implements Action 
{
    readonly type = EMPTY_DAILY_QUEST

    constructor() {}
}

export type Actions = AddAvailableQuest | RemoveAvailableQuest | AddDailyQuest | RemoveDailyQuest | EmptyDailyQuest