import { Quest } from './models/quest.model';
import { Adventurer } from './models/adventurer.model';

export interface AppState {
  readonly availableQuests: Quest[];
  readonly availableAdventurers: Adventurer[];
}