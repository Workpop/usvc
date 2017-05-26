import { last } from 'lodash';

export function generateDockerTagFromPackageVersion() {
  const versionNumber = process.env.npm_package_version;
  return versionNumber.replace(/\./g,'_');
}

export function generateProjectName() {
  const packageName = process.env.npm_package_name;
  return last(packageName.replace(/-\./g,'_').split('/'));
}
