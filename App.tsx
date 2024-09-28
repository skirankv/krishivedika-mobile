import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import BaseNavigator from './src/navigators/BaseNavigator';
import { RootSiblingParent } from 'react-native-root-siblings';
import ErrorBoundary from 'react-native-error-boundary';
import { StatusBar } from 'react-native';
import ErrorScreen from './src/screens/ErrorScreen';
import { NativeBaseProvider } from 'native-base';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreLogs(['Remote debugger']);
LogBox.ignoreLogs(['In React 18, SSRProvider is not necessary']);
LogBox.ignoreAllLogs();

const App: React.FC = () => {
  const CustomFallback = (props: { error: Error; resetError: () => void }) => (
    <ErrorScreen resetError={props.resetError} />
  );

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
};

export default App;
