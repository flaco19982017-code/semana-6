import React, { useState, useContext } from "react";
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { AuthStackParamList } from "../../navigation/typeNavigation";
import { LoginForm } from "../../types/auth";
import { isValidEmail, isValidPassword } from "../../utils/validators";
import { loginStyles } from "../../styles/appStyle";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";
import { AuthContext } from "../../context/AuthContext";

type Props = StackScreenProps<AuthStackParamList, "Login">;

export const LoginScreen = ({ navigation }: Props) => {
  const { login } = useContext(AuthContext);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);
  const [loginForm, setLoginForm] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const handleInputChange = (key: string, value: string) => {
    setLoginForm({ ...loginForm, [key]: value });
  };

  const validate = (): boolean => {
    let valid = true;
    setEmailError("");
    setPasswordError("");
    if (!isValidEmail(loginForm.email)) {
      setEmailError("Ingresa un email válido");
      valid = false;
    }
    if (!isValidPassword(loginForm.password)) {
      setPasswordError("La contraseña debe tener al menos 6 caracteres");
      valid = false;
    }
    return valid;
  };

  const handleLogin = async () => {
    if (!validate()) return;
    setLoading(true);
    try {
      await login(loginForm.email, loginForm.password);
    } catch (error: any) {
      Alert.alert("Error", "Email o contraseña incorrectos");
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={loginStyles.container}
        keyboardShouldPersistTaps="handled"
      >
        <View style={loginStyles.header}>
          <Text style={loginStyles.title}>Bienvenido</Text>
          <Text style={loginStyles.subtitle}>Ingresa el correo y la contraseña</Text>
        </View>
        <View style={loginStyles.form}>
          <Input
            label="Correo electrónico"
            placeholder="ejemplo@correo.com"
            value={loginForm.email}
            onChangeText={(v) => handleInputChange("email", v)}
            keyboardType="email-address"
            autoCapitalize="none"
            error={emailError}
          />
          <Input
            label="Contraseña"
            placeholder="Mínimo 6 caracteres"
            value={loginForm.password}
            onChangeText={(v) => handleInputChange("password", v)}
            isPassword
            error={passwordError}
          />
          <Button
            title="Iniciar Sesión"
            onPress={handleLogin}
            loading={loading}
            style={loginStyles.button}
          />
        </View>
        <View style={loginStyles.footer}>
          <Text style={loginStyles.footerText}>¿No tienes cuenta? </Text>
          <Text
            style={loginStyles.link}
            onPress={() => navigation.navigate("Register")}
          >
            Regístrate
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
