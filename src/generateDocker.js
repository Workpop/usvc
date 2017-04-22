import { generateAndWrite, readConfig } from './generate';
import { each, get, map, omit } from 'lodash';
const path = require('path');
const fs = require('fs');

const config = readConfig();
console.log('Loading configuration from .usvc');

// generate the docker file
console.log('Generating Dockerfile...');
generateAndWrite('dockerfile', config, 'Dockerfile');
console.log('Created Dockerfile.');

console.log('Generating docker compose configurations...')
const environmentConfigs = map(get(config, 'environments'), (environment) => {
  return {
    ...omit(config, 'environments'),
    environment,
  };
});

each(environmentConfigs, (environmentConfig) => {
  const environmentName = get(environmentConfig, 'environment.name');
  const environmentType = get(environmentConfig, 'environment.type');

  console.log(`Generating configuration for environment ${environmentName}...`);
  const outfile = `docker-compose-${environmentName}.yml`;
  generateAndWrite(`docker-compose-${environmentType}`, environmentConfig, outfile);
  console.log(`Created ${outfile}`);
});
