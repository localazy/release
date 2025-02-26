import { IGitParseTagsOptions } from '@/model/git/i-git-parse-tags-options';
import { IGitParseTagsOutput } from '@/model/git/i-git-parse-tags-output';
import { isFullSemverTag } from '@/functions/git/semver/is-full-semver-tag';
import { isMajorSemverTag } from '@/functions/git/semver/is-major-semver-tag';

export function gitParseCommitTags({ rawTags, hash }: IGitParseTagsOptions): IGitParseTagsOutput {
  try {
    const skippedTags: IGitParseTagsOptions['rawTags'][] = [];
    const tags = rawTags
      .split(',')
      .map((tag) => tag.trim().replace(/^tag: /, ''))
      .filter((tag) => {
        const isValid = isFullSemverTag({ tag }) || isMajorSemverTag({ tag });
        if (!isValid) {
          if (tag !== '') {
            skippedTags.push(tag);
          }
        }
        return isValid;
      })
      .map((tag: string) => {
        return {
          name: tag,
          normalizedName: tag.replace(/^v/, ''),
          commit: hash,
          isMajor: isMajorSemverTag({ tag }),
        };
      });

    return { tags, skippedTags };
  } catch (err: unknown) {
    throw new Error('Error parsing tags', { cause: err });
  }
}
