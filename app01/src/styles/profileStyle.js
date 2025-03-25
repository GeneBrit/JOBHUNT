// ProfileScreenStyles.js
import { StyleSheet, Dimensions, Platform } from 'react-native';

// Colores y constantes
const COLORS = {
  primary: '#185216',
  primaryLight: 'rgba(24, 82, 22, 0.8)',
  primaryFaded: 'rgba(24, 82, 22, 0.1)',
  background: '#F5F7FA',
  card: '#FFFFFF',
  textDark: '#212121',
  textMedium: '#555555',
  textLight: '#888888',
  accent: '#3E885B',
  divider: '#EEEEEE',
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    paddingVertical: 15,
    paddingHorizontal: 16,
  },
  headerButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.card,
  },
  scrollView: {
    flex: 1,
  },
  profileHeader: {
    backgroundColor: COLORS.card,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: 'hidden',
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  coverPhoto: {
    height: 120,
    width: '100%',
    position: 'relative',
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  profileInfoContainer: {
    flexDirection: 'row',
    marginTop: -40,
    paddingHorizontal: 16,
  },
  profileImageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: COLORS.card,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  nameContainer: {
    flex: 1,
    marginLeft: 16,
    marginTop: 45,
  },
  nameText: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.textDark,
  },
  roleText: {
    fontSize: 16,
    color: COLORS.textMedium,
    marginBottom: 8,
  },
  statsContainer: {
    flexDirection: 'row',
    marginTop: 6,
    marginBottom: 16,
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statValue: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.primary,
  },
  statLabel: {
    fontSize: 12,
    color: COLORS.textLight,
  },
  statDivider: {
    width: 1,
    backgroundColor: COLORS.divider,
    height: '80%',
    alignSelf: 'center',
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingBottom: 16,
    marginTop: 8,
  },
  primaryButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginRight: 10,
    elevation: 1,
  },
  primaryButtonText: {
    color: COLORS.card,
    fontWeight: '600',
    fontSize: 14,
  },
  secondaryButton: {
    backgroundColor: COLORS.primaryFaded,
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginLeft: 10,
  },
  secondaryButtonText: {
    color: COLORS.primary,
    fontWeight: '600',
    fontSize: 14,
  },
  contentContainer: {
    padding: 16,
  },
  section: {
    backgroundColor: COLORS.card,
    borderRadius: 16,
    marginBottom: 16,
    padding: 16,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.textDark,
    marginLeft: 10,
  },
  sectionContent: {
    paddingHorizontal: 4,
  },
  experienceItem: {
    marginBottom: 16,
  },
  experienceHeader: {
    marginBottom: 8,
  },
  positionText: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.textDark,
  },
  companyText: {
    fontSize: 14,
    color: COLORS.textMedium,
    marginTop: 2,
  },
  periodText: {
    fontSize: 12,
    color: COLORS.textLight,
    marginTop: 2,
    fontStyle: 'italic',
  },
  responsibilitiesContainer: {
    marginTop: 8,
  },
  responsibilityItem: {
    flexDirection: 'row',
    marginBottom: 6,
    paddingLeft: 4,
  },
  bulletPoint: {
    marginTop: 6,
    marginRight: 8,
  },
  responsibilityText: {
    fontSize: 14,
    color: COLORS.textMedium,
    flex: 1,
  },
  experienceDivider: {
    height: 1,
    backgroundColor: COLORS.divider,
    marginVertical: 16,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 4,
    marginBottom: 8,
  },
  skillBadge: {
    backgroundColor: COLORS.primaryFaded,
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    margin: 4,
  },
  skillText: {
    fontSize: 13,
    color: COLORS.primary,
    fontWeight: '600',
  },
  languageItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.divider,
  },
  languageName: {
    fontSize: 15,
    color: COLORS.textDark,
    fontWeight: '600',
  },
  levelContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    backgroundColor: COLORS.primaryFaded,
  },
  languageLevel: {
    fontSize: 12,
    color: COLORS.primary,
    fontWeight: '600',
  },
  educationItem: {
    paddingVertical: 8,
  },
  degreeText: {
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.textDark,
  },
  institutionText: {
    fontSize: 14,
    color: COLORS.textMedium,
    marginTop: 2,
  },
  educationPeriodText: {
    fontSize: 12,
    color: COLORS.textLight,
    marginTop: 2,
    fontStyle: 'italic',
  },
  commentWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: COLORS.background,
    borderTopWidth: 1,
    borderTopColor: COLORS.divider,
    paddingTop: 8,
    paddingBottom: Platform.OS === 'ios' ? 34 : 8, // Ajuste para iOS
  },
  commentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  inputContainer: {
    flex: 1,
    backgroundColor: COLORS.card,
    borderRadius: 25,
    paddingHorizontal: 16,
    marginRight: 12,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  commentInput: {
    paddingVertical: Platform.OS === 'ios' ? 12 : 8,
    fontSize: 14,
    color: COLORS.textDark,
    maxHeight: 100,
  },
  commentButton: {
    width: 45,
    height: 45,
    backgroundColor: COLORS.primary,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
});

export default styles;