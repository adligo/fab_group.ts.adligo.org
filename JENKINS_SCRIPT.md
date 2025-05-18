pwd
export JAVA_HOME=/opt/jdk-24.0.1
export GRADLE_HOME=/opt/gradle-8.14
echo JAVA_HOME is $JAVA_HOME
export PATH=$JAVA_HOME/bin:$PATH:$GRADLE_HOME/bin
which java
java --version
which gradle
gradle --version
echo nodejs is `nodejs -v`
echo npm is `npm -v`
echo $BUILD_NUMBER
pwd
mkdir $BUILD_NUMBER
cd $BUILD_NUMBER
git clone https://github.com/adligo/fab_group.ts.adligo.org
cd fab_group.ts.adligo.org
npm run git-clone
npm run setup
npm run build