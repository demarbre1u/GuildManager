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

export type Actions = AddAvailableQuest | RemoveAvailableQuest