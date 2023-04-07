/* eslint-disable no-console */
import { GitCommand } from './git_commands.js';

const git = new GitCommand('.');
git
  .run('status', [])
  .then((output) => {
    console.log(output);
  })
  .catch((err) => {
    console.error(err);
  });

const commitCount = await git.run('rev-list', ['--count', 'HEAD', '^main']);
console.log('Total commits: ' + commitCount);
