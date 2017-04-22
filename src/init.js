import { generateAndWrite } from './generate';
generateAndWrite('.usvc', null, '.usvc');

console.log('Created default .usvc configuration file.  Update .usvc as needed, then run usvc-generate-docker');
