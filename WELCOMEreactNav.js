import { useNavigation } from '@react-navigation/native';
import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Welcome</Text>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SIGNUPreactNav')}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LOGINreactNav')}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.imageContainer}>
          <Image source={require('../assets/images/ksuLOGO1.jpg')} style={styles.image} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f0f0' },
  scrollContainer: { flexGrow: 1, justifyContent: 'center' },
  wrapper: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: { fontSize: 36, fontWeight: '500', textTransform: 'uppercase', color: '#333', marginBottom: 100 },
  button: {
    marginTop: 10,
    backgroundColor: '#FFF',
    borderRadius: 1000,
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderWidth: 2,
    borderColor: '#333',
  },
  buttonText: { fontSize: 16, fontWeight: '600', textTransform: 'uppercase', color: '#333', textAlign: 'center' },
  imageContainer: { alignItems: 'center', marginTop: -290, marginBottom: 170 },
  image: { width: 180, height: 180, resizeMode: 'contain' },
});
