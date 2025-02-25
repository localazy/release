import { IGitTag } from './i-git-tag';
import { IGitParseTagsOptions } from './i-git-parse-tags-options';

export interface IGitParseTagsOutput {
  tags: IGitTag[];
  skippedTags: IGitParseTagsOptions['rawTags'][];
}
