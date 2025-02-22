import chalk from 'chalk';

chalk.level = 3;

// Box
const boxBorder = chalk.hex('#302d2d');
const boxLabel = chalk.hex('#514b4b');

// Table
const tableTitle = chalk.hex('#e3a72f');
const tableRowBorder = chalk.hex('#302d2d');

// Shell
const shellCommandArrow = chalk.hex('#4a5e75');
const shellCommand = chalk.hex('#67a0d7');
const shellArgs = chalk.hex('#374961');
const shellOutput = chalk.hex('#bbbbbb');
const shellOutputError = chalk.hex('#d33f3f');
const shellNoOutput = chalk.hex('#302d2d');

// Key Value
const key = chalk.hex('#1cacac');
const value = chalk.hex('#e3a72f');

// Status
const success = chalk.hex('#47a447');
const warning = chalk.hex('#f0ad4e');
const error = chalk.hex('#d9534f');

const commitCategory = chalk.hex('#e3a72f');
const commitMessage = chalk.hex('#bbbbbb');

const nextStep = chalk.bold.hex('#345fbd');

export const c = {
  boxBorder,
  boxLabel,
  tableTitle,
  tableRowBorder,
  shellCommandArrow,
  shellCommand,
  shellArgs,
  shellOutput,
  shellOutputError,
  shellNoOutput,
  key,
  value,
  success,
  warning,
  error,
  commitCategory,
  commitMessage,
  nextStep,
};
