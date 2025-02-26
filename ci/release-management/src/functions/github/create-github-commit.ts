import { GithubCommitType } from '@/model/github/github-commit-type';
import { ICreateGithubCommitOptions } from '@/model/github/i-create-github-commit-options';

export function createGithubCommit({ sha, message, url }: ICreateGithubCommitOptions): GithubCommitType {
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
