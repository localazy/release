import psList, { ProcessDescriptor } from 'ps-list';

const workspace: string = process.env.GITHUB_WORKSPACE || '';

export const terminateOrphans = async (): Promise<void> => {
  const processes: ProcessDescriptor[] = await psList();

  const chromeProcesses: ProcessDescriptor[] = processes.filter(
    (p: ProcessDescriptor) => p.cmd?.includes('/chrome/chrome')
  );
  const cypressProcesses: ProcessDescriptor[] = processes.filter(
    (p: ProcessDescriptor) => p.cmd?.includes('/Cypress/Cypress') && p.cmd.includes('--run-project')
  );
  const cypressOrphans: ProcessDescriptor[] = cypressProcesses.filter(
    (p: ProcessDescriptor) => p.cmd?.includes(`--run-project ${workspace}`)
  );

  console.log('Chrome processes:', chromeProcesses.length);
  console.log('Cypress processes:', cypressProcesses.length);
  console.log('Cypress orphans:', cypressOrphans.length);

  cypressOrphans.forEach((cypressProcess: ProcessDescriptor): void => {
    chromeProcesses
      .filter((chromeProcess: ProcessDescriptor) => chromeProcess.cmd?.includes(`run-${cypressProcess.pid}`))
      .forEach((chromeProcess: ProcessDescriptor): void => {
        console.log(`Killing Chrome process ${chromeProcess.pid} ${chromeProcess.cmd}\n`);
        process.kill(chromeProcess.pid, 'SIGKILL');
      });

    console.log(`Killing Cypress process ${cypressProcess.pid} ${cypressProcess.cmd}\n`);
    process.kill(cypressProcess.pid, 'SIGKILL');
  });
}
