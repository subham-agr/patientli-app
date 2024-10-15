import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useToast } from 'react-native-toast-notifications';
import IconCard from './components/IconCard';

export const Main = () => {

  const toast = useToast()

  return (
    <View style={styles.container}>
      <View></View>
      <View style={styles.section}>
        <IconCard title='Scan Qr' icon={'../../../assets/icons/scan.png'} />
        <IconCard title='Scan Qr' icon={'../../../assets/icons/scan.png'} />
        <IconCard title='Scan Qr' icon={'../../../assets/icons/scan.png'} />
        <IconCard title='Scan Qr' icon={'../../../assets/icons/scan.png'} />
        <IconCard title='Scan Qr' icon={'../../../assets/icons/scan.png'} />
        <IconCard title='Scan Qr' icon={'../../../assets/icons/scan.png'} />
      </View>
      <View style={styles.section}>
        <Text style={styles.header}>Health Tracking</Text>
      </View>
      <View style={styles.footer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212'
  },
  header: {
    color: '#000000',
    fontWeight: 800,
    fontSize: 5
  },
  section: {
    backgroundColor: '#ffffff'
  },
  footer: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 28,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 20,
    lineHeight: 24,
    textTransform: 'lowercase',
  },
});
