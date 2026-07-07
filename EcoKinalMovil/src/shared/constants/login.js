import { StyleSheet } from "react-native";

export const KB = {
  greenDark: "#123527",
  greenMid: "#3F7A5C",
  greenLight: "#8FBF9F",
  accent: "#E8A33D",
  accentDark: "#C9832A",
  bg: "#F6F4EC",
  card: "#FFFEFB",
  text: "#1C2420",
  muted: "#71776D",
  border: "#E4E1D4",
  error: "#C1443D",
  warning: "#B8842E",
};

export const FONTS = {
  display: "Fraunces_600SemiBold",
  displayLight: "Fraunces_500Medium_Italic",
};

export const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: KB.bg },
  flex1: { flex: 1 },

  logoRing: {
    width: 78,
    height: 78,
    borderRadius: 39,
    backgroundColor: "rgba(255,255,255,0.16)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.32)",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
  },
  logoImage: { width: 44, height: 44 },

  brandTagTittle: {
    fontFamily: FONTS.display,
    color: "#FFFFFF",
    fontSize: 27,
    letterSpacing: 0.4,
    textShadowColor: "rgba(0,0,0,0.18)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 5,
  },
  brandTagline: {
    fontFamily: FONTS.displayLight,
    color: "rgba(255,255,255,0.92)",
    fontSize: 14,
    marginTop: 5,
  },

  card: {
    backgroundColor: KB.card,
    marginHorizontal: 20,
    marginTop: 24,
    borderRadius: 28,
    padding: 26,
    shadowColor: KB.greenDark,
    shadowOpacity: 0.16,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 12 },
    elevation: 8,
  },
  cardTitle: {
    fontFamily: FONTS.display,
    fontSize: 25,
    color: KB.text,
  },
  cardSub: { fontSize: 14, color: KB.muted, marginBottom: 28, marginTop: 6 },

  inputWrap: { marginBottom: 18 },
  inputLabel: {
    fontSize: 12,
    fontWeight: "700",
    color: KB.muted,
    marginBottom: 8,
    textTransform: "uppercase",
    letterSpacing: 0.6,
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: KB.border,
    borderRadius: 18,
    paddingHorizontal: 12,
    height: 56,
    backgroundColor: "#FBFAF4",
  },
  inputBoxError: { borderColor: KB.error, backgroundColor: "#FDF4F3" },
  iconCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    justifyContent: "center",
    alignItems: "center",
  },
  input: { flex: 1, fontSize: 15, color: KB.text, marginLeft: 10 },
  errorText: { color: KB.error, fontSize: 12, marginTop: 6, fontWeight: "500" },

  alertBox: {
    flexDirection: "row",
    borderRadius: 18,
    padding: 14,
    marginBottom: 18,
    gap: 10,
  },
  alertError: { backgroundColor: "#FBEBEA" },
  alertWarning: { backgroundColor: "#FBF1E1" },
  alertIcon: { fontSize: 20 },
  alertTitle: { fontWeight: "800", fontSize: 14 },
  alertBody: { fontSize: 13, color: KB.muted, marginTop: 2 },

  btnPrimaryWrap: {
    borderRadius: 18,
    marginTop: 10,
    shadowColor: KB.accent,
    shadowOpacity: 0.4,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 7 },
    elevation: 5,
  },
  btnPrimary: {
    borderRadius: 18,
    height: 58,
    justifyContent: "center",
    alignItems: "center",
  },
  btnDisabled: { opacity: 0.6 },
  btnPrimaryText: { color: KB.greenDark, fontWeight: "800", fontSize: 16, letterSpacing: 0.5 },

  forgotRow: { alignItems: "center", marginTop: 22 },
  forgotText: { color: KB.greenMid, fontSize: 14, fontWeight: "700" },

  orRow: { flexDirection: "row", alignItems: "center", marginVertical: 26 },
  orLine: { flex: 1, height: 1, backgroundColor: KB.border },
  orText: { marginHorizontal: 12, color: KB.muted, fontSize: 13, fontWeight: "600" },

  btnOutline: {
    borderWidth: 1.5,
    borderColor: KB.greenMid,
    borderRadius: 18,
    height: 58,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  btnOutlineText: { color: KB.greenMid, fontWeight: "700", fontSize: 15, letterSpacing: 0.3 },

  footer: { alignItems: "center", marginTop: 32, marginBottom: 26 },
  footerText: { color: KB.muted, fontSize: 12, fontWeight: "500" },
});