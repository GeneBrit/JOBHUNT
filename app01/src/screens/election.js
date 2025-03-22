import React from 'react';
import { Image } from 'react-native';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  useWindowDimensions
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

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
              onPress={() => navigation?.navigate('signup')}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  election: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  logoContainer: {
    width: '100%',
    aspectRatio: 16/9,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  eslogan: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  titleContainer: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 30,
  },
  title: {
    color: 'white',
    fontSize: 36,
    fontWeight: '500',
    lineHeight: 44,
    textAlign: 'center',
  },
  buttonsContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 10,
  },
  button: {
    width: '90%',
    maxWidth: 300,
    height: 54,
    marginBottom: 20,
  },
  buttonBackground: {
    width: '100%',
    height: 54,
    backgroundColor: 'white',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  },
  group11: {
    width: 428,
    height: 246,
    right:-35,
    top: 270,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 424,
    height: 238,
    right:-5,
    transform: [{ rotate: '1deg' }],
  }
});

export default ElectionScreen;
