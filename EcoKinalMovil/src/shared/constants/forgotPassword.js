import { StyleSheet } from "react-native";
import { KB, FONTS } from "./login";

export { KB };

export const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: KB.bg },
  flex1: { flex: 1 },

  header: {
    paddingTop: 60,
    paddingBottom: 26,
    alignItems: "center",
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    shadowColor: KB.greenDark,
    shadowOpacity: 0.2,
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },
  backBtn: {
    position: "absolute",
    top: 56,
    left: 20,
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "rgba(255,255,255,0.18)",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.25)",
  },
  headerIconRing: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "rgba(255,255,255,0.16)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.3)",
  },
  pageTitle: {
    fontFamily: FONTS.display,
    color: "#FFFFFF",
    fontSize: 22,
    textShadowColor: "rgba(0,0,0,0.15)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  pageSub: {
    fontFamily: FONTS.displayLight,
    color: "rgba(255,255,255,0.9)",
    fontSize: 13.5,
    marginTop: 6,
    textAlign: "center",
    paddingHorizontal: 40,
  },

  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    paddingBottom: 40,
  },

  card: {
    backgroundColor: KB.card,
    marginHorizontal: 20,
    marginTop: -10,
    borderRadius: 24,
    padding: 24,
    shadowColor: KB.greenDark,
    shadowOpacity: 0.15,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 10 },
    elevation: 8,
  },

  cardHeadRow: { alignItems: "center", marginBottom: 22 },
  cardIconRing: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "rgba(63,122,92,0.1)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  cardTitle: {
    fontFamily: FONTS.display,
    fontSize: 19,
    color: KB.text,
  },
  cardSub: {
    fontSize: 13,
    color: KB.muted,
    marginTop: 4,
    textAlign: "center",
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
    textAlign: "center",
  },

  btnPrimaryWrap: {
    borderRadius: 18,
    marginTop: 6,
    shadowColor: KB.accent,
    shadowOpacity: 0.4,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 7 },
    elevation: 5,
  },
  btnPrimary: {
    borderRadius: 18,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
  },
  btnPrimaryText: { color: KB.greenDark, fontWeight: "800", fontSize: 16, letterSpacing: 0.5 },

  linkRow: { alignItems: "center", marginTop: 22 },
  linkText: { color: KB.greenMid, fontSize: 14, fontWeight: "700" },
});