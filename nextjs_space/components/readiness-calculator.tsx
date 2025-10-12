
"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";

interface Question {
  id: string;
  question: string;
  options: Array<{ value: string; label: string; weight: number }>;
  weight: number;
}

const questions: Question[] = [
  {
    id: 'deployment_speed',
    question: 'How quickly can your organization deploy new technology solutions?',
    weight: 20,
    options: [
      { value: 'weeks', label: '2-4 weeks', weight: 100 },
      { value: 'months_1_3', label: '1-3 months', weight: 75 },
      { value: 'months_3_6', label: '3-6 months', weight: 50 },
      { value: 'months_6_plus', label: '6+ months', weight: 25 }
    ]
  },
  {
    id: 'data_architecture',
    question: 'How would you describe your current data architecture?',
    weight: 15,
    options: [
      { value: 'unified_modern', label: 'Unified, modern, API-driven', weight: 100 },
      { value: 'mostly_integrated', label: 'Mostly integrated with some silos', weight: 70 },
      { value: 'fragmented', label: 'Fragmented but functional', weight: 40 },
      { value: 'legacy_silos', label: 'Legacy systems in silos', weight: 10 }
    ]
  },
  {
    id: 'security_posture',
    question: 'What best describes your cybersecurity approach?',
    weight: 15,
    options: [
      { value: 'proactive_advanced', label: 'Proactive with advanced threat detection', weight: 100 },
      { value: 'good_monitoring', label: 'Good monitoring and incident response', weight: 75 },
      { value: 'basic_compliance', label: 'Basic compliance and reactive measures', weight: 50 },
      { value: 'minimal_outdated', label: 'Minimal or outdated security measures', weight: 20 }
    ]
  },
  {
    id: 'change_management',
    question: 'How does your organization handle major process changes?',
    weight: 10,
    options: [
      { value: 'agile_adaptive', label: 'Agile and adaptive culture', weight: 100 },
      { value: 'structured_flexible', label: 'Structured but flexible approach', weight: 75 },
      { value: 'slow_methodical', label: 'Slow but methodical implementation', weight: 50 },
      { value: 'resistant_difficult', label: 'Resistant to change, difficult adoption', weight: 25 }
    ]
  },
  {
    id: 'operational_waste',
    question: 'How much of your team\'s time is spent on manual, repetitive tasks?',
    weight: 10,
    options: [
      { value: 'minimal_10', label: 'Minimal (less than 10%)', weight: 100 },
      { value: 'some_10_25', label: 'Some (10-25%)', weight: 70 },
      { value: 'significant_25_50', label: 'Significant (25-50%)', weight: 40 },
      { value: 'majority_50_plus', label: 'Majority (50%+)', weight: 10 }
    ]
  },
  {
    id: 'competitor_ai',
    question: 'How are your competitors using AI compared to your organization?',
    weight: 10,
    options: [
      { value: 'ahead_of_competitors', label: 'We\'re ahead of most competitors', weight: 100 },
      { value: 'similar_level', label: 'Similar level of adoption', weight: 70 },
      { value: 'behind_some', label: 'Behind some key competitors', weight: 40 },
      { value: 'significantly_behind', label: 'Significantly behind', weight: 15 }
    ]
  },
  {
    id: 'process_documentation',
    question: 'How well-documented are your critical business processes?',
    weight: 10,
    options: [
      { value: 'comprehensive_updated', label: 'Comprehensive and regularly updated', weight: 100 },
      { value: 'good_some_gaps', label: 'Good documentation with some gaps', weight: 75 },
      { value: 'basic_outdated', label: 'Basic documentation, often outdated', weight: 50 },
      { value: 'minimal_tribal', label: 'Minimal documentation, tribal knowledge', weight: 20 }
    ]
  },
  {
    id: 'biggest_barrier',
    question: 'What\'s your biggest barrier to AI/automation adoption?',
    weight: 10,
    options: [
      { value: 'scaling_existing', label: 'Scaling existing successful pilots', weight: 100 },
      { value: 'budget_approval', label: 'Budget and executive buy-in', weight: 70 },
      { value: 'technical_skills', label: 'Technical skills and expertise', weight: 50 },
      { value: 'regulatory_compliance', label: 'Regulatory and compliance concerns', weight: 60 },
      { value: 'cultural_resistance', label: 'Cultural resistance to change', weight: 30 }
    ]
  }
];

const ReadinessCalculator: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [email, setEmail] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<any>(null);

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const calculateResults = async () => {
    try {
      const response = await fetch('/api/readiness/calculate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answers, email })
      });
      
      if (response.ok) {
        const data = await response.json();
        setResults(data);
        setShowResults(true);
      }
    } catch (error) {
      console.error('Failed to calculate results:', error);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      calculateResults();
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  if (showResults && results) {
    return (
      <div className="max-w-4xl mx-auto">
        <Card className="bg-white shadow-xl border-2 border-yellow-500">
          <CardHeader className="text-center bg-gradient-to-r from-yellow-500 to-orange-500 text-black">
            <CardTitle className="text-3xl font-bold">Your Enterprise Readiness Score</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <div className="text-6xl font-bold text-yellow-600 mb-4">
                {results.score}%
              </div>
              <div className="text-xl text-gray-700 mb-2">
                Risk Level: <span className="font-bold text-red-600">{results.riskLevel}</span>
              </div>
              <div className="text-lg text-gray-700">
                Estimated Value at Risk: <span className="font-bold text-red-600">{results.dollarRisk}</span>
              </div>
            </div>
            
            <Progress value={results.score} className="mb-8 h-4" />
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Recommended Services:</h3>
              {results.recommendations?.map?.((rec: string, index: number) => (
                <div key={index} className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                  <p className="font-medium">{rec}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold hover:from-yellow-400 hover:to-orange-400"
                onClick={() => window.location.href = '/schedule'}
              >
                Book Your Executive Briefing Now
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion) / questions.length) * 100;

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="bg-white shadow-xl">
        <CardHeader>
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-500">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-sm text-gray-500">
              {Math.round(progress)}% Complete
            </span>
          </div>
          <Progress value={progress} className="mb-4" />
          <CardTitle className="text-xl text-gray-900">{currentQ.question}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {currentQ.options?.map?.((option) => (
            <label 
              key={option.value}
              className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition"
            >
              <input
                type="radio"
                name={currentQ.id}
                value={option.value}
                checked={answers[currentQ.id] === option.value}
                onChange={(e) => handleAnswer(currentQ.id, e.target.value)}
                className="text-yellow-600"
              />
              <span className="text-gray-700">{option.label}</span>
            </label>
          ))}

          {currentQuestion === questions.length - 1 && (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <Label htmlFor="email" className="text-sm font-medium">
                Email (optional - to receive your detailed report):
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@company.com"
                className="mt-2"
              />
            </div>
          )}

          <div className="flex justify-between pt-6">
            <Button
              variant="outline"
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
            >
              Previous
            </Button>
            <Button
              onClick={nextQuestion}
              disabled={!answers[currentQ.id]}
              className="bg-yellow-600 hover:bg-yellow-700"
            >
              {currentQuestion === questions.length - 1 ? 'Calculate Results' : 'Next'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReadinessCalculator;
