import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

// 黄色のカラーテーマを定義
const COLORS = {
  primary: '#F0B428',
  secondary: '#FFD966',
  tertiary: '#FFF7C2',
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
  },
  border: '#E2E8F0',
  shadow: 'rgba(0, 0, 0, 0.15)'
};

// モックデータ - 実際のアプリでは非同期ストレージから取得するようにする
const mockStudyDates = [
  '2023-10-01',
  '2023-10-02',
  '2023-10-03',
  '2023-10-05',
  '2023-10-07',
  '2023-10-08',
  '2023-10-10',
  '2023-10-12',
  '2023-10-15',
  '2023-10-18',
  '2023-10-20',
  '2023-10-21',
  '2023-10-22',
  '2023-10-25',
  '2023-10-28',
  '2023-10-30',
];

const DAYS_OF_WEEK = ['日', '月', '火', '水', '木', '金', '土'];
const MONTH_NAMES = [
  '1月', '2月', '3月', '4月', '5月', '6月',
  '7月', '8月', '9月', '10月', '11月', '12月'
];

export default function StudyHistoryScreen() {
  const router = useRouter();
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const studyDates = mockStudyDates.map(date => new Date(date));

  // 月を変更する関数
  const changeMonth = (increment: number) => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(newMonth.getMonth() + increment);
    setCurrentMonth(newMonth);
  };

  // 月の初日を取得
  const getFirstDayOfMonth = (date: Date) => {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    return firstDay;
  };

  // 月の日数を取得
  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  // 日付が勉強した日かどうかをチェック
  const isStudyDay = (date: Date) => {
    return studyDates.some(studyDate => 
      studyDate.getDate() === date.getDate() &&
      studyDate.getMonth() === date.getMonth() &&
      studyDate.getFullYear() === date.getFullYear()
    );
  };

  // 連続学習日数を計算
  const calculateStreakDays = () => {
    if (studyDates.length === 0) return 0;
    
    // 日付を並べ替え
    const sortedDates = [...studyDates].sort((a, b) => b.getTime() - a.getTime());
    
    // 今日の日付
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // 前日の日付
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    // まず、今日または昨日学習したかチェック
    const lastStudyDate = sortedDates[0];
    lastStudyDate.setHours(0, 0, 0, 0);
    
    const isToday = lastStudyDate.getTime() === today.getTime();
    const isYesterday = lastStudyDate.getTime() === yesterday.getTime();
    
    if (!isToday && !isYesterday) return 0;
    
    // 連続日数をカウント
    let streakDays = 1;
    let currentDate = isToday ? yesterday : new Date(yesterday);
    currentDate.setDate(currentDate.getDate() - 1);
    
    for (let i = 1; i < sortedDates.length; i++) {
      const studyDate = new Date(sortedDates[i]);
      studyDate.setHours(0, 0, 0, 0);
      
      if (studyDate.getTime() === currentDate.getTime()) {
        streakDays++;
        currentDate.setDate(currentDate.getDate() - 1);
      } else if (studyDate.getTime() < currentDate.getTime()) {
        break;
      }
    }
    
    return streakDays;
  };

  // カレンダーを描画
  const renderCalendar = () => {
    const firstDay = getFirstDayOfMonth(currentMonth);
    const daysInMonth = getDaysInMonth(currentMonth);
    const startingDayOfWeek = firstDay.getDay();
    
    const calendar = [];
    
    // 曜日ヘッダー
    const weekDayHeader = (
      <View style={styles.weekDayHeader} key="weekDayHeader">
        {DAYS_OF_WEEK.map((day, index) => (
          <Text 
            key={index} 
            style={[
              styles.weekDayText,
              index === 0 ? styles.sundayText : (index === 6 ? styles.saturdayText : {})
            ]}
          >
            {day}
          </Text>
        ))}
      </View>
    );
    
    calendar.push(weekDayHeader);
    
    // 日付を生成
    let days = [];
    
    // 前月の日付を埋める
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(
        <View style={styles.emptyDay} key={`empty-${i}`} />
      );
    }
    
    // 当月の日付
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
      const isStudied = isStudyDay(date);
      
      days.push(
        <View 
          key={day} 
          style={[
            styles.calendarDay,
            isStudied ? styles.studiedDay : {}
          ]}
        >
          <Text style={[styles.calendarDayText, isStudied ? styles.studiedDayText : {}]}>
            {day}
          </Text>
        </View>
      );
      
      // 7日ごとに新しい週を作成
      if ((startingDayOfWeek + day) % 7 === 0 || day === daysInMonth) {
        calendar.push(
          <View style={styles.calendarWeek} key={`week-${day}`}>
            {days}
          </View>
        );
        days = [];
      }
    }
    
    return calendar;
  };

  const streakDays = calculateStreakDays();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerTop}>
          <TouchableOpacity 
            style={styles.backButton} 
            onPress={() => router.push('/')}
          >
            <FontAwesome name="arrow-left" size={20} color={COLORS.text.white} />
          </TouchableOpacity>
          <Text style={styles.title}>学習記録</Text>
          <View style={{width: 20}} />
        </View>
        <View style={styles.streakBadge}>
          <Text style={styles.streakValue}>{streakDays}</Text>
          <Text style={styles.streakLabel}>日連続学習中</Text>
        </View>
      </View>

      <View style={styles.calendarHeader}>
        <TouchableOpacity onPress={() => changeMonth(-1)}>
          <Text style={styles.calendarNavButton}>＜</Text>
        </TouchableOpacity>
        <Text style={styles.calendarTitle}>
          {currentMonth.getFullYear()}年 {MONTH_NAMES[currentMonth.getMonth()]}
        </Text>
        <TouchableOpacity onPress={() => changeMonth(1)}>
          <Text style={styles.calendarNavButton}>＞</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.calendarContainer}>
        {renderCalendar()}
      </ScrollView>

      <View style={styles.legendContainer}>
        <View style={styles.legendItem}>
          <View style={styles.legendStudiedDay} />
          <Text style={styles.legendText}>学習した日</Text>
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
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  headerTop: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  backButton: {
    width: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.text.white,
  },
  streakBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  streakValue: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.text.white,
    marginRight: 4,
  },
  streakLabel: {
    fontSize: 14,
    color: COLORS.text.white,
    opacity: 0.9,
  },
  calendarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: COLORS.background.card,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  calendarTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.text.dark,
  },
  calendarNavButton: {
    fontSize: 24,
    color: COLORS.primary,
    padding: 8,
  },
  calendarContainer: {
    flex: 1,
    backgroundColor: COLORS.background.card,
    padding: 8,
  },
  weekDayHeader: {
    flexDirection: 'row',
    marginBottom: 8,
    marginTop: 8,
  },
  weekDayText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.text.medium,
  },
  sundayText: {
    color: '#E95F5C',
  },
  saturdayText: {
    color: '#6BBF59',
  },
  calendarWeek: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  calendarDay: {
    flex: 1,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  calendarDayText: {
    fontSize: 16,
    color: COLORS.text.dark,
  },
  emptyDay: {
    flex: 1,
  },
  studiedDay: {
    backgroundColor: COLORS.tertiary,
    borderWidth: 2,
    borderColor: COLORS.primary,
  },
  studiedDayText: {
    color: COLORS.text.dark,
    fontWeight: '600',
  },
  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 12,
    backgroundColor: COLORS.background.card,
    borderTopWidth: 1,
    borderTopColor: COLORS.accent,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  legendStudiedDay: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: COLORS.tertiary,
    borderWidth: 2,
    borderColor: COLORS.primary,
    marginRight: 8,
  },
  legendText: {
    fontSize: 14,
    color: COLORS.text.medium,
  },
}); 