// QuestionScreen.js
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../styles/questionStyle'; // Importa los estilos desde el archivo separado

const QuestionScreen = ({ navigation }) => {
  const handleYesPress = () => {
    // Navegar a la pantalla de creación de vacante
    navigation && navigation.navigate('CreateVacancy');
  };

  const handleNoPress = () => {
    // Navegar a la siguiente pantalla (dashboard, home, etc.)
    navigation && navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#287126', '#57bc69']}
        style={styles.question}
      >
        <Text style={styles.jobHuntTitle}>JobHunt</Text>

        <View style={styles.group12}>
          <View style={styles.ellipse1} />
          <Image
            source={require('../images/Logo_JH.png')}
            style={styles.jobHuntLogo}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.huntForOpportunities}>
          Hunt for opportunities, not for jobs.
        </Text>

        <Text style={styles.createVacancy}>
          Do you want to create a job vacancy?
        </Text>

        <TouchableOpacity
          style={[styles.button, styles.buttonYes]}
          onPress={handleYesPress}
        >
          <Text style={styles.buttonText}>Yes</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.buttonNo]}
          onPress={handleNoPress}
        >
          <Text style={styles.buttonText}>Not for now</Text>
        </TouchableOpacity>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default QuestionScreen;