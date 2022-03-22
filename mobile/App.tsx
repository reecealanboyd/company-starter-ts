import { ApolloProvider } from "@apollo/client";
import client from "./apollo-client";
import React from "react";
import Home from "./Home";
import { Text } from "react-native";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Text>App.tsx</Text>
      <Home />
    </ApolloProvider>
  );
}
