import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TransitionSpecs } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { useFlowStore } from '../store/flow-store';
import { FLOW_STAGES } from '../constant/flow';
import { Main } from '../screens/Main/Main';
import { View } from 'react-native';
import { SplashPage } from '../screens/Splash/Splash';
import { QRCode } from '../screens/QrCode/QrCode';

const Stack = createStackNavigator();

export default function AppScreen() {
  const navigation = useNavigation();
  const flow = useFlowStore(state => state.flow);
  const setFlow = useFlowStore(state => state.setFlow)

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: ({ current: { progress } }) => {
          return {
            cardStyle: {
              opacity: progress,
            },
          };
        },
        transitionSpec: {
          open: TransitionSpecs.TransitionIOSSpec,
          close: TransitionSpecs.TransitionIOSSpec,
        },
      }}>
      {flow == FLOW_STAGES.SPLASH ? (
        <Stack.Screen
          name="Splash"
          component={SplashPage}
          options={{
            headerShown: false,
          }}
        />
      ) : flow == FLOW_STAGES.MAIN ? (
        <>
          <Stack.Screen name="Home" component={Main} options={{
              headerShown: false,
            }} />
          <Stack.Screen name="Scanner" component={QRCode} options={{
              headerShown: false,
            }} />
        </>
      ) : (
        <View></View>
      )}
    </Stack.Navigator>
  );
}
