import { Quest } from './models/quest.model';

export interface AppState {
  readonly availableQuests: Quest[];
}