// SignUpScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../styles/sigupStyles'; // Importa los estilos desde el archivo separado

const SignUpScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Obtener dimensiones de la pantalla
  const { width, height } = useWindowDimensions();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <LinearGradient
        colors={['#287126', '#57bc69']}
        style={styles.gradient}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboardAvoidView}
        >
          <ScrollView
            contentContainerStyle={styles.scrollView}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.signupForm}>
              <Text style={styles.title}>Create an account to{'\n'}get started</Text>

              <View style={styles.formGroup}>
                <Text style={styles.label}>First name</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Simon"
                  placeholderTextColor="rgba(0, 0, 0, 0.23)"
                  value={firstName}
                  onChangeText={setFirstName}
                />
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Last name</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Hernandez"
                  placeholderTextColor="rgba(0, 0, 0, 0.23)"
                  value={lastName}
                  onChangeText={setLastName}
                />
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>E-mail</Text>
                <TextInput
                  style={styles.input}
                  placeholder="example@email.com"
                  placeholderTextColor="rgba(0, 0, 0, 0.23)"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={email}
                  onChangeText={setEmail}
                />
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Create a password</Text>
                <TextInput
                  style={styles.input}
                  placeholder="************"
                  placeholderTextColor="rgba(0, 0, 0, 0.23)"
                  secureTextEntry
                  value={password}
                  onChangeText={setPassword}
                />
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Confirm your password</Text>
                <TextInput
                  style={styles.input}
                  placeholder="************"
                  placeholderTextColor="rgba(0, 0, 0, 0.23)"
                  secureTextEntry
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                />
              </View>

              <TouchableOpacity
                style={styles.signupButton}
                onPress={() => navigation?.navigate('login')}
              >
                <Text style={styles.buttonText}>Sign up</Text>
              </TouchableOpacity>

              <View style={styles.loginLinkContainer}>
                <Text style={styles.loginText}>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation?.navigate('Login')}>
                  <Text style={styles.loginLink}>sign in</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default SignUpScreen;