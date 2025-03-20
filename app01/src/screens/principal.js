// src/screens/principal.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native'; // Importar hook de navegación

const Principal = () => {
  const navigation = useNavigation(); // Crear la instancia de navegación

  // Función para navegar a la pantalla de crear cuenta
  const navigateToCreateAccount = () => {
    navigation.navigate('Election'); // Navegar a la pantalla de crear cuenta
  };

  // Función para navegar a la pantalla de inicio de sesión
  const navigateToSignIn = () => {
    navigation.navigate('Login'); // Navegar a la pantalla de inicio de sesión
  };

  return (
    <View style={styles.principal}>
      {/* Botón de crear cuenta */}
      <TouchableOpacity 
        style={styles.buttonContainer}
        onPress={navigateToCreateAccount}
      >
        <Svg width={340} height={55} viewBox="0 0 340 55" fill="none">
          <Path 
            d="M0 23.4043C0 10.4784 13.1227 0 29.3103 0H310.69C326.877 0 340 10.4784 340 23.4043V31.5957C340 44.5216 326.877 55 310.69 55H170H29.3103C13.1227 55 0 44.5216 0 31.5957V23.4043Z" 
            fill="white"
          />
        </Svg>
        <Text style={styles.createAccount}>CREATE ACCOUNT</Text>
      </TouchableOpacity>

      {/* Pregunta y enlace de inicio de sesión */}
      <View style={styles.question}>
        <Text style={styles.questionText}>Do you have an account?</Text>
        <TouchableOpacity onPress={navigateToSignIn}>
          <Text style={styles.signIn}>sign in</Text>
        </TouchableOpacity>
      </View>

      {/* Logo */}
      <View style={styles.group10}>
        <Image 
          source={require('../assets/Logo JH.png')} 
          style={styles.logo} 
          resizeMode="contain"
        />
      </View>

      {/* Eslogan */}
      <Text style={styles.eslogan}>Hunt for opportunities, not for jobs.</Text>
    </View>
  );
};

// Obtenemos las dimensiones de la pantalla para hacerlo más responsive
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  principal: {
    flex: 1, // Ajustar para ocupar toda la pantalla
    backgroundColor: '#287126',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '80%',
    height: 55,
    backgroundColor: '#287126', // Fondo del botón
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    borderRadius: 10,
  },
  createAccount: {
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
  },
  question: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  questionText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    marginRight: 5,
  },
  signIn: {
    color: 'blue',
    fontSize: 20,
    fontWeight: 'bold',
  },
  group10: {
    width: windowWidth,
    height: windowHeight * 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  logo: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.24,
    transform: [{ rotate: '1deg' }],
  },
  eslogan: {
    marginTop: 30,
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },
});

export default Principal;
