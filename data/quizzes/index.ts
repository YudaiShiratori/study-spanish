import { DELELevel, QuizItem, GetQuizDataByLevel, GetAllLevels } from './types';
import { a1QuizData } from './a1';
import { a2QuizData } from './a2';
import { b1QuizData } from './b1';
import { b2QuizData } from './b2';
import { c1QuizData } from './c1';
import { c2QuizData } from './c2';

// すべてのクイズデータをレベル別にエクスポート
export const quizDataByLevel = {
  A1: a1QuizData,
  A2: a2QuizData,
  B1: b1QuizData,
  B2: b2QuizData,
  C1: c1QuizData,
  C2: c2QuizData,
};

// レベル別のクイズデータを取得する関数
export const getQuizDataByLevel: GetQuizDataByLevel = (level: DELELevel): QuizItem[] => {
  return quizDataByLevel[level] || [];
};

// すべてのレベルを取得する関数
export const getAllLevels: GetAllLevels = (): DELELevel[] => {
  return ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
}; 