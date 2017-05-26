#!/usr/bin/env node
import { generateAndWrite } from './generate';
import { generateProjectName } from './utils';

const projectName = generateProjectName();
const context = {
  projectName,
};
generateAndWrite('.usvc', context, '.usvc');

console.log('Created default .usvc configuration file.  Update .usvc as needed, then run usvc-generate-docker');
