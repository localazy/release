import { readFile } from 'node:fs/promises';
import { ICommandContext } from '../../../model/commands/context/i-command-context';

export async function readPackageJson(): Promise<ICommandContext['pkg']> {
  try {
    const packageJson = JSON.parse(await readFile('./package.json', 'utf8'));
    return {
      name: packageJson.name,
      version: packageJson.version,
    };
  } catch (error) {
    console.error('Error reading package.json:', error);
    throw error;
  }
}
