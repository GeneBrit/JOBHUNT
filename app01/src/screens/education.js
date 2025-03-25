import React from 'react';
import { 
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  Dimensions,
  ScrollView,
  SafeAreaView
} from 'react-native';
import styles from '../styles/educationStyles'; // Importa los estilos desde el archivo separado

const { width, height } = Dimensions.get('window');

const EducationScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          {/* Background */}
          <View style={styles.background}>
            <Image 
              style={[styles.backgroundImage, styles.firstBackgroundImage]} 
              source={{ uri: 'https://placehold.co/446x919' }} 
            />
            <Image 
              style={[styles.backgroundImage, styles.secondBackgroundImage]} 
              source={{ uri: 'https://placehold.co/446x919' }} 
            />
          </View>
          
          {/* Content */}
          <View style={styles.content}>
            {/* Titles */}
            <Text style={styles.mainTitle}>Education</Text>
            <Text style={styles.subTitle}>Do you have a degree{"\n"}or master? Add it to your{"\n"}profile!</Text>
            
            {/* "Not for now" Button */}
            <TouchableOpacity 
              style={styles.notNowButton}
              onPress={() => navigation.navigate('homeP')}
            >
              <Text style={styles.notNowText}>Not for now</Text>
            </TouchableOpacity>
            
            {/* Document Upload Area */}
            <View style={styles.uploadArea}>
              {/* Icons */}
              <View style={styles.iconContainer}>
                <View style={[styles.icon, styles.smallIcon]}>
                  <View style={styles.iconOutline} />
                </View>
                <View style={[styles.icon, styles.largeIcon]}>
                  <View style={styles.iconOutline} />
                </View>
              </View>
              
              {/* Instruction Text */}
              <Text style={styles.uploadText}>Upload PDF, PNG or JPG</Text>
            </View>
            
            {/* Next Button */}
            <TouchableOpacity 
              style={styles.nextButton}
              onPress={() => navigation.navigate('homeP')}
            >
              <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EducationScreen;