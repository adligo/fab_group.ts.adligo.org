const [run1, run2, run3] = require('./buildSrc/runFuns.cjs');
/**
  * Copyright 2023 Adligo Inc / Scott Morgan
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
var base =  'https://github.com/';
for (var i=0; i < process.argv; i++) {
  let arg = argv[i];
  if (arg == '--ssh') {
    base = 'git@github.com:'
  }
}

run2('git',['clone',base + 'adligo/cli.ts.adligo.org.git']);
run2('git',['clone',base + 'adligo/fab.ts.adligo.org.git']);
run2('git',['clone',base + 'adligo/fab_core.ts.adligo.org.git']);
run2('git',['clone',base + 'adligo/fab_dts_poc.ts.adligo.org.git']);
run2('git',['clone',base + 'adligo/log2.ts.adligo.org.git']);
run2('git',['clone',base + 'adligo/log2_tests.ts.adligo.org.git']);
run2('git',['clone',base + 'adligo/junitXml.tests4j.ts.adligo.org.git']);
run2('git',['clone',base + 'adligo/i_log2.ts.adligo.org.git']);
run2('git',['clone',base + 'adligo/i_io.ts.adligo.org.git']);
run2('git',['clone',base + 'adligo/i_fab.ts.adligo.org.git']);
run2('git',['clone',base + 'adligo/tests4j.ts.adligo.org.git']);