// ElectionScreen.js
import React from 'react';
import { Image, View, Text, TouchableOpacity, SafeAreaView, useWindowDimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../styles/electionStyles'; // Importa los estilos desde el archivo separado

const ElectionScreen = ({ navigation }) => {
  const { width, height } = useWindowDimensions();

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#287126', '#57bc69']}
        style={styles.election}
      >
        <View style={styles.group11}>
          <Image
            source={require('../assets/Logo JH.png')}
            style={styles.logo}
            resizeMode="contain"
          />

          {/* Eslogan */}
          <Text style={styles.eslogan}>
            Hunt for opportunities, not for jobs.
          </Text>

          {/* Título principal */}
          <View style={styles.titleContainer}>
            <Text style={styles.title}>What are you</Text>
            <Text style={styles.title}>looking for?</Text>
          </View>

          {/* Botones */}
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation?.navigate('preferences')}
            >
              <View style={styles.buttonBackground}>
                <Text style={styles.buttonText}>Search for a Job</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation?.navigate('signup')}
            >
              <View style={styles.buttonBackground}>
                <Text style={styles.buttonText}>Search for employees</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default ElectionScreen;