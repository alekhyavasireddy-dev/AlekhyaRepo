import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from './src/hooks/useTheme';
import MainNavigator from './src/navigation/MainNavigator';
import { WalletProvider } from "./src/context/WalletProvider";

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <WalletProvider>
          <MainNavigator />
        </WalletProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
}
