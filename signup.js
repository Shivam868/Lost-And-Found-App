import { Link } from 'expo-router';
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

export default function SignUpScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Sign Up</Text>
          
          {/* Signup form */}
          <View style={styles.form}>
            {/* Email input */}
            <View style={styles.inputContainer}>
              <View style={styles.label}>
                <Text style={styles.labelText}>@</Text>
              </View>
              <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            {/* Password input */}
            <View style={styles.inputContainer}>
              <View style={styles.label}>
                <Text style={styles.labelText}>#</Text>
              </View>
              <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
            </View>

            {/* Signup button */}
            <TouchableOpacity style={styles.button} onPress={handleSignUp}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
          
          <Text style={styles.footerText}>
            Already have an account?{' '}
            <Link href="/login" style={styles.link}>Login</Link>
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  wrapper: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 36,
    fontWeight: '500',
    textTransform: 'uppercase',
    color: '#333333',
    marginBottom: 10,
  },
  form: {
    width: '100%',
    marginTop: 20,
    marginBottom: 30,
    alignItems: 'center',
    gap: 15,
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    backgroundColor: '#ffc629',
    height: 50,
    width: 50,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '500',
  },
  input: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    borderWidth: 2,
    borderColor: '#F5F5F5',
    borderLeftWidth: 0,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    padding: 15,
    fontSize: 16,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 1000,
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderWidth: 2,
    borderColor: '#333333',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    textTransform: 'uppercase',
    color: '#333333',
    textAlign: 'center',
  },
  footerText: {
    marginTop: 20,
    fontSize: 14,
    color: '#333333',
  },
  link: {
    color: '#ffc629',
    fontWeight: '600',
  },
});