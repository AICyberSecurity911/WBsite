
export interface IAutomationForm {
  dataEntryHours: number;
  emailHours: number;
  invoicingHours: number;
  reportingHours: number;
  projectCoordHours: number;
  hourlyRate: number;
  email?: string;
  name?: string;
}

export interface IAutomationRecommendation {
  automation: string;
  reason: string;
  estHoursSaved: number;
  estAnnualValue: number;
  startingAt: number;
}

export interface IAutomationResult {
  monthlyHumanCost: number;
  annualHumanCost: number;
  potentialSavingsMonthly: number;
  potentialSavingsAnnual: number;
  recommendations: IAutomationRecommendation[];
}

export interface ILead {
  email: string;
  name?: string;
  source: string;
  status: 'pending' | 'confirmed' | 'booked';
  confirmedAt?: Date;
  bookedAt?: Date;
  utm?: Record<string, string>;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICalculatorSession {
  sessionId: string;
  inputs: IAutomationForm;
  results: IAutomationResult;
  leadId?: string;
  page: string;
  createdAt: Date;
}

export interface IEvent {
  type: 'lead_captured' | 'email_queue' | 'email_sent' | 'booking_confirmed';
  payload: any;
  runAt?: Date;
  processedAt?: Date;
  error?: string;
  createdAt: Date;
}
