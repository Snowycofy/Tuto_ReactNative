import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Search from './Components/Search';
import Navigation from './Navigation/Navigation'
import { Provider } from 'react-redux'
import Store from './Store/configureStore'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react';
import codePush from "react-native-code-push";

class App extends React.Component {
  render() {
    let persistor = persistStore(Store)
    return (
      <Provider store={Store}>
        <PersistGate persistor={persistor}>
          <Navigation/>
        </PersistGate>
      </Provider>

    )
  }
}


MyApp = codePush(App)

export default MyApp

