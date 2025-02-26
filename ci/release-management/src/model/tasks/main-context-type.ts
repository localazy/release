import { MainTaskContextType } from '@/model/tasks/main-task-context-type';

import { MainTaskType } from '@/model/tasks/main-task-type';

export type MainContextType = {
  [K in MainTaskType]?: MainTaskContextType<K>;
};
