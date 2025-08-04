// /**
//  * @format
//  */

// import { AppRegistry } from 'react-native';
// import App from './App';
// import { name as appName } from './app.json';

// AppRegistry.registerComponent(appName, () => App);

import { AppRegistry, NativeModules } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

const launchArgs = NativeModules.DetectLaunchArgs
  ? NativeModules.DetectLaunchArgs.getConstants()
  : {};
global.detoxMockMode = launchArgs?.detoxMockMode === true;

AppRegistry.registerComponent(appName, () => App);
