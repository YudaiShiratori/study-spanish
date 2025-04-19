import React, { createContext, useContext } from 'react';
import { View, Text, Pressable, ViewProps, StyleSheet } from 'react-native';

// スタイリングはStyleSheetを使用
const styles = StyleSheet.create({
  radioGroup: {
    flex: 1,
    flexDirection: 'column',
  },
  radioItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 4,
    marginBottom: 8, // gapの代わりに
  },
  radioItemSelected: {
    borderColor: '#3b82f6',
    backgroundColor: '#eff6ff',
  },
  radioCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#94a3b8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioCircleSelected: {
    borderColor: '#3b82f6',
  },
  radioCircleInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#3b82f6',
  },
  radioLabel: {
    fontSize: 14,
    color: '#0f172a',
    flex: 1,
    marginLeft: 8, // gapの代わりに
  },
});

// RadioGroup Context
type RadioGroupContextType = {
  value: string;
  onChange: (value: string) => void;
};

const RadioGroupContext = createContext<RadioGroupContextType | undefined>(undefined);

interface RadioGroupProps extends ViewProps {
  value: string;
  onValueChange: (value: string) => void;
  children: React.ReactNode;
}

export function RadioGroup({ value, onValueChange, children, style, ...props }: RadioGroupProps) {
  return (
    <RadioGroupContext.Provider value={{ value, onChange: onValueChange }}>
      <View style={[styles.radioGroup, style]} {...props}>
        {children}
      </View>
    </RadioGroupContext.Provider>
  );
}

interface RadioGroupItemProps {
  value: string;
  children: React.ReactNode;
}

export function RadioGroupItem({ value, children }: RadioGroupItemProps) {
  const context = useContext(RadioGroupContext);
  
  if (!context) {
    throw new Error('RadioGroupItem must be used within a RadioGroup');
  }
  
  const { value: selectedValue, onChange } = context;
  const isSelected = selectedValue === value;
  
  return (
    <Pressable
      style={[
        styles.radioItem,
        isSelected && styles.radioItemSelected
      ]}
      onPress={() => onChange(value)}
    >
      <View style={[styles.radioCircle, isSelected && styles.radioCircleSelected]}>
        {isSelected && <View style={styles.radioCircleInner} />}
      </View>
      <Text style={styles.radioLabel}>{children}</Text>
    </Pressable>
  );
} 