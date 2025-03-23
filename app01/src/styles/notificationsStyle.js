// AppStyles.js
import { StyleSheet, Dimensions } from 'react-native';

// Colores y constantes
const COLORS = {
  primaryGreen: '#2f9c36',
  primaryGreenLight: '#3ab344',
  backgroundLight: '#f8f9fa',
  textDark: '#1a1a1a',
  textLight: '#666',
  white: '#fff',
};

const BORDER_RADIUS = 12;
const { width } = Dimensions.get('window');
const isSmallDevice = width < 375;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundLight,
  },
  header: {
    backgroundColor: COLORS.white,
    paddingVertical: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.05)',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  headerTwo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Add this
    width: '100%', // Add this
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: COLORS.textDark,
    marginRight: 20, // Add this to give some spacing from the right edge
  },
  logoContainer: {
    width: 50,
    height: 40,
    justifyContent: 'center',
  },
  logoImage: {
    width: '200%',
    height: '200%',
  },
  searchWrapper: {
    padding: 16,
  },
  searchContainer: {
    position: 'relative',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    position: 'absolute',
    left: 16,
    zIndex: 1,
  },
  searchInput: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: BORDER_RADIUS,
    paddingVertical: 12,
    paddingLeft: 48,
    paddingRight: 16,
    fontSize: 16,
  },
  notificationGrid: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginHorizontal: 8,
    borderRadius: BORDER_RADIUS,
    overflow: 'hidden',
    marginBottom: 80, // Espacio para la navegación inferior
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.08)',
  },
  profileIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: COLORS.primaryGreen,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  profileInitial: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: '600',
  },
  notificationContent: {
    flex: 1,
    overflow: 'hidden',
  },
  candidateJob: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
    color: COLORS.textDark,
  },
  candidateName: {
    fontSize: 14,
    marginBottom: 4,
    color: COLORS.textLight,
  },
  notificationTime: {
    fontSize: 12,
    color: COLORS.textLight,
  },
  navBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    flexDirection: 'row',
    paddingTop: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 5,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  navText: {
    marginTop: 4,
    fontSize: 12,
    color: COLORS.textLight,
  },
  activeNavText: {
    color: COLORS.primaryGreen,
  },
});

export default styles;