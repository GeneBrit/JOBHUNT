// App.js
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StatusBar,
  Image,
  Dimensions,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/notificationsStyle'; // Importa los estilos desde el archivo separado

// Colores y constantes
const COLORS = {
  primaryGreen: '#2f9c36',
  primaryGreenLight: '#3ab344',
  backgroundLight: '#f8f9fa',
  textDark: '#1a1a1a',
  textLight: '#666',
  white: '#fff',
};

// Datos mock para las notificaciones
const NOTIFICATIONS_DATA = [
  {
    id: '1',
    initial: 'C',
    job: 'Developer HTML',
    name: 'Carlos Zepeda',
    time: '2h ago',
  },
  {
    id: '2',
    initial: 'A',
    job: 'Developer CSS',
    name: 'Antonio Banderas',
    time: '2h ago',
  },
  {
    id: '3',
    initial: 'L',
    job: 'UI/UX Designer',
    name: 'Laura González',
    time: '3h ago',
  },
  {
    id: '4',
    initial: 'M',
    job: 'React Native Developer',
    name: 'Miguel Ángel',
    time: '5h ago',
  },
  {
    id: '5',
    initial: 'J',
    job: 'Backend Developer',
    name: 'Juan Pérez',
    time: '6h ago',
  },
];

// Componente de perfil para las notificaciones
const ProfileIcon = ({ initial }) => (
  <View style={styles.profileIcon}>
    <Text style={styles.profileInitial}>{initial}</Text>
  </View>
);

// Componente de notificación
const NotificationItem = ({ item, onPress }) => (
  <TouchableOpacity
    style={styles.notificationItem}
    onPress={onPress}
    activeOpacity={0.7}
  >
    <ProfileIcon initial={item.initial} />
    <View style={styles.notificationContent}>
      <Text style={styles.candidateJob} numberOfLines={1}>{item.job}</Text>
      <Text style={styles.candidateName}>{item.name}</Text>
      <Text style={styles.notificationTime}>{item.time}</Text>
    </View>
    <Icon name="chevron-right" size={16} color={COLORS.textLight} />
  </TouchableOpacity>
);

// Componente de navegación inferior
const BottomNavigation = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.navBottom, { paddingBottom: Math.max(insets.bottom, 8) }]}>
      <TouchableOpacity 
        style={styles.navItem}
        onPress={() => navigation.navigate('homeC')}
      >
        <Icon name="home" size={24} color={COLORS.textLight} />
        <Text style={styles.navText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.navItem}
      >
        <Icon name="bell" size={24} color={COLORS.primaryGreen} />
        <Text style={[styles.navText, styles.activeNavText]}>Notifications</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.navItem}
        onPress={() => navigation.navigate('favorites')}
      >
        <Icon name="search" size={24} color={COLORS.textLight} />
        <Text style={styles.navText}>Favorites</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.navItem}
        onPress={() => navigation.navigate('profile')}
      >
        <Icon name="user" size={24} color={COLORS.textLight} />
        <Text style={styles.navText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

// Componente principal App
const NotificationScreen = ({ navigation }) => {
  const handleNotificationPress = (id) => {
    console.log(`Notificación presionada: ${id}`);
  };

  const renderNotificationItem = ({ item }) => (
    <NotificationItem
      item={item}
      onPress={() => handleNotificationPress(item.id)}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTwo}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../assets/Logo JH B.png')}
              style={styles.logoImage}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.headerTitle}>Notifications</Text>
        </View>
      </View>

      {/* Búsqueda */}
      <View style={styles.searchWrapper}>
        <View style={styles.searchContainer}>
          <Icon name="search" size={16} style={styles.searchIcon} color={COLORS.textLight} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search candidates"
            placeholderTextColor={COLORS.textLight}
          />
        </View>
      </View>

      {/* Lista de notificaciones */}
      <View style={styles.notificationGrid}>
        <FlatList
          data={NOTIFICATIONS_DATA}
          renderItem={renderNotificationItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>

      {/* Navegación inferior */}
      <BottomNavigation navigation={navigation} />
    </SafeAreaView>
  );
};

export default NotificationScreen;