/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import fsExtra from 'fs-extra';
import path from 'path';

const __dirname = path.resolve();
const libDestPath = path.join(__dirname, 'static', 'webcomponent-examples', 'lib');

const ix_path = path.join(__dirname, '..', 'core');
const ix_dest_path = path.join(libDestPath, 'ix');

const ix_aggrid_path = path.join(__dirname, '..', 'aggrid');
const ix_aggrid_dest_path = path.join(libDestPath, 'ix-aggrid');

const icon_path = path.join(__dirname, '../../', 'node_modules', '@siemens/core-ui-icons');
const icon_dest_path = path.join(libDestPath, 'core-ui-icons');

function filter(fileName) {
  return !fileName.includes('node_modules');
}

Promise.all([
  fsExtra.copy(ix_path, ix_dest_path, { filter }),
  fsExtra.copy(ix_aggrid_path, ix_aggrid_dest_path, { filter }),
  fsExtra.copy(icon_path, icon_dest_path),
]);
