import { StyleSheet } from "react-native";

const COLORS = {
  bg: "#F8FDFF",          // fondo blanco celeste
  card: "#FFFFFF",        // tarjetas blancas
  cardBorder: "#B3E5FC",  // borde celeste claro
  primary: "#0288D1",     // celeste principal
  primaryDark: "#01579B", // azul celeste oscuro
  secondary: "#E0F7FA",   // celeste muy claro
  text: "#1A202C",        // texto oscuro suave
  textMuted: "#6B7280",   // gris suave
  red: "#EF4444",
  redLight: "#FEE2E2",
  white: "#FFFFFF",
};

export const loginStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: COLORS.bg,
    padding: 24,
    justifyContent: "center",
  },
  header: {
    alignItems: "center",
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: COLORS.primaryDark,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.textMuted,
    marginTop: 4,
  },
  form: {
    backgroundColor: COLORS.card,
    borderRadius: 24,
    padding: 24,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  button: {
    marginTop: 8,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 24,
  },
  footerText: {
    fontSize: 15,
    color: COLORS.textMuted,
  },
  link: {
    fontSize: 15,
    color: COLORS.primary,
    fontWeight: "700",
  },
});

export const registerStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: COLORS.bg,
    padding: 24,
    justifyContent: "center",
  },
  header: {
    alignItems: "center",
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: COLORS.primaryDark,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.textMuted,
    marginTop: 4,
  },
  form: {
    backgroundColor: COLORS.card,
    borderRadius: 24,
    padding: 24,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  button: {
    marginTop: 8,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 24,
  },
  footerText: {
    fontSize: 15,
    color: COLORS.textMuted,
  },
  link: {
    fontSize: 15,
    color: COLORS.primary,
    fontWeight: "700",
  },
});

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    paddingTop: 50,
    backgroundColor: COLORS.secondary,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.cardBorder,
  },
  greeting: {
    fontSize: 20,
    fontWeight: "800",
    color: COLORS.primaryDark,
  },
  email: {
    fontSize: 13,
    color: COLORS.textMuted,
    maxWidth: 220,
  },
  logoutBtn: {
    backgroundColor: COLORS.redLight,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: COLORS.red,
  },
  logoutText: {
    color: COLORS.red,
    fontWeight: "700",
    fontSize: 14,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.text,
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  searchContainer: {
    paddingHorizontal: 20,
    paddingBottom: 10,
    backgroundColor: COLORS.secondary,
  },
  searchInput: {
    height: 44,
    borderWidth: 1.5,
    borderColor: COLORS.cardBorder,
    borderRadius: 14,
    paddingHorizontal: 16,
    fontSize: 15,
    color: COLORS.text,
    backgroundColor: COLORS.white,
  },
  list: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 10,
  },
  emptyText: {
    textAlign: "center",
    color: COLORS.textMuted,
    fontSize: 16,
    marginTop: 40,
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  errorText: {
    fontSize: 16,
    color: COLORS.textMuted,
    textAlign: "center",
  },
});

export const detailStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  content: {
    padding: 24,
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 24,
    borderWidth: 4,
    borderColor: COLORS.primary,
  },
  name: {
    fontSize: 26,
    fontWeight: "800",
    color: COLORS.primaryDark,
    marginBottom: 8,
    textAlign: "center",
  },
  statusBadge: {
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 6,
    marginBottom: 24,
  },
  statusText: {
    fontSize: 14,
    fontWeight: "700",
    color: COLORS.white,
  },
  infoCard: {
    width: "100%",
    backgroundColor: COLORS.card,
    borderRadius: 18,
    padding: 20,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.cardBorder,
  },
  infoLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.textMuted,
  },
  infoValue: {
    fontSize: 14,
    fontWeight: "700",
    color: COLORS.primary,
    maxWidth: "60%",
    textAlign: "right",
  },
});

export const loadingStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.bg,
  },
  text: {
    marginTop: 12,
    fontSize: 16,
    color: COLORS.primary,
  },
});

export const buttonStyles = StyleSheet.create({
  button: {
    height: 50,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
    backgroundColor: COLORS.primary,
  },
  text: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.white,
  },
});

export const cardStyles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 18,
    padding: 12,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 14,
    borderWidth: 2,
    borderColor: COLORS.primary,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.text,
    marginBottom: 4,
  },
  species: {
    fontSize: 13,
    color: COLORS.textMuted,
    marginBottom: 4,
  },
  statusBadge: {
    alignSelf: "flex-start",
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  statusText: {
    fontSize: 11,
    fontWeight: "700",
    color: COLORS.white,
  },
});

export const inputStyles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.text,
    marginBottom: 6,
  },
  inputWrapper: {
    position: "relative",
  },
  input: {
    height: 50,
    borderWidth: 1.5,
    borderColor: COLORS.cardBorder,
    borderRadius: 14,
    paddingHorizontal: 16,
    fontSize: 15,
    color: COLORS.text,
    backgroundColor: COLORS.white,
  },
  inputError: {
    borderColor: COLORS.red,
  },
  eyeIcon: {
    position: "absolute",
    right: 14,
    top: 12,
  },
  errorText: {
    fontSize: 12,
    color: COLORS.red,
    marginTop: 4,
  },
});