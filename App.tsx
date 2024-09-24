import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import BaseNavigator from './src/navigators/BaseNavigator';
import {RootSiblingParent} from 'react-native-root-siblings';
import ErrorBoundary from 'react-native-error-boundary';
import {StatusBar} from 'react-native';
import ErrorScreen from './src/screens/ErrorScreen';

const App: React.FC = () => {
  const CustomFallback = (props: {error: Error; resetError: () => void}) => (
    <ErrorScreen resetError={props.resetError} />
  );

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootSiblingParent>
          <ErrorBoundary FallbackComponent={CustomFallback}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <BaseNavigator />
          </ErrorBoundary>
        </RootSiblingParent>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
