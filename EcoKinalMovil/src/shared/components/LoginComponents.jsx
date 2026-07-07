import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { KB, s } from "../constants/login";

export const EKInput = ({
  label,
  icon = "mail-outline",
  secureTextEntry,
  error,
  ...props
}) => {
  const [hidden, setHidden] = useState(secureTextEntry);

  return (
    <View style={s.inputWrap}>
      <Text style={s.inputLabel}>{label}</Text>
      <View style={[s.inputBox, error && s.inputBoxError]}>
        <Ionicons name={icon} size={20} color={error ? KB.error : KB.greenMid} />
        <TextInput
          style={s.input}
          placeholderTextColor={KB.muted}
          secureTextEntry={hidden}
          {...props}
        />
        {secureTextEntry && (
          <TouchableOpacity onPress={() => setHidden((p) => !p)} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
            <Ionicons
              name={hidden ? "eye-outline" : "eye-off-outline"}
              size={20}
              color={KB.muted}
            />
          </TouchableOpacity>
        )}
      </View>
      {error ? <Text style={s.errorText}>{error}</Text> : null}
    </View>
  );
};