import React, { useState } from "react";
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
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useAuthStore } from "../../../shared/store/useAuthStore";
import { KB, s } from "../../../shared/constants/forgotPassword";
import { EKInput } from "../../../shared/components/LoginComponents";

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  const { requestPasswordReset, resetPassword, isLoading } = useAuthStore();

  const { height } = useWindowDimensions();

  // step 1 = pedir el correo | step 2 = pegar token + nueva contraseña
  const [step, setStep] = useState(1);

  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleRequestReset = async () => {
    Keyboard.dismiss();
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      setErrors({ email: "Ingresa un correo válido" });
      return;
    }
    setErrors({});

    const result = await requestPasswordReset(email);
    if (result.success) {
      setStep(2);
    } else {
      Alert.alert("Error", result.message);
    }
  };

  const handleResetPassword = async () => {
    Keyboard.dismiss();
    const e = {};
    if (!token.trim()) e.token = "Pega el código/token de tu correo";
    if (!newPassword) e.newPassword = "Requerido";
    else if (newPassword.length < 8) e.newPassword = "Mínimo 8 caracteres";
    if (newPassword !== confirmPassword) e.confirmPassword = "No coinciden";
    setErrors(e);
    if (Object.keys(e).length > 0) return;

    const result = await resetPassword(token, newPassword);
    if (result.success) {
      Alert.alert("Listo", "Tu contraseña fue actualizada.", [
        { text: "OK", onPress: () => navigation.navigate("Login") },
      ]);
    } else {
      Alert.alert("Error", result.message);
    }
  };

  return (
    <View style={s.root}>
      <StatusBar barStyle="light-content" backgroundColor={KB.greenDark} />

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
            <TouchableOpacity
              style={s.backBtn}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="arrow-back" size={20} color="#FFFFFF" />
            </TouchableOpacity>

            <Text style={s.pageTitle}>
              {step === 1 ? "Recuperar contraseña" : "Nueva contraseña"}
            </Text>
            <Text style={s.pageSub}>
              {step === 1
                ? "Te enviaremos un enlace a tu correo"
                : "Ingresa el código de tu correo y tu nueva contraseña"}
            </Text>
          </LinearGradient>

          <View style={s.card}>
            {step === 1 ? (
              <>
                <EKInput
                  label="Correo electrónico"
                  icon="mail-outline"
                  placeholder="correo@ejemplo.com"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  error={errors.email}
                />

                <TouchableOpacity
                  style={[s.btnPrimary, isLoading && s.btnDisabled]}
                  onPress={handleRequestReset}
                  disabled={isLoading}
                  activeOpacity={0.85}
                >
                  <Text style={s.btnPrimaryText}>
                    {isLoading ? "Enviando..." : "ENVIAR ENLACE"}
                  </Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <View style={s.infoBox}>
                  <Text style={s.infoText}>
                    Revisa tu correo, copia el código/token del enlace de
                    recuperación y pégalo abajo.
                  </Text>
                </View>

                <EKInput
                  label="Código de verificación"
                  icon="key-outline"
                  placeholder="Pega aquí el token"
                  value={token}
                  onChangeText={setToken}
                  autoCapitalize="none"
                  error={errors.token}
                />

                <EKInput
                  label="Nueva contraseña"
                  icon="lock-closed-outline"
                  placeholder="••••••••"
                  value={newPassword}
                  onChangeText={setNewPassword}
                  secureTextEntry
                  error={errors.newPassword}
                />

                <EKInput
                  label="Confirmar nueva contraseña"
                  icon="lock-closed-outline"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  secureTextEntry
                  error={errors.confirmPassword}
                />

                <TouchableOpacity
                  style={[s.btnPrimary, isLoading && s.btnDisabled]}
                  onPress={handleResetPassword}
                  disabled={isLoading}
                  activeOpacity={0.85}
                >
                  <Text style={s.btnPrimaryText}>
                    {isLoading ? "Actualizando..." : "CAMBIAR CONTRASEÑA"}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={s.linkRow}
                  onPress={() => setStep(1)}
                >
                  <Text style={s.linkText}>Volver a pedir el enlace</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ForgotPasswordScreen;