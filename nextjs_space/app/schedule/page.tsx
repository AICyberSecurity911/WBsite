
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HeroCTA } from "@/components/hero-cta";

export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black py-20">
      <div className="max-w-4xl mx-auto px-6">
        <Card className="bg-white shadow-2xl">
          <CardHeader className="text-center bg-gradient-to-r from-yellow-500 to-orange-500 text-black">
            <CardTitle className="text-4xl font-bold">Schedule Your Executive Briefing</CardTitle>
            <p className="text-lg mt-4">30-minute confidential session to map high-impact opportunities</p>
          </CardHeader>
          <CardContent className="p-12 text-center">
            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                Book your complimentary 30-minute Executive Briefing with our strategists to identify 
                immediate opportunities and create your 90-day action plan.
              </p>
              
              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                <h3 className="font-bold text-gray-900 mb-3">What You'll Get:</h3>
                <ul className="text-left space-y-2 text-gray-700">
                  <li>• Confidential assessment of your current state</li>
                  <li>• Identification of 2-3 high-impact quick wins</li>
                  <li>• 90-day roadmap for immediate results</li>
                  <li>• Custom ROI projections for your organization</li>
                </ul>
              </div>

              <div className="pt-6">
                <p className="text-2xl font-bold text-gray-900 mb-4">Ready to accelerate your transformation?</p>
                <p className="text-gray-600 mb-8">Contact us directly to schedule your briefing:</p>
                
                <div className="space-y-4">
                  <div className="p-4 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg">
                    <p className="text-lg font-semibold text-gray-900">Email: briefing@quantumleapai.com</p>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg">
                    <p className="text-lg font-semibold text-gray-900">Phone: 1-800-QUANTUM</p>
                  </div>
                </div>

                <div className="mt-8">
                  <HeroCTA
                    primaryLabel="Send Us a Message"
                    primaryHref="mailto:briefing@quantumleapai.com?subject=Executive%20Briefing%20Request&body=I%20would%20like%20to%20schedule%20a%2030-minute%20Executive%20Briefing.%0A%0ACompany%3A%0ARole%3A%0APreferred%20Date%2FTime%3A"
                    secondaryLabel="Back to Home"
                    secondaryHref="/"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
