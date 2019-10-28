import React from 'react';
import {Provider} from 'react-redux';
//import {createStore} from 'redux';
import storeCreate from './src/redux/persist';
import Rootstack from './src/router';
import Reducer from './src/redux/reducer';
import {PersistGate} from 'redux-persist/integration/react';

const store = storeCreate();

const App = () => {
  const {persistor} = store;
  return (
    <Provider store={store.store}>
      <PersistGate loading={null} persistor={persistor}>
        <Rootstack />
      </PersistGate>
    </Provider>
  );
};

export default App;
