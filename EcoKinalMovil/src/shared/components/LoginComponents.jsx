import React, { useState, useRef } from "react";
import { View, Text, TextInput, TouchableOpacity, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { KB, s } from "../constants/login";

export const EKInput = ({
  label,
  icon = "mail-outline",
  secureTextEntry,
  error,
  onFocus,
  onBlur,
  ...props
}) => {
  const [hidden, setHidden] = useState(secureTextEntry);
  const [focused, setFocused] = useState(false);
  const anim = useRef(new Animated.Value(0)).current;

  const handleFocus = (e) => {
    setFocused(true);
    Animated.timing(anim, { toValue: 1, duration: 180, useNativeDriver: false }).start();
    onFocus?.(e);
  };

  const handleBlur = (e) => {
    setFocused(false);
    Animated.timing(anim, { toValue: 0, duration: 180, useNativeDriver: false }).start();
    onBlur?.(e);
  };

  const borderColor = error
    ? KB.error
    : anim.interpolate({ inputRange: [0, 1], outputRange: [KB.border, KB.greenMid] });

  const iconBg = anim.interpolate({
    inputRange: [0, 1],
    outputRange: ["rgba(63,122,92,0.08)", "rgba(63,122,92,0.18)"],
  });

  return (
    <View style={s.inputWrap}>
      <Text style={[s.inputLabel, focused && { color: KB.greenMid }]}>{label}</Text>
      <Animated.View style={[s.inputBox, { borderColor }, error && s.inputBoxError]}>
        <Animated.View style={[s.iconCircle, { backgroundColor: iconBg }]}>
          <Ionicons name={icon} size={18} color={error ? KB.error : KB.greenMid} />
        </Animated.View>
        <TextInput
          style={s.input}
          placeholderTextColor={KB.muted}
          secureTextEntry={hidden}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
        {secureTextEntry && (
          <TouchableOpacity
            onPress={() => setHidden((p) => !p)}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Ionicons name={hidden ? "eye-outline" : "eye-off-outline"} size={20} color={KB.muted} />
          </TouchableOpacity>
        )}
      </Animated.View>
      {error ? <Text style={s.errorText}>{error}</Text> : null}
    </View>
  );
};