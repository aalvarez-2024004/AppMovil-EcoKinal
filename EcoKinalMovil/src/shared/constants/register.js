import { StyleSheet } from "react-native";
import { KB, FONTS } from "./login"; // Reutilizamos paleta y fuentes del login para consistencia

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
  brandName: {
    fontFamily: FONTS.display,
    color: "#FFFFFF",
    fontSize: 26,
    letterSpacing: 0.5,
    textShadowColor: "rgba(0,0,0,0.15)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  pageTitle: {
    fontFamily: FONTS.display,
    color: "#FFFFFF",
    fontSize: 20,
    marginTop: 12,
  },
  pageSub: {
    fontFamily: FONTS.displayLight,
    color: "rgba(255,255,255,0.9)",
    fontSize: 14,
    marginTop: 4,
  },

  card: {
    backgroundColor: KB.card,
    marginHorizontal: 20,
    marginTop: 20, // <-- Ajuste solicitado para centrar el formulario visualmente
    borderRadius: 24,
    padding: 24,
    shadowColor: KB.greenDark,
    shadowOpacity: 0.15,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 10 },
    elevation: 8,
  },

  btnPrimary: {
    backgroundColor: KB.accent, // Usamos el acento mango para mantener el CTA impecable
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

  loginRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 40,
  },
  loginText: { color: KB.muted, fontSize: 14, fontWeight: "500" },
  loginLink: { color: KB.greenMid, fontSize: 14, fontWeight: "800" },
});