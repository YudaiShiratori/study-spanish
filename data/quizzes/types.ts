// DELEレベルタイプの定義
export type DELELevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

// クイズデータの型定義
export interface QuizItem {
  id: number;
  spanish: string;  // スペイン語の問題文
  options: string[];  // 日本語の選択肢
  correctAnswer: string;  // 正解の選択肢
  explanation: {  // 単語・文法の解説
    translation: string;  // 正しい訳
    vocabulary: string[];  // 語彙解説
    grammar: string[];  // 文法解説
  };
  level: DELELevel;  // DELEレベル
}

// レベル別のクイズデータを取得する関数のシグネチャ
export type GetQuizDataByLevel = (level: DELELevel) => QuizItem[];

// すべてのレベルを取得する関数のシグネチャ
export type GetAllLevels = () => DELELevel[]; 