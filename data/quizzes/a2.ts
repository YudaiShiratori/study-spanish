import { QuizItem } from './types';

// A2レベルのクイズデータ
export const a2QuizData: QuizItem[] = [
  {
    id: 1,
    spanish: 'Me gustaría reservar una habitación doble, por favor.',
    options: ['ダブルルームを予約したいです、お願いします。', '部屋の鍵をなくしました。', 'チェックアウトは何時ですか？'],
    correctAnswer: 'ダブルルームを予約したいです、お願いします。',
    explanation: {
      translation: 'ダブルルームを予約したいです、お願いします。',
      vocabulary: ['gustar = 好む、気に入る', 'reservar = 予約する', 'habitación = 部屋（女性名詞）', 'doble = ダブルの'],
      grammar: ['条件法「gustaría」を使って丁寧な依頼を表現', '不定詞「reservar」を目的語として使用']
    },
    level: 'A2'
  },
  {
    id: 2,
    spanish: 'El fin de semana pasado fui al cine con mis amigos.',
    options: ['先週末、友達と映画館に行きました。', '今週末、友達と映画を見る予定です。', '映画館で友達に会いました。'],
    correctAnswer: '先週末、友達と映画館に行きました。',
    explanation: {
      translation: '先週末、友達と映画館に行きました。',
      vocabulary: ['fin de semana = 週末', 'pasado = 過去の', 'cine = 映画館', 'amigos = 友達（複数形）'],
      grammar: ['点過去「fui」（ir動詞の1人称単数過去形）', '前置詞「al」（a + el）の使い方', '所有形容詞「mis」の使い方']
    },
    level: 'A2'
  },
  {
    id: 3,
    spanish: 'Cuando era niño, vivía en un pueblo pequeño cerca del mar.',
    options: ['子供の頃、海の近くの小さな村に住んでいました。', '大人になったら、海の近くに住みたいです。', '彼が子供だった頃、海の近くの村に住んでいました。'],
    correctAnswer: '子供の頃、海の近くの小さな村に住んでいました。',
    explanation: {
      translation: '子供の頃、海の近くの小さな村に住んでいました。',
      vocabulary: ['cuando = 〜の時', 'niño = 子供', 'vivir = 住む', 'pueblo = 村', 'pequeño = 小さい', 'cerca de = 〜の近くに', 'mar = 海'],
      grammar: ['線過去「era」と「vivía」で過去の状態や習慣を表現', '接続詞「cuando」と時制の一致', '形容詞の位置（pueblo pequeño）']
    },
    level: 'A2'
  },
  {
    id: 4,
    spanish: 'Si hace buen tiempo mañana, iremos a la playa.',
    options: ['明日天気が良ければ、ビーチに行きます。', '昨日は天気が良かったので、ビーチに行きました。', 'ビーチは天気が良い時に行くべきです。'],
    correctAnswer: '明日天気が良ければ、ビーチに行きます。',
    explanation: {
      translation: '明日天気が良ければ、ビーチに行きます。',
      vocabulary: ['hacer = する（ここでは天気を表す）', 'buen tiempo = 良い天気', 'mañana = 明日', 'ir = 行く', 'playa = ビーチ'],
      grammar: ['現実的な条件文（si + 現在形, 未来形）', '「hacer + 天気表現」の構文', '一人称複数未来形「iremos」']
    },
    level: 'A2'
  },
  {
    id: 5,
    spanish: '¿Puedes decirme cómo llegar a la biblioteca?',
    options: ['図書館への行き方を教えてもらえますか？', '図書館は何時に開きますか？', 'この本を図書館に返してもらえますか？'],
    correctAnswer: '図書館への行き方を教えてもらえますか？',
    explanation: {
      translation: '図書館への行き方を教えてもらえますか？',
      vocabulary: ['poder = できる', 'decir = 言う、教える', 'cómo = どのように', 'llegar = 着く、行き着く', 'biblioteca = 図書館'],
      grammar: ['間接疑問文の使い方', '「cómo llegar」は「行き方」を意味する', '丁寧な依頼表現としての「puedes + 不定詞」']
    },
    level: 'A2'
  }
]; 