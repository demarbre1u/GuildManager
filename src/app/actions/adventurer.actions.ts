import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Adventurer } from '../models/adventurer.model'

export const ADD_AVAILABLE_ADVENTURER       = 'AddAvailableAdventurer'
export const REMOVE_AVAILABLE_ADVENTURER    = 'RemoveAvailableAdventurer'

export class AddAvailableAdventurer implements Action 
{
    readonly type = ADD_AVAILABLE_ADVENTURER

    constructor(public payload: Adventurer) {}
}

export class RemoveAvailableAdventurer implements Action 
{
    readonly type = REMOVE_AVAILABLE_ADVENTURER

    constructor(public payload: number) {}
}

export type Actions = AddAvailableAdventurer | RemoveAvailableAdventurer