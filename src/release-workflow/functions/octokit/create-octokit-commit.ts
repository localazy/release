import { OctokitCommit } from '../../model/octokit/octokit-commit';
import { ICreateOctokitCommitOptions } from '../../model/octokit/i-create-octokit-commit-options';

export function createOctokitCommit({ sha, message, url }: ICreateOctokitCommitOptions): OctokitCommit {
  return {
    sha,
    node_id: '',
    commit: {
      author: {
        name: '',
        email: '',
      },
      committer: {
        name: '',
        email: '',
      },
      message,
      tree: {
        url: '',
        sha: '',
      },
      url,
      comment_count: 0,
      verification: {
        verified: false,
        reason: '',
        signature: '',
        payload: '',
      },
    },
    url: '',
    html_url: '',
    comments_url: '',
    author: {
      login: '',
      id: 0,
      node_id: '',
      avatar_url: '',
      gravatar_id: '',
      url: '',
      html_url: '',
      followers_url: '',
      following_url: '',
      gists_url: '',
      starred_url: '',
      subscriptions_url: '',
      organizations_url: '',
      repos_url: '',
      events_url: '',
      received_events_url: '',
      type: '',
      user_view_type: '',
      site_admin: false,
    },
    committer: {
      login: '',
      id: 0,
      node_id: '',
      avatar_url: '',
      gravatar_id: '',
      url: '',
      html_url: '',
      followers_url: '',
      following_url: '',
      gists_url: '',
      starred_url: '',
      subscriptions_url: '',
      organizations_url: '',
      repos_url: '',
      events_url: '',
      received_events_url: '',
      type: '',
      user_view_type: '',
      site_admin: false,
    },
    parents: [
      {
        sha: '',
        url: '',
        html_url: '',
      },
    ],
  };
}
