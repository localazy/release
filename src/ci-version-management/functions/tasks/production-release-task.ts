import { MainContextType } from '../../model/tasks/main-context-type';
import { endGroup, startGroup } from '../log/logger';

export async function productionReleaseTask(ctx: MainContextType) {
  try {
    startGroup('🚀 Production Release');
  } catch (err: unknown) {
    throw new Error('Production release failed', { cause: err });
  } finally {
    endGroup();
  }
}
