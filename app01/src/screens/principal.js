// PrincipalScreen.js
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  useWindowDimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../styles/principalStyles'; // Importa los estilos desde el archivo separado

const PrincipalScreen = ({ navigation }) => {
  const { width, height } = useWindowDimensions();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <LinearGradient
        colors={['#287126', '#57bc69']}
        style={styles.principal}
      >
        <View style={styles.contentContainer}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../assets/Logo JH.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
          
          <View style={styles.middleContainer}>
            <Text style={styles.eslogan}>
              Hunt for opportunities, not for jobs.
            </Text>
          </View>
         
          <View style={styles.bottomContainer}>
            {/* Google Sign In Button */}
            <TouchableOpacity
              style={styles.googleButton}
              onPress={() => {/* Add Google sign in logic here */}}
            >
              <Image 
                source={require('../assets/icons8-logo-de-google-48.png')} 
                style={styles.googleIcon}
              />
              <Text style={styles.googleButtonText}>Continue with Google</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('election')}
            >
              <View style={styles.buttonBackground}>
                <Text style={styles.createAccount}>CREATE ACCOUNT</Text>
              </View>
            </TouchableOpacity>
            
            <View style={styles.questionContainer}>
              <Text style={styles.questionText}>Do you have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('login')}>
                <Text style={styles.signIn}>sign in</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default PrincipalScreen;

