import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ScrollView } from 'react-native';
import { Button, List, Modal, Portal, RadioButton } from 'react-native-paper';
import { Camera, CameraType } from 'expo-camera';
import { BarCodeScanner } from 'expo-barcode-scanner';

export const QRCode = () => {
  const [hasPermission, setHasPermission] = useState(false);

  const [scanned, setScanned] = useState(false);

  const [patientId, setPatientId] = useState('')

  const [device, setDevice] = useState<CameraType>('back')

  const handleScan = ({ type, data }) => {
    setScanned(true)
    setPatientId(data)
  };

  const checkPermission = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    setHasPermission(status === 'granted')
  };

  useEffect(() => {
    checkPermission()
  }, []);

  return (
    <View
      style={styles.container}>
      <View
        style={[
          styles.section,
          {
            height: 300,
            backgroundColor: 'black',
          },
        ]}>
        {device != null && hasPermission && (
          <>
            <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleScan}
        barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
        style={StyleSheet.absoluteFillObject}
      />
            <Text style={styles.barcodeTextURL}>{patientId}</Text>
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#121212'
  },
  section: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  barcodeTextURL: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});
