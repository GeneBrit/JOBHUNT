// CreateVacancyScreenStyles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  header: {
    backgroundColor: '#9fc5a0',
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoImage: {
    height: 80,
    width: '40%',
    maxWidth: 150,
  },
  profileIcon: {
    width: 60,
    height: 60,
    backgroundColor: '#333',
    borderRadius: 30,
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  formContainer: {
    flex: 1,
    width: '100%',
    paddingBottom: 60, // Espacio para que no se oculte el contenido detrás del nav
  },
  formGroup: {
    marginBottom: 15,
    paddingHorizontal: '5%',
    paddingVertical: 10,
  },
  label: {
    marginBottom: 5,
    fontWeight: 'bold',
    fontSize: 16,
  },
  input: {
    width: '100%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    fontSize: 16,
  },
  textArea: {
    width: '100%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    fontSize: 16,
    minHeight: 100,
  },
  btnNext: {
    backgroundColor: '#006400',
    padding: 12,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 20,
    paddingHorizontal: 30,
  },
  btnNextText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    paddingTop: 12,
    paddingBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: {
    alignItems: 'center',
    opacity: 0.6,
    paddingHorizontal: '2%',
  },
  activeNavItem: {
    opacity: 1,
  },
  navIcon: {
    marginBottom: 5,
  },
  navText: {
    fontSize: 12,
    color: '#000',
  },
  activeNavText: {
    color: '#2f9c36',
  },
});

export default styles;