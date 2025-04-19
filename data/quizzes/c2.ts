import { QuizItem } from './types';

// C2レベルのクイズデータ
export const c2QuizData: QuizItem[] = [
  {
    id: 1,
    spanish: 'No bien hubo terminado de hablar, se oyó un estruendo ensordecedor.',
    options: ['彼が話し終えるやいなや、耳をつんざくような轟音が聞こえた。', '彼はよく話さなかったので、周囲の騒音が気にならなかった。', '彼の話が終わらないうちに、大きな音が鳴り始めた。'],
    correctAnswer: '彼が話し終えるやいなや、耳をつんざくような轟音が聞こえた。',
    explanation: {
      translation: '彼が話し終えるやいなや、耳をつんざくような轟音が聞こえた。',
      vocabulary: ['no bien = するやいなや', 'estruendo = 轟音、大きな音', 'ensordecedor = 耳をつんざくような', 'oírse = 聞こえる（再帰形）'],
      grammar: ['前過去形「hubo terminado」の時間的即時性を表す用法', '「no bien」という即時性を表す表現', '受動的意味を持つ再帰構文「se oyó」']
    },
    level: 'C2'
  },
  {
    id: 2,
    spanish: 'Cuanto más ahondo en este tema, tanto más me percato de su complejidad inherente.',
    options: ['このテーマを深く掘り下げれば掘り下げるほど、その本質的な複雑さに気づかされる。', 'この複雑なテーマについてもっと知りたいので、詳しく調査している。', 'このテーマの複雑さを理解するには、もっと時間が必要だ。'],
    correctAnswer: 'このテーマを深く掘り下げれば掘り下げるほど、その本質的な複雑さに気づかされる。',
    explanation: {
      translation: 'このテーマを深く掘り下げれば掘り下げるほど、その本質的な複雑さに気づかされる。',
      vocabulary: ['ahondar = 深く掘り下げる', 'tema = テーマ', 'percatarse = 気づく', 'complejidad = 複雑さ', 'inherente = 本質的な'],
      grammar: ['比例相関構文「cuanto más... tanto más...」', '再帰動詞「percatarse de」の使い方', '形式ばった文体における「tanto」の使用']
    },
    level: 'C2'
  },
  {
    id: 3,
    spanish: 'Sea cual fuere el resultado, habrá que acatarlo con deportividad.',
    options: ['結果がどうであれ、スポーツマンシップを持って受け入れなければならないだろう。', '良い結果を得るためには、スポーツのルールを守る必要がある。', 'スポーツは結果よりも参加することに意義がある。'],
    correctAnswer: '結果がどうであれ、スポーツマンシップを持って受け入れなければならないだろう。',
    explanation: {
      translation: '結果がどうであれ、スポーツマンシップを持って受け入れなければならないだろう。',
      vocabulary: ['resultado = 結果', 'acatar = 受け入れる、従う', 'deportividad = スポーツマンシップ'],
      grammar: ['譲歩の「sea cual fuere」という古典的表現', '未来完了形「habrá que」による推量', '不定詞と代名詞の位置「acatarlo」']
    },
    level: 'C2'
  },
  {
    id: 4,
    spanish: 'Diríase que el autor pretende suscitar una reflexión sobre la fugacidad de la existencia humana.',
    options: ['著者は人間の存在の儚さについて考えさせようとしているように思われる。', '著者によると、人間の存在は儚く、深く考える価値がある。', '人間の存在の儚さについて、著者は哲学的な見解を述べている。'],
    correctAnswer: '著者は人間の存在の儚さについて考えさせようとしているように思われる。',
    explanation: {
      translation: '著者は人間の存在の儚さについて考えさせようとしているように思われる。',
      vocabulary: ['autor = 著者', 'pretender = 〜しようとする', 'suscitar = 引き起こす、喚起する', 'reflexión = 考察、熟考', 'fugacidad = 儚さ', 'existencia = 存在'],
      grammar: ['古典的な表現「diríase」（条件法+再帰代名詞の倒置）', '「pretender + 不定詞」の構文', '文語的な語彙選択']
    },
    level: 'C2'
  },
  {
    id: 5,
    spanish: 'De no haber mediado su intervención, las consecuencias habrían sido nefastas para todos los implicados.',
    options: ['彼の介入がなければ、関係者全員にとって結果は壊滅的だっただろう。', '彼の介入のおかげで、関係者全員は悪い結果を避けることができた。', '彼は介入せず、結果として関係者全員が影響を受けた。'],
    correctAnswer: '彼の介入がなければ、関係者全員にとって結果は壊滅的だっただろう。',
    explanation: {
      translation: '彼の介入がなければ、関係者全員にとって結果は壊滅的だっただろう。',
      vocabulary: ['mediar = 介入する', 'intervención = 介入', 'consecuencias = 結果（複数形）', 'nefastas = 壊滅的な', 'implicados = 関係者（複数形）'],
      grammar: ['仮定表現「de no haber + 過去分詞」', '過去未来完了形「habrían sido」', '前置詞「para」による利害関係の表現']
    },
    level: 'C2'
  }
]; 