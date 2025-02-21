import { CommitDefinitionType } from './commit-definition-type';

export function isCommitDefinitionType<T extends CommitDefinitionType['id']>(
  definition: CommitDefinitionType | undefined,
  id: T,
): definition is CommitDefinitionType & { id: T } {
  return definition?.id === id;
}
