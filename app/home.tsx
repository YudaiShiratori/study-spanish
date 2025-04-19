import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function HomeScreen() {
  const router = useRouter();

  const handleStartQuiz = () => {
    router.push('/quiz');
  };

  const handleShowHistory = () => {
    router.push('/study-history');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>スペイン語学習</Text>
        <Text style={styles.subtitle}>DELE B2-C1レベル</Text>
      </View>

      <View style={styles.contentContainer}>        
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionTitle}>今日のスペイン語学習</Text>
          <Text style={styles.descriptionText}>
            10問のスペイン語クイズで毎日の学習習慣を作りましょう。
            仮定法、接続法、慣用表現など、DELE B2-C1レベルの問題に挑戦できます。
          </Text>
        </View>

        <TouchableOpacity 
          style={styles.startButton}
          onPress={handleStartQuiz}
        >
          <Text style={styles.startButtonText}>学習を始める</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.navButton}
          onPress={() => {}}
        >
          <FontAwesome name="home" size={28} color="#3b82f6" />
          <Text style={styles.navButtonTextActive}>ホーム</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.navButton}
          onPress={handleShowHistory}
        >
          <FontAwesome name="calendar" size={28} color="#64748b" />
          <Text style={styles.navButtonText}>学習記録</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  headerContainer: {
    backgroundColor: '#3b82f6',
    padding: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  contentContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  imagePlaceholder: {
    width: 200,
    height: 200,
    backgroundColor: '#e2e8f0',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePlaceholderText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#3b82f6',
  },
  descriptionContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  descriptionText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#4b5563',
    textAlign: 'center',
  },
  startButton: {
    backgroundColor: '#3b82f6',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  startButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    backgroundColor: 'white',
  },
  navButton: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  navButtonText: {
    fontSize: 12,
    color: '#64748b',
    marginTop: 4,
  },
  navButtonTextActive: {
    fontSize: 12,
    color: '#3b82f6',
    fontWeight: 'bold',
    marginTop: 4,
  }
}); 