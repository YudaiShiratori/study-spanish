export type Question = {
  id: number;
  sentence: string;       // スペイン語の文
  choices: string[];      // 日本語訳 3つ
  correctIndex: number;   // 正解のインデックス
  explanation: string;    // 解説（単語 + 文法）
};

// DELE B2-C1レベルのスペイン語クイズデータ
export const quizData: Question[] = [
  {
    id: 1,
    sentence: "A mi hermano le habría encantado acompañarnos, pero tenía que trabajar.",
    choices: [
      "私の兄は一緒に来たかったのですが、仕事をしなければなりませんでした。", 
      "私の兄は一緒に来ることができて嬉しかったですが、仕事をしなければなりませんでした。", 
      "私の兄は一緒に来るのが好きでしたが、仕事をする必要がありました。"
    ],
    correctIndex: 0,
    explanation: "「le habría encantado + 不定詞」: 過去の仮定法で「〜したかっただろうに」という意味。\n\n" +
      "「encantar」: 「喜ばせる、大好きである」という意味の動詞。間接目的語（le）と共に使われ、「〜が〜を喜ばせる」という構文。\n\n" +
      "「habría」: haber動詞の条件法で、過去の状況に対する仮定を表す助動詞。\n\n" +
      "「acompañarnos」: acompañar（付き添う、一緒に行く）の不定詞形+nosotros（私たち）の目的格。\n\n" +
      "「pero」: 「しかし」を意味する逆接の接続詞。\n\n" +
      "「tenía que + 不定詞」: 「〜しなければならなかった」という過去の義務を表す表現。"
  },
  {
    id: 2,
    sentence: "Me arrepiento de no haber estudiado más para el examen.",
    choices: [
      "試験のためにもっと勉強できなかったことが残念です。", 
      "試験のためにもっと勉強しなかったことを後悔しています。", 
      "試験のためにもっと勉強すべきだったと思います。"
    ],
    correctIndex: 1,
    explanation: "「arrepentirse de + 名詞/不定詞」: 「〜を後悔する」という再帰動詞の表現。\n\n" +
      "「me arrepiento」: arrepentirse（後悔する）の一人称単数現在形。再帰代名詞「me」が必要。\n\n" +
      "「no haber + 過去分詞」: 「〜しなかったこと」を表す完了不定詞の否定形。過去の行動の不履行に対する後悔を表す。\n\n" +
      "「estudiado」: estudiar（勉強する）の過去分詞。\n\n" +
      "「más para el examen」: 「試験のためにもっと」という副詞句。"
  },
  {
    id: 3,
    sentence: "Por mucho que lo intente, no consigo hablar español con fluidez.",
    choices: [
      "どれだけスペイン語を話そうとしても、流暢に話せません。", 
      "どれだけ努力しても、スペイン語を流暢に話すことができません。", 
      "スペイン語を流暢に話すためには、もっと練習しなければなりません。"
    ],
    correctIndex: 1,
    explanation: "「por mucho que + 接続法」: 「どれだけ〜しても」という譲歩の表現。\n\n" +
      "「lo intente」: intentar（試みる）の一人称単数現在接続法。譲歩の表現の後は接続法が続く。\n\n" +
      "「lo」: 直接目的語の代名詞で、この文脈では「それ（=スペイン語を話すこと）」を指す。\n\n" +
      "「no consigo + 不定詞」: conseguir（達成する、できる）の一人称単数現在形の否定。「〜できない」という意味。\n\n" +
      "「con fluidez」: 「流暢に」という副詞的表現。con + 名詞の形で様態を表す。"
  },
  {
    id: 4,
    sentence: "De haberlo sabido antes, habría tomado otra decisión.",
    choices: [
      "前もって知っていたら、別の決断をするつもりでした。", 
      "それを知る前に、別の決断をしていました。", 
      "前もって知っていたら、別の決断をしていたでしょう。"
    ],
    correctIndex: 2,
    explanation: "「de haber + 過去分詞」: 「もし〜していたら」という過去の仮定条件を表す表現。ifの代わりにdeを使った条件節。\n\n" +
      "「lo sabido」: saber（知る）の過去分詞とそれを修飾する直接目的語「lo」（それを）。\n\n" +
      "「antes」: 「前に、以前に」という副詞。\n\n" +
      "「habría tomado」: tomar（取る、行う）の条件法完了形で、過去の事実に反する仮定の帰結を表す。\n\n" +
      "「otra decisión」: 「別の決断」という名詞句。otra は「別の、他の」という形容詞。"
  },
  {
    id: 5,
    sentence: "Se me da fatal cocinar, así que suelo pedir comida a domicilio.",
    choices: [
      "料理が苦手なので、普段は出前を頼みます。", 
      "料理に失敗するので、いつも宅配を注文します。", 
      "料理をするのが嫌いなので、通常は家で食べます。"
    ],
    correctIndex: 0,
    explanation: "「dársele a alguien + bien/mal/fatal」: 「（人）に〜が得意/不得意である」という慣用表現。\n\n" +
      "「se me da fatal」: 「私にはひどく不得意である」という表現。seは非人称の再帰代名詞、meは間接目的語（私に）、fatalは「ひどく悪い」という形容詞。\n\n" +
      "「cocinar」: 「料理する」という動詞の不定詞。この構文では主語の役割を果たす。\n\n" +
      "「así que」: 「だから、それゆえに」という結果を表す接続詞。\n\n" +
      "「soler + 不定詞」: 「通常〜する、よく〜する」という習慣を表す表現。\n\n" +
      "「pedir comida a domicilio」: 「宅配（出前）を注文する」という表現。a domicilioは「自宅へ」という意味の副詞句。"
  },
  {
    id: 6,
    sentence: "Llevaba tres horas esperando cuando por fin llegó el tren.",
    choices: [
      "電車が到着したとき、3時間待っていました。", 
      "電車がついに到着したとき、3時間も待っていたところでした。", 
      "3時間待った後、ついに電車が到着しました。"
    ],
    correctIndex: 1,
    explanation: "「llevar + 期間 + gerundio」: 「〜の間ずっと〜している」という継続を表す表現。\n\n" +
      "「llevaba」: llevar（ここでは継続を表す助動詞）の直説法線過去（不完了過去）形。\n\n" +
      "「tres horas esperando」: 「3時間待ちつづけて」。esperandoはesperar（待つ）の現在分詞（ジェルンディオ）。\n\n" +
      "「cuando」: 「〜のとき」を意味する時間の接続詞。\n\n" +
      "「por fin」: 「ついに、やっと」を意味する副詞句。\n\n" +
      "「llegó」: llegar（到着する）の直説法点過去（完了過去）形。特定の時点での出来事を表す。"
  },
  {
    id: 7,
    sentence: "¡Ojalá hubiese prestado más atención a las advertencias!",
    choices: [
      "もっと警告に注意を払うべきだったのに！", 
      "もっと警告に注意を払えばよかったのに！", 
      "警告にもっと注意を払わなくては！"
    ],
    correctIndex: 1,
    explanation: "「ojalá + 過去完了接続法」: 「〜だったらなあ」という過去の事実に反する願望を表す表現。\n\n" +
      "「ojalá」: アラビア語起源の間投詞で「〜であればいいのに」という願望を表す。接続法を導く。\n\n" +
      "「hubiese prestado」: prestar（払う、貸す）の過去完了接続法。過去の事実と異なる状況への願望を表す。\n\n" +
      "「prestar atención」: 「注意を払う」という慣用句。\n\n" +
      "「a las advertencias」: 「警告に」という前置詞句。advertenciasは「警告、注意」を意味する名詞の複数形。"
  },
  {
    id: 8,
    sentence: "Te agradecería que me echaras una mano con este informe.",
    choices: [
      "このレポートを手伝ってくれてありがとう。", 
      "このレポートの件で力を貸してくれたら嬉しいです。", 
      "このレポートについて教えてもらえると助かります。"
    ],
    correctIndex: 1,
    explanation: "「agradecer + que + 接続法」: 「〜してくれたら感謝する」という丁寧な依頼表現。\n\n" +
      "「te agradecería」: agradecer（感謝する）の一人称単数条件法。丁寧な表現として使用される。\n\n" +
      "「que me echaras」: echar（投げる、与える）の二人称単数過去接続法。依頼の内容を表す従属節。\n\n" +
      "「echar una mano」: 「手を貸す、助ける」という慣用句表現。\n\n" +
      "「con este informe」: 「このレポートで」という前置詞句。"
  },
  {
    id: 9,
    sentence: "Nos dio la impresión de que el guía nos estaba tomando el pelo.",
    choices: [
      "ガイドが私たちを馬鹿にしているという印象を受けました。", 
      "ガイドが私たちの髪を触っているという印象を受けました。", 
      "ガイドが私たちに嘘をついているという印象でした。"
    ],
    correctIndex: 0,
    explanation: "「dar la impresión de que」: 「〜という印象を与える」という表現。\n\n" +
      "「nos dio」: dar（与える）の三人称単数点過去（完了過去）形+間接目的語の「nos」（私たちに）。\n\n" +
      "「el guía」: 「ガイド、案内人」という名詞。\n\n" +
      "「estar + gerundio」: 継続中の動作を表す進行形。\n\n" +
      "「tomar el pelo」: 直訳は「髪を取る」だが、「馬鹿にする、からかう」という慣用句。スペイン語の重要な慣用表現の一つ。\n\n" +
      "「tomando el pelo」: tomar（取る）の現在分詞と定冠詞+pelo（髪）で慣用句を形成。"
  },
  {
    id: 10,
    sentence: "Aunque hubiera sabido la respuesta, no habría levantado la mano.",
    choices: [
      "答えを知っていたにもかかわらず、手を挙げませんでした。", 
      "答えを知っていなかったので、手を挙げることができませんでした。", 
      "答えを知っていたとしても、手を挙げなかっただろう。"
    ],
    correctIndex: 2,
    explanation: "「aunque + 過去完了接続法」: 「たとえ〜だったとしても」という過去の譲歩条件を表す表現。\n\n" +
      "「hubiera sabido」: saber（知る）の過去完了接続法。事実と異なる過去の仮定を表す。\n\n" +
      "「la respuesta」: 「答え」という名詞句。\n\n" +
      "「no habría levantado」: levantar（上げる）の条件法完了形の否定。「〜しなかっただろう」という過去の事実に反する仮定の帰結を表す。\n\n" +
      "「levantar la mano」: 「手を挙げる」という表現。\n\n" +
      "この文は「たとえ答えを知っていたとしても（実際は知らなかった）、手を挙げなかっただろう（実際も挙げなかった）」という過去の仮定文。"
  }
]; 