import { StyleSheet, Platform } from 'react-native'

export const MODULES = [
  {
    key: 'detector',
    title: 'Detector de reciclaje',
    description: 'Escanea objetos con IA en tiempo real para clasificarlos correctamente.',
    icon: 'camera-outline',
    tag: 'Popular',
    tagColor: '#F59E0B',
    route: '/detector',
  },
  {
    key: 'foro',
    title: 'Foro eco',
    description: 'Comparte tips, publica fotos y debate soluciones con la comunidad verde.',
    icon: 'chatbubbles-outline',
    tag: 'Comunidad',
    tagColor: '#22C55E',
    route: '/foro',
  },
  {
    key: 'gamificacion',
    title: 'Gamificación',
    description: 'Revisa tus eco-puntos acumulados y escala posiciones en el podio.',
    icon: 'trophy-outline',
    tag: 'Retos',
    tagColor: '#F97316',
    route: '/gamificacion',
  },
  {
    key: 'impacto',
    title: 'Mi impacto',
    description: 'Estadísticas analíticas detalladas del CO₂ y residuos que has salvado.',
    icon: 'stats-chart-outline',
    tag: null,
    tagColor: null,
    route: '/impacto',
  },
  {
    key: 'mapa',
    title: 'Mapa reciclaje',
    description: 'Encuentra los contenedores inteligentes y centros limpios más cercanos.',
    icon: 'location-outline',
    tag: 'Nuevo',
    tagColor: '#8B5CF6',
    route: '/mapa',
  },
]

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAF9',
  },

  // Header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
    paddingBottom: 14,
    backgroundColor: '#0F2E1D',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  logoCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#22C55E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  brand: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 15,
  },
  brandSub: {
    color: '#9CA3AF',
    fontSize: 9,
    letterSpacing: 1,
  },
  logoutBtn: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#DC2626',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Hero
  hero: {
    height: 220,
    justifyContent: 'flex-end',
  },
  heroOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: 6,
    backgroundColor: 'rgba(255,255,255,0.15)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    marginBottom: 10,
  },
  badgeText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '600',
  },
  heroTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 6,
  },
  heroSubtitle: {
    color: '#E5E7EB',
    fontSize: 13,
    lineHeight: 18,
  },

  // Section
  section: {
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  sectionTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 14,
  },
  sectionBar: {
    width: 3,
    height: 14,
    backgroundColor: '#166534',
    borderRadius: 2,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#374151',
    letterSpacing: 0.5,
  },

  // Cards
  cardsList: {
    gap: 12,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  cardIconWrap: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#DCFCE7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tag: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
  },
  tagText: {
    fontSize: 10,
    fontWeight: '700',
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 12.5,
    color: '#6B7280',
    lineHeight: 18,
  },
  cardFooter: {
    marginTop: 10,
  },

  // EcoBot flotante
  ecoBot: {
    position: 'absolute',
    bottom: 24,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#166534',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 28,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  ecoBotText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '700',
  },
})