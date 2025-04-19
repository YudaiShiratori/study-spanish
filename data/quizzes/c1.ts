import { QuizItem } from './types';

// C1レベルのクイズデータ
export const c1QuizData: QuizItem[] = [
  {
    id: 1,
    spanish: 'A pesar de las dificultades económicas, lograron sacar el proyecto adelante.',
    options: ['経済的な困難にもかかわらず、彼らはプロジェクトを前進させることができた。', '経済的な理由から、プロジェクトは中止された。', '彼らは経済的支援を受けてプロジェクトを開始した。'],
    correctAnswer: '経済的な困難にもかかわらず、彼らはプロジェクトを前進させることができた。',
    explanation: {
      translation: '経済的な困難にもかかわらず、彼らはプロジェクトを前進させることができた。',
      vocabulary: ['a pesar de = 〜にもかかわらず', 'dificultades = 困難（複数形）', 'lograr = 達成する', 'sacar adelante = 前進させる、成功させる'],
      grammar: ['譲歩を表す表現「a pesar de」の使い方', '過去時制「lograron」(接続法不規則動詞)', '熟語「sacar adelante」の意味と使い方']
    },
    level: 'C1'
  },
  {
    id: 2,
    spanish: 'De haber sabido que vendrías, te habría preparado algo especial.',
    options: ['あなたが来ると知っていたら、何か特別なものを用意しただろうに。', '特別な何かを用意したので、来てくれるかどうか教えてください。', 'あなたが何か特別なものを持ってくると思っていました。'],
    correctAnswer: 'あなたが来ると知っていたら、何か特別なものを用意しただろうに。',
    explanation: {
      translation: 'あなたが来ると知っていたら、何か特別なものを用意しただろうに。',
      vocabulary: ['saber = 知る', 'venir = 来る', 'preparar = 準備する', 'algo = 何か', 'especial = 特別な'],
      grammar: ['「de + 完了不定詞」による仮定表現', '過去の仮定「De haber sabido」', '過去未来完了形「habría preparado」による結果の表現']
    },
    level: 'C1'
  },
  {
    id: 3,
    spanish: 'Lejos de solucionar el problema, sus comentarios no hicieron sino agravarlo.',
    options: ['彼のコメントは問題を解決するどころか、むしろ悪化させただけだった。', '彼のコメントは問題から離れていたが、状況は改善した。', '問題を解決するために、彼は詳細なコメントを提供した。'],
    correctAnswer: '彼のコメントは問題を解決するどころか、むしろ悪化させただけだった。',
    explanation: {
      translation: '彼のコメントは問題を解決するどころか、むしろ悪化させただけだった。',
      vocabulary: ['lejos de = 〜どころではない', 'solucionar = 解決する', 'comentarios = コメント（複数形）', 'no hacer sino = 〜しかしない', 'agravar = 悪化させる'],
      grammar: ['「lejos de + 不定詞」で「〜とは程遠い」を表す', '強調構文「no hacer sino + 不定詞」', '直接目的語代名詞「lo」の位置']
    },
    level: 'C1'
  },
  {
    id: 4,
    spanish: 'Por muy convincentes que fueran sus argumentos, no lograron persuadir al jurado.',
    options: ['彼らの議論がどれほど説得力があったとしても、陪審員を説得することはできなかった。', '陪審員は彼らの説得力のある議論に納得した。', '彼らは陪審員を説得するために強力な議論を準備した。'],
    correctAnswer: '彼らの議論がどれほど説得力があったとしても、陪審員を説得することはできなかった。',
    explanation: {
      translation: '彼らの議論がどれほど説得力があったとしても、陪審員を説得することはできなかった。',
      vocabulary: ['convincente = 説得力のある', 'argumentos = 議論（複数形）', 'lograr = 成功する', 'persuadir = 説得する', 'jurado = 陪審員'],
      grammar: ['譲歩の「por muy + 形容詞 + que」構文', '接続法過去形「fueran」の使用', '前置詞「a + el = al」の縮約']
    },
    level: 'C1'
  },
  {
    id: 5,
    spanish: 'Hay quien sostiene que la educación virtual acabará sustituyendo a la presencial, cosa que dudo mucho.',
    options: ['バーチャル教育が対面教育に取って代わると主張する人もいるが、私はそれを大いに疑問に思う。', 'バーチャル教育は対面教育を補完するものであり、完全に置き換えることはないだろう。', '対面教育とバーチャル教育のどちらが優れているかは状況による。'],
    correctAnswer: 'バーチャル教育が対面教育に取って代わると主張する人もいるが、私はそれを大いに疑問に思う。',
    explanation: {
      translation: 'バーチャル教育が対面教育に取って代わると主張する人もいるが、私はそれを大いに疑問に思う。',
      vocabulary: ['sostener = 主張する', 'educación = 教育', 'virtual = バーチャルの', 'acabar = 終わる、〜してしまう', 'sustituir = 置き換える', 'presencial = 対面の', 'dudar = 疑う'],
      grammar: ['「hay quien + 動詞」で「〜する人もいる」という不特定の主語', '未来表現「acabará sustituyendo」', '関係詞「cosa que」による追加コメント']
    },
    level: 'C1'
  }
]; 