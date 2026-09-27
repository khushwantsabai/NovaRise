export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const faqsData: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'What services does NovaRise Digital provide?',
    answer: 'NovaRise Digital is a modern full-service digital marketing agency. Our core services include Search Engine Optimization (SEO), Performance Marketing (Google & Meta Ads), Social Media Marketing, Branding & Visual Identity, Website Design & Development, Content Marketing, Lead Generation Funnels, and Creative Design.'
  },
  {
    id: 'faq-2',
    category: 'SEO',
    question: 'How long does it take to see SEO results?',
    answer: 'Initial rankings and technical crawling improvements usually occur within 60 to 90 days. Significant organic traffic growth and consistent lead generation typically pick up momentum between months 4 and 6 as domain authority and keyword coverage compound.'
  },
  {
    id: 'faq-3',
    category: 'Paid Ads',
    question: 'Do you manage Google and Meta Ads?',
    answer: 'Yes! We design and manage full-funnel advertising campaigns across Google Search, Google Shopping, Meta (Facebook & Instagram), LinkedIn, and YouTube. We handle audience targeting, creative ad copy, visual design, conversion tracking setup, and daily bid optimization.'
  },
  {
    id: 'faq-4',
    category: 'General',
    question: 'Can you work with an existing marketing team?',
    answer: 'Absolutely. We frequently act as an extended performance squad for in-house marketing teams. We can handle specialized verticals like technical SEO, paid ad execution, or high-converting web development while collaborating seamlessly with your internal leadership.'
  },
  {
    id: 'faq-5',
    category: 'Reporting',
    question: 'Do you provide monthly reporting?',
    answer: 'We provide full transparency with live, interactive performance dashboards (Looker Studio / custom analytics) that update in real time. In addition, you receive bi-weekly strategy summaries and monthly breakdown meetings highlighting spend, ROAS, qualified leads, organic positions, and action items.'
  },
  {
    id: 'faq-6',
    category: 'Clients',
    question: 'Do you work with small businesses?',
    answer: 'Yes! We partner with early-stage startups, local businesses, growing eCommerce brands, professional service firms, and personal brands alongside established mid-market companies. Our Starter and Growth packages are specially crafted for small to medium businesses.'
  },
  {
    id: 'faq-7',
    category: 'Web Development',
    question: 'Can you redesign an existing website?',
    answer: 'Yes. We specialize in transforming outdated websites into high-converting, blazing-fast, mobile-first web experiences. We ensure your existing SEO rankings and URL structures are preserved through proper 301 redirects and technical migration steps.'
  },
  {
    id: 'faq-8',
    category: 'Strategy',
    question: 'Do you provide customized marketing plans?',
    answer: 'Every brand has unique goals, audiences, and unit economics. Before recommending any campaign, we conduct a discovery audit to craft a custom digital growth roadmap tailored specifically to your target outcomes and budget.'
  }
];
