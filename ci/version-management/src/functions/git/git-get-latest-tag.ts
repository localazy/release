import { IGitTag } from '../../model/git/i-git-tag';
import { IGitGetLatestTagOptions } from '../../model/git/i-git-get-latest-tag-options';
import { logger } from '../log/logger';
import { gitSortTags } from './git-sort-tags';

export function gitGetLatestTag({ commits }: IGitGetLatestTagOptions): IGitTag | null {
  try {
    logger('Getting latest tag');

    const allTags = commits.flatMap((commit) => commit.tags);
    const sortedTags = gitSortTags(allTags);

    return sortedTags.length > 0 ? sortedTags[sortedTags.length - 1] : null;
  } catch (err: unknown) {
    throw new Error('Error getting latest tag', { cause: err });
  }
}
