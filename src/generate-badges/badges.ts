import { badgen, BadgenOptions } from 'badgen';
import { filesize } from 'filesize';
import { existsSync, readFileSync } from 'node:fs';
import { outputFileSync } from 'fs-extra';
import { resolve } from 'node:path';
import * as core from '@actions/core';

export type Badge = BadgenOptions & {
  fileName?: string;
};

export type BadgesConfig = {
  dir: string;
  files: Badge[]
}

export type BadgesColors = {
  [K: string]: string;
}

const colors: BadgesColors = {
  primary: '066fef',
  green: '43b816',
  yellow: 'ffbb33',
  orange: 'ff9900',
  red: 'e05d44',
  grey: '555555'
};

const icons: { [K: string]: string } = {
  npm: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><path d="M0 0h40v40H0V0z" fill="#cb0000"/><path fill="#fff" d="M7 7h26v26h-7V14h-6v19H7z"/></svg>`,
  speed: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="1 1 22 22" fill="#43b816"><path d="M19.46 10a1 1 0 0 0-.07 1 7.55 7.55 0 0 1 .52 1.81 8 8 0 0 1-.69 4.73 1 1 0 0 1-.89.53H5.68a1 1 0 0 1-.89-.54A8 8 0 0 1 13 6.06a7.69 7.69 0 0 1 2.11.56 1 1 0 0 0 1-.07 1 1 0 0 0-.17-1.76A10 10 0 0 0 3.35 19a2 2 0 0 0 1.72 1h13.85a2 2 0 0 0 1.74-1 10 10 0 0 0 .55-8.89 1 1 0 0 0-1.75-.11" /><path d="M10.59 12.59a2 2 0 0 0 2.83 2.83l5.66-8.49z" /></svg>`,
  vitest: `<svg xmlns="http://www.w3.org/2000/svg" fill="#43b816" viewBox="0 0 24 24"><path d="M13.74024 1.05293a.49504.49504 0 0 0-.1569.02512.49338.49338 0 0 0-.25056.1876L7.59513 9.56159a.4895.4895 0 0 0-.08373.22327.48846.48846 0 0 0 .03163.23629.4893.4893 0 0 0 .13985.19319.4927.4927 0 0 0 .2149.10481l3.70685.78609-.22947 4.58007a.48834.48834 0 0 0 .08466.30017.49205.49205 0 0 0 .24931.18854c.10157.03398.21174.03444.3135.00064a.49387.49387 0 0 0 .25056-.18761l5.73735-8.29594a.4884.4884 0 0 0 .08404-.22327c.009-.08015-.0016-.16137-.03163-.23629a.48835.48835 0 0 0-.13985-.19319.49318.49318 0 0 0-.2149-.1048l-3.70686-.7861.22947-4.58008a.48802.48802 0 0 0-.08466-.30017.4913.4913 0 0 0-.24931-.18853.49439.49439 0 0 0-.1566-.02574zM1.15697 9.78795c-.30647.0012-.60009.12378-.81679.34048a1.16107 1.16107 0 0 0-.34017.81648 1.162 1.162 0 0 0 .33366.81957l10.84241 10.8421a1.15762 1.15762 0 0 0 .37677.25211 1.1583 1.1583 0 0 0 .44467.08838c.00084 0 .0016-.00031.0025-.00031.00073 0 .0014.00031.0022.00031a1.15827 1.15827 0 0 0 .44467-.08838 1.15731 1.15731 0 0 0 .37677-.2521l10.84236-10.8421a1.16272 1.16272 0 0 0 .33397-.81958c-.0013-.30647-.12376-.59976-.34048-.81648a1.1616 1.1616 0 0 0-.81679-.34048 1.16114 1.16114 0 0 0-.81926.33366l-5.4012 5.4009c-.0078.0074-.01718.01255-.02482.02015L12 20.14011l-4.59776-4.59745c-.0074-.0074-.01659-.01238-.02419-.01954l-5.4015-5.40151a1.162 1.162 0 0 0-.81958-.33366Z"/></svg>`
};

const readConfig = (configPath: string = '.badges.json') => {
  const path: string = resolve(configPath);

  if (!existsSync(path)) {
    throw new Error(`Missing badges.json`);
  }

  const content: string = readFileSync(path, 'utf-8');

  return updateConfig(path, JSON.parse(content));
};

const updateConfig = (path: string, config: BadgesConfig): BadgesConfig => {
  const updatedConfig: BadgesConfig = {
    ...config,
    files: config.files.map((badge: Badge) => {
      let status: string;

      switch (badge.fileName) {
        case 'size.svg':
          status = core.getInput('size') || '';
          break;
        case 'coverage.svg':
          status = core.getInput('coverage') || '';
          break;
        case 'version.svg':
          status = core.getInput('version') || '';
          break;
        case 'license.svg':
          status = core.getInput('license') || '';
          break;
        default:
          status = badge.status;
      }

      return {
        ...badge,
        status
      };
    })
  };

  const json: string = JSON.stringify(updatedConfig, null, 2);

  outputFileSync(path, `${json}\n`);

  return updatedConfig;
};

const badgeFactory = (badge: Badge): Badge => {
  let status: string;

  if (badge.fileName === 'size.svg') {
    status = filesize(parseFloat(badge.status));
  } else if (badge.fileName === 'coverage.svg') {
    status = `${parseFloat(badge.status)}%`;
  } else {
    status = badge.status || '';
  }

  let color: string;

  if (badge.fileName === 'coverage.svg') {
    color = getCoverageColor(parseFloat(badge.status));
  } else if (badge.color) {
    color = badge.color;
  } else {
    color = colors.primary;
  }

  return ({
    fileName: badge.fileName || '',
    status,
    subject: badge.subject || '',
    color,
    label: badge.label || '',
    labelColor: badge.labelColor || colors.grey,
    style: badge.style || 'classic',
    icon: getIcon(badge.icon || ''),
    iconWidth: badge.iconWidth || 13,
    scale: badge.scale || 1
  });
};

const resolveConfig = (): BadgesConfig => {
  const config: BadgesConfig = readConfig();

  return ({
    ...config,
    files: config.files.map((badge: Badge) => badgeFactory(badge))
  });
};

const getCoverageColor = (coverage: number) => {
  return coverage > 90 && colors.green
    || coverage > 70 && colors.yellow
    || coverage > 50 && colors.orange
    || colors.red;
};

const getIcon = (icon: string): string | undefined => {
  switch (icon) {
    case 'npm':
      return getBase64(icons.npm);
    case 'speed':
      return getBase64(icons.speed);
    case 'vitest':
      return getBase64(icons.vitest);
    default:
      return undefined;
  }
};

const getBase64 = (string: string): string => {
  const base64: string = Buffer.from(string).toString('base64');
  return `data:image/svg+xml;base64,${base64}`;
};

export const generateBadges = (): void => {
  const config: BadgesConfig = resolveConfig();
  const path: string = config.dir.endsWith('/') ? config.dir : `${config.dir}/`;

  config.files.forEach(({ fileName, ...badgenOptions }: Badge): void => {
    const svg: string = badgen(badgenOptions);
    outputFileSync(`${path}${fileName}`, svg);
  });
};
