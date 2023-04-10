import { task } from 'hereby';
import { buildProject } from './scripts/build/project.mjs';
import { memoize } from './scripts/build/utils.mjs';

export const buildSrc = task({
    name: 'buildSrc',
    description: 'Builds the src directory',
    dependencies: [],
    run: buildProject('src'),
});

