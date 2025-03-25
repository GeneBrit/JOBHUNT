// CreateVacancyScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  useWindowDimensions,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from '../styles/createVacStyles'; // Importa los estilos desde el archivo separado

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
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
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
              onPress={() => navigation && navigation.navigate('createVac2')}
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

export default CreateVacancyScreen;