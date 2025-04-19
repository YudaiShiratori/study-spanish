import React from 'react';
import { View, ViewProps, StyleSheet } from 'react-native';

// 黄色のカラーテーマ定義
const COLORS = {
  primary: '#F0B428',
  secondary: '#FFD966',
  background: '#FFFBEB',
};

const styles = StyleSheet.create({
  progressContainer: {
    height: 8,
    width: '100%',
    backgroundColor: 'rgba(240, 180, 40, 0.2)',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: COLORS.primary,
  },
});

interface ProgressProps extends ViewProps {
  value: number; // 0-100
}

export function Progress({ value, style, ...props }: ProgressProps) {
  // 値を0-100の範囲に制限
  const clampedValue = Math.max(0, Math.min(100, value));
  
  return (
    <View style={[styles.progressContainer, style]} {...props}>
      <View style={[styles.progressBar, { width: `${clampedValue}%` }]} />
    </View>
  );
} 