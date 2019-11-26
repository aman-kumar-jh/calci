import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import KeyPadComponent from "./components/KeyPadComponent.js";
import store from "./store/store";
import ResultComponent from "./components/finalValue.js";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ResultComponent />
        <KeyPadComponent />
      </div>
    </Provider>
  );
}

export default App;
