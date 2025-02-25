export async function createCommandContext() {
  // const { isSimulatedWorkflowRun } = env;
  // const octokit = createOctokitInstance({ env });
  // GitHub Context
  // const { sha, actor, action, workflow, eventName, runNumber, job, payload: event } = ctx;
  // let {
  //   runId,
  //   repo: { owner, repo },
  //   ref: branch,
  // } = ctx;
  //
  // // Simulated Workflow Run
  // if (isSimulatedWorkflowRun) {
  //   runId = 9271808588;
  //   owner = 'localazy';
  //   repo = 'ci-sandbox';
  //   branch = 'test_pr1';
  // }
  // if (isSimulatedWorkflowRun) {
  //   latestTag = data.latestTag;
  //   newCommits = data.commits;
  //   packageJson = data.packageJson;
  // }
  // let newCommits;
  // newCommits = await fetchNewCommits({ octokit, owner, repo, branch, latestTag });
  // newCommits = parseCommits({ commits: newCommits });
}
