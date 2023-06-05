/**
 * @format
 */
import React from "react";
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import store from './Store';
import InternetConnectionAlert from "react-native-internet-connection-alert";

    
   
const AppRedux = () => (
    <InternetConnectionAlert>
    <Provider store={store}>
        <React.StrictMode>
        <App />
        </React.StrictMode>
    </Provider>
    </InternetConnectionAlert>
)
AppRegistry.registerComponent(appName, () => AppRedux);

