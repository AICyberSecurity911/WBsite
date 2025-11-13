
export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container py-20">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-4xl font-bold text-gray-900 dark:text-white">
            Terms of Service
          </h1>
          
          <div className="space-y-8 text-gray-600 dark:text-gray-300">
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                Acceptance of Terms
              </h2>
              <p className="mb-4">
                By accessing and using QuantumLeap AI services, you accept and agree to be bound by the terms 
                and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                Service Description
              </h2>
              <p className="mb-4">
                QuantumLeap AI provides AI-powered business automation solutions, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>AI employee deployment and management</li>
                <li>Business process automation</li>
                <li>Consultation and implementation services</li>
                <li>Ongoing support and optimization</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                User Responsibilities
              </h2>
              <p className="mb-4">
                You agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate information during onboarding</li>
                <li>Use services in accordance with applicable laws</li>
                <li>Maintain security of your account credentials</li>
                <li>Notify us of any unauthorized access</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                Money-Back Guarantee
              </h2>
              <p className="mb-4">
                We offer a 60-day money-back guarantee. If you're not satisfied with measurable ROI within 
                60 days of deployment, we will refund your investment.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                Limitation of Liability
              </h2>
              <p className="mb-4">
                QuantumLeap AI shall not be liable for any indirect, incidental, special, consequential, 
                or punitive damages resulting from your use of our services.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                Contact Information
              </h2>
              <p>
                For questions about these Terms of Service, please contact us at{' '}
                <a href="mailto:legal@quantumleap.io" className="text-teal-600 hover:underline">
                  legal@quantumleap.io
                </a>
              </p>
            </section>

            <section className="border-t border-gray-200 pt-8 dark:border-gray-700">
              <p className="text-sm">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
