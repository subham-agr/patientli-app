import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigation from './src/navigation/App';
import {Main} from './src/screens/Main/Main';
import { QRCode } from './src/screens/QrCode/QrCode';
import AppScreen from './src/navigation/Screen';
import { SplashPage } from './src/screens/Splash/Splash';

export default function App() {
  return (
    <View>
      {/* <AppNavigation /> */}
      <SplashPage />
    </View>
  );
}
