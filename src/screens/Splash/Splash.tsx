import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useToast } from 'react-native-toast-notifications';

export const SplashPage = () => {

  const toast = useToast()
  const navigation = useNavigation()

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home' as never)
    }, 4000)
  })

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.text}>Hi! Welcome to Patiently</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000'
  },
  section: {
    alignItems: 'center',
    // position: 'absolute',
    // bottom: 28,
  },
  text: {
    color: '#000',
    // fontFamily: 'Poppins',
    fontSize: 20,
    lineHeight: 24,
    textTransform: 'lowercase',
  },
});
