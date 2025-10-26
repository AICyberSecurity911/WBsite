
export interface CalculatorQuestion {
  id: string
  question: string
  type: 'single-choice' | 'multiple-choice' | 'scale' | 'text'
  options?: string[]
  required: boolean
}

export interface AIEmployee {
  id: string
  title: string
  tagline: string
  description: string
  problemSolved: string
  features: string[]
  metrics: {
    accuracy: string
    timeSaved: string
    costSavings: string
  }
  testimonial: {
    quote: string
    author: string
    company: string
  }
  deploymentTime: string
  integrations: string[]
  icon: string // Lucide icon name
}

export const calculatorQuestions: CalculatorQuestion[] = [
  {
    id: 'biggest_time_drain',
    question: "What's your biggest time drain as a business owner?",
    type: 'single-choice',
    options: [
      'Administrative tasks and paperwork',
      'Customer service and support',
      'Sales follow-ups and lead management',
      'Bookkeeping and financial management',
      'Hiring and HR management',
      'Social media and marketing',
      'Project management and coordination'
    ],
    required: true
  },
  {
    id: 'repetitive_hours',
    question: 'How many hours per week do you spend on repetitive tasks?',
    type: 'single-choice',
    options: [
      'Less than 10 hours',
      '10-20 hours',
      '20-30 hours',
      '30-40 hours',
      'More than 40 hours'
    ],
    required: true
  },
  {
    id: 'biggest_bottleneck',
    question: "What's your biggest business bottleneck right now?",
    type: 'single-choice',
    options: [
      'Not enough qualified leads',
      'Poor customer response times',
      'Inaccurate financial reporting',
      'Difficulty finding good employees',
      'Inconsistent marketing efforts',
      'Project delays and miscommunication',
      'Cash flow management'
    ],
    required: true
  },
  {
    id: 'industry',
    question: 'What industry are you in?',
    type: 'single-choice',
    options: [
      'Professional Services',
      'Retail/E-commerce',
      'Healthcare',
      'Real Estate',
      'Construction',
      'Technology',
      'Manufacturing',
      'Other'
    ],
    required: true
  },
  {
    id: 'team_size',
    question: 'How many employees do you currently have?',
    type: 'single-choice',
    options: [
      'Just me (solo)',
      '2-5 employees',
      '6-15 employees',
      '16-50 employees',
      '51-100 employees',
      'More than 100'
    ],
    required: true
  },
  {
    id: 'current_tools',
    question: 'Which business tools do you currently use?',
    type: 'multiple-choice',
    options: [
      'QuickBooks/Xero',
      'Salesforce/HubSpot',
      'Zendesk/Intercom',
      'Asana/Monday',
      'Social media platforms',
      'Email marketing tools',
      'None of the above'
    ],
    required: false
  },
  {
    id: 'primary_goal',
    question: 'What\'s your primary business goal for the next 12 months?',
    type: 'single-choice',
    options: [
      'Increase revenue by 25%+',
      'Reduce operational costs',
      'Improve customer satisfaction',
      'Scale the team efficiently',
      'Better work-life balance',
      'Expand to new markets'
    ],
    required: true
  }
]

export const aiEmployees: AIEmployee[] = [
  {
    id: 'bookkeeper',
    title: 'AI Bookkeeper',
    tagline: 'Never worry about financial accuracy again',
    description: 'Automates your entire accounting workflow with 99.7% accuracy',
    problemSolved: 'Eliminates bookkeeping errors, late tax filings, and financial blind spots',
    features: [
      'Automated transaction categorization',
      'Real-time financial reporting',
      'Tax preparation assistance',
      'Cash flow forecasting',
      'Expense tracking and approval',
      'Invoice generation and follow-ups'
    ],
    metrics: {
      accuracy: '99.7%',
      timeSaved: '15 hours/week',
      costSavings: '87%'
    },
    testimonial: {
      quote: "Our books are perfect every month now. I sleep better at night.",
      author: "Peter Fernandes",
      company: "Fernandes Construction"
    },
    deploymentTime: '3-5 business days',
    integrations: ['QuickBooks', 'Xero', 'FreshBooks', 'Wave'],
    icon: 'Calculator'
  },
  {
    id: 'executive-assistant',
    title: 'AI Executive Assistant',
    tagline: 'Your 24/7 productivity powerhouse',
    description: 'Manages your schedule, emails, and administrative tasks flawlessly',
    problemSolved: 'Eliminates scheduling conflicts, missed opportunities, and administrative overwhelm',
    features: [
      'Calendar management and scheduling',
      'Email filtering and responses',
      'Meeting preparation and notes',
      'Travel arrangement coordination',
      'Document organization',
      'Follow-up reminders'
    ],
    metrics: {
      accuracy: '98.5%',
      timeSaved: '20 hours/week',
      costSavings: '78%'
    },
    testimonial: {
      quote: "It's like having the perfect assistant who never takes a day off.",
      author: "Sofia Delacroix",
      company: "Delacroix Marketing"
    },
    deploymentTime: '1-2 business days',
    integrations: ['Google Calendar', 'Outlook', 'Slack', 'Teams'],
    icon: 'User'
  },
  // Add more AI employees...
]

export function calculateRecommendations(answers: Record<string, any>): AIEmployee[] {
  const recommendations: AIEmployee[] = []
  
  // Logic to determine which AI employees to recommend based on answers
  if (answers.biggest_time_drain === 'Bookkeeping and financial management') {
    recommendations.push(aiEmployees.find(emp => emp.id === 'bookkeeper')!)
  }
  
  if (answers.biggest_time_drain === 'Administrative tasks and paperwork') {
    recommendations.push(aiEmployees.find(emp => emp.id === 'executive-assistant')!)
  }
  
  // Add more logic for other AI employees...
  
  return recommendations.slice(0, 3) // Return top 3 recommendations
}

export function calculateROI(answers: Record<string, any>, recommendations: AIEmployee[]): any {
  // Calculate estimated savings based on answers and recommendations
  const hourlyRate = 25 // Average hourly rate assumption
  let weeklyHours = 10
  
  switch (answers.repetitive_hours) {
    case '10-20 hours': weeklyHours = 15; break
    case '20-30 hours': weeklyHours = 25; break
    case '30-40 hours': weeklyHours = 35; break
    case 'More than 40 hours': weeklyHours = 45; break
  }
  
  const monthlySavings = weeklyHours * hourlyRate * 4.33 // weeks per month
  const annualSavings = monthlySavings * 12
  
  return {
    weeklyHoursSaved: weeklyHours,
    monthlySavings: monthlySavings,
    annualSavings: annualSavings,
    paybackPeriod: '2-3 months',
    roi: '385%'
  }
}
