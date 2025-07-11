/**
  * Copyright 2025 Adligo Inc / Scott Morgan
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *     http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */
const { spawnSync } = require('child_process');
const IS_WIN = process.platform === "win32";
var npm = 'npm'
if (IS_WIN) {
  npm = 'npm.cmd'
}

function out(cmd, spawnSyncReturns, options) {
  var dir = options.cwd;
  if (dir == undefined) {
    dir = '.';
  }
  console.log('ran: ' + cmd + ' in ' + dir);
  if (options == undefined) {
    console.log('with options: undefined');
  } else {
    console.log('with options: ' + JSON.stringify(options));
  }

  console.log('\tand the spawnSyncReturns had;');

  if (spawnSyncReturns.stderr != undefined) {
    console.log('\tStderr: ' + spawnSyncReturns.stderr);
  }
  if (spawnSyncReturns.stdout != undefined) {
    console.log('\tStdout: ' + spawnSyncReturns.stdout);
  }
  if (spawnSyncReturns.error) {
    console.log('\tError: ' + spawnSyncReturns.error.message);
    if (spawnSyncReturns.error.stack) {
      console.log('\tStack: ' + spawnSyncReturns.error.stack);
    }
  }
  if (spawnSyncReturns.status !== 0 && spawnSyncReturns.status !== null) {
    console.log('\tExit Code: ' + spawnSyncReturns.status);
    process.exit(spawnSyncReturns.status); // Propagate failure from child process
  }
}

/**
 * https://nodejs.org/api/child_process.html#child_processexecfilesyncfile-args-options
 * This is the same as spawnSync we just concatinate the args with spaces.
 * If you get a ENOENT error, this means (No such file or directory).
 * @param options 
 * 	 cwd The current working directory
 * 
 */
function runWith(cmd, args, options) {
  var cc = cmd;
  if (args != undefined) {
    for (var i = 0; i < args.length; i++) {
      cc = cc + ' ' + args[i];
    }
  }
  //Execute fork to GitBash from GitBash
  if (options == undefined) {
    options = new Object();

    var sh = process.env.SHELL;
    if (sh != undefined) {
      options.shell = process.env.SHELL
    }
    console.log('New options, running with shell is ' + options.shell)
  } else {
    var sh = process.env.SHELL;
    if (sh != undefined) {
      options.shell = process.env.SHELL
    }
    console.log('Running with shell is ' + options.shell)
  }

  if (args == undefined) {
    out(cc, spawnSync(cmd, [], options), options);
  } else {
    // fix to 
    // [DEP0190] DeprecationWarning: Passing args to a child process with 
    // shell option true can lead to security vulnerabilities, as the arguments 
    // are not escaped, only concatenated.
    //
    // https://github.com/nodejs/help/issues/5063
    // https://github.com/nodejs/help/issues/5072
    //
    out(cc, spawnSync(cmd, args, options), options);  
    
  }
}


module.exports = runWith;
