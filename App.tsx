import React, { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import BaseNavigator from './src/navigators/BaseNavigator';
import { RootSiblingParent } from 'react-native-root-siblings';
import ErrorBoundary from 'react-native-error-boundary';
import { Image, Platform, StatusBar, StyleSheet } from 'react-native';
import ErrorScreen from './src/screens/ErrorScreen';
import { NativeBaseProvider } from 'native-base';
import { LogBox, View, Text } from 'react-native';
import Mapbox from '@rnmapbox/maps';

LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreLogs(['Remote debugger']);
LogBox.ignoreLogs(['In React 18, SSRProvider is not necessary']);
LogBox.ignoreAllLogs();

const mapBoxToken =
  // 'pk.eyJ1Ijoia3Jpc2hpdmVkaWthIiwiYSI6ImNtMXFsajl6MDAxYnQyanF2M2l5NTQ5OGgifQ.qTP2iP7cEySkQ2pCiOVNhQ';
  'pk.eyJ1Ijoia3Jpc2hpdmVkaWthIiwiYSI6ImNsdGQ1MGpsdzAyb2QybG0yeDNheWdheWwifQ.n2SXymzs0FWbxb2XtL22jw'; // default

// Mapbox.setAccessToken(mapBoxToken);
// Mapbox.setConnected(true);

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const CustomFallback = (props: { error: Error; resetError: () => void }) => (
    <ErrorScreen resetError={props.resetError} />
  );

  // useEffect(() => {
  //   Mapbox.setTelemetryEnabled(false);
  // }, []);

  // useEffect(() => {
  //   getPermissions();
  // }, []);

  // const getPermissions = async () => {
  // if (Platform.OS === 'android') {
  //   const isGranted = await Mapbox.requestAndroidLocationPermissions();
  //   setIsLoaded(isGranted);
  // }
  // setIsLoaded(true);
  // };

  if (isLoaded) {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <RootSiblingParent>
            <ErrorBoundary FallbackComponent={CustomFallback}>
              <NativeBaseProvider>
                <StatusBar barStyle="dark-content" backgroundColor="#fff" />
                <BaseNavigator />
              </NativeBaseProvider>
            </ErrorBoundary>
          </RootSiblingParent>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  } else {
    return (
      <View style={styles.splashMain}>
        <StatusBar barStyle="dark-content" backgroundColor="#c1ff72" />
        <Image
          source={require('./assets/logo.png')}
          resizeMode="contain"
          style={styles.logoImg}
        />
        <Text style={styles.logoText}>
          Krishi <Text style={{ color: 'brown' }}>Vedika</Text>
        </Text>
      </View>
    );
  }
};

export default App;

const styles = StyleSheet.create({
  splashMain: {
    flex: 1,
    backgroundColor: '#C1FF72',
    alignItems: 'center',
    paddingTop: '35%',
  },
  logoImg: { height: 300, width: 300 },
  logoText: { fontSize: 40, color: '#334b35', fontWeight: 'bold' },
});
