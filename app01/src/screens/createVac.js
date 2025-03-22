import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  useWindowDimensions,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const CreateVacancyScreen = ({ navigation }) => {
  const { width, height } = useWindowDimensions();
  const [vacancy, setVacancy] = useState('');
  const [description, setDescription] = useState('');
  const [jobType, setJobType] = useState('');
  const [location, setLocation] = useState('');

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
      
      {/* Form */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidingView}
      >
        <ScrollView 
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.formContainer}>
            <View style={styles.formGroup}>
              <Text style={styles.label}>Vacancy:</Text>
              <TextInput
                style={styles.input}
                placeholder="Network Administrator"
                value={vacancy}
                onChangeText={setVacancy}
              />
            </View>
            
            <View style={styles.formGroup}>
              <Text style={styles.label}>Description:</Text>
              <TextInput
                style={styles.textArea}
                placeholder="Enter job description"
                value={description}
                onChangeText={setDescription}
                multiline
                numberOfLines={4}
                textAlignVertical="top"
              />
            </View>
            
            <View style={styles.formGroup}>
              <Text style={styles.label}>Job type:</Text>
              <TextInput
                style={styles.input}
                placeholder="Full-time"
                value={jobType}
                onChangeText={setJobType}
              />
            </View>
            
            <View style={styles.formGroup}>
              <Text style={styles.label}>Location:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter location"
                value={location}
                onChangeText={setLocation}
              />
            </View>
            
            <TouchableOpacity 
              style={styles.btnNext}
              onPress={() => navigation && navigation.navigate('CreateVacancy2')}
            >
              <Text style={styles.btnNextText}>Next</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      
      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity 
          style={[styles.navItem, styles.activeNavItem]}
          onPress={() => navigation && navigation.navigate('HomeWorker')}
        >
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
        
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation && navigation.navigate('Favorites')}
        >
          <FontAwesome name="search" size={20} color="#000" style={styles.navIcon} />
          <Text style={styles.navText}>Favorites</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation && navigation.navigate('Profile')}
        >
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
  },
  keyboardAvoidingView: {
    flex: 1,
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
    height: 80,
    width: '40%',
    maxWidth: 150,
  },
  profileIcon: {
    width: 60,
    height: 60,
    backgroundColor: '#333',
    borderRadius: 30,
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  formContainer: {
    flex: 1,
    width: '100%',
    paddingBottom: 60, // Espacio para que no se oculte el contenido detrás del nav
  },
  formGroup: {
    marginBottom: 15,
    paddingHorizontal: '5%',
    paddingVertical: 10,
  },
  label: {
    marginBottom: 5,
    fontWeight: 'bold',
    fontSize: 16,
  },
  input: {
    width: '100%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    fontSize: 16,
  },
  textArea: {
    width: '100%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    fontSize: 16,
    minHeight: 100,
  },
  btnNext: {
    backgroundColor: '#006400',
    padding: 12,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 20,
    paddingHorizontal: 30,
  },
  btnNextText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
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
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: {
    alignItems: 'center',
    opacity: 0.6,
    paddingHorizontal: '2%',
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

export default CreateVacancyScreen;