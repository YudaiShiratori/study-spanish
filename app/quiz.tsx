import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { Progress } from '../components/ui/progress';
import { quizData, Question } from '../constants/quiz';

export default function QuizScreen() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const currentQuestion = quizData[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === quizData.length - 1;

  const handleAnswer = () => {
    if (selectedAnswer === null) return;

    const answerIndex = parseInt(selectedAnswer);
    const isCorrect = answerIndex === currentQuestion.correctIndex;

    if (isCorrect) {
      setScore(score + 1);
    }

    setShowResult(true);
  };

  const handleNext = () => {
    if (isLastQuestion) {
      setCompleted(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setCompleted(false);
  };

  const progress = ((currentQuestionIndex + 1) / quizData.length) * 100;

  if (completed) {
    return (
      <SafeAreaView style={styles.container}>
        <Card style={styles.resultCard}>
          <CardHeader>
            <CardTitle>クイズ完了！</CardTitle>
          </CardHeader>
          <CardContent>
            <Text style={styles.resultText}>
              あなたのスコア: {score} / {quizData.length}
            </Text>
            <Text style={styles.resultPercentage}>
              正答率: {Math.round((score / quizData.length) * 100)}%
            </Text>
          </CardContent>
          <CardFooter>
            <Button onPress={handleRestart}>もう一度挑戦する</Button>
          </CardFooter>
        </Card>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.scoreText}>スコア: {score} / {quizData.length}</Text>
        <Progress value={progress} style={styles.progressBar} />
        <Text style={styles.questionCounter}>問題 {currentQuestionIndex + 1} / {quizData.length}</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {!showResult ? (
          <Card style={styles.questionCard}>
            <CardHeader>
              <CardTitle>スペイン語の文章</CardTitle>
            </CardHeader>
            <CardContent>
              <Text style={styles.sentenceText}>{currentQuestion.sentence}</Text>
              <Text style={styles.instructionText}>正しい日本語訳を選んでください</Text>
              
              <RadioGroup
                value={selectedAnswer || ''}
                onValueChange={setSelectedAnswer}
                style={styles.radioGroup}
              >
                {currentQuestion.choices.map((choice, index) => (
                  <RadioGroupItem key={index} value={index.toString()}>
                    {choice}
                  </RadioGroupItem>
                ))}
              </RadioGroup>
            </CardContent>
            <CardFooter>
              <Button
                onPress={handleAnswer}
                disabled={selectedAnswer === null}
              >
                解答する
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <Card style={styles.resultCard}>
            <CardHeader>
              <CardTitle>
                {currentQuestion.choices[parseInt(selectedAnswer!)]}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <View style={styles.resultStatusContainer}>
                {parseInt(selectedAnswer!) === currentQuestion.correctIndex ? (
                  <View style={styles.correctBadge}>
                    <Text style={styles.badgeText}>正解</Text>
                  </View>
                ) : (
                  <View style={styles.incorrectBadge}>
                    <Text style={styles.badgeText}>不正解</Text>
                  </View>
                )}
              </View>
              
              {parseInt(selectedAnswer!) !== currentQuestion.correctIndex && (
                <View style={styles.correctAnswerContainer}>
                  <Text style={styles.correctAnswerLabel}>正解:</Text>
                  <Text style={styles.correctAnswerText}>
                    {currentQuestion.choices[currentQuestion.correctIndex]}
                  </Text>
                </View>
              )}

              <View style={styles.explanationContainer}>
                <Text style={styles.explanationTitle}>解説:</Text>
                <Text style={styles.explanationText}>{currentQuestion.explanation}</Text>
              </View>
            </CardContent>
            <CardFooter>
              <Button onPress={handleNext}>
                {isLastQuestion ? '結果を見る' : '次の問題へ'}
              </Button>
            </CardFooter>
          </Card>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f9fc',
  },
  header: {
    padding: 16,
  },
  scoreText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  progressBar: {
    marginBottom: 8,
  },
  questionCounter: {
    fontSize: 14,
    color: '#64748b',
    textAlign: 'right',
  },
  content: {
    padding: 16,
    paddingBottom: 32,
  },
  questionCard: {
    marginBottom: 16,
  },
  sentenceText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  instructionText: {
    fontSize: 16,
    marginBottom: 16,
    color: '#64748b',
  },
  radioGroup: {
    marginVertical: 16,
  },
  resultCard: {
    marginBottom: 16,
  },
  resultStatusContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 16,
  },
  correctBadge: {
    backgroundColor: '#22c55e',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
  },
  incorrectBadge: {
    backgroundColor: '#ef4444',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
  },
  badgeText: {
    color: 'white',
    fontWeight: 'bold',
  },
  correctAnswerContainer: {
    marginBottom: 16,
    padding: 12,
    backgroundColor: '#f8fafc',
    borderRadius: 8,
  },
  correctAnswerLabel: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 4,
  },
  correctAnswerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  explanationContainer: {
    marginTop: 8,
    padding: 12,
    backgroundColor: '#f8fafc',
    borderRadius: 8,
  },
  explanationTitle: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 4,
  },
  explanationText: {
    fontSize: 16,
    lineHeight: 24,
  },
  resultText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
  resultPercentage: {
    fontSize: 18,
    textAlign: 'center',
    color: '#64748b',
    marginBottom: 24,
  },
}); 