import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

// サンプルのクイズデータ
const quizData = [
  {
    id: 1,
    question: '「こんにちは」のスペイン語は？',
    options: ['Adiós', 'Hola', 'Gracias', 'Buenos días'],
    correctAnswer: 'Hola'
  },
  {
    id: 2,
    question: '「ありがとう」のスペイン語は？',
    options: ['Por favor', 'Buenos días', 'Gracias', 'De nada'],
    correctAnswer: 'Gracias'
  },
  {
    id: 3,
    question: '「おやすみなさい」のスペイン語は？',
    options: ['Buenos días', 'Buenas tardes', 'Buenas noches', 'Hasta luego'],
    correctAnswer: 'Buenas noches'
  },
  {
    id: 4,
    question: '「さようなら」のスペイン語は？',
    options: ['Hola', 'Adiós', 'Hasta mañana', 'Buenas tardes'],
    correctAnswer: 'Adiós'
  },
  {
    id: 5,
    question: '「お元気ですか？」のスペイン語は？',
    options: ['¿Cómo estás?', '¿Qué tal?', '¿Dónde estás?', '¿Quién eres?'],
    correctAnswer: '¿Cómo estás?'
  }
];

export default function QuizScreen() {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  
  const currentQuestion = quizData[currentQuestionIndex];
  
  const handleOptionPress = (option: string) => {
    setSelectedOption(option);
    if (option === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
    setShowResult(true);
  };
  
  const handleNextQuestion = () => {
    setSelectedOption('');
    setShowResult(false);
    
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };
  
  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption('');
    setScore(0);
    setShowResult(false);
    setQuizCompleted(false);
  };
  
  const handleNavToHome = () => {
    router.push('/home');
  };

  const renderQuestionSection = () => {
    return (
      <>
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View 
              style={[
                styles.progressFill, 
                { width: `${((currentQuestionIndex + 1) / quizData.length) * 100}%` }
              ]} 
            />
          </View>
          <Text style={styles.progressText}>
            {currentQuestionIndex + 1} / {quizData.length}
          </Text>
        </View>
        
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>{currentQuestion.question}</Text>
        </View>
        
        <View style={styles.optionsContainer}>
          {currentQuestion.options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.optionButton,
                selectedOption === option && (
                  option === currentQuestion.correctAnswer
                    ? styles.correctOption
                    : styles.wrongOption
                )
              ]}
              onPress={() => handleOptionPress(option)}
              disabled={showResult}
            >
              <Text style={styles.optionText}>{option}</Text>
              {showResult && option === currentQuestion.correctAnswer && (
                <FontAwesome name="check" size={20} color="white" style={styles.optionIcon} />
              )}
              {showResult && selectedOption === option && option !== currentQuestion.correctAnswer && (
                <FontAwesome name="times" size={20} color="white" style={styles.optionIcon} />
              )}
            </TouchableOpacity>
          ))}
        </View>
        
        {showResult && (
          <TouchableOpacity
            style={styles.nextButton}
            onPress={handleNextQuestion}
          >
            <Text style={styles.nextButtonText}>
              {currentQuestionIndex === quizData.length - 1 ? '結果を見る' : '次の問題'}
            </Text>
          </TouchableOpacity>
        )}
      </>
    );
  };

  const renderResultSection = () => {
    return (
      <View style={styles.resultContainer}>
        <Text style={styles.resultTitle}>クイズ結果</Text>
        <Text style={styles.resultScore}>
          スコア: {score} / {quizData.length}
        </Text>
        <Text style={styles.resultPercentage}>
          {Math.round((score / quizData.length) * 100)}%
        </Text>
        
        <TouchableOpacity
          style={styles.restartButton}
          onPress={handleRestartQuiz}
        >
          <Text style={styles.restartButtonText}>もう一度挑戦する</Text>
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
        {quizCompleted ? renderResultSection() : renderQuestionSection()}
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
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
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
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
    textAlign: 'center',
  },
  optionsContainer: {
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  optionIcon: {
    marginLeft: 10,
  },
  correctOption: {
    backgroundColor: '#10b981',
  },
  wrongOption: {
    backgroundColor: '#ef4444',
  },
  nextButton: {
    backgroundColor: '#3b82f6',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginTop: 10,
  },
  nextButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
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
    marginBottom: 24,
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