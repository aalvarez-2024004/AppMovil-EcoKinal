import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  StatusBar,
  useWindowDimensions,
  Keyboard,
  Image,
  ActivityIndicator,
  Animated,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { useFonts, Fraunces_600SemiBold, Fraunces_500Medium_Italic } from "@expo-google-fonts/fraunces";

import { useAuthStore } from "../../../shared/store/useAuthStore";
import { KB, s } from "../../../shared/constants/login";
import { EKInput } from "../../../shared/components/LoginComponents";
import { OrganicHeader } from "../../../shared/components/OrganicHeader";

const LoginScreen = () => {
  const navigation = useNavigation();
  const { height } = useWindowDimensions();

  const [fontsLoaded] = useFonts({
    Fraunces_600SemiBold,
    Fraunces_500Medium_Italic,
  });

  const { login, isLoading, clearError } = useAuthStore();

  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState(null);

  const cardFade = useRef(new Animated.Value(0)).current;
  const cardSlide = useRef(new Animated.Value(16)).current;
  const btnScale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(cardFade, { toValue: 1, duration: 420, useNativeDriver: true }),
      Animated.timing(cardSlide, { toValue: 0, duration: 420, useNativeDriver: true }),
    ]).start();
    return () => Keyboard.dismiss();
  }, []);

  const validate = () => {
    const e = {};
    if (!form.email.trim()) e.email = "El correo es requerido";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Correo inválido";
    if (!form.password) e.password = "La contraseña es requerida";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (field) => (value) => {
    clearError();
    setForm((p) => ({ ...p, [field]: value }));
  };

  const pressIn = () => Animated.spring(btnScale, { toValue: 0.97, useNativeDriver: true }).start();
  const pressOut = () => Animated.spring(btnScale, { toValue: 1, friction: 4, useNativeDriver: true }).start();

  const handleLogin = async () => {
    setLoginError(null);
    if (!validate()) return;

    const result = await login(form.email, form.password);

    if (!result.success) {
      setLoginError(result.error);
      return;
    }

    const role = result.user?.role?.name;
    if (role === "ADMIN_GENERAL") {
      navigation.reset({ index: 0, routes: [{ name: "AdminHome" }] });
    } else {
      navigation.reset({ index: 0, routes: [{ name: "Home" }] });
    }
  };

  const isPending = loginError?.toLowerCase().includes("aprobado");

  if (!fontsLoaded) {
    return (
      <View style={[s.root, { justifyContent: "center", alignItems: "center" }]}>
        <ActivityIndicator size="large" color={KB.greenMid} />
      </View>
    );
  }

  return (
    <View style={s.root}>
      <StatusBar barStyle="light-content" backgroundColor={KB.greenDark} translucent />

      <KeyboardAvoidingView style={s.flex1} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <ScrollView
          contentContainerStyle={{ minHeight: height }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          bounces={false}
          overScrollMode="never"
        >
          <OrganicHeader>
            <View style={s.logoRing}>
              <Image
                source={require("../../../../assets/images/icon.png")}
                style={s.logoImage}
                resizeMode="contain"
              />
            </View>
            <Text style={s.brandTagTittle}>EcoKinal</Text>
            <Text style={s.brandTagline}>Cuida el planeta, un paso a la vez.</Text>
          </OrganicHeader>

          <Animated.View
            style={[
              s.card,
              { opacity: cardFade, transform: [{ translateY: cardSlide }] },
            ]}
          >
            <Text style={s.cardTitle}>Hola, bienvenido</Text>
            <Text style={s.cardSub}>Ingresa a tu espacio ecológico</Text>

            <EKInput
              label="Correo electrónico"
              icon="mail-outline"
              placeholder="usuario@correo.com"
              value={form.email}
              onChangeText={handleChange("email")}
              keyboardType="email-address"
              autoCapitalize="none"
              error={errors.email}
            />

            <EKInput
              label="Contraseña"
              icon="lock-closed-outline"
              placeholder="••••••••"
              value={form.password}
              onChangeText={handleChange("password")}
              secureTextEntry
              error={errors.password}
            />

            {loginError ? (
              <View style={[s.alertBox, isPending ? s.alertWarning : s.alertError]}>
                <Text style={s.alertIcon}>{isPending ? "⏳" : "⚠️"}</Text>
                <View style={s.flex1}>
                  <Text style={[s.alertTitle, { color: isPending ? KB.warning : KB.error }]}>
                    {isPending ? "Cuenta pendiente" : "Credenciales incorrectas"}
                  </Text>
                  <Text style={s.alertBody}>{loginError}</Text>
                </View>
              </View>
            ) : null}

            <Animated.View style={[s.btnPrimaryWrap, { transform: [{ scale: btnScale }] }]}>
              <TouchableOpacity
                onPress={handleLogin}
                onPressIn={pressIn}
                onPressOut={pressOut}
                disabled={isLoading}
                activeOpacity={0.9}
              >
                <LinearGradient
                  colors={isLoading ? [KB.border, KB.border] : [KB.accent, KB.accentDark]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={s.btnPrimary}
                >
                  <Text style={s.btnPrimaryText}>
                    {isLoading ? "Verificando..." : "INICIAR SESIÓN"}
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </Animated.View>

            <TouchableOpacity style={s.forgotRow} onPress={() => navigation.navigate("ForgotPassword")}>
              <Text style={s.forgotText}>¿Olvidaste tu contraseña?</Text>
            </TouchableOpacity>

            <View style={s.orRow}>
              <View style={s.orLine} />
              <Text style={s.orText}>o</Text>
              <View style={s.orLine} />
            </View>

            <TouchableOpacity
              style={s.btnOutline}
              onPress={() => navigation.navigate("Register")}
              activeOpacity={0.85}
            >
              <Text style={s.btnOutlineText}>Crear cuenta nueva</Text>
            </TouchableOpacity>
          </Animated.View>

          <View style={s.footer}>
            <Text style={s.footerText}>Versión 1.0.0</Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginScreen;