import { Octokit } from '@octokit/rest';
import { ICreateOctokitInstanceOptions } from '../../../model/octokit/api/i-create-octokit-instance-options';

export function createOctokitInstance({ token }: ICreateOctokitInstanceOptions): Octokit {
  return new Octokit({ auth: token });
}
