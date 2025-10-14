
import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <img
              src="/images/logo-quantumleap.png"
              alt="QuantumLeap AI"
              className="h-12 mb-4"
            />
            <p className="text-sm text-gray-400">
              Enterprise AI solutions trusted by Fortune 500 leaders.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/ai-workforce" className="hover:text-orange-400 transition">
                  AI Workforce
                </Link>
              </li>
              <li>
                <Link href="/process-intelligence" className="hover:text-orange-400 transition">
                  Process Intelligence
                </Link>
              </li>
              <li>
                <Link href="/beyond-background-checks" className="hover:text-orange-400 transition">
                  Beyond Background Checks™
                </Link>
              </li>
              <li>
                <Link href="/cyber-intelligence" className="hover:text-orange-400 transition">
                  Cyber Intelligence
                </Link>
              </li>
              <li>
                <Link href="/enterprise-transformation" className="hover:text-orange-400 transition">
                  Enterprise Transformation
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog" className="hover:text-orange-400 transition">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="hover:text-orange-400 transition">
                  Book Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy" className="hover:text-orange-400 transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-orange-400 transition">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} QuantumLeap AI. All rights reserved.
          </p>
          <p className="mt-2">
            Innovation ~ Automation ~ Transformation
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
