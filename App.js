import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InfoItems from './src/containers/InfoItems';
import {applyMiddleware, compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './src/store/reducer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));


export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <InfoItems/>
            </View>
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
