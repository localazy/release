import psList, { ProcessDescriptor } from 'ps-list';
import * as core from '@actions/core';

const workspace: string = process.env.GITHUB_WORKSPACE || '';

export const terminateOrphans = async (): Promise<void> => {
  const processes: ProcessDescriptor[] = await psList();

  const cypressProcesses: ProcessDescriptor[] = processes.filter(
    (p: ProcessDescriptor) => p.cmd?.includes('/Cypress/Cypress') && p.cmd.includes('--run-project')
  );
  const cypressOrphans: ProcessDescriptor[] = cypressProcesses.filter(
    (p: ProcessDescriptor) => p.cmd?.includes(`--run-project ${workspace}`)
  );
  const chromeProcesses: ProcessDescriptor[] = processes.filter(
    (p: ProcessDescriptor) => p.cmd?.includes('/chrome/chrome')
  );
  const chromeOrphans: ProcessDescriptor[] = cypressProcesses.length === 0 ? [...chromeProcesses] : [];

  core.startGroup(`Cypress processes: ${cypressProcesses.length}`);
  cypressProcesses.forEach((p: ProcessDescriptor): void => {
    console.log(`${p.pid} ${p.cmd}`);
  });
  core.endGroup();

  core.startGroup(`Cypress orphans: ${cypressOrphans.length}`);
  cypressOrphans.forEach((p: ProcessDescriptor): void => {
    console.log(`${p.pid} ${p.cmd}`);
  });
  core.endGroup();

  core.startGroup(`Chrome processes: ${chromeProcesses.length}`);
  chromeProcesses.forEach((p: ProcessDescriptor): void => {
    console.log(`${p.pid} ${p.cmd}`);
  });
  core.endGroup();

  core.startGroup(`Chrome orphans: ${chromeOrphans.length}`);
  chromeOrphans.forEach((p: ProcessDescriptor): void => {
    console.log(`${p.pid} ${p.cmd}`);
  });
  core.endGroup();

  cypressOrphans.forEach((cypressOrphan: ProcessDescriptor): void => {
    chromeProcesses
      .filter((p: ProcessDescriptor) => p.cmd?.includes(`run-${cypressOrphan.pid}`))
      .forEach((p: ProcessDescriptor): void => {
        console.log(`Killing Chrome process ${p.pid} ${p.cmd}\n`);
        process.kill(p.pid, 'SIGKILL');
      });

    console.log(`Killing Cypress process ${cypressOrphan.pid} ${cypressOrphan.cmd}\n`);
    process.kill(cypressOrphan.pid, 'SIGKILL');
  });

  chromeOrphans.forEach((chromeOrphan: ProcessDescriptor): void => {
    console.log(`Killing Chrome process ${chromeOrphan.pid} ${chromeOrphan.cmd}\n`);
    process.kill(chromeOrphan.pid, 'SIGKILL');
  });
};
