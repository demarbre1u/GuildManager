import { Adventurer } from '../models/adventurer.model'
import * as AdventurerActions from '../actions/adventurer.actions'

const initialAvailableAdventurers: Adventurer[] = new Array<Adventurer>()

export function availableAdventurerReducer(state: Adventurer[] = initialAvailableAdventurers, action: AdventurerActions.Actions) 
{
    switch(action.type) 
    {
        case AdventurerActions.ADD_AVAILABLE_ADVENTURER:
            state.push(action.payload)
            return state;
        case AdventurerActions.REMOVE_AVAILABLE_ADVENTURER:
            state.splice(action.payload, 1)
            return state;
        default:
            return state;
    }
}

const initialDailyAdventurers: Adventurer[] = new Array<Adventurer>()

export function dailyAdventurerReducer(state: Adventurer[] = initialDailyAdventurers, action: AdventurerActions.Actions) 
{
    switch(action.type) 
    {
        case AdventurerActions.ADD_DAILY_ADVENTURER:
            state.push(action.payload)
            return state;
        case AdventurerActions.REMOVE_DAILY_ADVENTURER:
            state.splice(action.payload, 1)
            return state;
        case AdventurerActions.EMPTY_DAILY_ADVENTURER:
            return new Array<Adventurer>();
        default:
            return state;
    }
}