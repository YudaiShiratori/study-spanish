import React from 'react';
import { View, Text, ViewProps, TextProps, StyleSheet, StyleProp, ViewStyle, TextStyle } from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
    padding: 16,
  },
  cardHeader: {
    paddingHorizontal: 4,
    paddingBottom: 12,
  },
  cardContent: {
    paddingHorizontal: 4,
  },
  cardFooter: {
    paddingHorizontal: 4,
    paddingTop: 12,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  cardDescription: {
    fontSize: 14,
    color: '#64748b',
  },
});

interface CardProps extends ViewProps {
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
}

export function Card({ style, children, ...props }: CardProps) {
  return (
    <View style={[styles.card, style]} {...props}>
      {children}
    </View>
  );
}

interface CardHeaderProps extends ViewProps {
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
}

export function CardHeader({ style, children, ...props }: CardHeaderProps) {
  return (
    <View style={[styles.cardHeader, style]} {...props}>
      {children}
    </View>
  );
}

interface CardContentProps extends ViewProps {
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
}

export function CardContent({ style, children, ...props }: CardContentProps) {
  return (
    <View style={[styles.cardContent, style]} {...props}>
      {children}
    </View>
  );
}

interface CardFooterProps extends ViewProps {
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
}

export function CardFooter({ style, children, ...props }: CardFooterProps) {
  return (
    <View style={[styles.cardFooter, style]} {...props}>
      {children}
    </View>
  );
}

interface CardTitleProps extends TextProps {
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
}

export function CardTitle({ style, children, ...props }: CardTitleProps) {
  return (
    <Text style={[styles.cardTitle, style]} {...props}>
      {children}
    </Text>
  );
}

interface CardDescriptionProps extends TextProps {
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
}

export function CardDescription({ style, children, ...props }: CardDescriptionProps) {
  return (
    <Text style={[styles.cardDescription, style]} {...props}>
      {children}
    </Text>
  );
} 