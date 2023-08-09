import "react-native-gesture-handler";
import Router from "./src/routes/Router";
import { AuthProvider } from "./src/context/AuthContext";

import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
      <AuthProvider>
        <Router />
        <StatusBar style="auto" />
      </AuthProvider>
    </>
  );
}
