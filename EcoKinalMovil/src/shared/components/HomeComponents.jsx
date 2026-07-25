import React from 'react'
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons'
import { homeStyles as styles } from '../styles/home.js'

export default function HomeHeader({ onLogout }) {
  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <View style={styles.logoCircle}>
          <Ionicons name="leaf" size={18} color="#fff" />
        </View>
        <View>
          <Text style={styles.brand}>EcoKinal</Text>
          <Text style={styles.brandSub}>DASHBOARD</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.logoutBtn} onPress={onLogout}>
        <Ionicons name="log-out-outline" size={18} color="#fff" />
      </TouchableOpacity>
    </View>
  )
}

export default function HeroBanner({ name, username, imageUri }) {
  return (
    <ImageBackground source={{ uri: imageUri }} style={styles.hero}>
      <LinearGradient
        colors={['rgba(15,46,29,0.9)', 'rgba(15,46,29,0.55)']}
        style={styles.heroOverlay}
      >
        <View style={styles.badge}>
          <Ionicons name="shield-checkmark-outline" size={12} color="#fff" />
          <Text style={styles.badgeText}>Panel Ecológico Verificado</Text>
        </View>

        <Text style={styles.heroTitle}>¡Bienvenido de vuelta, {name}!</Text>

        <Text style={styles.heroSubtitle}>
          @{username} · Tu cuenta está activa. Cada residuo procesado mitiga
          el calentamiento global
        </Text>
      </LinearGradient>
    </ImageBackground>
  )
}

export default function SectionTitle({ children }) {
  return (
    <View style={styles.sectionTitleRow}>
      <View style={styles.sectionBar} />
      <Text style={styles.sectionTitle}>{children}</Text>
    </View>
  )
}

export default function ModuleCard({ module, onPress }) {
  const { title, description, icon, tag, tagColor } = module

  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.8} onPress={onPress}>
      <View style={styles.cardTop}>
        <View style={styles.cardIconWrap}>
          <Ionicons name={icon} size={20} color="#166534" />
        </View>

        {tag && (
          <View style={[styles.tag, { backgroundColor: `${tagColor}20` }]}>
            <Text style={[styles.tagText, { color: tagColor }]}>{tag}</Text>
          </View>
        )}
      </View>

      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardDescription}>{description}</Text>

      <View style={styles.cardFooter}>
        <Ionicons name="arrow-forward" size={16} color="#166534" />
      </View>
    </TouchableOpacity>
  )
}

export default function ModulesGrid({ modules, onModulePress }) {
  return (
    <View style={styles.cardsList}>
      {modules.map((mod) => (
        <ModuleCard
          key={mod.key}
          module={mod}
          onPress={() => onModulePress(mod.route)}
        />
      ))}
    </View>
  )
}

export default function EcoBotButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.ecoBot} activeOpacity={0.85} onPress={onPress}>
      <Ionicons name="sparkles-outline" size={16} color="#fff" />
      <Text style={styles.ecoBotText}>EcoBot</Text>
    </TouchableOpacity>
  )
}