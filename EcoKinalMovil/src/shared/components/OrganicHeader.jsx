import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Path, Defs, LinearGradient as SvgGradient, Stop } from "react-native-svg";
import { KB } from "../constants/login";

const HEADER_HEIGHT = 280; // Un poco más alto para dar respiro al texto

export const OrganicHeader = ({ children }) => {
  return (
    <View style={styles.wrap}>
      <Svg
        width="100%"
        height={HEADER_HEIGHT}
        viewBox="0 0 400 300"
        preserveAspectRatio="none"
        style={StyleSheet.absoluteFill}
      >
        <Defs>
          <SvgGradient id="headerFill" x1="0" y1="0" x2="1" y2="1">
            <Stop offset="0" stopColor={KB.greenDark} />
            <Stop offset="1" stopColor={KB.greenMid} />
          </SvgGradient>
        </Defs>

        {/* silueta de hoja como marca de agua */}
        <Path
          d="M0,0 L400,0 L400,225 C320,265 260,195 190,225 C120,255 65,205 0,240 Z"
          fill="url(#headerFill)"
        />

        {/* borde inferior tipo ola/hoja */}
        <Path
          d="M0,0 L400,0 L400,205 C320,255 260,165 190,205 C120,245 65,185 0,225 Z"
          fill="url(#headerFill)"
        />
      </Svg>

      <View style={styles.content}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: { 
    height: HEADER_HEIGHT, 
  },
  content: { 
    alignItems: "center", 
    paddingTop: 65, // Empuja el contenido para que quede perfectamente en el verde
  },
});