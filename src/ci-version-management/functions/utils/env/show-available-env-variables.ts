import { logger } from '../../log/logger';

export function showAvailableEnvVariables() {
  Object.keys(process.env)
    // .filter((key) => key.startsWith('GITHUB_'))
    .forEach((key) => logger(`${key}: ${process.env[key]}`));
}
