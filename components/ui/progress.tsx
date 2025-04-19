import React from 'react';
import { View, ViewProps, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  progressContainer: {
    height: 8,
    width: '100%',
    backgroundColor: '#e2e8f0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#3b82f6',
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