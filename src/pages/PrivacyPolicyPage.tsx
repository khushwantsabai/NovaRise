import React from 'react';
import { SEO } from '../components/SEO';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <SEO title="Privacy Policy — NovaRise Digital" />
      <section className="pt-32 pb-20 max-w-4xl mx-auto px-4 prose prose-slate">
        <h1 className="text-4xl font-extrabold font-heading text-[#111827]">Privacy Policy</h1>
        <p className="text-xs text-slate-400">Last updated: May 2026</p>

        <p>
          At NovaRise Digital, accessible from novarisedigital.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by NovaRise Digital and how we use it.
        </p>

        <h3>1. Information We Collect</h3>
        <p>
          We collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products and services, such as your name, business email address, phone number, company name, and project details.
        </p>

        <h3>2. How We Use Your Information</h3>
        <ul>
          <li>Provide, operate, and maintain our agency website</li>
          <li>Improve, personalize, and expand our services</li>
          <li>Understand and analyze how you use our website</li>
          <li>Develop new products, services, features, and functionality</li>
          <li>Communicate with you for customer service and project inquiries</li>
        </ul>

        <h3>3. Log Files & Analytics</h3>
        <p>
          NovaRise Digital follows a standard procedure of using log files and privacy-conscious analytics (such as Google Analytics 4) to analyze trends and administer the website.
        </p>

        <h3>4. Contact Us</h3>
        <p>
          If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at <strong>hello@novarisedigital.com</strong>.
        </p>
      </section>
    </>
  );
};
