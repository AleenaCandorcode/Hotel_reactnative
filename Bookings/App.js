import React from "react";
import { View, Text } from "react-native";
import Navigation from "./src/components/Navigation";
import { AuthProvider } from "./src/context/AuthContext";
import { Provider } from "react-redux";
import { store } from "./src/store";

const App = () => {
  return ( 

      <Navigation />
        


  )
}

export default () => {
  return (
    <Provider store = { store }>
      <App />
    </Provider>
  )
}
