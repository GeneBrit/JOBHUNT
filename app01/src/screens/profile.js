// ProfileScreen.js
import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from '../styles/profileStyle'; // Importa los estilos desde el archivo separado

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

const ProfileScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [comment, setComment] = useState('');

  // Datos ficticios para la pantalla de perfil
  const profileData = {
    name: 'Oscar Pérez Gutiérrez',
    role: 'Front-End Developer',
    workExperience: [
      {
        id: '1',
        position: 'Front-End Developer',
        company: 'WebTech Solutions',
        location: 'Madrid',
        period: 'January 2021 – Present',
        responsibilities: [
          'Developed and maintained responsive web applications using HTML, CSS, and JavaScript.',
          'Collaborated with UX/UI designers to enhance user experience.',
          'Optimized website performance and accessibility.',
          'Led the implementation of React components for the company\'s flagship product.',
        ],
      },
      {
        id: '2',
        position: 'Web Developer Intern',
        company: 'Digital Innovations',
        location: 'Barcelona',
        period: 'June 2020 – December 2020',
        responsibilities: [
          'Assisted in front-end development tasks using HTML, CSS and JavaScript.',
          'Implemented responsive designs for mobile and desktop platforms.',
          'Participated in code reviews and team meetings.',
        ],
      },
    ],
    skills: [
      'HTML, CSS, JavaScript',
      'React, Vue.js',
      'Responsive Design',
      'Git, GitHub',
      'UI/UX Collaboration',
      'Performance Optimization',
    ],
    languages: [
      { language: 'Spanish', level: 'Native' },
      { language: 'English', level: 'Fluent' },
      { language: 'French', level: 'Basic' },
    ],
    education: [
      {
        id: '1',
        degree: 'Bachelor in Computer Science',
        institution: 'Universidad Complutense de Madrid',
        period: '2016 - 2020',
      },
    ],
  };

  const renderWorkExperience = () => {
    return profileData.workExperience.map((experience, index) => (
      <View key={experience.id} style={styles.experienceItem}>
        <View style={styles.experienceHeader}>
          <Text style={styles.positionText}>{experience.position}</Text>
          <Text style={styles.companyText}>
            {experience.company}, {experience.location}
          </Text>
          <Text style={styles.periodText}>{experience.period}</Text>
        </View>

        <View style={styles.responsibilitiesContainer}>
          {experience.responsibilities.map((item, idx) => (
            <View key={idx} style={styles.responsibilityItem}>
              <Icon name="circle" size={6} color={COLORS.primary} style={styles.bulletPoint} />
              <Text style={styles.responsibilityText}>{item}</Text>
            </View>
          ))}
        </View>

        {index < profileData.workExperience.length - 1 && (
          <View style={styles.experienceDivider} />
        )}
      </View>
    ));
  };

  const renderSkills = () => {
    return (
      <View style={styles.skillsContainer}>
        {profileData.skills.map((skill, index) => (
          <View key={index} style={styles.skillBadge}>
            <Text style={styles.skillText}>{skill}</Text>
          </View>
        ))}
      </View>
    );
  };

  const renderLanguages = () => {
    return profileData.languages.map((lang, index) => (
      <View key={index} style={styles.languageItem}>
        <Text style={styles.languageName}>{lang.language}</Text>
        <View style={styles.levelContainer}>
          <Text style={styles.languageLevel}>{lang.level}</Text>
        </View>
      </View>
    ));
  };

  const renderEducation = () => {
    return profileData.education.map((edu) => (
      <View key={edu.id} style={styles.educationItem}>
        <Text style={styles.degreeText}>{edu.degree}</Text>
        <Text style={styles.institutionText}>{edu.institution}</Text>
        <Text style={styles.educationPeriodText}>{edu.period}</Text>
      </View>
    ));
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />

      {/* Header/Top bar */}
      <View style={[styles.header, { paddingTop: insets.top > 0 ? 0 : 10 }]}>
        <TouchableOpacity 
          style={styles.headerButton}
          onPress={() => navigation.navigate('homeC')}
        >
          <Icon name="arrow-left" size={20} color={COLORS.card} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity style={styles.headerButton}>
          <Icon name="ellipsis-v" size={20} color={COLORS.card} />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        {/* Profile Header with Image and Basic Info */}
        <View style={styles.profileHeader}>
          <View style={styles.coverPhoto}>
            <LinearGradient colors={[COLORS.primary, COLORS.accent]} style={styles.gradient} />
          </View>

          <View style={styles.profileInfoContainer}>
            <View style={styles.profileImageContainer}>
              <Image
                source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
                style={styles.profileImage}
              />
            </View>

            <View style={styles.nameContainer}>
              <Text style={styles.nameText}>{profileData.name}</Text>
              <Text style={styles.roleText}>{profileData.role}</Text>

              <View style={styles.statsContainer}>
                <View style={styles.statItem}>
                  <Text style={styles.statValue}>127</Text>
                  <Text style={styles.statLabel}>Posts</Text>
                </View>
                <View style={styles.statDivider} />
                <View style={styles.statItem}>
                  <Text style={styles.statValue}>518</Text>
                  <Text style={styles.statLabel}>Connections</Text>
                </View>
                <View style={styles.statDivider} />
                <View style={styles.statItem}>
                  <Text style={styles.statValue}>24</Text>
                  <Text style={styles.statLabel}>Projects</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.actionButtonsContainer}>
            <TouchableOpacity style={styles.primaryButton}>
              <Icon name="user-plus" size={14} color={COLORS.card} style={{ marginRight: 8 }} />
              <Text style={styles.primaryButtonText}>Connect</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.secondaryButton}>
              <Icon name="envelope" size={14} color={COLORS.primary} style={{ marginRight: 8 }} />
              <Text style={styles.secondaryButtonText}>Message</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Profile Content */}
        <View style={styles.contentContainer}>
          {/* Work Experience Section */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Icon name="briefcase" size={18} color={COLORS.primary} />
              <Text style={styles.sectionTitle}>Work Experience</Text>
            </View>

            <View style={styles.sectionContent}>
              {renderWorkExperience()}
            </View>
          </View>

          {/* Skills Section */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Icon name="tools" size={18} color={COLORS.primary} />
              <Text style={styles.sectionTitle}>Skills</Text>
            </View>

            <View style={styles.sectionContent}>
              {renderSkills()}
            </View>
          </View>

          {/* Languages Section */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Icon name="language" size={18} color={COLORS.primary} />
              <Text style={styles.sectionTitle}>Languages</Text>
            </View>

            <View style={styles.sectionContent}>
              {renderLanguages()}
            </View>
          </View>

          {/* Education Section */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Icon name="graduation-cap" size={18} color={COLORS.primary} />
              <Text style={styles.sectionTitle}>Education</Text>
            </View>

            <View style={styles.sectionContent}>
              {renderEducation()}
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Comment Input */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.commentWrapper}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
      >
        <View style={styles.commentContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.commentInput}
              placeholder="Write a comment..."
              placeholderTextColor={COLORS.textLight}
              value={comment}
              onChangeText={setComment}
              multiline={true}
              maxLength={250}
            />
          </View>

          <TouchableOpacity
            style={[
              styles.commentButton,
              { opacity: comment.trim().length > 0 ? 1 : 0.6 },
            ]}
            disabled={comment.trim().length === 0}
          >
            <Icon name="paper-plane" size={16} color={COLORS.card} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

// Componente LinearGradient personalizado (para evitar dependencias externas en este ejemplo)
const LinearGradient = ({ colors, style }) => {
  return (
    <View style={[style, { backgroundColor: colors[0] }]} />
  );
};

export default ProfileScreen;