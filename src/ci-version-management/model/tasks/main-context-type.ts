import { MainTaskContextType } from './main-task-context-type';

import { MainTaskType } from './main-task-type';

export type MainContextType = {
  [K in MainTaskType]?: MainTaskContextType<K>;
};
