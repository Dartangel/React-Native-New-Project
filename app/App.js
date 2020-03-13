import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar ,SafeAreaView} from 'react-native';
import SwitchNavigator from './modules/navigation/switchNavigator';
import { store, persistor } from './modules/redux/store';
import { colors } from './services/constants';
import { PersistGate } from 'redux-persist/es/integration/react';

export default function App() {
  return (
    <SafeAreaView style={{color:colors.mainBackground}}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar backgroundColor={colors.mainBackground} />
          <SwitchNavigator />
        </PersistGate>
      </Provider>
    </SafeAreaView>
  );
};