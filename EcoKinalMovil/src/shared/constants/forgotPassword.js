import { StyleSheet } from "react-native";
import { KB } from "./login";

export { KB };

export const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: KB.bg },
  flex1: { flex: 1 },

  header: {
    paddingTop: 60,
    paddingBottom: 40,
    alignItems: "center",
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  backBtn: {
    position: "absolute",
    top: 55,
    left: 20,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "rgba(255,255,255,0.2)",
    justifyContent: "center",
    alignItems: "center",
  },
  pageTitle: { color: "#FFFFFF", fontSize: 22, fontWeight: "800" },
  pageSub: {
    color: "rgba(255,255,255,0.85)",
    fontSize: 13,
    marginTop: 6,
    textAlign: "center",
    paddingHorizontal: 30,
  },

  card: {
    backgroundColor: KB.card,
    marginHorizontal: 20,
    marginTop: -24,
    borderRadius: 20,
    padding: 22,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },

  inputWrap: { marginBottom: 14 },
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
  inputBoxError: { borderColor: KB.error },
  input: { flex: 1, fontSize: 15, color: KB.text, marginLeft: 8 },
  errorText: { color: KB.error, fontSize: 12, marginTop: 4 },

  infoBox: {
    backgroundColor: "#F0FDF4",
    borderRadius: 12,
    padding: 14,
    marginBottom: 16,
  },
  infoText: { color: KB.greenDark, fontSize: 13, lineHeight: 18 },

  btnPrimary: {
    backgroundColor: KB.greenMid,
    borderRadius: 12,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 6,
  },
  btnDisabled: { opacity: 0.6 },
  btnPrimaryText: { color: "#FFFFFF", fontWeight: "700", fontSize: 15 },

  linkRow: { alignItems: "center", marginTop: 16 },
  linkText: { color: KB.greenMid, fontSize: 13, fontWeight: "600" },
});