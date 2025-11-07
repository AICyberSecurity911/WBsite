
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

export interface ServiceRecommendation {
  id: string
  name: string
  description: string
  icon: string
  url: string
  ctaText: string
  relevanceScore: number
  reasons: string[]
}

export function calculateROI(answers: Record<string, any>, recommendations: AIEmployee[]): any {
  // If no AI employees recommended, return zero savings
  if (!recommendations || recommendations.length === 0) {
    return {
      weeklyHoursSaved: 0,
      monthlySavings: 0,
      annualSavings: 0,
      paybackPeriod: 'N/A',
      roi: '0%'
    }
  }
  
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

export function getServiceRecommendations(answers: Record<string, any>): ServiceRecommendation[] {
  const recommendations: ServiceRecommendation[] = []
  
  // Intelligent Automation recommendations
  const automationScore = calculateAutomationScore(answers)
  if (automationScore > 0) {
    recommendations.push({
      id: 'intelligent-automation',
      name: 'Intelligent Automation',
      description: 'Transform repetitive workflows into automated systems that run 24/7',
      icon: 'Zap',
      url: '/intelligent-automation',
      ctaText: 'Explore Automation Solutions',
      relevanceScore: automationScore,
      reasons: getAutomationReasons(answers)
    })
  }
  
  // Business Transformation recommendations
  const transformationScore = calculateTransformationScore(answers)
  if (transformationScore > 0) {
    recommendations.push({
      id: 'business-transformation',
      name: 'Business Transformation',
      description: 'Optimize operations, scale efficiently, and achieve sustainable growth',
      icon: 'TrendingUp',
      url: '/business-transformation',
      ctaText: 'Start Your Transformation',
      relevanceScore: transformationScore,
      reasons: getTransformationReasons(answers)
    })
  }
  
  // Cyber Intelligence recommendations
  const cyberScore = calculateCyberScore(answers)
  if (cyberScore > 0) {
    recommendations.push({
      id: 'cyber-intelligence',
      name: 'Cyber Intelligence',
      description: 'Protect your business from threats with AI-powered security monitoring',
      icon: 'Shield',
      url: '/cyber-intelligence',
      ctaText: 'Secure Your Business',
      relevanceScore: cyberScore,
      reasons: getCyberReasons(answers)
    })
  }
  
  // Sort by relevance score (highest first)
  return recommendations.sort((a, b) => b.relevanceScore - a.relevanceScore)
}

function calculateAutomationScore(answers: Record<string, any>): number {
  let score = 0
  
  // High score for repetitive task hours
  if (answers.repetitive_hours === 'More than 40 hours') score += 40
  else if (answers.repetitive_hours === '30-40 hours') score += 35
  else if (answers.repetitive_hours === '20-30 hours') score += 30
  else if (answers.repetitive_hours === '10-20 hours') score += 20
  
  // Time drains that benefit from automation
  const automationDrains = [
    'Administrative tasks and paperwork',
    'Project management and coordination',
    'Bookkeeping and financial management'
  ]
  if (automationDrains.includes(answers.biggest_time_drain)) score += 25
  
  // Business bottlenecks that automation solves
  const automationBottlenecks = [
    'Project delays and miscommunication',
    'Inconsistent marketing efforts',
    'Poor customer response times'
  ]
  if (automationBottlenecks.includes(answers.biggest_bottleneck)) score += 20
  
  // Goal alignment
  if (answers.primary_goal === 'Reduce operational costs') score += 15
  
  return score
}

function getAutomationReasons(answers: Record<string, any>): string[] {
  const reasons: string[] = []
  
  if (answers.repetitive_hours && answers.repetitive_hours !== 'Less than 10 hours') {
    reasons.push(`You're spending ${answers.repetitive_hours.toLowerCase()} on repetitive tasks`)
  }
  
  if (answers.biggest_time_drain === 'Administrative tasks and paperwork') {
    reasons.push('Administrative work can be automated to save significant time')
  }
  
  if (answers.biggest_bottleneck === 'Project delays and miscommunication') {
    reasons.push('Automated workflows eliminate bottlenecks and delays')
  }
  
  if (answers.primary_goal === 'Reduce operational costs') {
    reasons.push('Automation directly reduces costs by eliminating manual work')
  }
  
  return reasons.length > 0 ? reasons : ['Automation can streamline your operations']
}

function calculateTransformationScore(answers: Record<string, any>): number {
  let score = 0
  
  // Team size indicates need for better systems
  if (answers.team_size === '16-50 employees') score += 30
  else if (answers.team_size === '51-100 employees') score += 35
  else if (answers.team_size === 'More than 100') score += 40
  else if (answers.team_size === '6-15 employees') score += 25
  
  // Growth-related goals
  if (answers.primary_goal === 'Increase revenue by 25%+') score += 30
  else if (answers.primary_goal === 'Scale the team efficiently') score += 30
  else if (answers.primary_goal === 'Expand to new markets') score += 25
  
  // Bottlenecks that require transformation
  const transformationBottlenecks = [
    'Difficulty finding good employees',
    'Cash flow management',
    'Not enough qualified leads'
  ]
  if (transformationBottlenecks.includes(answers.biggest_bottleneck)) score += 20
  
  return score
}

function getTransformationReasons(answers: Record<string, any>): string[] {
  const reasons: string[] = []
  
  if (answers.team_size && !['Just me (solo)', '2-5 employees'].includes(answers.team_size)) {
    reasons.push(`With ${answers.team_size.toLowerCase()}, you need scalable systems`)
  }
  
  if (answers.primary_goal === 'Increase revenue by 25%+') {
    reasons.push('Aggressive growth requires operational transformation')
  }
  
  if (answers.primary_goal === 'Scale the team efficiently') {
    reasons.push('Efficient scaling needs optimized processes and structure')
  }
  
  if (answers.biggest_bottleneck === 'Cash flow management') {
    reasons.push('Better systems improve financial visibility and control')
  }
  
  return reasons.length > 0 ? reasons : ['Transform your operations for sustainable growth']
}

function calculateCyberScore(answers: Record<string, any>): number {
  let score = 0
  
  // Industries with higher security needs
  const highSecurityIndustries = [
    'Healthcare',
    'Professional Services',
    'Technology',
    'Real Estate'
  ]
  if (highSecurityIndustries.includes(answers.industry)) score += 30
  
  // Team size indicates more security risk
  if (answers.team_size === '16-50 employees') score += 20
  else if (answers.team_size === '51-100 employees') score += 25
  else if (answers.team_size === 'More than 100') score += 30
  else if (answers.team_size === '6-15 employees') score += 15
  
  // Using tools means having data to protect
  if (answers.current_tools && Array.isArray(answers.current_tools) && answers.current_tools.length > 0) {
    score += 20
  }
  
  return score
}

function getCyberReasons(answers: Record<string, any>): string[] {
  const reasons: string[] = []
  
  const highSecurityIndustries = ['Healthcare', 'Professional Services', 'Technology', 'Real Estate']
  if (highSecurityIndustries.includes(answers.industry)) {
    reasons.push(`${answers.industry} businesses are prime targets for cyber attacks`)
  }
  
  if (answers.team_size && answers.team_size !== 'Just me (solo)') {
    reasons.push('More employees means greater security vulnerabilities')
  }
  
  if (answers.current_tools && Array.isArray(answers.current_tools) && answers.current_tools.length > 0) {
    reasons.push('Multiple tools increase your attack surface')
  }
  
  return reasons.length > 0 ? reasons : ['Protect your business from cyber threats']
}
