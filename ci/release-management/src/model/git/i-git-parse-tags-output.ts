import { IGitTag } from '@/model/git/i-git-tag';
import { IGitParseTagsOptions } from '@/model/git/i-git-parse-tags-options';

export interface IGitParseTagsOutput {
  tags: IGitTag[];
  skippedTags: IGitParseTagsOptions['rawTags'][];
}
