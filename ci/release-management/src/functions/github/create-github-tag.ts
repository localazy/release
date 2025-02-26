import { GithubTagType } from '@/model/github/github-tag-type';
import { ICreateGithubTagOptions } from '@/model/github/i-create-github-tag-options';

export function createGithubTag({ name }: ICreateGithubTagOptions): GithubTagType {
  return {
    name,
    zipball_url: '',
    tarball_url: '',
    commit: {
      sha: '',
      url: '',
    },
    node_id: '',
  };
}
