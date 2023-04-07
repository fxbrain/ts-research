import { describe, expect, test } from '@jest/globals';
import { GitCommand } from './git_commands.js';

describe('GitCommand', () => {
  const repoPath = '.';

  describe('run', () => {
    it('should execute a Git command and return its output', async () => {
      const git = new GitCommand(repoPath);
      const output = await git.run('rev-list', ['--count', 'HEAD']);
      expect(output).toMatch(/^\d+$/);
    });

    it('should reject with an error if the Git command fails', async () => {
      const git = new GitCommand(repoPath);
      await expect(git.run('invalid-command', [])).rejects.toThrowError();
    });
  });
});
