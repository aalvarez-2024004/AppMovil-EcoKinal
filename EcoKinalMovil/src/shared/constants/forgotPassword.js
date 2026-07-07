import { StyleSheet } from "react-native";
import { KB, FONTS } from "./login"; // Reutilizamos la misma paleta y fuentes

export { KB };

export const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: KB.bg },
  flex1: { flex: 1 },

  header: {
    paddingTop: 70,
    paddingBottom: 30,
    alignItems: "center",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    shadowColor: KB.greenDark,
    shadowOpacity: 0.2,
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },
  backBtn: {
    position: "absolute",
    top: 60,
    left: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.2)",
    justifyContent: "center",
    alignItems: "center",
  },
  pageTitle: {
    fontFamily: FONTS.display,
    color: "#FFFFFF",
    fontSize: 24,
    marginTop: 10,
    textShadowColor: "rgba(0,0,0,0.1)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 3,
  },
  pageSub: {
    fontFamily: FONTS.displayLight,
    color: "rgba(255,255,255,0.9)",
    fontSize: 14,
    marginTop: 6,
    textAlign: "center",
    paddingHorizontal: 30,
  },

  card: {
    backgroundColor: KB.card,
    marginHorizontal: 20,
    marginTop: 20, // Ajuste para que se vea centrado y coincida con el registro
    borderRadius: 24,
    padding: 24,
    shadowColor: KB.greenDark,
    shadowOpacity: 0.15,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 10 },
    elevation: 8,
  },

  infoBox: {
    backgroundColor: "#F0FDF4",
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#D1FAE5",
  },
  infoText: { 
    color: KB.greenDark, 
    fontSize: 13, 
    lineHeight: 20, 
    fontWeight: "500", 
    textAlign: "center" 
  },

  btnPrimary: {
    backgroundColor: KB.accent, // Acento mango
    borderRadius: 16,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
    shadowColor: KB.accent,
    shadowOpacity: 0.4,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },
  btnDisabled: { opacity: 0.6 },
  btnPrimaryText: { color: KB.greenDark, fontWeight: "800", fontSize: 16, letterSpacing: 0.5 },

  linkRow: { alignItems: "center", marginTop: 24 },
  linkText: { color: KB.greenMid, fontSize: 14, fontWeight: "700" },
});