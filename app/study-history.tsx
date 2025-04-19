import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Calendar, DateData } from 'react-native-calendars';

export default function StudyHistoryScreen() {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState('');
  
  // 学習日のサンプルデータ
  const studyDates = {
    '2023-06-01': { selected: true, marked: true, selectedColor: '#3b82f6' },
    '2023-06-03': { selected: true, marked: true, selectedColor: '#3b82f6' },
    '2023-06-05': { selected: true, marked: true, selectedColor: '#3b82f6' },
    '2023-06-08': { selected: true, marked: true, selectedColor: '#3b82f6' },
    '2023-06-10': { selected: true, marked: true, selectedColor: '#3b82f6' },
    '2023-06-12': { selected: true, marked: true, selectedColor: '#3b82f6' },
    '2023-06-15': { selected: true, marked: true, selectedColor: '#3b82f6' },
  };

  const handleNavToHome = () => {
    router.push('/home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>学習記録</Text>
        <Text style={styles.subtitle}>スペイン語学習の履歴</Text>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.calendarContainer}>
          <Calendar
            markedDates={studyDates}
            onDayPress={(day: DateData) => setSelectedDate(day.dateString)}
            theme={{
              calendarBackground: '#ffffff',
              textSectionTitleColor: '#64748b',
              selectedDayBackgroundColor: '#3b82f6',
              selectedDayTextColor: '#ffffff',
              todayTextColor: '#3b82f6',
              dayTextColor: '#2d3748',
              textDisabledColor: '#a0aec0',
              dotColor: '#3b82f6',
              selectedDotColor: '#ffffff',
              arrowColor: '#3b82f6',
              monthTextColor: '#2d3748',
              indicatorColor: '#3b82f6',
            }}
          />
        </View>
        
        <View style={styles.statsContainer}>
          <Text style={styles.statsTitle}>学習統計</Text>
          <View style={styles.statRow}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>7</Text>
              <Text style={styles.statLabel}>学習日数</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>3</Text>
              <Text style={styles.statLabel}>連続日数</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>70</Text>
              <Text style={styles.statLabel}>総問題数</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.navButton}
          onPress={handleNavToHome}
        >
          <FontAwesome name="home" size={28} color="#64748b" />
          <Text style={styles.navButtonText}>ホーム</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.navButton}
          onPress={() => {}}
        >
          <FontAwesome name="calendar" size={28} color="#3b82f6" />
          <Text style={styles.navButtonTextActive}>学習記録</Text>
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
  },
  calendarContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 10,
    marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  statsContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  statsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3b82f6',
  },
  statLabel: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 5,
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