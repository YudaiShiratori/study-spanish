import { QuizItem } from './types';

// B1レベルのクイズデータ
export const b1QuizData: QuizItem[] = [
  {
    id: 1,
    spanish: 'Es importante que los niños aprendan a respetar el medio ambiente.',
    options: ['子どもたちが環境を尊重することを学ぶことが重要です。', '環境について子どもたちに教えることは難しいです。', '子どもたちは環境について多くのことを学んでいます。'],
    correctAnswer: '子どもたちが環境を尊重することを学ぶことが重要です。',
    explanation: {
      translation: '子どもたちが環境を尊重することを学ぶことが重要です。',
      vocabulary: ['importante = 重要な', 'niños = 子どもたち', 'aprender = 学ぶ', 'respetar = 尊重する', 'medio ambiente = 環境'],
      grammar: ['「Es + 形容詞 + que」で始まる構文', '接続法現在形「aprendan」の使用（意見・評価の表現の後）', '不定詞「respetar」を目的語として使用']
    },
    level: 'B1'
  },
  {
    id: 2,
    spanish: 'Te llamé ayer, pero no contestaste el teléfono.',
    options: ['昨日電話したけど、電話に出なかったね。', '明日電話するので、電話に出てください。', '電話をかけるつもりでしたが、やめました。'],
    correctAnswer: '昨日電話したけど、電話に出なかったね。',
    explanation: {
      translation: '昨日電話したけど、電話に出なかったね。',
      vocabulary: ['llamar = 電話する', 'ayer = 昨日', 'contestar = 答える、応答する', 'teléfono = 電話'],
      grammar: ['点過去「llamé」の使用（完了した行為）', '点過去「contestaste」（2人称単数）', '接続詞「pero」で対比を示す']
    },
    level: 'B1'
  },
  {
    id: 3,
    spanish: 'Antes de salir de casa, asegúrate de cerrar todas las ventanas.',
    options: ['家を出る前に、すべての窓が閉まっていることを確認してください。', '家に入る前に、窓を開けて空気を入れ替えてください。', '家を建てる前に、窓の位置をよく考えてください。'],
    correctAnswer: '家を出る前に、すべての窓が閉まっていることを確認してください。',
    explanation: {
      translation: '家を出る前に、すべての窓が閉まっていることを確認してください。',
      vocabulary: ['antes de = 〜の前に', 'salir = 出る', 'casa = 家', 'asegurarse = 確認する', 'cerrar = 閉める', 'ventanas = 窓（複数形）'],
      grammar: ['前置詞句「antes de + 不定詞」', '命令形「asegúrate」（再帰動詞の肯定命令形）', '「todas las + 名詞」で「すべての〜」を表す']
    },
    level: 'B1'
  },
  {
    id: 4,
    spanish: 'Lo siento, pero no puedo ir a la fiesta porque tengo que trabajar.',
    options: ['すみません、仕事があるのでパーティーに行けません。', 'パーティーに行きたいけど、仕事が終わるか分かりません。', 'パーティーで働くことになったので、行けなくなりました。'],
    correctAnswer: 'すみません、仕事があるのでパーティーに行けません。',
    explanation: {
      translation: 'すみません、仕事があるのでパーティーに行けません。',
      vocabulary: ['lo siento = すみません', 'poder = できる', 'ir = 行く', 'fiesta = パーティー', 'porque = なぜなら', 'tener que = 〜しなければならない', 'trabajar = 働く'],
      grammar: ['否定文「no puedo」', '接続詞「porque」で理由を導入', '義務表現「tener que + 不定詞」']
    },
    level: 'B1'
  },
  {
    id: 5,
    spanish: 'Me encantaría viajar por todo el mundo si tuviera suficiente dinero.',
    options: ['もし十分なお金があれば、世界中を旅行したいです。', '世界中を旅行するためには、多くのお金が必要です。', '世界中を旅行して、十分なお金を稼ぎたいです。'],
    correctAnswer: 'もし十分なお金があれば、世界中を旅行したいです。',
    explanation: {
      translation: 'もし十分なお金があれば、世界中を旅行したいです。',
      vocabulary: ['encantaría = とても喜ぶだろう', 'viajar = 旅行する', 'todo el mundo = 世界中', 'suficiente = 十分な', 'dinero = お金'],
      grammar: ['条件法「encantaría」で願望を表現', '接続法過去形「tuviera」を使った非現実の条件文', '「por + 場所」で「〜中を通って」の意味']
    },
    level: 'B1'
  }
]; 