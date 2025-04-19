import { Dimensions } from 'react-native';

// ウィンドウサイズの取得
const { width, height } = Dimensions.get('window');

// カラーテーマ定義
export const COLORS = {
  primary: '#F0B428', // メインカラーをより黄色に
  secondary: '#FFD966', // セカンダリーカラーをより明るい黄色に
  tertiary: '#FFF7C2', // 第三カラーを薄い黄色に
  accent: '#FFF1CC', // アクセントカラー
  gradient: {
    start: '#F0B428',
    end: '#FFD966',
  },
  text: {
    dark: '#363636', // よりコントラストの高い暗いテキスト
    medium: '#5F5F5F', // ミディアムテキスト
    light: '#8A8A8A', // ライトテキスト
    white: '#FFFFFF', // 白テキスト
  },
  background: {
    main: '#FFFBEB', // メイン背景色
    card: '#FFFFFF', // カード背景色
    highlight: '#FFF9E6', // ハイライト背景色
  },
  success: '#6BBF59', // より洗練された成功色
  error: '#E95F5C', // より洗練されたエラー色
  shadow: 'rgba(0, 0, 0, 0.15)', // 影の色
  inactive: '#B0B0B0', // 非アクティブ状態の色
};

// デザイン定数
export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

// タイポグラフィー
export const TYPOGRAPHY = {
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
  },
  caption: {
    fontSize: 14,
  },
  button: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  small: {
    fontSize: 12,
  },
};

// シャドウスタイル
export const SHADOWS = {
  small: {
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  medium: {
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  large: {
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 8,
  },
};

// 共通のボーダー設定
export const BORDERS = {
  radius: {
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    round: 9999,
  },
};

// アニメーション設定
export const ANIMATION = {
  timing: {
    fast: 200,
    normal: 300,
    slow: 500,
  },
};

// レスポンシブデザイン用のユーティリティ
export const SCREEN = {
  width,
  height,
  isSmall: width < 375,
  isMedium: width >= 375 && width < 414,
  isLarge: width >= 414,
};

// レイアウト定数
export const LAYOUT = {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
}; 