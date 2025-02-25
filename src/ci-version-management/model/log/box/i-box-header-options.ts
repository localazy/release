import { ChalkInstance } from 'chalk';

export type IBoxHeaderOptions = {
  text: string;
  boxWidth: number;
  theme: {
    text: ChalkInstance;
  };
};
