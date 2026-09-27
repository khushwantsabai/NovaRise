export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  badge?: string;
  description: string;
  popular?: boolean;
  features: { name: string; included: boolean }[];
  ctaText: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '₹19,999',
    period: '/month',
    description: 'Ideal for local businesses and early-stage startups seeking foundational organic visibility and active social presence.',
    features: [
      { name: 'Technical & On-Page SEO (10 Keywords)', included: true },
      { name: 'Social Media Management (2 Channels)', included: true },
      { name: '12 Graphic Posts + 2 Video Reels / month', included: true },
      { name: 'Google Business Profile Local SEO', included: true },
      { name: 'Monthly Performance Analytics Report', included: true },
      { name: 'Dedicated Account Manager', included: false },
      { name: 'Paid Ad Campaign Management', included: false },
      { name: 'Custom Web Landing Page Build', included: false }
    ],
    ctaText: 'Get Started'
  },
  {
    id: 'growth',
    name: 'Growth',
    price: '₹39,999',
    period: '/month',
    popular: true,
    badge: 'Most Popular',
    description: 'Designed for ambitious SMEs and eCommerce brands ready to scale lead pipeline and execute paid advertising.',
    features: [
      { name: 'Advanced SEO Optimization (25 Keywords)', included: true },
      { name: 'Social Media Management (3 Channels)', included: true },
      { name: '20 Graphic Posts + 6 Video Reels / month', included: true },
      { name: 'Meta (FB/IG) or Google Paid Ads Mgmt', included: true },
      { name: 'Custom High-Converting Landing Page Build', included: true },
      { name: 'Dedicated Senior Growth Strategist', included: true },
      { name: 'Bi-Weekly Strategy Calls & Dashboards', included: true },
      { name: 'Multi-Touch CRM Lead Integration', included: false }
    ],
    ctaText: 'Start Growth Plan'
  },
  {
    id: 'scale',
    name: 'Scale',
    price: '₹69,999',
    period: '/month',
    description: 'Comprehensive 360-degree digital marketing suite for established companies aiming to dominate their industry sector.',
    features: [
      { name: 'Dominant SEO Campaign (50+ Keywords)', included: true },
      { name: 'Omnichannel Social Media (4 Channels)', included: true },
      { name: '30 Graphic Assets + 12 High-Res Video Reels', included: true },
      { name: 'Multi-Channel Ad Management (Google + Meta + LinkedIn)', included: true },
      { name: 'Full Funnel Landing Pages & A/B Testing', included: true },
      { name: 'Dedicated Growth Team & Copywriter', included: true },
      { name: 'Custom Attribution Dashboard & Weekly Calls', included: true },
      { name: 'Full CRM Sync & Lead Scoring Automation', included: true }
    ],
    ctaText: 'Scale Your Business'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    period: 'Quote',
    description: 'Tailored growth strategy, multi-brand management, high ad spend optimization, and dedicated creative team.',
    features: [
      { name: 'Custom Omnichannel Growth Blueprint', included: true },
      { name: 'Unlimited Content & Video Production Sprint', included: true },
      { name: 'High Ad Spend Management (₹10L+/mo)', included: true },
      { name: 'Full Brand Redesign & Web Portal Dev', included: true },
      { name: 'Dedicated In-House Creative Squad', included: true },
      { name: '24/7 Priority Support & Slack Channel', included: true },
      { name: 'Quarterly Executive Board Presentations', included: true },
      { name: 'Custom API & Server-side Attribution Setup', included: true }
    ],
    ctaText: 'Talk To An Expert'
  }
];
