#!/usr/bin/env node
import { get } from 'lodash';
import { readConfig } from './generate';

const shell = require('shelljs');
const config = readConfig();

const repositoryUrl = get(config, 'dockerImage');
const pushCmd = `docker push ${repositoryUrl}:latest`;
console.log(`Running command: ${pushCmd}`);
if (shell.exec(`${pushCmd}`).code !== 0) {
  shell.echo('Error: docker push command failed');
  shell.exit(1);
}
