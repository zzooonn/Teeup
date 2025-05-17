//src/pages/LoginPage.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { login } from '../services/auth'; // ✅ 서버 연동 함수

export default function LoginPage({ navigation, onLogin }) {
  console.log("🟢 LoginPage 렌더링됨");
  
  const [openid, setOpenid] = useState('');
  const [secure, setSecure] = useState(true);

  const handleLogin = async () => {
  console.log('🔐 로그인 시도 중...', openid); // ✅ 콘솔 찍어보기
  try {
    const user = await login(openid);
    console.log('✅ 로그인 성공 응답:', user);
    Alert.alert('로그인 성공', `환영합니다 ${user.nickname}`);
    onLogin(); // MainTab으로 전환
  } catch (error) {
    console.error(error);
    Alert.alert('로그인 실패', '유효하지 않은 openid입니다.');
  }
};

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.inner}
      >
        <Text style={styles.title}>TEEUP 로그인</Text>

        <TextInput
          style={styles.input}
          placeholder="OpenID 입력"
          value={openid}
          onChangeText={setOpenid}
          autoCapitalize="none"
        />

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginText}>로그인</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 32,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#004225',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  loginText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
