import React from 'react';
import { StyleSheet, Text, View, Pressable, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

// 黄色のカラーテーマ
const COLORS = {
  primary: '#F0B428',
  secondary: '#FFD966',
  tertiary: '#FFF3CC',
  accent: '#FFF1CC',
  background: {
    main: '#FFFBEB',
    card: '#FFFFFF'
  },
  text: {
    dark: '#363636',
    medium: '#5F5F5F',
    light: '#8A8A8A',
    white: '#FFFFFF'
  }
};

export default function HomeScreen() {
  const router = useRouter();

  const handleStartQuiz = () => {
    router.push('/quiz');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>スタスペ</Text>
        <Text style={styles.subtitle}>¡Hola! 今日も学習を続けましょう</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <FontAwesome name="flag" size={120} color={COLORS.primary} />
        </View>

        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.startButton}
            onPress={handleStartQuiz}
          >
            <Text style={styles.startButtonText}>学習を始める</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background.main,
  },
  headerContainer: {
    backgroundColor: COLORS.primary,
    padding: 20,
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.text.white,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.text.white,
    opacity: 0.9,
    marginTop: 8,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 60,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  startButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    width: '80%',
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    marginBottom: 16,
  },
  startButtonText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.text.white,
  }
});
