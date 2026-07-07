import { StyleSheet } from "react-native";

export const KB = {
  greenDark: "#123527",   // pino profundo
  greenMid:  "#3F7A5C",   // musgo
  greenLight:"#8FBF9F",   // sage suave
  accent:    "#E8A33D",   // mango — CTA principal
  bg:        "#F6F4EC",   // papel cálido
  card:      "#FFFEFB",
  text:      "#1C2420",   // tinta
  muted:     "#71776D",
  border:    "#E4E1D4",
  error:     "#C1443D",
  warning:   "#B8842E",
};

export const FONTS = {
  display: "Fraunces_600SemiBold",
  displayLight: "Fraunces_500Medium_Italic",
};

export const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: KB.bg },
  flex1: { flex: 1 },

  logoRing: {
    width: 76,
    height: 76,
    borderRadius: 38,
    backgroundColor: "rgba(255,255,255,0.16)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.3)",
  },
  logoImage: { width: 44, height: 44 },
  
  brandTagTittle: {
    fontFamily: FONTS.display,
    color: "#FFFFFF",
    fontSize: 26,
    letterSpacing: 0.5,
    textShadowColor: "rgba(0,0,0,0.15)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  brandTagline: {
    fontFamily: FONTS.displayLight,
    color: "rgba(255,255,255,0.9)",
    fontSize: 14,
    marginTop: 4,
  },

  card: {
    backgroundColor: KB.card,
    marginHorizontal: 20,
    marginTop: 20, // Efecto de superposición sobre la ola verde
    borderRadius: 24,
    padding: 24,
    shadowColor: KB.greenDark,
    shadowOpacity: 0.15,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 10 },
    elevation: 8,
  },
  cardTitle: {
    fontFamily: FONTS.display,
    fontSize: 24,
    color: KB.text,
  },
  cardSub: { fontSize: 14, color: KB.muted, marginBottom: 24, marginTop: 4 },

  inputWrap: { marginBottom: 16 },
  inputLabel: {
    fontSize: 12,
    fontWeight: "700",
    color: KB.muted,
    marginBottom: 8,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: KB.border,
    borderRadius: 16,
    paddingHorizontal: 16,
    height: 54,
    backgroundColor: "#FBFAF4",
  },
  inputBoxError: { borderColor: KB.error, backgroundColor: "#FDF4F3" },
  input: { flex: 1, fontSize: 15, color: KB.text, marginLeft: 12 },
  errorText: { color: KB.error, fontSize: 12, marginTop: 6, fontWeight: "500" },

  alertBox: {
    flexDirection: "row",
    borderRadius: 16,
    padding: 14,
    marginBottom: 16,
    gap: 10,
  },
  alertError:   { backgroundColor: "#FBEBEA" },
  alertWarning: { backgroundColor: "#FBF1E1" },
  alertIcon: { fontSize: 20 },
  alertTitle: { fontWeight: "800", fontSize: 14 },
  alertBody: { fontSize: 13, color: KB.muted, marginTop: 2 },

  btnPrimary: {
    backgroundColor: KB.accent,
    borderRadius: 16,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
    shadowColor: KB.accent,
    shadowOpacity: 0.4,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },
  btnDisabled: { opacity: 0.6 },
  btnPrimaryText: { color: KB.greenDark, fontWeight: "800", fontSize: 16, letterSpacing: 0.5 },

  forgotRow: { alignItems: "center", marginTop: 20 },
  forgotText: { color: KB.greenMid, fontSize: 14, fontWeight: "700" },

  orRow: { flexDirection: "row", alignItems: "center", marginVertical: 24 },
  orLine: { flex: 1, height: 1, backgroundColor: KB.border },
  orText: { marginHorizontal: 12, color: KB.muted, fontSize: 13, fontWeight: "600" },

  btnOutline: {
    borderWidth: 1.5,
    borderColor: KB.greenMid,
    borderRadius: 16,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  btnOutlineText: { color: KB.greenMid, fontWeight: "700", fontSize: 15, letterSpacing: 0.3 },

  footer: { alignItems: "center", marginTop: 30, marginBottom: 24 },
  footerText: { color: KB.muted, fontSize: 12, fontWeight: "500" },
});