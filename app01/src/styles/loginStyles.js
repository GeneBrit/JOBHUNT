// LoginScreenStyles.js
import { StyleSheet } from 'react-native';

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
    color: '#185216',
    fontSize: 18,
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
});

export default styles;