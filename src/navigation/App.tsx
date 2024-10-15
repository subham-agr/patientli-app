import React, { useEffect } from 'react';
import { NativeViewGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler'; 'react-native-gesture-handler';
import { Provider as PaperProvider } from 'react-native-paper';
import { QueryClient, QueryClientProvider } from 'react-query';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar, SafeAreaView } from 'react-native';
import AppScreen from './Screen';
import { ToastProvider } from 'react-native-toast-notifications';
import 'react-native-gesture-handler';

const queryClient = new QueryClient();

export default function AppNavigation() {

  return (
    <PaperProvider>
      <QueryClientProvider client={queryClient}>
        <ToastProvider
          placement={'top'}
          duration={2000}
          textStyle={{
            fontSize: 12,
            color: '#fff',
          }}
          animationType={'slide-in'}
          successColor={'#00812F'}
          dangerColor={'#D10000'}>
          <NavigationContainer>
            <SafeAreaProvider>
              <SafeAreaView style={{flex: 1, backgroundColor: '#121212'}}>
              <StatusBar barStyle={'light-content'} backgroundColor="#141415" hidden />
              <AppScreen />
              </SafeAreaView>
            </SafeAreaProvider>
          </NavigationContainer>
        </ToastProvider>
      </QueryClientProvider>
    </PaperProvider>
  );
}
