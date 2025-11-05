import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import {
  Alert, KeyboardAvoidingView, Platform, ScrollView,
  Text,
  TextInput, TouchableOpacity,
  View
} from 'react-native';

export default function SignUpScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '', confirmPassword: '' });
  const placeholderColor = '#999';

  const validateForm = () => {
    const newErrors = { email: '', password: '', confirmPassword: '' };
    let isValid = true;

    if (!email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!email.endsWith('@ksu.edu')) {
      newErrors.email = 'Please use a valid KSU email';
      isValid = false;
    }
    if (!password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }
    if (!confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
      isValid = false;
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };

  const handleSignUp = () => {
    if (validateForm()) {
      console.log('Email:', email);
      console.log('Password:', password);
      Alert.alert('Success', 'Account created successfully!');
    }
  };

  const evaluatePasswordStrength = (text) => {
    setPassword(text);
    if (text.length === 0) setPasswordStrength('');
    else if (text.length < 5) setPasswordStrength('Weak');
    else if (text.length < 8) setPasswordStrength('Medium');
    else setPasswordStrength('Strong');
  };

  const getStrengthColor = () => ({
    Weak: 'red',
    Medium: 'orange',
    Strong: 'green',
  }[passwordStrength] || '#333');

  const isFormComplete = email && password && confirmPassword && password === confirmPassword;

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Sign Up</Text>

          <View style={styles.form}>
            <View style={styles.inputContainer}>
              <View style={styles.label}>
                <Text style={styles.labelText}>@</Text>
              </View>
              <TextInput
                style={[styles.input, errors.email && styles.inputError]}
                placeholder="KSU Email"
                placeholderTextColor={placeholderColor}
                value={email}
                onChangeText={(text) => {
                  setEmail(text);
                  if (text && errors.email) {
                    setErrors(prev => ({ ...prev, email: '' }));
                  }
                }}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
            {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}

            <View style={styles.inputContainer}>
              <View style={styles.label}>
                <Text style={styles.labelText}>#</Text>
              </View>
              <TextInput
                style={[styles.input, errors.password && styles.inputError]}
                placeholder="Password"
                placeholderTextColor={placeholderColor}
                value={password}
                onChangeText={evaluatePasswordStrength}
                secureTextEntry
              />
            </View>
            {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}

            {passwordStrength ? (
              <Text style={[styles.indicator, { color: getStrengthColor() }]}>
                Password is {passwordStrength}
              </Text>
            ) : null}
            <View style={styles.inputContainer}>
              <View style={styles.label}>
                <Text style={styles.labelText}>#</Text>
              </View>
              <TextInput
                style={[styles.input, errors.confirmPassword && styles.inputError]}
                placeholder="Confirm Password"
                placeholderTextColor={placeholderColor}
                value={confirmPassword}
                onChangeText={(text) => {
                  setConfirmPassword(text);
                  if (text && errors.confirmPassword) {
                    setErrors(prev => ({ ...prev, confirmPassword: '' }));
                  }
                }}
                secureTextEntry
              />
            </View>
            {errors.confirmPassword ? <Text style={styles.errorText}>{errors.confirmPassword}</Text> : null}
            <TouchableOpacity 
              style={[
                styles.button, 
                !isFormComplete && styles.buttonDisabled
              ]} 
              onPress={handleSignUp}
              disabled={!isFormComplete}
            >
              <Text style={[
                styles.buttonText,
                !isFormComplete && styles.buttonTextDisabled
              ]}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.footerText}>
            Already have an account?{' '}
            <Text style={styles.link} onPress={() => navigation.navigate('LOGINreactNav')}>Login</Text>
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

// (keep your same styles)
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
  indicator: {
    alignSelf: 'flex-start',
    marginLeft: 10,
    fontSize: 14,
    fontWeight: '500',
  },
  errorText: {
    alignSelf: 'flex-start',
    color: 'red',
    fontSize: 12,
    marginTop: -10,
    marginLeft: 10,
  },
});
