import { NLogger } from '@lzwme/fe-utils';
import { execSync } from 'node:child_process';

export const logger = new NLogger('ABD');

export async function gitCommit(options = { amend: true, cwd: process.cwd(), ci: null as boolean | null }) {
  const { execSync } = require('node:child_process');
  const { amend = true, cwd = process.cwd(), ci } = options;
  const changes = execSync('git status --short', { encoding: 'utf8', cwd: cwd }).trim(); // --untracked-files=no
  const isGitHubCi = ci || (process.env.GITHUB_CI || process.env.SYNC) != null;

  if (changes.length > 5) {
    logger.info('[gitCommit]Changes:\n', changes);
    const cmds = [
      isGitHubCi ? `git config user.name "github-actions[bot]"` : '',
      isGitHubCi ? `git config user.email "41898282+github-actions[bot]@users.noreply.github.com"` : '',
      `git add --all`,
      `git commit ${amend ? '--amend' : ''} -m "Updated at ${new Date().toISOString()}"`,
      `git push -f`,
    ];

    for (const cmd of cmds) cmd && execSync(cmd, { encoding: 'utf8', maxBuffer: 1024 * 1024 * 100, cwd: cwd });
  } else {
    logger.info('[gitCommit]Not Updated');
  }
}

export const getGitRemoteUrl = (cwd = process.cwd()) => execSync('git config --get remote.origin.url', { encoding: 'utf8', cwd }).trim();
