import React from 'react';
import { SEO } from '../components/SEO';

export const TermsPage: React.FC = () => {
  return (
    <>
      <SEO title="Terms & Conditions — NovaRise Digital" />
      <section className="pt-32 pb-20 max-w-4xl mx-auto px-4 prose prose-slate">
        <h1 className="text-4xl font-extrabold font-heading text-[#111827]">Terms & Conditions</h1>
        <p className="text-xs text-slate-400">Last updated: May 2026</p>

        <p>
          Welcome to NovaRise Digital! These terms and conditions outline the rules and regulations for the use of NovaRise Digital's Website.
        </p>

        <h3>1. Intellectual Property</h3>
        <p>
          Unless otherwise stated, NovaRise Digital and/or its licensors own the intellectual property rights for all material on NovaRise Digital. All intellectual property rights are reserved.
        </p>

        <h3>2. Service Engagement & Retainers</h3>
        <p>
          Specific service deliverables, performance benchmarks, monthly retainers, and payment schedules are governed by individual client master service agreements (MSAs) executed separately from website terms.
        </p>

        <h3>3. Limitation of Liability</h3>
        <p>
          In no event shall NovaRise Digital, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this website.
        </p>
      </section>
    </>
  );
};
