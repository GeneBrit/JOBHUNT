import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const SignUpScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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
          <ScrollView contentContainerStyle={styles.scrollView}>
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
              
              <TouchableOpacity style={styles.signupButton}>
                <Text style={styles.buttonText}>Sign up</Text>
              </TouchableOpacity>
              
              <View style={styles.loginLinkContainer}>
                <Text style={styles.loginText}>Already have an account? </Text>
                <TouchableOpacity>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  keyboardAvoidView: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
  },
  signupForm: {
    padding: 20,
  },
  title: {
    width: 307,
    marginVertical: 40,
    alignSelf: 'center',
    textAlign: 'center',
    color: 'white',
    fontSize: 32,
    fontFamily: 'Nunito-Bold', // Necesitarás configurar esta fuente
    fontWeight: '700',
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    textAlign: 'center',
    color: 'black',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    letterSpacing: 0.1,
    marginBottom: 5,
  },
  input: {
    width: 340,
    height: 55,
    alignSelf: 'center',
    borderRadius: 23.4043,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    color: 'black',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    letterSpacing: 0.1,
  },
  signupButton: {
    width: 232,
    height: 47,
    marginVertical: 40,
    alignSelf: 'center',
    backgroundColor: '#185216',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 32,
    fontFamily: 'Nunito-Bold', // Necesitarás configurar esta fuente
    fontWeight: '700',
  },
  loginLinkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    letterSpacing: 0.1,
  },
  loginLink: {
    color: '#2C35DE',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    letterSpacing: 0.1,
  },
});

export default SignUpScreen;