// HomeCapacitorScreen.js
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

const HomeCapacitorScreen = ({ navigation }) => {
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

      {/* Recommended Tag */}
      <Text style={styles.recommendedTag}>you vacancies</Text>

      {/* Main Content */}
      <View style={styles.mainContent}>
        <Text style={styles.recommendationTitle}>
          Job vacancies{'\n'}
          your offer{'\n'}
        </Text>

        <TouchableOpacity style={styles.jobCard}>
          <View style={styles.jobInfo}>
            <View style={styles.jobIcon}>
              <Text style={styles.globeIcon}>🌐</Text>
              <Text style={styles.userIcon}>👤</Text>
            </View>
            <Text style={styles.jobTitle}>Network Administrator</Text>
          </View>
          <TouchableOpacity style={styles.seeDetails}>
            <Text style={styles.seeDetailsText}>see details</Text>
          </TouchableOpacity>
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
          onPress={() => navigation && navigation.navigate('Notifications')}
        >
          <FontAwesome name="bell" size={20} color="#000" style={styles.navIcon} />
          <Text style={styles.navText}>Notifications</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <FontAwesome name="search" size={20} color="#000" style={styles.navIcon} />
          <Text style={styles.navText}>Favorites</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <FontAwesome name="user" size={20} color="#000" style={styles.navIcon} />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeCapacitorScreen;