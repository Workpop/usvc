#!/usr/bin/env node
import { get } from 'lodash';
import { readConfig } from './generate';

const shell = require('shelljs');
const config = readConfig();

const projectName = get(config, 'projectName');
const buildCmd = `docker build -t ${projectName} .`;
console.log(`Running command: ${buildCmd}`);
if (shell.exec(`${buildCmd}`).code !== 0) {
  shell.echo('Error: docker build command failed');
  shell.exit(1);
}

const repositoryUrl = get(config, 'dockerImage');
const tagCmd = `docker tag ${projectName}:latest ${repositoryUrl}:latest`;
console.log(`Running command: ${tagCmd}`);
if (shell.exec(`${tagCmd}`).code !== 0) {
  shell.echo('Error: docker tag command failed');
  shell.exit(1);
}
