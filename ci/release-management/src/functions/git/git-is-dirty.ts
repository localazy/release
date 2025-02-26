// export async function status(options?: string[]): Promise<string> {
//   const args = ['status'];
//   if (options) {
//     args.push(...options);
//   }
//   const output = await this.exec(args);
//   return output.stdout.trim();
// }
//
// export async function hasDiff(options?: string[]): Promise<boolean> {
//   const args = ['diff', '--quiet'];
//   if (options) {
//     args.push(...options);
//   }
//   const output = await this.exec(args, { allowAllExitCodes: true });
//   return output.exitCode === 1;
// }
//
// export async function isDirty(untracked: boolean, pathspec?: string[]): Promise<boolean> {
//   const pathspecArgs = pathspec ? ['--', ...pathspec] : [];
//   // Check untracked changes
//   const sargs = ['--porcelain', '-unormal'];
//   sargs.push(...pathspecArgs);
//   if (untracked && (await status(sargs))) {
//     return true;
//   }
//
//   // Check working index changes
//   if (await hasDiff(pathspecArgs)) {
//     return true;
//   }
//
//   // Check staged changes
//   const dargs = ['--staged'];
//   dargs.push(...pathspecArgs);
//   if (await hasDiff(dargs)) {
//     return true;
//   }
//   return false;
// }
