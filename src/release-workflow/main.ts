import { releaseCi } from './release-ci';

releaseCi().catch((error) => console.error('Error in releaseCi:', error));
