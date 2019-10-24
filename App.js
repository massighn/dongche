import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Rootstack from "./src/router";
import Reducer from "./src/redux/reducer";

const store = createStore(Reducer);

const App = () => {
  return (
    <Provider store={store}>
      <Rootstack />
    </Provider>
  );
};

export default App;
