import { StyleSheet } from "react-native";

export const KB = {
  greenDark: "#1B4332",
  greenMid:  "#2D6A4F",
  greenLight:"#52B788",
  bg:        "#F4F8F6",
  card:      "#FFFFFF",
  text:      "#1B1B1B",
  muted:     "#6B7280",
  border:    "#E2E8E4",
  error:     "#DC2626",
  warning:   "#D97706",
};

export const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: KB.bg },
  flex1: { flex: 1 },

  header: {
    paddingTop: 70,
    paddingBottom: 50,
    alignItems: "center",
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  logoRing: {
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: "rgba(255,255,255,0.15)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 14,
  },
  logoImage: { width: 44, height: 44 },
  brandTagTittle: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "800",
    letterSpacing: 1,
  },
  brandTagline: {
    color: "rgba(255,255,255,0.85)",
    fontSize: 13,
    marginTop: 4,
  },

  card: {
    backgroundColor: KB.card,
    marginHorizontal: 20,
    marginTop: -30,
    borderRadius: 20,
    padding: 22,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  cardTitle: { fontSize: 20, fontWeight: "800", color: KB.text },
  cardSub: { fontSize: 13, color: KB.muted, marginBottom: 18 },

  inputWrap: {
    marginBottom: 14,
  },
  inputLabel: {
    fontSize: 13,
    fontWeight: "600",
    color: KB.text,
    marginBottom: 6,
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: KB.border,
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 48,
    backgroundColor: "#FAFDFB",
  },
  inputBoxError: {
    borderColor: KB.error,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: KB.text,
    marginLeft: 8,
  },
  errorText: {
    color: KB.error,
    fontSize: 12,
    marginTop: 4,
  },

  alertBox: {
    flexDirection: "row",
    borderRadius: 12,
    padding: 12,
    marginBottom: 14,
    gap: 8,
  },
  alertError:   { backgroundColor: "#FEF2F2" },
  alertWarning: { backgroundColor: "#FFFBEB" },
  alertIcon: { fontSize: 18 },
  alertTitle: { fontWeight: "700", fontSize: 13 },
  alertBody: { fontSize: 12, color: KB.muted, marginTop: 2 },

  btnPrimary: {
    backgroundColor: KB.greenMid,
    borderRadius: 12,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 4,
  },
  btnDisabled: { opacity: 0.6 },
  btnPrimaryText: { color: "#FFFFFF", fontWeight: "700", fontSize: 15 },

  forgotRow: { alignItems: "center", marginTop: 14 },
  forgotText: { color: KB.greenMid, fontSize: 13, fontWeight: "600" },

  orRow: { flexDirection: "row", alignItems: "center", marginVertical: 16 },
  orLine: { flex: 1, height: 1, backgroundColor: KB.border },
  orText: { marginHorizontal: 10, color: KB.muted, fontSize: 12 },

  btnOutline: {
    borderWidth: 1.5,
    borderColor: KB.greenMid,
    borderRadius: 12,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  btnOutlineText: { color: KB.greenMid, fontWeight: "700", fontSize: 15 },

  footer: { alignItems: "center", marginTop: 24, marginBottom: 16 },
  footerText: { color: KB.muted, fontSize: 12 },
});