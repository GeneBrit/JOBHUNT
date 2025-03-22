import React from 'react';
import { 
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView,
  ScrollView,
  StatusBar
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const HomeWorkerScreen = ({ navigation }) => {
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
      <Text style={styles.recommendedTag}>Reccomended</Text>
      
      {/* Main Content */}
      <View style={styles.mainContent}>
        <Text style={styles.recommendationTitle}>
          These are some{'\n'}
          vacancies that match{'\n'}
          with your prefences
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
    maxWidth: 425,
    alignSelf: 'center',
    height: '100%',
    maxHeight: 917,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  header: {
    backgroundColor: '#9fc5a0',
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoImage: {
    height: 100,
    width: 150,
  },
  profileIcon: {
    width: 80,
    height: 80,
    backgroundColor: '#333',
    borderRadius: 40,
  },
  recommendedTag: {
    color: '#777',
    fontSize: 14,
    marginTop: 10,
    marginLeft: 25,
  },
  mainContent: {
    padding: 20,
    flex: 1,
  },
  recommendationTitle: {
    color: '#185216',
    fontSize: 32,
    marginBottom: 20,
    textAlign: 'center',
    lineHeight: 44,
  },
  jobCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  jobInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  jobIcon: {
    width: 40,
    height: 40,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  globeIcon: {
    fontSize: 18,
    marginBottom: -5,
  },
  userIcon: {
    fontSize: 14,
  },
  jobTitle: {
    fontWeight: 'bold',
    color: '#333',
  },
  seeDetails: {
    backgroundColor: '#2f9c36',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  seeDetailsText: {
    color: 'white',
    fontSize: 12,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    paddingTop: 12,
    paddingBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  navItem: {
    alignItems: 'center',
    opacity: 0.6,
  },
  activeNavItem: {
    opacity: 1,
  },
  navIcon: {
    marginBottom: 5,
  },
  navText: {
    fontSize: 12,
    color: '#000',
  },
  activeNavText: {
    color: '#2f9c36',
  },
});

export default HomeWorkerScreen;