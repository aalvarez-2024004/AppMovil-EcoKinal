import { NavigationContainer } from "@react-navigation/native";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { useEffect } from "react";

import AuthStack from "./AuthStack";
import { useAuthStore } from "../shared/store/useAuthStore";
import { KB } from "../shared/constants/login";

const AppNavigator = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const isHydrated = useAuthStore((state) => state._hasHydrated);
  const restoreSession = useAuthStore((state) => state.restoreSession);

  useEffect(() => {
    restoreSession();
  }, []);

  if (!isHydrated) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={KB.greenMid} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <AuthStack /> // TEMPORAL: cuando exista MainStack/Drawer, se cambia esto por <MainStack />
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: KB.bg,
  },
});

export default AppNavigator;