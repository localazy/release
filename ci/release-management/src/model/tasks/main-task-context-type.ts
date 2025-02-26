import { MainTaskOutputMapType } from '@/model/tasks/main-task-output-map-type';
import { MainTaskType } from '@/model/tasks/main-task-type';

export type MainTaskContextType<T extends MainTaskType> = {
  output: MainTaskOutputMapType[T];
};
