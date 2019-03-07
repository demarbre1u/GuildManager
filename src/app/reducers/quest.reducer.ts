import { Action } from '@ngrx/store'
import { Quest } from './../models/quest.model'
import * as QuestActions from './../actions/quest.actions'

const initialState: Quest[] = new Array<Quest>()

export function questReducer(state: Quest[] = initialState, action: QuestActions.Actions) 
{
    switch(action.type) 
    {
        case QuestActions.ADD_AVAILABLE_QUEST:
            state.push(action.payload)
            return state;
        default:
            return state;
    }
}