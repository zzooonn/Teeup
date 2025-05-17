// src/AppNavigator.js
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LaunchScreen from './pages/LaunchScreen';   // 추가
import LoginPage     from './pages/LoginPage';
import MainTab       from './MainTabbar';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Launch"          // 첫 진입을 런치로
        screenOptions={{ headerShown: false }}
      >
        {/* ① Launch → 버튼 누르면 Login 으로 */}
        <Stack.Screen name="Launch" component={LaunchScreen} />

        {/* ② 로그인 전 화면 */}
        {!isLoggedIn && (
          <Stack.Screen name="Login">
            {props => (
              <LoginPage
                {...props}
                onLogin={() => setIsLoggedIn(true)}
              />
            )}
          </Stack.Screen>
        )}

        {/* ③ 로그인 후 메인 탭 */}
        {isLoggedIn && (
          <Stack.Screen name="MainTab" component={MainTab} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
