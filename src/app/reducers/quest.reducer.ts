import { Quest } from './../models/quest.model'
import * as QuestActions from './../actions/quest.actions'

const initialAvailableQuest: Quest[] = new Array<Quest>()

// Reduces the available quest list
export function availableQuestReducer(state: Quest[] = initialAvailableQuest, action: QuestActions.Actions) 
{
    switch(action.type) 
    {
        case QuestActions.ADD_AVAILABLE_QUEST:
            state.push(action.payload)
            return state;
        case QuestActions.REMOVE_AVAILABLE_QUEST:
            state.splice(action.payload, 1)
            return state;
        default:
            return state;
    }
}

const initialDailyQuest: Quest[] = new Array<Quest>()

// Reduces the daily quest list
export function dailyQuestReducer(state: Quest[] = initialDailyQuest, action: QuestActions.Actions) 
{
    switch(action.type) 
    {
        case QuestActions.ADD_DAILY_QUEST:
            state.push(action.payload)
            return state;
        case QuestActions.REMOVE_DAILY_QUEST:
            state.splice(action.payload, 1)
            return state;
        case QuestActions.EMPTY_DAILY_QUEST:
            return new Array<Quest>()
        default:
            return state;
    }
}