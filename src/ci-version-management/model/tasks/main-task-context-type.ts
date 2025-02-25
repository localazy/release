import { MainTaskOutputMapType } from './main-task-output-map-type';
import { MainTaskType } from './main-task-type';

export type MainTaskContextType<T extends MainTaskType> = {
  output: MainTaskOutputMapType[T];
};
