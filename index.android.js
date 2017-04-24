import { AppRegistry, UIManager } from 'react-native';
import App from './src/app';

// this line is needed to get animation to work on Android. 
// Not needed for iOS, thus it only appears in index.android.js
UIManager.setLayoutAnimationEnabledExperimental(true);
AppRegistry.registerComponent('tech_stack', () => App);
