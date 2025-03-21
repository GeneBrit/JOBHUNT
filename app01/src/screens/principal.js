import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  useWindowDimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const PrincipalScreen = ({ navigation }) => {
  // Usar useWindowDimensions hook para obtener dimensiones actualizadas
  const { width, height } = useWindowDimensions();
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <LinearGradient
        colors={['#287126', '#57bc69']}
        style={styles.principal}
      >
        <View style={styles.contentContainer}>
          {/* Logo */}
          <View style={styles.logoContainer}>
            <Image
              source={require('../assets/Logo JH.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
          
          {/* Sección central con eslogan */}
          <View style={styles.middleContainer}>
            <Text style={styles.eslogan}>
              Hunt for opportunities, not for jobs.
            </Text>
          </View>
         
          {/* Sección inferior con botones */}
          <View style={styles.bottomContainer}>
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
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.signIn}>sign in</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  principal: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  logoContainer: {
    width: 428,
    height: 246,
    right:-35,
    top: 161,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 424,
    height: 238,
    transform: [{ rotate: '1deg' }],
  },
  middleContainer: {
    position: 'absolute',
    top: 420, // Ajusta según sea necesario
    width: '80%',
    alignItems: 'center',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 40, // Asegura que siempre esté en la parte inferior
    width: '100%',
    alignItems: 'center',
  },
  button: {
    width: '80%',
    maxWidth: 340,
    height: 55,
    marginBottom: 20,
  },
  buttonBackground: {
    width: '100%',
    height: 55,
    backgroundColor: 'white',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  createAccount: {
    color: 'black',
    fontSize: 18,
    fontWeight: '500',
    letterSpacing: 0.1,
  },
  questionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  questionText: {
    color: 'white',
    fontSize: 16,
  },
  signIn: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  eslogan: {
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
    fontWeight: '500',
    marginVertical: 20,
  },
});

export default PrincipalScreen;
