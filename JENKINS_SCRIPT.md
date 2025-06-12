
export BUN_HOME=/opt/bun
export JAVA_HOME=/opt/jdk-24.0.1
export GRADLE_HOME=/opt/gradle-8.14
export NODE_HOME=/opt/node-v24.2.0-linux-x64

export PATH=$PATH:$JAVA_HOME/bin:$BUN_HOME/bin:$GRADLE_HOME/bin:$NODE_HOME/bin
which node
node -v
which slink
slink -v
which bun
bun -v
echo nodejs is `node -v`
echo npm is `npm -v`

export COMMON_NODE_MODULES=/var/jenkins_home/workspace/fab_group_deps.ts.adligo.org/fab_group_deps.ts.adligo.org/node_modules
export CLI_NODE_MODULE_SLINK=$COMMON_NODE_MODULES
export LOG2_NODE_MODULE_SLINK=$COMMON_NODE_MODULES
export FAB_NODE_MODULE_SLINK=$COMMON_NODE_MODULES
export TESTS4TS_NODE_MODULE_SLINK=$COMMON_NODE_MODULES
export JUNIT_XML_NODE_MODULE_SLINK=$COMMON_NODE_MODULES
export SLINK_NODE_MODULE_SLINK=$COMMON_NODE_MODULES


echo $BUILD_NUMBER
pwd
mkdir $BUILD_NUMBER
cd $BUILD_NUMBER
git clone https://github.com/adligo/fab_group.ts.adligo.org
cd fab_group.ts.adligo.org

export USHELL=/usr/bin/bash
npm run git-clone
npm run setup
npm run build
npm run tests

## then publish JUnit reports
$BUILD_NUMBER/fab_group.ts.adligo.org/depot/test-results/*.xml