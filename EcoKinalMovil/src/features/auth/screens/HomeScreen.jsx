import React from 'react'
import { View, ScrollView } from 'react-native'
import { useRouter } from 'expo-router'
import { useAuthStore } from '../../../shared/store/useAuthStore'

import {HomeHeader, HeroBanner,ModulesGrid, SectionTitle, EcoBotButton } from "../../../shared/components/HomeComponents"

import {homeStyles as styles, MODULES} from "../../../shared/styles/home.js"

const HERO_IMAGE = 'https://images.unsplash.com/photo-1550928431-ee0ec6db30d3?w=800'

export default function HomeScreen() {
  const router = useRouter()
  const user = useAuthStore((state) => state.user)
  const logout = useAuthStore((state) => state.logout)

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HomeHeader onLogout={logout} />

        <HeroBanner
          name={user?.name?.split(' ')[0] || 'Eco'}
          username={user?.username || 'usuario'}
          imageUri={HERO_IMAGE}
        />

        <View style={styles.section}>
          <SectionTitle>MÓDULOS DE SISTEMA</SectionTitle>
          <ModulesGrid
            modules={MODULES}
            onModulePress={(route) => router.push(route)}
          />
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>

      <EcoBotButton onPress={() => router.push('/ecobot')} />
    </View>
  )
}