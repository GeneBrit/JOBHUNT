import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#B1BD9F',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: height * 0.05,
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
    width: width * 1.1,
    height: height * 1.1,
    transform: [{ rotate: '-180deg' }],
  },
  firstBackgroundImage: {
    right: -width * 0.3,
    bottom: -height * 0.1,
  },
  secondBackgroundImage: {
    right: -width * 0.05,
    bottom: -height * 0.05,
    borderWidth: 1,
    borderColor: 'black',
  },
  content: {
    flex: 1,
    padding: width * 0.07,
    paddingTop: height * 0.05,
  },
  mainTitle: {
    color: 'white',
    fontSize: width * 0.08,
    fontFamily: 'Nunito',
    fontWeight: '700',
    marginBottom: height * 0.02,
    marginLeft: width * 0.02,
  },
  subTitle: {
    color: 'white',
    fontSize: width * 0.07,
    fontFamily: 'Nunito',
    fontWeight: '700',
    marginBottom: height * 0.05,
    marginLeft: width * 0.02,
    lineHeight: height * 0.04,
  },
  notNowButton: {
    width: width * 0.45,
    height: height * 0.06,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    paddingLeft: width * 0.03,
    marginBottom: height * 0.05,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  notNowText: {
    color: 'black',
    fontSize: width * 0.045,
    fontFamily: 'Nunito',
    fontWeight: '400',
  },
  uploadArea: {
    width: width * 0.85,
    height: height * 0.4,
    backgroundColor: 'rgba(176, 189, 159, 0.8)',
    borderRadius: 10,
    borderWidth: 4,
    borderColor: '#5A5A5A',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: height * 0.05,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: height * 0.02,
  },
  icon: {
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallIcon: {
    width: width * 0.15,
    height: width * 0.15,
    marginRight: width * 0.05,
  },
  largeIcon: {
    width: width * 0.17,
    height: width * 0.17,
    marginLeft: width * 0.05,
  },
  iconOutline: {
    borderWidth: 4,
    borderColor: '#5A5A5A',
    position: 'absolute',
  },
  uploadText: {
    color: '#5A5A5A',
    fontSize: width * 0.055,
    fontFamily: 'Nunito',
    fontWeight: '400',
    textAlign: 'center',
    marginTop: height * 0.02,
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
  },
  nextButtonText: {
    color: 'white',
    fontSize: width * 0.07,
    fontFamily: 'Nunito',
    fontWeight: '700',
  },
});

export default styles;