import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, ImageBackground, StatusBar, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';

// クイズデータと型定義をインポート
import { DELELevel, QuizItem } from '../data/quizzes/types';
import { getQuizDataByLevel, getAllLevels } from '../data/quizzes';

// カラーテーマ定義
const COLORS = {
  primary: '#F0B428', // メインカラーをより黄色に
  secondary: '#FFD966', // セカンダリーカラーをより明るい黄色に
  tertiary: '#FFF7C2', // 第三カラーを薄い黄色に
  accent: '#FFF1CC', // アクセントカラー
  gradient: {
    start: '#F0B428',
    end: '#FFD966',
  },
  text: {
    dark: '#363636', // よりコントラストの高い暗いテキスト
    medium: '#5F5F5F', // ミディアムテキスト
    light: '#8A8A8A', // ライトテキスト
    white: '#FFFFFF', // 白テキスト
  },
  background: {
    main: '#FFFBEB', // メイン背景色
    card: '#FFFFFF', // カード背景色
    highlight: '#FFF9E6', // ハイライト背景色
  },
  success: '#6BBF59', // より洗練された成功色
  error: '#E95F5C', // より洗練されたエラー色
  shadow: 'rgba(0, 0, 0, 0.15)', // 影の色
};

// デザイン定数
const { width, height } = Dimensions.get('window');
const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
}

export default function QuizScreen() {
  const router = useRouter();
  const [selectedLevel, setSelectedLevel] = useState<DELELevel | null>(null);
  const [currentQuizData, setCurrentQuizData] = useState<QuizItem[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  
  // レベル選択時の処理
  const handleLevelSelect = (level: DELELevel) => {
    const filteredData = getQuizDataByLevel(level);
    setSelectedLevel(level);
    setCurrentQuizData(filteredData);
    resetQuiz();
  };
  
  // 現在の問題を取得
  const currentQuestion = currentQuizData.length > 0 ? currentQuizData[currentQuestionIndex] : null;
  
  // 選択肢選択時の処理
  const handleOptionPress = (option: string) => {
    setSelectedOption(option);
  };
  
  // 解答確定時の処理
  const handleSubmitAnswer = () => {
    if (selectedOption === null) return;
    
    if (selectedOption === currentQuestion?.correctAnswer) {
      setScore(score + 1);
    }
    setShowAnswer(true);
  };
  
  // 次の問題へ進む処理
  const handleNextQuestion = () => {
    setSelectedOption(null);
    setShowAnswer(false);
    
    if (currentQuestionIndex < currentQuizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };
  
  // クイズをリセットする処理
  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setScore(0);
    setShowAnswer(false);
    setQuizCompleted(false);
  };
  
  // クイズを再開する処理
  const handleRestartQuiz = () => {
    resetQuiz();
  };
  
  // ホームに戻る処理
  const handleNavToHome = () => {
    router.push('/');
  };

  // レベル選択画面をレンダリングする関数
  const renderLevelSelection = () => {
    const levelIcons: Record<DELELevel, any> = {
      'A1': 'seedling',
      'A2': 'leaf',
      'B1': 'pagelines',
      'B2': 'tree',
      'C1': 'fort-awesome',
      'C2': 'graduation-cap',
    };
    
    return (
      <View style={styles.levelSelectionContainer}>
        <View style={styles.levelHeaderContainer}>
          <Text style={styles.levelSelectionTitle}>スペイン語レベルを選択</Text>
          <Text style={styles.levelSelectionSubtitle}>DELEレベルに準拠した問題に挑戦しましょう</Text>
        </View>
        
        <ScrollView 
          style={styles.levelScrollView}
          contentContainerStyle={styles.levelButtonsContainer}
          showsVerticalScrollIndicator={false}
        >
          {getAllLevels().map((level) => (
            <TouchableOpacity
              key={level}
              style={styles.levelButton}
              onPress={() => handleLevelSelect(level)}
              activeOpacity={0.7}
            >
              <LinearGradient
                colors={['#FFFFFF', COLORS.accent]}
                style={styles.levelButtonGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <View style={styles.levelIconContainer}>
                  <FontAwesome name={levelIcons[level] || 'star'} size={28} color={COLORS.primary} />
                </View>
                <View style={styles.levelButtonContent}>
                  <Text style={styles.levelButtonText}>{level}</Text>
                  <Text style={styles.levelDescription}>
                    {level === 'A1' && '初級 - 基本的な表現'}
                    {level === 'A2' && '初級上 - 日常表現'}
                    {level === 'B1' && '中級 - 自立した言語使用'}
                    {level === 'B2' && '中級上 - 流暢な会話'}
                    {level === 'C1' && '上級 - 効果的な言語運用'}
                    {level === 'C2' && '上級上 - ネイティブ並の理解力'}
                  </Text>
                </View>
                <FontAwesome name="chevron-right" size={18} color={COLORS.primary} style={styles.levelButtonIcon} />
              </LinearGradient>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  };

  // 問題パートをレンダリングする関数
  const renderQuestionSection = () => {
    if (!currentQuestion) return null;
    
    return (
      <>
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View 
              style={[
                styles.progressFill, 
                { width: `${((currentQuestionIndex + 1) / currentQuizData.length) * 100}%` }
              ]} 
            />
          </View>
          <Text style={styles.progressText}>
            {currentQuestionIndex + 1} / {currentQuizData.length}
          </Text>
        </View>
        
        <View style={styles.questionContainer}>
          <LinearGradient
            colors={[COLORS.accent, '#FFFFFF']}
            style={styles.questionGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
          >
            <View style={styles.questionBadge}>
              <Text style={styles.questionNumber}>{currentQuestionIndex + 1}</Text>
            </View>
            <Text style={styles.questionText}>{currentQuestion.spanish}</Text>
            <View style={styles.levelBadge}>
              <Text style={styles.levelIndicator}>レベル: {currentQuestion.level}</Text>
            </View>
          </LinearGradient>
        </View>
        
        <ScrollView style={styles.optionsContainer} showsVerticalScrollIndicator={false}>
          {currentQuestion.options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.optionButton,
                selectedOption === option && styles.selectedOption
              ]}
              onPress={() => handleOptionPress(option)}
              disabled={showAnswer}
              activeOpacity={0.7}
            >
              <View style={styles.optionContent}>
                <Text style={[
                  styles.optionText,
                  selectedOption === option && styles.selectedOptionText
                ]}>
                  {option}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
        
        {!showAnswer && (
          <TouchableOpacity
            style={[
              styles.submitButton,
              !selectedOption && styles.disabledButton
            ]}
            onPress={handleSubmitAnswer}
            disabled={!selectedOption}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={[COLORS.gradient.start, COLORS.gradient.end]}
              style={styles.submitGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Text style={styles.submitButtonText}>解答する</Text>
            </LinearGradient>
          </TouchableOpacity>
        )}
        
        {showAnswer && renderAnswerSection()}
      </>
    );
  };

  // 回答パートをレンダリングする関数
  const renderAnswerSection = () => {
    if (!currentQuestion) return null;
    
    const isCorrect = selectedOption === currentQuestion.correctAnswer;
    
    return (
      <View style={styles.answerContainer}>
        <View style={[styles.resultIndicator, isCorrect ? styles.correctIndicator : styles.wrongIndicator]}>
          <FontAwesome
            name={isCorrect ? "check-circle" : "times-circle"}
            size={28}
            color="white"
          />
          <Text style={styles.resultIndicatorText}>
            {isCorrect ? "正解" : "不正解"}
          </Text>
        </View>
        
        <View style={styles.translationContainer}>
          <Text style={styles.translationLabel}>正しい訳:</Text>
          <Text style={styles.translationText}>{currentQuestion.explanation.translation}</Text>
        </View>
        
        <View style={styles.explanationContainer}>
          <Text style={styles.explanationTitle}>単語・文法の解説</Text>
          
          <View style={styles.explanationSection}>
            <View style={styles.explanationHeader}>
              <FontAwesome name="book" size={18} color={COLORS.primary} style={styles.explanationIcon} />
              <Text style={styles.explanationLabel}>語彙:</Text>
            </View>
            {currentQuestion.explanation.vocabulary.map((item, index) => (
              <Text key={`vocab-${index}`} style={styles.explanationText}>• {item}</Text>
            ))}
          </View>
          
          <View style={styles.explanationSection}>
            <View style={styles.explanationHeader}>
              <FontAwesome name="pencil" size={18} color={COLORS.primary} style={styles.explanationIcon} />
              <Text style={styles.explanationLabel}>文法:</Text>
            </View>
            {currentQuestion.explanation.grammar.map((item, index) => (
              <Text key={`grammar-${index}`} style={styles.explanationText}>• {item}</Text>
            ))}
          </View>
        </View>
        
        <TouchableOpacity
          style={styles.nextButton}
          onPress={handleNextQuestion}
          activeOpacity={0.8}
        >
          <LinearGradient
            colors={[COLORS.gradient.start, COLORS.gradient.end]}
            style={styles.nextButtonGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={styles.nextButtonText}>
              {currentQuestionIndex === currentQuizData.length - 1 ? '結果を見る' : '次の問題へ'}
            </Text>
            {currentQuestionIndex !== currentQuizData.length - 1 && (
              <FontAwesome name="arrow-right" size={16} color="white" style={styles.nextButtonIcon} />
            )}
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  };

  // 結果画面をレンダリングする関数
  const renderResultSection = () => {
    const percentage = Math.round((score / currentQuizData.length) * 100);
    let resultMessage = "もう少し頑張りましょう！";
    let resultIcon: any = "meh-o";
    
    if (percentage >= 80) {
      resultMessage = "素晴らしい成績です！";
      resultIcon = "trophy";
    } else if (percentage >= 60) {
      resultMessage = "良い結果です！";
      resultIcon = "smile-o";
    }

    return (
      <ScrollView style={styles.resultScrollView} contentContainerStyle={styles.resultScrollContent}>
        <View style={styles.resultContainer}>
          <LinearGradient
            colors={['#FFFFFF', COLORS.tertiary]}
            style={styles.resultGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
          >
            <View style={styles.resultCircleContainer}>
              <View style={styles.resultCircle}>
                <Text style={styles.resultPercentage}>{percentage}%</Text>
                <FontAwesome name={resultIcon} size={32} color={COLORS.primary} style={styles.resultIcon} />
              </View>
            </View>
            
            <Text style={styles.resultTitle}>クイズ結果</Text>
            <Text style={styles.resultMessage}>{resultMessage}</Text>
            
            <View style={styles.resultStatsContainer}>
              <View style={styles.resultStatItem}>
                <Text style={styles.resultStatLabel}>レベル</Text>
                <View style={styles.resultStatValueContainer}>
                  <Text style={styles.resultStatValue}>{selectedLevel}</Text>
                </View>
              </View>
              
              <View style={styles.resultStatDivider} />
              
              <View style={styles.resultStatItem}>
                <Text style={styles.resultStatLabel}>スコア</Text>
                <View style={styles.resultStatValueContainer}>
                  <Text style={styles.resultStatValue}>{score} / {currentQuizData.length}</Text>
                </View>
              </View>
            </View>
            
            <View style={styles.resultButtonsContainer}>
              <TouchableOpacity
                style={styles.restartButton}
                onPress={handleRestartQuiz}
                activeOpacity={0.8}
              >
                <LinearGradient
                  colors={[COLORS.gradient.start, COLORS.gradient.end]}
                  style={styles.restartGradient}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                >
                  <FontAwesome name="refresh" size={16} color="white" style={styles.buttonIcon} />
                  <Text style={styles.restartButtonText}>同じレベルで再挑戦</Text>
                </LinearGradient>
              </TouchableOpacity>
              
              <TouchableOpacity
                style={styles.levelSelectButton}
                onPress={() => setSelectedLevel(null)}
                activeOpacity={0.8}
              >
                <FontAwesome name="list" size={16} color={COLORS.primary} style={styles.buttonIcon} />
                <Text style={styles.levelSelectButtonText}>レベルを選択する</Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                style={styles.homeButton}
                onPress={handleNavToHome}
                activeOpacity={0.8}
              >
                <FontAwesome name="home" size={16} color={COLORS.text.medium} style={styles.buttonIcon} />
                <Text style={styles.homeButtonText}>ホームに戻る</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>
      </ScrollView>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <LinearGradient
        colors={[COLORS.gradient.start, COLORS.gradient.end]}
        style={styles.headerContainer}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Text style={styles.title}>スペイン語クイズ</Text>
        {selectedLevel && (
          <View style={styles.headerLevelBadge}>
            <Text style={styles.headerLevelText}>{selectedLevel}</Text>
          </View>
        )}
      </LinearGradient>

      <View style={styles.contentContainer}>
        {selectedLevel === null ? (
          renderLevelSelection()
        ) : (
          quizCompleted ? renderResultSection() : renderQuestionSection()
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background.main,
  },
  headerContainer: {
    padding: SPACING.lg,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.text.white,
    textAlign: 'center',
  },
  headerLevelBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  headerLevelText: {
    color: COLORS.text.white,
    fontWeight: 'bold',
  },
  contentContainer: {
    flex: 1,
    padding: SPACING.lg,
  },
  // レベル選択画面のスタイル
  levelSelectionContainer: {
    flex: 1,
    alignItems: 'center',
  },
  levelHeaderContainer: {
    marginBottom: SPACING.xl,
    alignItems: 'center',
  },
  levelSelectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.text.dark,
    marginBottom: SPACING.xs,
    textAlign: 'center',
  },
  levelSelectionSubtitle: {
    fontSize: 16,
    color: COLORS.text.medium,
    textAlign: 'center',
  },
  levelScrollView: {
    width: '100%',
  },
  levelButtonsContainer: {
    paddingBottom: SPACING.xl,
  },
  levelButton: {
    width: '100%',
    marginBottom: SPACING.md,
    borderRadius: 16,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  levelButtonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
    padding: SPACING.md,
    overflow: 'hidden',
  },
  levelIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.md,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  levelButtonContent: {
    flex: 1,
  },
  levelButtonText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 2,
  },
  levelDescription: {
    fontSize: 14,
    color: COLORS.text.medium,
  },
  levelButtonIcon: {
    marginLeft: SPACING.sm,
  },
  // 問題パートのスタイル
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  progressBar: {
    flex: 1,
    height: 8,
    backgroundColor: 'rgba(240, 180, 40, 0.2)',
    borderRadius: 10,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: COLORS.primary,
    borderRadius: 10,
  },
  progressText: {
    marginLeft: 10,
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.text.medium,
  },
  questionContainer: {
    marginBottom: SPACING.md,
    borderRadius: 20,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
    overflow: 'hidden',
  },
  questionGradient: {
    padding: SPACING.lg,
    borderRadius: 20,
    position: 'relative',
  },
  questionBadge: {
    position: 'absolute',
    top: -10,
    left: 24,
    backgroundColor: COLORS.primary,
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
    borderWidth: 2,
    borderColor: 'white',
  },
  questionNumber: {
    color: COLORS.text.dark,
    fontWeight: 'bold',
    fontSize: 16,
  },
  questionText: {
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.text.dark,
    marginBottom: SPACING.md,
    marginTop: 10,
    textAlign: 'center',
    lineHeight: 36,
    letterSpacing: 0.3,
  },
  levelBadge: {
    alignSelf: 'flex-end',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.accent,
  },
  levelIndicator: {
    fontSize: 14,
    color: COLORS.text.medium,
    fontWeight: '600',
  },
  optionsContainer: {
    marginBottom: SPACING.md,
    maxHeight: 260,
  },
  optionButton: {
    backgroundColor: COLORS.background.card,
    borderRadius: 16,
    marginBottom: 12,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    borderWidth: 1,
    borderColor: 'rgba(240, 180, 40, 0.2)',
    overflow: 'hidden',
  },
  optionContent: {
    padding: SPACING.md,
  },
  optionText: {
    fontSize: 16,
    color: COLORS.text.dark,
    letterSpacing: 0.3,
  },
  selectedOption: {
    backgroundColor: COLORS.tertiary,
    borderColor: COLORS.primary,
  },
  selectedOptionText: {
    color: COLORS.text.dark,
    fontWeight: 'bold',
  },
  submitButton: {
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    overflow: 'hidden',
  },
  submitGradient: {
    padding: SPACING.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabledButton: {
    opacity: 0.6,
  },
  submitButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text.white,
  },
  // 回答パートのスタイル
  answerContainer: {
    backgroundColor: COLORS.background.card,
    borderRadius: 20,
    padding: SPACING.lg,
    marginBottom: SPACING.md,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  resultIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    padding: SPACING.md,
    marginBottom: SPACING.lg,
  },
  correctIndicator: {
    backgroundColor: COLORS.success,
  },
  wrongIndicator: {
    backgroundColor: COLORS.error,
  },
  resultIndicatorText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.text.white,
    marginLeft: 8,
  },
  translationContainer: {
    marginBottom: SPACING.lg,
    padding: SPACING.md,
    backgroundColor: COLORS.background.highlight,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.primary,
  },
  translationLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.text.dark,
    marginBottom: 8,
  },
  translationText: {
    fontSize: 18,
    color: COLORS.text.dark,
    lineHeight: 26,
    letterSpacing: 0.3,
  },
  explanationContainer: {
    marginBottom: SPACING.lg,
  },
  explanationTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.text.dark,
    marginBottom: SPACING.md,
    textAlign: 'center',
  },
  explanationSection: {
    marginBottom: SPACING.md,
    backgroundColor: COLORS.background.highlight,
    padding: SPACING.md,
    borderRadius: 12,
  },
  explanationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  explanationIcon: {
    marginRight: 8,
  },
  explanationLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  explanationText: {
    fontSize: 16,
    color: COLORS.text.medium,
    marginBottom: 6,
    lineHeight: 22,
    letterSpacing: 0.3,
    paddingLeft: SPACING.md,
  },
  nextButton: {
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  nextButtonGradient: {
    padding: SPACING.md,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  nextButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text.white,
  },
  nextButtonIcon: {
    marginLeft: 8,
  },
  
  // 結果画面のスタイル
  resultScrollView: {
    flex: 1,
  },
  resultScrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  resultContainer: {
    flex: 1,
    borderRadius: 24,
    overflow: 'hidden',
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 8,
    margin: 4,
  },
  resultGradient: {
    padding: SPACING.xl,
    alignItems: 'center',
    borderRadius: 24,
  },
  resultCircleContainer: {
    marginBottom: SPACING.lg,
    padding: SPACING.md,
  },
  resultCircle: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: COLORS.background.card,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
    borderWidth: 8,
    borderColor: COLORS.primary,
  },
  resultIcon: {
    marginTop: SPACING.sm,
  },
  resultTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.text.dark,
    marginBottom: SPACING.xs,
  },
  resultMessage: {
    fontSize: 18,
    color: COLORS.text.medium,
    marginBottom: SPACING.lg,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  resultStatsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: COLORS.background.card,
    borderRadius: 16,
    padding: SPACING.md,
    marginBottom: SPACING.xl,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  resultStatItem: {
    alignItems: 'center',
    flex: 1,
  },
  resultStatDivider: {
    width: 1,
    backgroundColor: COLORS.secondary,
    opacity: 0.3,
    marginHorizontal: SPACING.md,
  },
  resultStatLabel: {
    fontSize: 14,
    color: COLORS.text.medium,
    marginBottom: 4,
  },
  resultStatValueContainer: {
    backgroundColor: COLORS.tertiary,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  resultStatValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text.dark,
  },
  resultPercentage: {
    fontSize: 48,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  resultButtonsContainer: {
    width: '100%',
  },
  buttonIcon: {
    marginRight: SPACING.sm,
  },
  restartButton: {
    width: '100%',
    marginBottom: SPACING.md,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  restartGradient: {
    padding: SPACING.md,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  restartButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text.white,
  },
  levelSelectButton: {
    backgroundColor: COLORS.accent,
    borderRadius: 16,
    padding: SPACING.md,
    alignItems: 'center',
    width: '100%',
    marginBottom: SPACING.md,
    flexDirection: 'row',
    justifyContent: 'center',
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 2,
  },
  levelSelectButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  homeButton: {
    backgroundColor: COLORS.background.card,
    borderRadius: 16,
    padding: SPACING.md,
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.accent,
  },
  homeButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.text.medium,
  },
}); 