import { Adventurer } from '../models/adventurer.model'
import * as AdventurerActions from '../actions/adventurer.actions'

const initialState: Adventurer[] = new Array<Adventurer>()

export function adventurerReducer(state: Adventurer[] = initialState, action: AdventurerActions.Actions) 
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