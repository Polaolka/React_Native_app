import React, { useEffect, useState, useDispatch } from "react";
import { StyleSheet, Text, Image, View, FlatList, ImageBackground, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./Auth.styles";

export default function LoginScreen({}) {
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleFocusEmail = () => {
    setIsFocusedEmail(true);
  };

  const handleBlurEmail = () => {
    setIsFocusedEmail(false);
  };

  const handleFocusPassword = () => {
    setIsFocusedPassword(true);
  };

  const handleBlurPassword = () => {
    setIsFocusedPassword(false);
  };

  const initialState = {
    login: "",
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialState);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/Photo_BG.jpg")}
        style={styles.imageBG}
      >
        <View style={styles.formWrapperLogin}>
          <Text style={styles.title}>Увійти</Text>

          <View
            style={[
              styles.inputContainer,
              isFocusedEmail && styles.inputContainerActive,
            ]}
          >
            {!formData.email && (
              <Text
                style={[
                  styles.placeholderText,
                  isFocusedEmail && styles.placeholderTextActive,
                ]}
              >
                Адреса електронної пошти
              </Text>
            )}
            <TextInput
              style={[styles.input, isFocusedEmail && styles.inputFocused]}
              onFocus={handleFocusEmail}
              onBlur={handleBlurEmail}
              onChangeText={(text) => setFormData({ ...formData, email: text })}
              value={formData.email}
            />
          </View>

          <View
            style={[
              styles.inputContainer,
              isFocusedPassword && styles.inputContainerActive,
            ]}
          >
            <TouchableOpacity style={styles.placeholderPassBtn} onPress={toggleShowPassword}>
              <Text style={styles.placeholderTextPass}>
                {showPassword ? "Сховати" : "Показати"}
              </Text>
            </TouchableOpacity>
            {!formData.password && (
              <Text
                style={[
                  styles.placeholderText,
                  isFocusedPassword && styles.placeholderTextActive,
                ]}
              >
                Пароль
              </Text>
            )}

            <TextInput
              style={[styles.input, isFocusedPassword && styles.inputFocused]}
              onFocus={handleFocusPassword}
              onBlur={handleBlurPassword}
              onChangeText={(text) => setFormData({ ...formData, password: text })}
              value={formData.password}
              secureTextEntry={!showPassword} 
            />
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              // Обробка натискання кнопки
            }}
          >
            <Text style={styles.buttonText}>Зареєстуватися</Text>
          </TouchableOpacity>

          <Text style={styles.navigate}>Вже є акаунт? Увійти</Text>
        </View>
      </ImageBackground>
    </View>
  );
}
