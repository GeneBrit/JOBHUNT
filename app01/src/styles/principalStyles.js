// PrincipalScreenStyles.js
import { StyleSheet } from 'react-native';

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
    right: -35,
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
    top: 420,
    width: '80%',
    alignItems: 'center',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 40,
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
    color: '#2C35DE',
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
  googleButton: {
    width: '80%',
    maxWidth: 340,
    height: 55,
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  googleButtonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '500',
    letterSpacing: 0.1,
  },
});

export default styles;