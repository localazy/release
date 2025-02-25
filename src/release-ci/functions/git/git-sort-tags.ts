import { IGitTag } from '../../model/git/i-git-tag';
import { gitSortParseVersion } from './git-sort-parse-version';

export function gitSortTags(tags: IGitTag[]): IGitTag[] {
  return tags.sort((a, b) => {
    const aParts = gitSortParseVersion(a.normalizedName);
    const bParts = gitSortParseVersion(b.normalizedName);

    for (let i = 0; i < Math.max(aParts.length, bParts.length); i++) {
      const aVal = aParts[i] || 0;
      const bVal = bParts[i] || 0;
      if (aVal !== bVal) {
        return aVal - bVal;
      }
    }
    return 0;
  });
}
