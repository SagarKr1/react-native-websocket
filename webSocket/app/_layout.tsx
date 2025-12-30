import { Slot, Redirect, useSegments } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { isAuthenticated } from '@/assets/api/auth';

export default function RootLayout() {
  const segments = useSegments();
  const [authState, setAuthState] = useState<
    'loading' | 'auth' | 'guest'
  >('loading');

  useEffect(() => {
    const checkAuth = async () => {
      const ok = await isAuthenticated();
      setAuthState(ok ? 'auth' : 'guest');
    };
    checkAuth();
  }, []);

  if (authState === 'loading') {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  const inAuthGroup = segments[0] === '(auth)';

  // 🔒 Not logged in → block app routes
  if (authState === 'guest' && !inAuthGroup) {
    return <Redirect href="/(auth)/login" />;
  }

  // ✅ Logged in → block auth routes
  if (authState === 'auth' && inAuthGroup) {
    return <Redirect href="/(app)/(tabs)/home" />;
  }

  return <Slot />;
}
