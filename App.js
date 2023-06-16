import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/Store';
import RootStackScreen from './src/Navigation/RootStackScreen';
import InternetConnectionAlert from "react-native-internet-connection-alert";

export default class App extends Component {
  render() {
    return (
      <>
      {/* for checking internet connection */}
      <InternetConnectionAlert
        onChange={(connectionState) => {
          //console.log("Connection State: ", connectionState);
        }}
      >
        <Provider store={store}>
          <RootStackScreen />
        </Provider>
      </InternetConnectionAlert>
      </>
    );
  }
};