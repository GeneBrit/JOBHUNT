// QuestionScreenStyles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  question: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  jobHuntTitle: {
    position: 'absolute',
    left: 143,
    top: 53,
    color: 'white',
    fontSize: 32,
    fontFamily: 'Nunito-Bold', // Necesitarás configurar esta fuente
    fontWeight: '700',
  },
  group12: {
    width: 428,
    height: 246,
    position: 'absolute',
    left: 0,
    top: 161,
  },
  ellipse1: {
    width: 222,
    height: 214,
    position: 'absolute',
    left: 95,
    top: 32,
    backgroundColor: 'rgba(30, 30, 30, 0.20)',
    borderRadius: 9999,
  },
  jobHuntLogo: {
    width: 424,
    height: 238,
    position: 'absolute',
    left: 4.3,
    top: 0,
    transform: [{ rotate: '1deg' }],
  },
  huntForOpportunities: {
    width: 232,
    height: 38,
    position: 'absolute',
    left: 98,
    top: 451,
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontFamily: 'Nunito',
    fontWeight: '500',
    lineHeight: 20,
    letterSpacing: 0.1,
  },
  createVacancy: {
    width: 269,
    height: 21,
    position: 'absolute',
    left: 80,
    top: 547,
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontFamily: 'Nunito',
    fontWeight: '500',
    lineHeight: 20,
    letterSpacing: 0.1,
  },
  button: {
    width: 243,
    height: 43,
    position: 'absolute',
    left: 80,
    backgroundColor: 'white',
    borderRadius: 18.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonYes: {
    top: 653,
  },
  buttonNo: {
    top: 751,
  },
  buttonText: {
    fontFamily: 'Nunito-Bold', // Necesitarás configurar esta fuente
    fontSize: 32,
    fontWeight: '700',
    color: 'black',
  },
});

export default styles;