const [run1, run2, run3] = require('./runFuns.cjs');
const [getOpts] = require('./setup.cjs');
/**
 * This must be run from the root (aka ..) directory.
 * 
 * 
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
//run('pwd',[], { cwd: 'log2.ts.adligo.org'})
run3('npx',['tsx','src/junitXmlApiTrial.ts'], getOpts('junitXml_tests.tests4j.ts.adligo.org'))