import { spawn } from 'child_process';

export class GitCommand {
  private readonly repoPath: string;

  constructor(repoPath: string) {
    this.repoPath = repoPath;
  }

  async run(command: string, args: string[]): Promise<string> {
    return new Promise((resolve, reject) => {
      const proc = spawn('git', [command, ...args], { cwd: this.repoPath });
      let stdout = '';
      let stderr = '';

      proc.stdout.on('data', (data: Buffer) => {
        stdout += data.toString();
      });

      proc.stderr.on('data', (data: Buffer) => {
        stderr += data.toString();
      });

      proc.on('error', (err: Error) => {
        reject(err);
      });

      proc.on('close', (code: number) => {
        if (code !== 0) {
          reject(
            new Error(
              `Git command "${command}" failed with code ${code}: ${stderr}`,
            ),
          );
        } else {
          resolve(stdout.trim());
        }
      });
    });
  }
}
