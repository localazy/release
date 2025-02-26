import { Stability } from '@/const/stability';

export type VersionStabilityType = (typeof Stability)[keyof typeof Stability];
