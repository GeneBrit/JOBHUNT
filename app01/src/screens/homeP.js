import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from '../styles/homeCStyles'; // Importa los estilos desde el archivo separado

const HomeWorkerScreen = ({ navigation }) => {
  // Depuración: Verifica si navigation está definido
  console.log('Objeto de navegación:', navigation);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#9fc5a0" barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require('../assets/Logo JH B.png')}
          style={styles.logoImage}
          resizeMode="contain"
        />
        <View style={styles.profileIcon} />
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        <Text style={styles.recommendationTitle}>
          Welcome back, <Text style={styles.userName}>John!</Text>{'\n'}
        </Text>
        <Text style={styles.subTitle}>
          Check out these{'\n'}
          <Text style={styles.highlightedText}>perfect matches</Text>{'\n'}
          for your profile
        </Text>
        <TouchableOpacity style={styles.jobCard}>
          <View style={styles.jobInfo}>
            <View style={styles.jobIcon}>
              <Text style={styles.globeIcon}>🌐</Text>
              <Text style={styles.userIcon}>👤</Text>
            </View>
            <Text style={styles.jobTitle}>Network Administrator</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Floating Action Button */}
      <TouchableOpacity
        style={styles.fabButton}
        onPress={() => navigation && navigation.navigate('createVac')}
      >
        <FontAwesome name="plus" size={24} color="white" />
      </TouchableOpacity>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={[styles.navItem, styles.activeNavItem]}>
          <FontAwesome name="home" size={20} color="#2f9c36" style={styles.navIcon} />
          <Text style={[styles.navText, styles.activeNavText]}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => {
            if (navigation) {
              navigation.navigate('notifications');
            } else {
              console.error('El objeto de navegación es undefined');
            }
          }}
        >
          <FontAwesome name="bell" size={20} color="#000" style={styles.navIcon} />
          <Text style={styles.navText}>Notifications</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <FontAwesome name="search" size={20} color="#000" style={styles.navIcon} />
          <Text style={styles.navText}>Search</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('profile')}
        >
          <FontAwesome name="user" size={20} color="#000" style={styles.navIcon} />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeWorkerScreen;