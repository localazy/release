import { Octokit } from '@octokit/rest';
import { ICreateOctokitInstanceOptions } from '../../../model/octokit/api/i-create-octokit-instance-options';

export function createOctokitInstance({ env: { token } }: ICreateOctokitInstanceOptions): Octokit {
  try {
    return new Octokit({ auth: token });
  } catch (err: unknown) {
    throw new Error('Error creating Octokit instance', { cause: err });
  }
}
