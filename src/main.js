const core = require('@actions/core');
const github = require('@actions/github');
const { Octokit } = require('@octokit/rest');
const token = core.getInput('token');
const { dealStringToArr } = require('actions-util');
const octokit = new Octokit({ auth: `token ${token}` });
const context = github.context;

async function run() {
  try {
    let owner, repo;
    if (core.getInput('repo')) {
      owner = core.getInput('repo').split('/')[0];
      repo = core.getInput('repo').split('/')[1];
    } else {
      owner = context.repo.owner;
      repo = context.repo.repo;
    }

    const actions = dealStringToArr(core.getInput('actions'));

    for await (let action of actions) {
      if (action == 'star') {
        await octokit.activity.starRepoForAuthenticatedUser({
          owner,
          repo,
        });
        core.info(`[Action: star][${owner}/${repo}] success!`);
      } else if (action == 'unstar') {
        await octokit.activity.unstarRepoForAuthenticatedUser({
          owner,
          repo,
        });
        core.info(`[Action: unstar][${owner}/${repo}] success!`);
      } else {
        core.setFailed(`The action [${action} is not support!]`);
      }
    }

    // return new star
    const { data: nowRepo } = await octokit.repos.get({
      owner,
      repo,
    });

    core.setOutput('star-count', nowRepo.stargazers_count);
    core.info(`[Actions: query start][${owner}/${repo}][${nowRepo.stargazers_count}]`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
