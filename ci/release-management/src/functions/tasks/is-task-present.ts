import { MainContextType } from '@/model/tasks/main-context-type';
import { MainTaskContextType } from '@/model/tasks/main-task-context-type';
import { MainTaskType } from '@/model/tasks/main-task-type';

export function isTaskPresent<T extends MainTaskType>(
  ctx: MainContextType,
  task: T,
): ctx is MainContextType & { [K in T]: MainTaskContextType<K> } {
  return !!ctx[task];
}
