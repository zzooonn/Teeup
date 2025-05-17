// pages/LaunchScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function LaunchScreen({ navigation }) {
  return (
    <View style={styles.root}>
      <View style={styles.card}>
        {/* 상단: 로고 + 환영문구 */}
        <View style={styles.top}>
          <Image
            source={require('../../assets/logo.jpg')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.welcomeText}>Find Your Golf Mate</Text>
        </View>

        {/* 하단: 버튼 묶음 */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.signInButton}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.signInText}>Sign in</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.signUpButton}
            onPress={() => navigation.navigate('SignUp')}
          >
            <Text style={styles.signUpText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },

    card: {
        width: '85%',
        height: '80%',               // 카드 높이를 충분히 확보
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        padding: 24,
        justifyContent: 'space-between',  // 상단/하단 분리
    },

    top: {
        alignItems: 'center',
    },

    logo: {
        width: 174,
        height: 174,
        marginTop: 100,
    },

    welcomeText: {
        fontSize: 16,
        lineHeight: 26,
        color: '#6E7787',
        textAlign: 'center',
        marginTop: 16,
    },

    buttonContainer: {
        width: '100%',
    },

    /* Sign-in 버튼 */
    signInButton: {
        width: '100%',
        height: 52,
        backgroundColor: '#004225FF',  
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
    },
    signInText: {
        fontSize: 18,
        lineHeight: 28,
        color: '#FFFFFF',
    },

    /* Sign-up 버튼 (outlined) */
    signUpButton: {
        width: '100%',
        height: 52,
        backgroundColor: '#FFFFFF',
        borderColor: '#004225FF',
        borderWidth: 1,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    signUpText: {
        fontSize: 18,
        lineHeight: 28,
        color: '#004225FF',
    },
});
