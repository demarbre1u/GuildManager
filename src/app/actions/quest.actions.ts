import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Quest } from './../models/quest.model'

export const ADD_AVAILABLE_QUEST       = 'AddAvailableQuest'
export const REMOVE_AVAILABLE_QUEST    = 'RemoveAvailableQuest'

export class AddAvailableQuest implements Action 
{
    readonly type = ADD_AVAILABLE_QUEST

    constructor(public payload: Quest) {}
}

export class RemoveAvailableQuest implements Action 
{
    readonly type = REMOVE_AVAILABLE_QUEST

    constructor(public payload: number) {}
}

export const ADD_DAILY_QUEST    = 'AddDailyQuest'
export const REMOVE_DAILY_QUEST    = 'RemoveDailyQuest'
export const EMPTY_DAILY_QUEST    = 'EmptyDailyQuest'

export class AddDailyQuest implements Action 
{
    readonly type = ADD_DAILY_QUEST

    constructor(public payload: Quest) {}
}

export class RemoveDailyQuest implements Action 
{
    readonly type = REMOVE_DAILY_QUEST

    constructor(public payload: number) {}
}

export class EmptyDailyQuest implements Action 
{
    readonly type = EMPTY_DAILY_QUEST

    constructor() {}
}

export type Actions = AddAvailableQuest | RemoveAvailableQuest | AddDailyQuest | RemoveDailyQuest | EmptyDailyQuest