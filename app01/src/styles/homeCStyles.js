// HomeCapacitorScreenStyles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
    maxWidth: 425,
    alignSelf: 'center',
    height: '100%',
    maxHeight: 917,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
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
    height: 100,
    width: 150,
  },
  profileIcon: {
    width: 80,
    height: 80,
    backgroundColor: '#333',
    borderRadius: 40,
  },
  recommendedTag: {
    color: '#777',
    fontSize: 14,
    marginTop: 10,
    marginLeft: 25,
  },
  mainContent: {
    padding: 20,
    flex: 1,
  },
  recommendationTitle: {
    color: '#185216',
    fontSize: 32,
    marginBottom: 20,
    textAlign: 'center',
    lineHeight: 48,
  },
  subTitle: {
    fontSize: 28, // Increased from 24 to make it more prominent
    color: '#333',
    lineHeight: 40, // Increased to maintain proper spacing
    marginBottom: 15,
    textAlign: 'center', // Added to center the text
  },
  highlightedText: {
    fontSize: 30, // Add this new style
    color: '#185216',
    fontWeight: 'bold',
  },
  jobCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  jobInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  jobIcon: {
    width: 40,
    height: 40,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  globeIcon: {
    fontSize: 18,
    marginBottom: -5,
  },
  userIcon: {
    fontSize: 14,
  },
  jobTitle: {
    fontWeight: 'bold',
    color: '#333',
  },
  seeDetails: {
    backgroundColor: '#2f9c36',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  seeDetailsText: {
    color: 'white',
    fontSize: 12,
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
  },
  navItem: {
    alignItems: 'center',
    opacity: 0.6,
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
  fabButton: {
    position: 'absolute',
    bottom: 70,
    right: 20,
    backgroundColor: '#2f9c36',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
});

export default styles;