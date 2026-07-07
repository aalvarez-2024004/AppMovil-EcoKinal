import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Path, Defs, LinearGradient as SvgGradient, Stop, Circle } from "react-native-svg";
import { KB } from "../constants/login";

const HEADER_HEIGHT = 300;

export const OrganicHeader = ({ children }) => {
  return (
    <View style={styles.wrap}>
      <Svg
        width="100%"
        height={HEADER_HEIGHT}
        viewBox="0 0 400 320"
        preserveAspectRatio="none"
        style={StyleSheet.absoluteFill}
      >
        <Defs>
          <SvgGradient id="headerFill" x1="0" y1="0" x2="1" y2="1">
            <Stop offset="0" stopColor={KB.greenDark} />
            <Stop offset="1" stopColor={KB.greenMid} />
          </SvgGradient>
        </Defs>

        {/* silueta única, más orgánica */}
        <Path
          d="M0,0 L400,0 L400,235 C330,270 250,215 190,235 C110,260 55,220 0,250 Z"
          fill="url(#headerFill)"
        />

        {/* textura decorativa tipo burbujas / hojas */}
        <Circle cx="352" cy="55" r="72" fill="rgba(255,255,255,0.05)" />
        <Circle cx="36" cy="42" r="44" fill="rgba(255,255,255,0.06)" />
        <Circle cx="68" cy="150" r="16" fill="rgba(255,255,255,0.08)" />
      </Svg>

      <View style={styles.content}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: { height: HEADER_HEIGHT },
  content: { alignItems: "center", paddingTop: 68 },
});