
"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function DownloadBriefPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    role: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch('/api/capture-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, source: 'executive_brief' })
      });
      setSubmitted(true);
    } catch (error) {
      console.error('Failed to submit form:', error);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 py-20">
        <div className="max-w-2xl mx-auto px-6">
          <Card className="bg-white shadow-2xl">
            <CardContent className="p-12 text-center">
              <div className="text-6xl mb-6">🎉</div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h1>
              <p className="text-lg text-gray-700 mb-8">
                Your Executive Transformation Brief is being prepared and will be sent to your email shortly.
              </p>
              <Button onClick={() => window.location.href = '/'} className="bg-yellow-600 hover:bg-yellow-700">
                Return to Home
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 py-20">
      <div className="max-w-2xl mx-auto px-6">
        <Card className="bg-white shadow-2xl">
          <CardHeader className="text-center bg-gradient-to-r from-yellow-500 to-orange-500 text-black">
            <CardTitle className="text-3xl font-bold">Download Executive Transformation Brief</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="mb-6">
              <h3 className="font-bold text-gray-900 mb-3">What's Inside:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ 90-day pilot roadmap for immediate wins</li>
                <li>✓ Top three hidden cost centers and elimination strategies</li>
                <li>✓ ROI model trusted by CFOs and boards</li>
                <li>✓ Benchmarking framework for competitive advantage</li>
              </ul>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email">Business Email *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              
              <div>
                <Label htmlFor="company">Company *</Label>
                <Input
                  id="company"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                />
              </div>
              
              <div>
                <Label htmlFor="role">Role/Title *</Label>
                <Input
                  id="role"
                  required
                  value={formData.role}
                  onChange={(e) => setFormData({...formData, role: e.target.value})}
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold hover:from-yellow-400 hover:to-orange-400"
              >
                Download Free Brief
              </Button>
            </form>
            
            <p className="text-xs text-gray-500 mt-4 text-center">
              🔒 Your information is confidential. No spam. Ever.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
