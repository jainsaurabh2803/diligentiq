import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero-ish header */}
        <section className="bg-brand-blue text-white py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-brand-gold mb-3">
              ABOUT US
            </p>
            <h1 className="text-2xl md:text-3xl font-semibold mb-4">
              About diligent-capitals
            </h1>
            <p className="text-sm md:text-base text-white/85 max-w-3xl">
              diligent-capitals is a specialist partner for corporate legal and
              financial services. We help founders, CXOs and investors build a
              clear, actionable view of risk, compliance and financial health
              before key decisions — from fund-raises to acquisitions and
              regulatory filings.
            </p>
          </div>
        </section>

        {/* Why diligent-capitals */}
        <section className="py-10 md:py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-semibold text-brand-blue-dark mb-4">
              Why diligent-capitals
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-brand-gray-700">
              <div className="space-y-3">
                <p>
                  <span className="font-semibold">1. Integrated legal + financial lens</span>
                  <br />
                  Instead of treating legal, compliance and financial analysis as
                  separate checklists, we bring them together into a single,
                  decision-ready view – so you see how regulatory risk, contract
                  terms and financial performance actually connect.
                </p>
                <p>
                  <span className="font-semibold">2. Operator-focused, not just theoretical</span>
                  <br />
                  Our work is built for founders and operators. We highlight
                  what is truly material, explain trade-offs in plain language
                  and suggest pragmatic remediation steps instead of just
                  flagging issues.
                </p>
              </div>
              <div className="space-y-3">
                <p>
                  <span className="font-semibold">3. Deep experience with growing companies</span>
                  <br />
                  We have worked with businesses across sectors such as F&amp;B,
                  education, healthcare, SaaS and services. That means our
                  checklists and frameworks are tuned to the realities of
                  scaling companies, not just large enterprises.
                </p>
                <p>
                  <span className="font-semibold">4. Structured, repeatable outputs</span>
                  <br />
                  Every engagement is delivered through clear templates – issue
                  registers, MIS summaries, contract abstracts and risk heatmaps
                  – so you can reuse them across future audits, fund-raises and
                  board discussions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Founders section */}
        <section className="py-10 md:py-12 bg-brand-blue text-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Our Founders
            </h2>
            <p className="text-sm md:text-base text-white/85 max-w-3xl mb-6">
              diligent-capitals is led by professionals who combine strong
              technical training with on-ground experience of working with
              growth-stage companies and investors.
            </p>

            <div className="grid md:grid-cols-2 gap-8 text-sm">
              <div>
                <h3 className="font-semibold text-base md:text-lg mb-1">
                  Navneet Agarwal
                </h3>
                <p className="text-white/80 mb-1">
                  CA, CS – 15+ years of experience
                </p>
                <p className="text-white/70 mb-1">
                  Extensive experience across corporate law, compliance,
                  structuring and advisory for private companies and investors.
                </p>
                <p className="text-white/70 mb-1">
                  <span className="font-semibold">Phone:</span> +91 99160 26616
                </p>
                <p className="text-white/70">
                  <span className="font-semibold">Location:</span> Bangalore, India
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-base md:text-lg mb-1">
                  Saurabh Jain
                </h3>
                <p className="text-white/80 mb-1">
                  8+ years of industry experience
                </p>
                <p className="text-white/70 mb-1">
                  Background in analytics and data-driven decision support,
                  working with founders and CXOs across sectors on MIS, unit
                  economics and transaction analytics.
                </p>
                <p className="text-white/70 mb-1">
                  <span className="font-semibold">Phone:</span> +91 76008 89240
                </p>
                <p className="text-white/70">
                  <span className="font-semibold">Location:</span> Bangalore, India
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
