// PreferencesScreen.js
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
import styles from '../styles/preferencesStyle'; // Importa los estilos desde el archivo separado

const { width, height } = Dimensions.get('window');

const PreferencesScreen = ({ navigation }) => {
  // Datos de las preferencias para mapear
  const preferences = [
    { id: 1, name: 'IT', row: 1, col: 1 },
    { id: 2, name: 'Marketing', row: 1, col: 2 },
    { id: 3, name: 'Manual Labor', row: 2, col: 1 },
    { id: 4, name: 'Sales', row: 2, col: 2 },
    { id: 5, name: 'Construction', row: 3, col: 1 },
    { id: 6, name: 'Finance', row: 3, col: 2 },
    { id: 7, name: 'Education', row: 4, col: 1 },
    { id: 8, name: 'Customer Service', row: 4, col: 2 },
    { id: 9, name: 'Healthcare', row: 5, col: 1 },
    { id: 10, name: 'Operations', row: 5, col: 2 },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          {/* Fondo */}
          <View style={styles.background}>
            <Image 
              style={[styles.backgroundImage, { transform: [{ rotate: '-180deg' }] }]} 
              source={{ uri: 'https://placehold.co/446x919' }} 
            />
            <Image 
              style={[styles.backgroundImage, { transform: [{ rotate: '-180deg' }] }]} 
              source={{ uri: 'https://placehold.co/446x919' }} 
            />
          </View>
          
          {/* Contenido */}
          <View style={styles.content}>
            {/* Título */}
            <Text style={styles.title}>What are your{"\n"}preferences?</Text>
            
            {/* Grid de preferencias */}
            <View style={styles.grid}>
              {preferences.map((pref) => (
                <TouchableOpacity 
                  key={pref.id}
                  style={styles.preferenceButton}
                >
                  <Text style={styles.preferenceText}>{pref.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
            
            {/* Botón Next */}
            <TouchableOpacity 
              style={styles.nextButton}
              onPress={() => navigation.navigate('education')}
            >
              <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PreferencesScreen;