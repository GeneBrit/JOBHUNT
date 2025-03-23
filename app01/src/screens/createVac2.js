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
  Platform,
  Alert
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const CreateVacancyScreenTwo = ({ navigation }) => {
  const { width, height } = useWindowDimensions();
  const [salary, setSalary] = useState('');
  const [requirements, setRequirements] = useState('');
  const [jobType, setJobType] = useState('');
  const [benefits, setBenefits] = useState('');
  const [image, setImage] = useState(null);

  // Función para seleccionar una imagen de la galería
  const pickImage = async () => {
    try {
      // Pedir permiso para acceder a la galería
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      
      if (status !== 'granted') {
        Alert.alert('Permiso denegado', 'Necesitamos permisos para acceder a tu galería');
        return;
      }
      
      // Lanzar selector de imágenes
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    } catch (error) {
      console.error('Error al seleccionar imagen:', error);
      Alert.alert('Error', 'No se pudo seleccionar la imagen');
    }
  };

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
              <Text style={styles.label}>Salary:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter salary range"
                value={salary}
                onChangeText={setSalary}
              />
            </View>
            
            <View style={styles.formGroup}>
              <Text style={styles.label}>Requirements:</Text>
              <TextInput
                style={styles.textArea}
                placeholder="Enter job requirements"
                value={requirements}
                onChangeText={setRequirements}
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
              <Text style={styles.label}>Benefits:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter job benefits"
                value={benefits}
                onChangeText={setBenefits}
              />
            </View>
            
            {/* Image Upload */}
            <View style={styles.formGroup}>
              <Text style={styles.label}>Image:</Text>
              <TouchableOpacity style={styles.uploadBox} onPress={pickImage}>
                {image ? (
                  <Image source={{ uri: image }} style={styles.previewImage} />
                ) : (
                  <View style={styles.uploadButton}>
                    <FontAwesome name="upload" size={24} color="#333" />
                  </View>
                )}
              </TouchableOpacity>
            </View>
            
            <TouchableOpacity 
              style={styles.btnCreate}
              onPress={() => {
                Alert.alert(
                  "Success", 
                  "Vacancy created successfully!",
                  [{ text: "OK", onPress: () => navigation && navigation.navigate('HomeWorker') }]
                );
              }}
            >
              <Text style={styles.btnCreateText}>Create</Text>
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
  uploadBox: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadButton: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 15,
    backgroundColor: '#f8f8f8',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  previewImage: {
    width: '100%',
    height: 200,
    borderRadius: 5,
    resizeMode: 'cover',
  },
  btnCreate: {
    backgroundColor: '#006400',
    padding: 12,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 20,
    paddingHorizontal: 30,
  },
  btnCreateText: {
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

export default CreateVacancyScreenTwo;