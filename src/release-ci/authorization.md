# GitHub Authorization

Create a fine-grained personal access token for GitHub Actions to use. This token will be used to authenticate the
GitHub Actions workflow with the GitHub API.

Go to [GitHub PAT Settings](https://github.com/settings/personal-access-tokens/new) and create a new token with the
following configuration:

### Resource owner

- Localazy

### Repository access

- All repositories

### Permissions

- Actions
  - Read-only
- ParsedCommitType statuses
  - Read-only
- Contents
  - Read-only
- Custom properties
  - Read-only
- Dependabot alerts
  - Read-only
- Dependabot secrets
  - Read-only
- Deployments
  - Read-only
- Metadata
  - Read-only
- Pages
  - Read-only
- Pull requests
  - Read-only

Store the token in the [`.env`](../../.env) file in the root of the repository:

```dotenv
GITHUB_TOKEN=ghp_...
```
