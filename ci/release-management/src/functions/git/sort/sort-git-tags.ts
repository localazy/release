import { IGitTag } from '@/model/git/i-git-tag';
import { parseSemverTag } from '@/functions/git/semver/parse-semver-tag';

export function sortGitTags(tags: IGitTag[]): IGitTag[] {
  return tags.sort((a, b) => {
    const aParts = parseSemverTag(a.normalizedName);
    const bParts = parseSemverTag(b.normalizedName);

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
