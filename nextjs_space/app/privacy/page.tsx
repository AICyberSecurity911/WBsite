
export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container py-20">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-4xl font-bold text-gray-900 dark:text-white">
            Privacy Policy
          </h1>
          
          <div className="space-y-8 text-gray-600 dark:text-gray-300">
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                Information We Collect
              </h2>
              <p className="mb-4">
                We collect information you provide directly to us, such as when you fill out our assessment form, 
                contact us, or communicate with us.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name and contact information (email, phone number)</li>
                <li>Company information</li>
                <li>Assessment responses and preferences</li>
                <li>Communications with our team</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                How We Use Your Information
              </h2>
              <p className="mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide and improve our AI workforce services</li>
                <li>Generate personalized recommendations</li>
                <li>Communicate with you about our services</li>
                <li>Send you relevant updates and information</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                Information Sharing
              </h2>
              <p className="mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                except as described in this policy or as required by law.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                Data Security
              </h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                Contact Us
              </h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at{' '}
                <a href="mailto:privacy@quantumleap.io" className="text-teal-600 hover:underline">
                  privacy@quantumleap.io
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
