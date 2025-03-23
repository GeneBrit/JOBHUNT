// SignUpScreenStyles.js
import { StyleSheet } from 'react-native';

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
    paddingBottom: 20,
  },
  signupForm: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    marginVertical: 30,
    textAlign: 'center',
    color: 'white',
    fontSize: 32,
    fontWeight: '700',
    maxWidth: '90%',
  },
  formGroup: {
    marginBottom: 16,
    width: '100%',
    alignItems: 'center',
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
    borderRadius: 23,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    color: 'black',
    fontSize: 14,
    fontWeight: '500',
  },
  signupButton: {
    width: '70%',
    maxWidth: 232,
    height: 47,
    marginVertical: 30,
    backgroundColor: '#185216',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: '700',
  },
  loginLinkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  loginText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
  loginLink: {
    color: '#2C35DE',
    fontSize: 14,
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
});

export default styles;