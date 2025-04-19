import { QuizItem } from './types';

// A1レベルのクイズデータ
export const a1QuizData: QuizItem[] = [
  {
    id: 1,
    spanish: '¿Dónde está la estación?',
    options: ['駅はどこですか？', '何時に到着しますか？', 'このバスはどこに行きますか？'],
    correctAnswer: '駅はどこですか？',
    explanation: {
      translation: '駅はどこですか？',
      vocabulary: ['dónde = どこに', 'estar = ある、いる', 'estación = 駅（女性名詞）'],
      grammar: ['疑問詞「dónde」で始まる疑問文', '3人称単数現在形「está」を使用']
    },
    level: 'A1'
  },
  {
    id: 2,
    spanish: 'Me llamo Pedro, ¿y tú cómo te llamas?',
    options: ['私の名前はペドロです。あなたの名前は？', '彼の名前はペドロです。彼女の名前は？', 'ペドロさんに会えて嬉しいです。'],
    correctAnswer: '私の名前はペドロです。あなたの名前は？',
    explanation: {
      translation: '私の名前はペドロです。あなたの名前は？',
      vocabulary: ['llamarse = 〜という名前である（再帰動詞）', 'cómo = どのように', 'tú = あなた（主格）'],
      grammar: ['再帰動詞「llamarse」の使い方', '「me llamo」は「私は〜と呼ばれる」の意']
    },
    level: 'A1'
  },
  {
    id: 3,
    spanish: 'Tengo dos hermanos y una hermana.',
    options: ['私には兄弟が二人と姉妹が一人います。', '彼には兄弟が二人と姉妹が一人います。', '私には子供が三人います。'],
    correctAnswer: '私には兄弟が二人と姉妹が一人います。',
    explanation: {
      translation: '私には兄弟が二人と姉妹が一人います。',
      vocabulary: ['tener = 持つ、いる', 'hermano = 兄弟', 'hermana = 姉妹', 'dos = 2', 'una = 1（女性形）'],
      grammar: ['所有を表す「tener」の現在形', '数詞と名詞の一致']
    },
    level: 'A1'
  },
  {
    id: 4,
    spanish: '¿Qué hora es?',
    options: ['何時ですか？', '今日は何日ですか？', 'どんな時間がいいですか？'],
    correctAnswer: '何時ですか？',
    explanation: {
      translation: '何時ですか？',
      vocabulary: ['qué = 何', 'hora = 時間、時刻', 'ser = である'],
      grammar: ['時刻を尋ねる基本表現', '疑問詞「qué」の使い方']
    },
    level: 'A1'
  },
  {
    id: 5,
    spanish: 'Me gusta mucho el café, pero no me gusta el té.',
    options: ['私はコーヒーが大好きですが、お茶は好きではありません。', 'コーヒーを飲みたいですが、お茶はありますか？', '彼はコーヒーは好きですが、お茶は嫌いです。'],
    correctAnswer: '私はコーヒーが大好きですが、お茶は好きではありません。',
    explanation: {
      translation: '私はコーヒーが大好きですが、お茶は好きではありません。',
      vocabulary: ['gustar = 好き（である）', 'mucho = とても', 'café = コーヒー', 'té = お茶', 'pero = しかし'],
      grammar: ['「gustar」構文の基本', '否定文の作り方', '接続詞「pero」の使い方']
    },
    level: 'A1'
  }
]; 