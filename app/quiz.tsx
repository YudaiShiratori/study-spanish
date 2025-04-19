import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

// クイズデータと型定義をインポート
import { DELELevel, QuizItem } from '../data/quizzes/types';
import { getQuizDataByLevel, getAllLevels } from '../data/quizzes';

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
    router.push('/home');
  };

  // レベル選択画面をレンダリングする関数
  const renderLevelSelection = () => {
    return (
      <View style={styles.levelSelectionContainer}>
        <Text style={styles.levelSelectionTitle}>スペイン語レベルを選択</Text>
        <Text style={styles.levelSelectionSubtitle}>DELEレベルに準拠した問題に挑戦しましょう</Text>
        
        <View style={styles.levelButtonsContainer}>
          {getAllLevels().map((level) => (
            <TouchableOpacity
              key={level}
              style={styles.levelButton}
              onPress={() => handleLevelSelect(level)}
            >
              <Text style={styles.levelButtonText}>{level}</Text>
              <Text style={styles.levelDescription}>
                {level === 'A1' && '初級 - 基本的な表現'}
                {level === 'A2' && '初級上 - 日常表現'}
                {level === 'B1' && '中級 - 自立した言語使用'}
                {level === 'B2' && '中級上 - 流暢な会話'}
                {level === 'C1' && '上級 - 効果的な言語運用'}
                {level === 'C2' && '上級上 - ネイティブ並の理解力'}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
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
          <Text style={styles.questionText}>{currentQuestion.spanish}</Text>
          <Text style={styles.levelIndicator}>レベル: {currentQuestion.level}</Text>
        </View>
        
        <ScrollView style={styles.optionsContainer}>
          {currentQuestion.options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.optionButton,
                selectedOption === option && styles.selectedOption
              ]}
              onPress={() => handleOptionPress(option)}
              disabled={showAnswer}
            >
              <Text style={[
                styles.optionText,
                selectedOption === option && styles.selectedOptionText
              ]}>
                {option}
              </Text>
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
          >
            <Text style={styles.submitButtonText}>解答する</Text>
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
            name={isCorrect ? "check" : "times"}
            size={24}
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
            <Text style={styles.explanationLabel}>語彙:</Text>
            {currentQuestion.explanation.vocabulary.map((item, index) => (
              <Text key={`vocab-${index}`} style={styles.explanationText}>• {item}</Text>
            ))}
          </View>
          
          <View style={styles.explanationSection}>
            <Text style={styles.explanationLabel}>文法:</Text>
            {currentQuestion.explanation.grammar.map((item, index) => (
              <Text key={`grammar-${index}`} style={styles.explanationText}>• {item}</Text>
            ))}
          </View>
        </View>
        
        <TouchableOpacity
          style={styles.nextButton}
          onPress={handleNextQuestion}
        >
          <Text style={styles.nextButtonText}>
            {currentQuestionIndex === currentQuizData.length - 1 ? '結果を見る' : '次の問題へ'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  // 結果画面をレンダリングする関数
  const renderResultSection = () => {
    return (
      <View style={styles.resultContainer}>
        <Text style={styles.resultTitle}>クイズ結果</Text>
        <Text style={styles.resultLevel}>レベル: {selectedLevel}</Text>
        <Text style={styles.resultScore}>
          スコア: {score} / {currentQuizData.length}
        </Text>
        <Text style={styles.resultPercentage}>
          {Math.round((score / currentQuizData.length) * 100)}%
        </Text>
        
        <TouchableOpacity
          style={styles.restartButton}
          onPress={handleRestartQuiz}
        >
          <Text style={styles.restartButtonText}>同じレベルで再挑戦</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.levelSelectButton}
          onPress={() => setSelectedLevel(null)}
        >
          <Text style={styles.levelSelectButtonText}>レベルを選択する</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.homeButton}
          onPress={handleNavToHome}
        >
          <Text style={styles.homeButtonText}>ホームに戻る</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>スペイン語クイズ</Text>
      </View>

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
    backgroundColor: '#f5f5f5',
  },
  headerContainer: {
    backgroundColor: '#3b82f6',
    padding: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  contentContainer: {
    flex: 1,
    padding: 20,
  },
  // レベル選択画面のスタイル
  levelSelectionContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  levelSelectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 8,
  },
  levelSelectionSubtitle: {
    fontSize: 16,
    color: '#64748b',
    marginBottom: 24,
    textAlign: 'center',
  },
  levelButtonsContainer: {
    width: '100%',
  },
  levelButton: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  levelButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3b82f6',
    marginBottom: 8,
  },
  levelDescription: {
    fontSize: 14,
    color: '#64748b',
  },
  // 問題パートのスタイル
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  progressBar: {
    flex: 1,
    height: 8,
    backgroundColor: '#e5e7eb',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#3b82f6',
  },
  progressText: {
    marginLeft: 10,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#64748b',
  },
  questionContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  questionText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 8,
    textAlign: 'center',
  },
  levelIndicator: {
    fontSize: 14,
    color: '#64748b',
    textAlign: 'right',
  },
  optionsContainer: {
    marginBottom: 16,
    maxHeight: 240,
  },
  optionButton: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  optionText: {
    fontSize: 16,
    color: '#1e293b',
  },
  selectedOption: {
    backgroundColor: '#dbeafe',
    borderColor: '#3b82f6',
    borderWidth: 2,
  },
  selectedOptionText: {
    color: '#1e40af',
    fontWeight: 'bold',
  },
  submitButton: {
    backgroundColor: '#3b82f6',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  disabledButton: {
    backgroundColor: '#a5b4fc',
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  // 回答パートのスタイル
  answerContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  resultIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    padding: 10,
    marginBottom: 16,
  },
  correctIndicator: {
    backgroundColor: '#10b981',
  },
  wrongIndicator: {
    backgroundColor: '#ef4444',
  },
  resultIndicatorText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 8,
  },
  translationContainer: {
    marginBottom: 16,
    padding: 12,
    backgroundColor: '#f8fafc',
    borderRadius: 8,
  },
  translationLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 4,
  },
  translationText: {
    fontSize: 18,
    color: '#1e293b',
  },
  explanationContainer: {
    marginBottom: 16,
  },
  explanationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 12,
    textAlign: 'center',
  },
  explanationSection: {
    marginBottom: 12,
  },
  explanationLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 4,
  },
  explanationText: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 4,
    lineHeight: 20,
  },
  nextButton: {
    backgroundColor: '#3b82f6',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  nextButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  // 結果画面のスタイル
  resultContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  resultTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 8,
  },
  resultLevel: {
    fontSize: 18,
    color: '#3b82f6',
    marginBottom: 16,
    fontWeight: 'bold',
  },
  resultScore: {
    fontSize: 20,
    color: '#64748b',
    marginBottom: 12,
  },
  resultPercentage: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#3b82f6',
    marginBottom: 36,
  },
  restartButton: {
    backgroundColor: '#3b82f6',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    width: '100%',
    marginBottom: 12,
  },
  restartButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  levelSelectButton: {
    backgroundColor: '#dbeafe',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    width: '100%',
    marginBottom: 12,
  },
  levelSelectButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3b82f6',
  },
  homeButton: {
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    width: '100%',
  },
  homeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#64748b',
  },
}); 