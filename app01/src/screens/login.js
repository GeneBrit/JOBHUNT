import React, { useState } from 'react';
import { 
  View, 
  Text, 
  Image, 
  TextInput,
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  useWindowDimensions
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  // Obtener dimensiones de la pantalla
  const { width, height } = useWindowDimensions();
  
  const handleLogin = () => {
    // Aquí iría la lógica para enviar los datos al servidor
    if (!email || !password) {
      setError('Por favor complete todos los campos');
    } else {
      // Simulación de envío al servidor
      console.log('Intentando iniciar sesión con:', { email, password });
      // Aquí podrías navegar a la pantalla principal si el login es exitoso
<<<<<<< HEAD
      // navigation.navigate('Home');
=======
      navigation.navigate('homeC');
>>>>>>> Diaz
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <LinearGradient
        colors={['#287126', '#57bc69']}
        style={styles.loginContainer}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboardAvoidView}
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
            
            {/* Formulario de login */}
            <View style={styles.loginForm}>
              <View style={styles.formGroup}>
                <Text style={styles.label}>E-mail</Text>
                <TextInput
                  style={styles.input}
                  placeholder="email@example.com"
                  placeholderTextColor="rgba(0, 0, 0, 0.23)"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>
              
              <View style={styles.formGroup}>
                <Text style={styles.label}>Password</Text>
                <TextInput
                  style={styles.input}
                  placeholder="********"
                  placeholderTextColor="rgba(0, 0, 0, 0.23)"
                  secureTextEntry
                  value={password}
                  onChangeText={setPassword}
                />
              </View>
              
              {error ? (
                <View style={styles.errorContainer}>
                  <Text style={styles.errorText}>{error}</Text>
                </View>
              ) : null}
              
              <TouchableOpacity 
                style={styles.loginButton}
                onPress={handleLogin}
              >
                <Text style={styles.buttonText}>Log in</Text>
              </TouchableOpacity>
            </View>
            
            {/* Link para registro */}
            <View style={styles.signupLinkContainer}>
              <Text style={styles.signupLinkText}>Don't have an account? </Text>
              <TouchableOpacity onPress={() => navigation?.navigate('SignUp')}>
                <Text style={styles.signupLink}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginContainer: {
    flex: 1,
  },
  keyboardAvoidView: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 40,
  },
  logoContainer: {
    width: '100%',
    height: '35%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '90%',
    height: '90%',
    transform: [{ rotate: '1deg' }],
  },
  loginForm: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  formGroup: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    alignSelf: 'flex-start',
    marginLeft: '10%',
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 5,
  },
  input: {
    width: '90%',
    maxWidth: 340,
    height: 55,
    backgroundColor: 'white',
    borderRadius: 23,
    paddingHorizontal: 20,
    color: 'black',
    fontSize: 14,
    fontWeight: '500',
  },
  errorContainer: {
    backgroundColor: 'rgba(220, 53, 69, 0.9)',
    borderRadius: 6,
    padding: 12,
    marginVertical: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
    borderLeftWidth: 4,
    borderLeftColor: '#c82333',
    width: '90%',
    maxWidth: 340,
  },
  errorText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
  },
  loginButton: {
    width: '70%',
    maxWidth: 232,
    height: 47,
    backgroundColor: '#185216',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: '700',
  },
  signupLinkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  signupLinkText: {
    fontSize: 18,
    color: 'white',
    fontWeight: '400',
  },
  signupLink: {
<<<<<<< HEAD
    color: '#2C35DE',
=======
    color: '#185216',
>>>>>>> Diaz
    fontSize: 18,
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;