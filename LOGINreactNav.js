import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import {
  Alert, KeyboardAvoidingView, Platform, ScrollView,
  Text, TextInput, TouchableOpacity, View
} from 'react-native';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const validateForm = () => {
    const newErrors = { email: '', password: '' };
    let isValid = true;

    if (!email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!email.includes('@')) {
      newErrors.email = 'Please use a valid KSU email';
      isValid = false;
    }
    if (!password) {s
      newErrors.password = 'Password is required';
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };

  const handleLogin = () => {
    if (validateForm()) {
      console.log('Email:', email);
      console.log('Password:', password);
      Alert.alert('Success', 'Hooty Hoo! Logged in successfully!');
      navigation.navigate('BottomTabBar')
    }
  };

  const handleSignUp = () => {
    navigation.navigate('SignUpScreen')
  }

  const isFormComplete = email && password;

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Login</Text>

          <View style={styles.form}>
            <View style={styles.inputContainer}>
              <View style={styles.label}><Text style={styles.labelText}>@</Text></View>
              <TextInput
                style={[styles.input, errors.email && styles.inputError]}
                placeholder="KSU Email"
                value={email}
                onChangeText={(t) => setEmail(t)}
                keyboardType="email-address"
                autoCapitalize="none"
                placeholderTextColor="#999"
              />
            </View>
            {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}

            <View style={styles.inputContainer}>
              <View style={styles.label}><Text style={styles.labelText}>#</Text></View>
              <TextInput
                style={[styles.input, errors.password && styles.inputError]}
                placeholder="Password"
                value={password}
                onChangeText={(t) => setPassword(t)}
                //secureTextEntry
                placeholderTextColor="#999"
              />
            </View>
            {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}

            <TouchableOpacity
              style={[styles.button, !isFormComplete && styles.buttonDisabled]}
              onPress={handleLogin}
              disabled={!isFormComplete}
            >
              <Text style={[styles.buttonText, !isFormComplete && styles.buttonTextDisabled]}>
                Login
              </Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.footerText}>
            Don't have an account?{' '}
            <Text style={styles.link} onPress={handleSignUp}>Sign Up</Text>
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

import { StyleSheet } from 'react-native';

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
    height: 57,
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
  inputError: {
    borderColor: 'red',
    borderWidth: 1,
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
  buttonDisabled: {
    backgroundColor: '#f0f0f0',
    borderColor: '#cccccc',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    textTransform: 'uppercase',
    color: '#333333',
    textAlign: 'center',
  },
  buttonTextDisabled: {
    color: '#cccccc',
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
  errorText: {
    alignSelf: 'flex-start',
    color: 'red',
    fontSize: 12,
    marginTop: -10,
    marginLeft: 10,
  },
  });
