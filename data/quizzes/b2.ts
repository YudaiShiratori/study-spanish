import { QuizItem } from './types';

// B2レベルのクイズデータ
export const b2QuizData: QuizItem[] = [
  {
    id: 1,
    spanish: 'Si hubiera llegado antes, habríamos podido cenar juntos.',
    options: ['もっと早く到着していれば、一緒に夕食を食べられたのに。', '明日早く来れば、一緒に夕食を食べられます。', '遅く到着したので、一人で食事をしました。'],
    correctAnswer: 'もっと早く到着していれば、一緒に夕食を食べられたのに。',
    explanation: {
      translation: 'もっと早く到着していれば、一緒に夕食を食べられたのに。',
      vocabulary: ['llegar = 到着する', 'antes = 前に、早く', 'poder = できる', 'cenar = 夕食を食べる', 'juntos = 一緒に'],
      grammar: ['過去の仮定を表す接続法過去完了形「hubiera llegado」', '帰結節の過去未来完了形「habríamos podido」', '非現実の条件文（第3類）の構造']
    },
    level: 'B2'
  },
  {
    id: 2,
    spanish: 'La película de la que te hablé ha ganado varios premios internacionales.',
    options: ['私が話した映画は、いくつかの国際的な賞を獲得しました。', 'その映画について話したいのですが、国際的に評価されています。', '国際的な賞を獲得した映画を今度見に行きましょう。'],
    correctAnswer: '私が話した映画は、いくつかの国際的な賞を獲得しました。',
    explanation: {
      translation: '私が話した映画は、いくつかの国際的な賞を獲得しました。',
      vocabulary: ['película = 映画', 'hablar = 話す', 'ganar = 獲得する', 'premios = 賞（複数形）', 'internacionales = 国際的な（複数形）'],
      grammar: ['関係代名詞「de la que」を使った複合関係詞', '現在完了形「ha ganado」の使用', '形容詞「internacionales」の位置と一致']
    },
    level: 'B2'
  },
  {
    id: 3,
    spanish: 'Según un estudio reciente, cada vez más jóvenes se interesan por la política.',
    options: ['最近の研究によると、ますます多くの若者が政治に関心を持つようになっています。', '若者は政治より研究に興味があると言われています。', '政治家は若者の研究に興味を示しています。'],
    correctAnswer: '最近の研究によると、ますます多くの若者が政治に関心を持つようになっています。',
    explanation: {
      translation: '最近の研究によると、ますます多くの若者が政治に関心を持つようになっています。',
      vocabulary: ['según = 〜によると', 'estudio = 研究', 'reciente = 最近の', 'cada vez más = ますます多くの', 'jóvenes = 若者たち', 'interesarse por = 〜に関心を持つ', 'política = 政治'],
      grammar: ['「según + 情報源」で「〜によると」を表現', '再帰動詞「interesarse」の使い方', '「cada vez más + 名詞」という表現']
    },
    level: 'B2'
  },
  {
    id: 4,
    spanish: 'A menos que me llames antes de las ocho, no podré recogerte en el aeropuerto.',
    options: ['8時までに電話してくれないと、空港まで迎えに行けません。', '8時までに空港に着いたら、電話してください。', '電話したので、8時までに空港に迎えに行きます。'],
    correctAnswer: '8時までに電話してくれないと、空港まで迎えに行けません。',
    explanation: {
      translation: '8時までに電話してくれないと、空港まで迎えに行けません。',
      vocabulary: ['a menos que = 〜しない限り', 'llamar = 電話する', 'antes de = 〜の前に', 'poder = できる', 'recoger = 迎えに行く', 'aeropuerto = 空港'],
      grammar: ['「a menos que + 接続法」で条件を表現', '否定的条件を表す接続詞の使い方', '未来形「podré」の否定形']
    },
    level: 'B2'
  },
  {
    id: 5,
    spanish: 'Se ruega a los pasajeros que mantengan abrochados sus cinturones durante todo el vuelo.',
    options: ['乗客の皆様はフライト中常にシートベルトを着用してくださいますようお願いいたします。', '乗客はフライト中にシートベルトを外すことができます。', 'フライト中にシートベルトが壊れた場合は乗務員に連絡してください。'],
    correctAnswer: '乗客の皆様はフライト中常にシートベルトを着用してくださいますようお願いいたします。',
    explanation: {
      translation: '乗客の皆様はフライト中常にシートベルトを着用してくださいますようお願いいたします。',
      vocabulary: ['rogar = お願いする', 'pasajeros = 乗客', 'mantener = 保つ、維持する', 'abrochados = 締められた', 'cinturones = シートベルト', 'durante = 〜の間', 'vuelo = フライト'],
      grammar: ['丁寧な命令表現「se ruega que + 接続法」', '受動的意味を持つ再帰構文「se ruega」', '副詞「todo」による強調']
    },
    level: 'B2'
  }
]; 