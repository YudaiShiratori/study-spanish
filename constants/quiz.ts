export type Question = {
  id: number;
  sentence: string;       // スペイン語の文
  choices: string[];      // 日本語訳 3つ
  correctIndex: number;   // 正解のインデックス
  explanation: string;    // 解説（単語 + 文法）
};

// DELE B1レベルのスペイン語クイズデータ
export const quizData: Question[] = [
  {
    id: 1,
    sentence: "¿Dónde está la estación?",
    choices: ["駅はどこですか？", "何時に出発しますか？", "切符はいくらですか？"],
    correctIndex: 0,
    explanation: "「estación（エスタシオン）」は「駅」を意味する女性名詞です。「estar」は「ある、いる」を意味する動詞で、「está」は三人称単数現在形です。"
  },
  {
    id: 2,
    sentence: "Necesito comprar unos zapatos nuevos.",
    choices: ["新しいシャツが必要です。", "新しい靴を買う必要があります。", "新しい帽子を探しています。"],
    correctIndex: 1,
    explanation: "「necesitar」は「必要とする」という動詞です。「zapatos」は「靴」を意味する男性名詞の複数形です。"
  },
  {
    id: 3,
    sentence: "¿Has visitado alguna vez el museo del Prado?",
    choices: ["プラド美術館に行ったことがありますか？", "プラド美術館はどこにありますか？", "プラド美術館は何時に開館しますか？"],
    correctIndex: 0,
    explanation: "「has visitado」は現在完了形で「訪れたことがある」という意味です。「alguna vez」は「一度でも、今までに」という意味の副詞句です。"
  },
  {
    id: 4,
    sentence: "Me gustaría reservar una mesa para dos personas.",
    choices: ["二人分の部屋を予約したいです。", "二人分の食事を注文したいです。", "二人分のテーブルを予約したいです。"],
    correctIndex: 2,
    explanation: "「me gustaría」は「〜したい」という願望を表す表現です。「reservar」は「予約する」、「mesa」は「テーブル」を意味します。"
  },
  {
    id: 5,
    sentence: "Tengo que ir al médico porque me duele la cabeza.",
    choices: ["頭が痛いので医者に行かなければなりません。", "背中が痛いので医者に行かなければなりません。", "お腹が痛いので医者に行かなければなりません。"],
    correctIndex: 0,
    explanation: "「tener que + 動詞」は「〜しなければならない」という義務を表します。「doler」は「痛む」という動詞で、「me duele」は「私が痛い」という意味です。「cabeza」は「頭」を意味します。"
  },
  {
    id: 6,
    sentence: "¿Cuánto tiempo llevas estudiando español?",
    choices: ["スペイン語を勉強するのにどれくらい時間がかかりますか？", "スペイン語をどれくらいの期間勉強していますか？", "スペイン語の勉強はいつ始めましたか？"],
    correctIndex: 1,
    explanation: "「llevar + 現在分詞」は「〜している期間」を表す表現です。「cuánto tiempo」は「どれくらいの時間」という意味です。"
  },
  {
    id: 7,
    sentence: "Si hace buen tiempo, iremos a la playa el domingo.",
    choices: ["日曜日に天気がいいなら、ビーチに行きます。", "日曜日に天気が悪くなければ、公園に行きます。", "日曜日に雨が降らなければ、山に行きます。"],
    correctIndex: 0,
    explanation: "「si + 現在形, 未来形」は「もし〜なら、〜するだろう」という仮定を表す構文です。「hacer buen tiempo」は「天気がいい」という表現です。"
  },
  {
    id: 8,
    sentence: "Me encantaría conocer a tu familia algún día.",
    choices: ["いつか君の家族に会いたいです。", "いつか君の友達を紹介してほしいです。", "いつか君の国を訪れたいです。"],
    correctIndex: 0,
    explanation: "「me encantaría」は「とても〜したい」という強い願望を表します。「conocer」は「知り合う、会う」という意味の動詞です。「algún día」は「いつか」という意味です。"
  },
  {
    id: 9,
    sentence: "¿Podrías hablar más despacio, por favor?",
    choices: ["もう少し大きな声で話してもらえますか？", "もう少しゆっくり話してもらえますか？", "もう一度言ってもらえますか？"],
    correctIndex: 1,
    explanation: "「podrías」は「poder（できる）」の丁寧な依頼形です。「hablar más despacio」は「もっとゆっくり話す」という意味です。"
  },
  {
    id: 10,
    sentence: "A pesar de la lluvia, decidimos salir a pasear.",
    choices: ["雨のため、散歩に行くのをやめました。", "雨が降っているので、家にいることにしました。", "雨にもかかわらず、散歩に出かけることにしました。"],
    correctIndex: 2,
    explanation: "「a pesar de」は「〜にもかかわらず」という意味の前置詞句です。「decidir」は「決める」という動詞で、「decidimos」は一人称複数過去形です。"
  }
]; 