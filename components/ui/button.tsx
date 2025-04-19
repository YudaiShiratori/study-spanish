import React from 'react';
import { Text, Pressable, PressableProps, StyleSheet, StyleProp, TextStyle, ViewStyle } from 'react-native';

interface ButtonProps extends PressableProps {
  variant?: 'default' | 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const styles = StyleSheet.create({
  // ベーススタイル
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  // サイズバリエーション
  sm: {
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  md: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  lg: {
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  // バリアントスタイル
  default: {
    backgroundColor: '#111827', // gray-900
  },
  primary: {
    backgroundColor: '#2563eb', // blue-600
  },
  secondary: {
    backgroundColor: '#e5e7eb', // gray-200
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#d1d5db', // gray-300
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  link: {
    backgroundColor: 'transparent',
  },
  // テキストスタイル
  buttonText: {
    fontWeight: '500',
  },
  smText: {
    fontSize: 14,
  },
  mdText: {
    fontSize: 16,
  },
  lgText: {
    fontSize: 18,
  },
  defaultText: {
    color: 'white',
  },
  primaryText: {
    color: 'white',
  },
  secondaryText: {
    color: '#111827', // gray-900
  },
  outlineText: {
    color: '#111827', // gray-900
  },
  ghostText: {
    color: '#111827', // gray-900
  },
  linkText: {
    color: '#2563eb', // blue-600
    textDecorationLine: 'underline',
  },
  // 無効化スタイル
  disabled: {
    opacity: 0.5,
  },
});

export function Button({
  variant = 'default',
  size = 'md',
  children,
  disabled,
  style,
  textStyle,
  ...props
}: ButtonProps) {
  const getButtonStyle = () => {
    return [
      styles.button,
      styles[size],
      styles[variant],
      disabled && styles.disabled,
      style,
    ];
  };

  const getTextStyle = () => {
    return [
      styles.buttonText,
      styles[`${size}Text`],
      styles[`${variant}Text`],
      textStyle,
    ];
  };

  return (
    <Pressable
      style={getButtonStyle()}
      disabled={disabled}
      {...props}
    >
      {typeof children === 'string' ? (
        <Text style={getTextStyle()}>{children}</Text>
      ) : (
        children
      )}
    </Pressable>
  );
} 