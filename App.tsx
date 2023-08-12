import "react-native-gesture-handler";
import Router from "./src/routes/Router";
import { AuthProvider } from "./src/context/AuthContext";
import { ThemeProvider } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
      <AuthProvider>
        <ThemeProvider>
          <Router />
        </ThemeProvider>
        <StatusBar style="auto" />
      </AuthProvider>
    </>
  );
}
