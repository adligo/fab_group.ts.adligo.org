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
  * limitations under the License.l
  */

class Project {
  name;
  buildable = false;
  hasTestsInternal = false;

  constructor(name, buildable, hasTests) {
    this.name = name;
    if (buildable != undefined) {
      this.buildable = buildable;
    }
    if (hasTests != undefined) {
      this.hasTestsInternal = hasTests;
    }
  }

  getName() { return this.name; }
  isBuildable() { return this.buildable; }
  hasTests() { return this.hasTestsInternal; }

}
projects = [new Project('i_obj.ts.adligo.org', true), new Project('i_strings.ts.adligo.org', true), new Project('i_io.ts.adligo.org', true),
new Project('i_tests4ts.ts.adligo.org', true),new Project('i_log2.ts.adligo.org', true),
new Project('i_cli.ts.adligo.org', true),new Project('i_fab_core.ts.adligo.org', true),
// end of interface projects
// TODO put code in the following projects that are turned off with comment lines like;
// true, true), or true),
new Project('type-guards.ts.adligo.org',true),
new Project('cli.ts.adligo.org'), // true),
new Project('log2.ts.adligo.org', true),
//build tests4ts before any testing library
new Project('tests4ts.ts.adligo.org', true), 
//build the JUnit xml generator before any of the testing libraries
new Project('junit-xml-tests4j.ts.adligo.org', true), 
new Project('type-guards_tests.ts.adligo.org', true, true), 
new Project('cli_tests.ts.adligo.org'), // true),
new Project('log2_tests.ts.adligo.org', true, true),// true),
new Project('tests4ts_tests.ts.adligo.org', true, true), //, true, true
new Project('junit-xml-tests4j_tests.ts.adligo.org', true, true),
new Project('fab_core.ts.adligo.org'), // true), 
new Project('fab_core_tests.ts.adligo.org'), // true, true),
new Project('fab.ts.adligo.org'), //new Project('fab.ts.adligo.org', true), 
new Project('fab_tests.ts.adligo.org') //true, true)
];

module.exports = [Project, projects];