
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { 
  TrendingUp, 
  Clock, 
  DollarSign, 
  Users, 
  Zap, 
  Target,
  BarChart3,
  Shield,
  Rocket,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Briefcase,
  Settings,
  Scale,
  TrendingDown
} from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: 'Business Transformation | Scale Without the Chaos',
  description: 'Stuck at $1-5M revenue? Trapped working 70-hour weeks? We transform overwhelmed businesses into scalable, profitable machines in 12 months.',
}

export default function BusinessTransformationPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen overflow-hidden gradient-bg flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="inline-block bg-purple-100 dark:bg-purple-900/30 rounded-full px-4 py-2 mb-6">
                <span className="text-sm font-semibold text-purple-700 dark:text-purple-300 uppercase tracking-wide">
                  Business Transformation
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Scale Your Business<br />
                <span className="text-purple-500">Without the Chaos</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
                Stuck at $1-5M revenue? Trapped working 70-hour weeks? Your business has become a prison. 
                We transform overwhelmed businesses into scalable, profitable machines—average client sees 
                2.4x revenue growth while cutting workweeks in half.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
                <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                  <div className="text-4xl font-bold text-purple-400 mb-2">2.4x</div>
                  <div className="text-sm text-gray-300">Average Revenue Growth</div>
                </div>
                <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                  <div className="text-4xl font-bold text-purple-400 mb-2">50%</div>
                  <div className="text-sm text-gray-300">Workweek Reduction</div>
                </div>
                <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                  <div className="text-4xl font-bold text-purple-400 mb-2">12 mo</div>
                  <div className="text-sm text-gray-300">Complete Transformation</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild
                  size="lg"
                  className="bg-purple-500 hover:bg-purple-600 text-white text-lg px-8 py-6 h-auto"
                >
                  <a href="#calculator">
                    Get Your Free Business Assessment
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button 
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 h-auto border-purple-300 hover:border-purple-500"
                >
                  <a href="#framework">
                    See The Framework
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* The Growth Ceiling Section */}
        <section className="section-padding bg-white dark:bg-gray-950">
          <div className="container max-w-6xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 px-4 py-2 rounded-full mb-4">
                <AlertCircle className="h-4 w-4" />
                <span className="text-sm font-semibold">The Brutal Truth</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Why You Hit the <span className="text-purple-500">Growth Ceiling</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                You built a successful business, then it became your prison. Here's what's actually killing your growth:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Clock,
                  color: "text-red-500",
                  title: "The Founder Bottleneck",
                  description: "Every decision needs your approval. Every problem lands on your desk. You're working 70-hour weeks, and growth has stalled because there's only one of you.",
                  stat: "87% of stuck businesses"
                },
                {
                  icon: TrendingDown,
                  color: "text-orange-500",
                  title: "Profit Margin Erosion",
                  description: "Revenue grows but profit doesn't. More clients = more overhead = more problems. You're making less per dollar than you did at $500K.",
                  stat: "Average 23% margin drop"
                },
                {
                  icon: Users,
                  color: "text-yellow-500",
                  title: "The Hiring Trap",
                  description: "Bad hires cost 6+ months and $150K+. Good hires are impossible to find. Meanwhile, team dysfunction drains your energy and bank account.",
                  stat: "$150K+ per bad hire"
                },
                {
                  icon: Settings,
                  color: "text-purple-500",
                  title: "Systems That Don't Scale",
                  description: "What worked at $500K breaks at $2M. Manual processes, spreadsheet chaos, and tribal knowledge that lives only in people's heads.",
                  stat: "3-5x operational overhead"
                },
                {
                  icon: BarChart3,
                  color: "text-blue-500",
                  title: "Strategic Blindness",
                  description: "You're too busy fighting fires to see the forest. No data. No clarity. Just reacting to whatever crisis hits today.",
                  stat: "62% lack key metrics"
                },
                {
                  icon: Scale,
                  color: "text-teal-500",
                  title: "Personal Life Collapse",
                  description: "Missed dinners. Cancelled vacations. Relationships strained. You built a business to create freedom, but it's destroying everything else.",
                  stat: "83% burnout rate"
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="group p-8 rounded-2xl border-2 border-gray-200 dark:border-gray-800 hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300 hover:shadow-xl"
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 mb-4 ${item.color}`}>
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <span className="text-xs font-mono text-muted-foreground bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded">
                      {item.stat}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border-2 border-purple-200 dark:border-purple-800">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold text-xl">
                  !
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">The Real Problem</h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    You don't have a business problem—you have a <span className="font-semibold text-purple-600 dark:text-purple-400">systems and people problem</span>. 
                    Your business model works. Your product/service is solid. But you're trying to run a $5M business with $500K infrastructure.
                  </p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    That's exactly what we fix.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Transformation Framework */}
        <section id="framework" className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
          <div className="container max-w-6xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-400 px-4 py-2 rounded-full mb-4">
                <Rocket className="h-4 w-4" />
                <span className="text-sm font-semibold">Our Methodology</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                The 4-Phase <span className="text-purple-500">Transformation Framework</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Battle-tested with 200+ businesses. Developed by former McKinsey consultants. 
                Guaranteed results or you don't pay.
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  phase: "Phase 1",
                  duration: "Weeks 1-4",
                  title: "Business Diagnosis & Quick Wins",
                  icon: Target,
                  color: "purple",
                  outcomes: [
                    "Complete operational audit revealing hidden profit leaks",
                    "3-5 immediate improvements generating 15-30% efficiency gains",
                    "Data infrastructure setup for real-time business intelligence",
                    "Founder time audit identifying 20+ hours/week of wasted effort"
                  ]
                },
                {
                  phase: "Phase 2",
                  duration: "Weeks 5-16",
                  title: "Systems & AI Implementation",
                  icon: Zap,
                  color: "blue",
                  outcomes: [
                    "Deploy AI employees to eliminate 60-80% of repetitive work",
                    "Automate customer acquisition, sales, and delivery processes",
                    "Build scalable systems that work without you",
                    "Reduce operational costs by 40-60% while improving quality"
                  ]
                },
                {
                  phase: "Phase 3",
                  duration: "Weeks 17-32",
                  title: "Team Restructuring & Scale",
                  icon: Users,
                  color: "teal",
                  outcomes: [
                    "Hire right people in right roles (or eliminate unnecessary positions)",
                    "Implement performance systems that drive accountability",
                    "Build leadership team that can run business without you",
                    "Scale revenue 2-3x without proportional cost increase"
                  ]
                },
                {
                  phase: "Phase 4",
                  duration: "Weeks 33-52",
                  title: "Strategic Positioning & Exit Prep",
                  icon: TrendingUp,
                  color: "emerald",
                  outcomes: [
                    "Position business for premium valuation (4-7x EBITDA)",
                    "Establish CEO-level strategic planning processes",
                    "Create predictable, recurring revenue streams",
                    "Build business that runs profitably without founder"
                  ]
                }
              ].map((phase, index) => {
                const colorClasses = {
                  purple: "border-purple-300 dark:border-purple-700 bg-purple-50 dark:bg-purple-950/20",
                  blue: "border-blue-300 dark:border-blue-700 bg-blue-50 dark:bg-blue-950/20",
                  teal: "border-teal-300 dark:border-teal-700 bg-teal-50 dark:bg-teal-950/20",
                  emerald: "border-emerald-300 dark:border-emerald-700 bg-emerald-50 dark:bg-emerald-950/20"
                }
                
                return (
                  <div
                    key={index}
                    className={`p-8 rounded-2xl border-2 ${colorClasses[phase.color as keyof typeof colorClasses]} transition-all duration-300 hover:shadow-2xl`}
                  >
                    <div className="flex items-start gap-6">
                      <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${
                        phase.color === 'purple' ? 'from-purple-500 to-purple-600' :
                        phase.color === 'blue' ? 'from-blue-500 to-blue-600' :
                        phase.color === 'teal' ? 'from-teal-500 to-teal-600' :
                        'from-emerald-500 to-emerald-600'
                      } flex items-center justify-center text-white shadow-lg`}>
                        <phase.icon className="h-8 w-8" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-sm font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wide">
                            {phase.phase}
                          </span>
                          <span className="text-sm text-muted-foreground">•</span>
                          <span className="text-sm text-muted-foreground">{phase.duration}</span>
                        </div>
                        
                        <h3 className="text-2xl font-bold mb-4">{phase.title}</h3>
                        
                        <div className="space-y-3">
                          {phase.outcomes.map((outcome, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <p className="text-muted-foreground">{outcome}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-12 text-center">
              <Button 
                asChild
                size="lg"
                className="bg-purple-500 hover:bg-purple-600 text-white text-lg px-8 py-6 h-auto"
              >
                <a href="#calculator">
                  Start Your Transformation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Before/After Comparison */}
        <section className="section-padding bg-white dark:bg-gray-950">
          <div className="container max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                What Actually <span className="text-purple-500">Changes</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Real transformations from businesses just like yours
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Before Column */}
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 px-4 py-2 rounded-full">
                    <TrendingDown className="h-4 w-4" />
                    <span className="font-semibold">Before Transformation</span>
                  </div>
                </div>

                {[
                  {
                    metric: "Revenue",
                    value: "$2.3M/year",
                    note: "Stagnant for 18 months"
                  },
                  {
                    metric: "Founder Hours",
                    value: "72 hours/week",
                    note: "Burnout imminent"
                  },
                  {
                    metric: "Profit Margin",
                    value: "12%",
                    note: "Shrinking yearly"
                  },
                  {
                    metric: "Team Size",
                    value: "23 employees",
                    note: "High turnover, low productivity"
                  },
                  {
                    metric: "Customer Acquisition",
                    value: "$847",
                    note: "Rising costs"
                  },
                  {
                    metric: "Systems",
                    value: "Manual chaos",
                    note: "15+ tools, no integration"
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-xl border-2 border-red-200 dark:border-red-900 bg-red-50/50 dark:bg-red-950/10"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                        {item.metric}
                      </span>
                      <span className="text-xs text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-950/50 px-2 py-1 rounded">
                        {item.note}
                      </span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* After Column */}
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 bg-green-50 dark:bg-green-950/30 text-green-600 dark:text-green-400 px-4 py-2 rounded-full">
                    <TrendingUp className="h-4 w-4" />
                    <span className="font-semibold">After 12 Months</span>
                  </div>
                </div>

                {[
                  {
                    metric: "Revenue",
                    value: "$5.7M/year",
                    note: "2.5x growth",
                    change: "+148%"
                  },
                  {
                    metric: "Founder Hours",
                    value: "28 hours/week",
                    note: "Strategic work only",
                    change: "-61%"
                  },
                  {
                    metric: "Profit Margin",
                    value: "31%",
                    note: "Industry-leading",
                    change: "+158%"
                  },
                  {
                    metric: "Team Size",
                    value: "12 people + AI",
                    note: "High performance culture",
                    change: "-48% cost"
                  },
                  {
                    metric: "Customer Acquisition",
                    value: "$124",
                    note: "Automated funnel",
                    change: "-85%"
                  },
                  {
                    metric: "Systems",
                    value: "Fully automated",
                    note: "AI-powered operations",
                    change: "90% automated"
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-xl border-2 border-green-200 dark:border-green-900 bg-green-50/50 dark:bg-green-950/10 relative overflow-hidden"
                  >
                    <div className="absolute top-2 right-2">
                      <div className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                        {item.change}
                      </div>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                        {item.metric}
                      </span>
                      <span className="text-xs text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-950/50 px-2 py-1 rounded">
                        {item.note}
                      </span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-2xl font-bold mb-4">Real Business, Real Results</h3>
                <p className="text-lg mb-6 opacity-90">
                  "I was drowning. 70-hour weeks, declining margins, team chaos. QuantumLeap didn't just fix my business—they gave me my life back. 
                  Revenue doubled, I work 30 hours a week, and I actually enjoy running my company again."
                </p>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20"></div>
                  <div className="text-left">
                    <div className="font-semibold">Michael R.</div>
                    <div className="text-sm opacity-75">SaaS Company Founder, $5.7M ARR</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Investment & Pricing */}
        <section className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
          <div className="container max-w-6xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-400 px-4 py-2 rounded-full mb-4">
                <DollarSign className="h-4 w-4" />
                <span className="text-sm font-semibold">Transformation Investment</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Transparent <span className="text-purple-500">Pricing</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose the engagement level that matches your growth ambitions. 
                All packages include our results guarantee.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Accelerator",
                  price: "$15K",
                  duration: "3 months",
                  bestFor: "Quick wins & foundation",
                  features: [
                    "Business diagnosis & audit",
                    "Quick win implementation",
                    "Core AI employee deployment",
                    "Systems documentation",
                    "Monthly strategy sessions",
                    "Email & Slack support"
                  ],
                  cta: "Start Accelerator",
                  popular: false
                },
                {
                  name: "Transformation",
                  price: "$45K",
                  duration: "12 months",
                  bestFor: "Complete business overhaul",
                  features: [
                    "Everything in Accelerator",
                    "Full 4-phase transformation",
                    "Unlimited AI employee deployment",
                    "Team restructuring & hiring",
                    "Weekly coaching calls",
                    "24/7 priority support",
                    "Dedicated transformation manager"
                  ],
                  cta: "Start Transformation",
                  popular: true
                },
                {
                  name: "Partnership",
                  price: "Custom",
                  duration: "12-24 months",
                  bestFor: "Equity & revenue share",
                  features: [
                    "Everything in Transformation",
                    "Fractional C-suite executives",
                    "Private equity partnership",
                    "Exit strategy & preparation",
                    "On-demand consulting",
                    "Board-level advisory"
                  ],
                  cta: "Discuss Partnership",
                  popular: false
                }
              ].map((tier, index) => (
                <div
                  key={index}
                  className={`relative p-8 rounded-2xl border-2 transition-all duration-300 hover:shadow-2xl ${
                    tier.popular
                      ? 'border-purple-400 dark:border-purple-600 bg-gradient-to-b from-purple-50 to-white dark:from-purple-950/30 dark:to-gray-950 shadow-xl scale-105'
                      : 'border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                        MOST POPULAR
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                    <div className="mb-2">
                      <span className="text-4xl font-bold">{tier.price}</span>
                      <span className="text-muted-foreground ml-2">/ {tier.duration}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{tier.bestFor}</p>
                  </div>

                  <div className="space-y-3 mb-8">
                    {tier.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    asChild
                    size="lg"
                    className={`w-full ${
                      tier.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white'
                        : 'bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900'
                    }`}
                  >
                    <a href="#calculator">
                      {tier.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 rounded-2xl border-2 border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
              <div className="flex items-start gap-4">
                <Shield className="h-8 w-8 text-green-600 dark:text-green-400 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Our Results Guarantee</h3>
                  <p className="text-muted-foreground mb-4">
                    We're so confident in our methodology that we offer a simple guarantee: If you don't see measurable improvement 
                    in revenue, profit, or founder time within 90 days, we'll refund 100% of your investment—no questions asked.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                      <span>90-day money-back guarantee</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                      <span>No long-term contracts</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                      <span>Cancel anytime</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-white dark:bg-gray-950">
          <div className="container max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Frequently Asked <span className="text-purple-500">Questions</span>
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "How is this different from traditional business consulting?",
                  answer: "Traditional consultants give you a 100-page report and disappear. We roll up our sleeves and implement everything alongside your team. You get actual results, not just recommendations. Plus, our AI-first approach means you're not just optimizing old processes—you're leapfrogging to the future of business operations."
                },
                {
                  question: "What if I don't have a technical team?",
                  answer: "Perfect—that's our specialty. We handle all technical implementation, AI deployment, and systems integration. Your team doesn't need any technical expertise. We train them on the new systems and ensure smooth adoption. Most clients have zero technical background."
                },
                {
                  question: "How quickly will I see results?",
                  answer: "Phase 1 delivers measurable quick wins within the first 30 days—typically 15-30% efficiency improvements and 10-20 hours/week saved immediately. Full transformation takes 12 months, but you'll see compounding improvements every quarter."
                },
                {
                  question: "What industries do you work with?",
                  answer: "We specialize in service-based businesses, SaaS companies, professional services, and B2B companies doing $1-10M in revenue. Industries include: consulting, agencies, software, finance, legal, healthcare services, and manufacturing. If you have operational complexity and human-heavy processes, we can help."
                },
                {
                  question: "Will you need full access to our business systems?",
                  answer: "Yes, for the diagnosis phase we need visibility into operations, finances, and systems. We sign comprehensive NDAs and take data security seriously. After diagnosis, we only need access to the specific areas we're transforming. Many clients are surprised by how non-invasive the process is."
                },
                {
                  question: "What happens if my business isn't a good fit?",
                  answer: "We'll tell you upfront in the discovery call. Not every business is ready for transformation—some need different solutions first. If we're not confident we can deliver 2x+ ROI, we won't take your money. We'd rather build long-term relationships than force-fit clients."
                },
                {
                  question: "Can I start with a smaller pilot project?",
                  answer: "Absolutely. The Accelerator package (3 months) is designed exactly for this. You get quick wins, see our methodology in action, and decide if you want the full transformation. About 80% of Accelerator clients upgrade to the full program."
                },
                {
                  question: "What kind of ongoing support do you provide?",
                  answer: "Transformation package includes weekly coaching calls, 24/7 Slack/email support, quarterly business reviews, and a dedicated transformation manager. Even after the formal engagement ends, you get 6 months of transition support to ensure everything sticks."
                }
              ].map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-2 border-gray-200 dark:border-gray-800 rounded-xl px-6 hover:border-purple-300 dark:hover:border-purple-700 transition-colors"
                >
                  <AccordionTrigger className="text-left font-semibold hover:text-purple-600 dark:hover:text-purple-400">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="container max-w-4xl text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Stop Fighting Your Business.<br />Start Scaling It.
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Your competitors are already transforming. Every day you wait is another day of unnecessary 
              stress, wasted money, and missed opportunities. Let's change that.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-white text-purple-700 hover:bg-gray-100 text-lg px-8 py-6 h-auto font-semibold"
              >
                <a href="#calculator">
                  Get Your Free Business Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 h-auto"
              >
                <a href="/consultation">
                  Schedule Strategy Call
                </a>
              </Button>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-sm opacity-75">
                ⚡ Limited availability: We only take 5 new transformation clients per quarter to ensure quality. 
                Current wait time: 3-4 weeks.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
