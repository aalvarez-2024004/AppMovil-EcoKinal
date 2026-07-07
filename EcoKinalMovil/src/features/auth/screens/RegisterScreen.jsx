import React, { useState, useEffect } from "react";
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
  Alert,
  ActivityIndicator,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { useFonts, Fraunces_600SemiBold, Fraunces_500Medium_Italic } from "@expo-google-fonts/fraunces";

import { useAuthStore } from "../../../shared/store/useAuthStore";
import { KB, s } from "../../../shared/constants/register";
import { EKInput } from "../../../shared/components/LoginComponents";

const RegisterScreen = () => {
  const navigation = useNavigation();
  const { register, isLoading } = useAuthStore();
  const { height } = useWindowDimensions();

  // Cargamos las fuentes premium para mantener el estilo impecable
  const [fontsLoaded] = useFonts({
    Fraunces_600SemiBold,
    Fraunces_500Medium_Italic,
  });

  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    return () => Keyboard.dismiss();
  }, []);

  const update = (field) => (value) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Requerido";
    if (!form.username.trim()) e.username = "Requerido";
    if (!form.email.trim()) e.email = "Requerido";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Correo inválido";
    if (!form.password) e.password = "Requerido";
    else if (form.password.length < 8) e.password = "Mínimo 8 caracteres";
    if (form.password !== form.confirmPassword)
      e.confirmPassword = "No coinciden";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async () => {
    Keyboard.dismiss();
    if (!validate()) return;

    const { confirmPassword, ...data } = form;
    const result = await register(data);

    if (!result.success) {
      Alert.alert("Error en el registro", result.error);
    } else {
      Alert.alert(
        "Cuenta creada",
        "Revisa tu correo para verificar tu cuenta antes de iniciar sesión.",
        [{ text: "OK", onPress: () => navigation.navigate("Login") }]
      );
    }
  };

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

      <KeyboardAvoidingView
        style={s.flex1}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={{ minHeight: height }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          bounces={false}
          overScrollMode="never"
        >
          <LinearGradient
            colors={[KB.greenDark, KB.greenMid]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={s.header}
          >
            <Text style={s.brandName}>EcoKinal</Text>
            <Text style={s.pageTitle}>Crear cuenta</Text>
            <Text style={s.pageSub}>Únete al movimiento ecológico</Text>
          </LinearGradient>

          <View style={s.card}>
            <EKInput
              label="Nombre completo"
              icon="person-outline"
              placeholder="Tu nombre"
              value={form.name}
              onChangeText={update("name")}
              error={errors.name}
            />

            <EKInput
              label="Nombre de usuario"
              icon="at-outline"
              placeholder="usuario123"
              value={form.username}
              onChangeText={update("username")}
              autoCapitalize="none"
              error={errors.username}
            />

            <EKInput
              label="Correo electrónico"
              icon="mail-outline"
              placeholder="correo@ejemplo.com"
              value={form.email}
              onChangeText={update("email")}
              keyboardType="email-address"
              autoCapitalize="none"
              error={errors.email}
            />

            <EKInput
              label="Contraseña"
              icon="lock-closed-outline"
              placeholder="••••••••"
              value={form.password}
              onChangeText={update("password")}
              secureTextEntry
              error={errors.password}
            />

            <EKInput
              label="Confirmar contraseña"
              icon="lock-closed-outline"
              placeholder="••••••••"
              value={form.confirmPassword}
              onChangeText={update("confirmPassword")}
              secureTextEntry
              error={errors.confirmPassword}
            />

            <TouchableOpacity
              style={[s.btnPrimary, isLoading && s.btnDisabled]}
              onPress={handleSubmit}
              disabled={isLoading}
              activeOpacity={0.85}
            >
              <Text style={s.btnPrimaryText}>
                {isLoading ? "Creando cuenta..." : "CREAR CUENTA"}
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={s.loginRow}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={s.loginText}>¿Ya tienes cuenta? </Text>
            <Text style={s.loginLink}>Inicia sesión</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default RegisterScreen;