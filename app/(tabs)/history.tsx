import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';

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
        <Text style={styles.title}>学習記録</Text>
      </View>

      <View style={styles.streakContainer}>
        <Text style={styles.streakValue}>{streakDays}</Text>
        <Text style={styles.streakLabel}>日連続学習中</Text>
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
    backgroundColor: '#f5f5f5',
  },
  headerContainer: {
    backgroundColor: '#3b82f6',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  streakContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'white',
    marginTop: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  streakValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#3b82f6',
    marginRight: 8,
  },
  streakLabel: {
    fontSize: 16,
    color: '#4b5563',
  },
  calendarHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: 'white',
    marginTop: 16,
  },
  calendarTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  calendarNavButton: {
    fontSize: 20,
    color: '#3b82f6',
    padding: 8,
  },
  calendarContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  weekDayHeader: {
    flexDirection: 'row',
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  weekDayText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
    color: '#4b5563',
  },
  sundayText: {
    color: '#ef4444',
  },
  saturdayText: {
    color: '#3b82f6',
  },
  calendarWeek: {
    flexDirection: 'row',
    height: 50,
  },
  calendarDay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  calendarDayText: {
    fontSize: 14,
  },
  emptyDay: {
    flex: 1,
  },
  studiedDay: {
    backgroundColor: '#dbeafe',
    borderRadius: 25,
    margin: 4,
  },
  studiedDayText: {
    color: '#3b82f6',
    fontWeight: 'bold',
  },
  legendContainer: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendStudiedDay: {
    width: 16,
    height: 16,
    backgroundColor: '#dbeafe',
    borderRadius: 8,
    marginRight: 8,
  },
  legendText: {
    fontSize: 14,
    color: '#4b5563',
  },
}); 