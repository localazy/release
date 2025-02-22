import { readFile } from 'node:fs/promises';
import { IPackageJson } from '../../../model/commands/context/i-package-json';
import { logger } from '../../log/logger';

export async function readPackageJson(): Promise<IPackageJson> {
  try {
    logger('Reading package.json');
    const packageJson = JSON.parse(await readFile('./package.json', 'utf8'));
    return {
      name: packageJson.name,
      version: packageJson.version,
    };
  } catch (err: unknown) {
    throw new Error('Error reading package.json', { cause: err });
  }
}
