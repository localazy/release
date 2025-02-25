import { OctokitTag } from '../../model/octokit/octokit-tag';
import { ICreateOctokitTagOptions } from '../../model/octokit/i-create-octokit-tag-options';

export function createOctokitTag({ name }: ICreateOctokitTagOptions): OctokitTag {
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
