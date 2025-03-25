// PreferencesScreenStyles.js
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#B1BD9F',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#B1BD9F',
    minHeight: height,
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  backgroundImage: {
    position: 'absolute',
    right: -width * 0.3,
    bottom: -height * 0.1,
    width: width * 1.1,
    height: height * 1.1,
    opacity: 0.3,
  },
  content: {
    flex: 1,
    padding: width * 0.05,
    paddingTop: height * 0.05,
  },
  title: {
    color: 'white',
    fontSize: width * 0.08,
    fontFamily: 'Nunito',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: height * 0.05,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: height * 0.05,
  },
  preferenceButton: {
    width: width * 0.43,
    height: height * 0.1,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: height * 0.02,
  },
  preferenceText: {
    textAlign: 'center',
    color: 'black',
    fontSize: width * 0.05,
    fontFamily: 'Nunito',
    fontWeight: '700',
    paddingHorizontal: width * 0.01,
  },
  nextButton: {
    width: width * 0.3,
    height: height * 0.06,
    backgroundColor: '#185216',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: height * 0.02,
    marginBottom: height * 0.05,
  },
  nextButtonText: {
    color: 'white',
    fontSize: width * 0.07,
    fontFamily: 'Nunito',
    fontWeight: '700',
  },
});

export default styles;