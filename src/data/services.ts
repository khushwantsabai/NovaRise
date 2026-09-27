export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  features: string[];
  overview: string;
  whatWeDo: string[];
  process: { title: string; desc: string }[];
  deliverables: string[];
  benefits: string[];
  faqs: { question: string; answer: string }[];
  stats: { label: string; value: string }[];
}

export const servicesData: ServiceItem[] = [
  {
    id: 'seo',
    slug: 'seo',
    title: 'Search Engine Optimization',
    shortDescription: 'Improve your visibility, attract high-intent visitors and build sustainable organic traffic.',
    fullDescription: 'Our data-driven SEO strategies help your business rank at the top of search engine results, attracting qualified buyers who are actively searching for your solutions.',
    iconName: 'Search',
    features: [
      'Technical SEO Audits',
      'Keyword & Intent Strategy',
      'On-Page & Schema Optimization',
      'Local SEO & Google Business Profile',
      'High-Authority Link Building',
      'Transparent SEO Reporting'
    ],
    overview: 'Search engines are the primary discovery engine for modern businesses. We combine technical rigor, content strategy, and authoritative digital PR to build organic rankings that produce predictable pipeline growth month after month.',
    whatWeDo: [
      'Comprehensive Website & Technical SEO Audit',
      'Competitor Keyword Gap & Intent Mapping',
      'Content Planning & On-Page Keyword Integration',
      'Core Web Vitals & Page Speed Optimization',
      'Local Citation & Google Maps Optimization',
      'White-Hat Link Acquisition & Digital PR'
    ],
    process: [
      { title: 'Technical Audit', desc: 'We scan 200+ technical factors to eliminate crawl errors and indexing blockers.' },
      { title: 'Keyword Mapping', desc: 'We target commercial and transactional keywords with real buying intent.' },
      { title: 'Content & On-Page', desc: 'We optimize headings, metadata, content structure, and internal linking.' },
      { title: 'Authority Building', desc: 'We earn high-grade backlinks from relevant publications in your industry.' }
    ],
    deliverables: [
      'Monthly Ranking & Organic Traffic Reports',
      'Technical SEO Fix Roadmap',
      'Targeted Content Briefs',
      'Backlink Acquisition Spreadsheets'
    ],
    benefits: [
      'Lower Customer Acquisition Cost (CAC) compared to paid ads',
      'Long-term compounding traffic that stays even if budgets shift',
      'Increased trust and brand authority among high-intent searchers',
      'Higher conversion rate from organic visitors'
    ],
    faqs: [
      { question: 'How long does it take to see SEO results?', answer: 'Most clients start seeing initial keyword movements within 60-90 days, with significant organic lead growth occurring between months 4 and 6 as domain authority builds.' },
      { question: 'Do you guarantee #1 rankings on Google?', answer: 'Ethical agencies never guarantee #1 positions because search algorithms constantly update. However, we guarantee trackable progress in organic traffic, key conversions, and domain metrics.' }
    ],
    stats: [
      { label: 'Primary Focus', value: 'High Intent' },
      { label: 'Audit Scope', value: '200+ Checks' },
      { label: 'Reporting', value: '100% Real-Time' }
    ]
  },
  {
    id: 'performance-marketing',
    slug: 'performance-marketing',
    title: 'Performance Marketing',
    shortDescription: 'Turn advertising budgets into measurable leads, sales and business growth.',
    fullDescription: 'Maximized return on ad spend across Google Ads, Meta (Facebook/Instagram), LinkedIn, and programmatic channels using hyper-targeted funnel architecture.',
    iconName: 'TrendingUp',
    features: [
      'Google Search & Shopping Ads',
      'Meta (FB & IG) Paid Campaigns',
      'Dynamic Retargeting Funnels',
      'Omnichannel Campaign Strategy',
      'Conversion Tracking & Attribution',
      'Continuous Bid & Creative Optimization'
    ],
    overview: 'Performance marketing is not about spending money on ads — it is about engineering predictable customer acquisition engines. We combine data modeling, compelling ad creative, and relentless conversion rate optimization.',
    whatWeDo: [
      'Full-Funnel Campaign Architecture (TOFU, MOFU, BOFU)',
      'High-Converting Ad Copy & Visual Creative Design',
      'Audience Persona & Micro-Targeting Setup',
      'Server-side Tracking (Conversion API, GA4, GTM)',
      'A/B Testing of Ad Elements & Landing Pages',
      'Real-time Budget Reallocation to Top Performers'
    ],
    process: [
      { title: 'Funnel Audit', desc: 'We evaluate past campaign metrics, target CPA, and tracking setup.' },
      { title: 'Creative Sprint', desc: 'We build high-converting ad copy, images, and short-form video hooks.' },
      { title: 'Launch & Track', desc: 'We deploy targeted campaigns with custom conversion tags.' },
      { title: 'Scale & Optimize', desc: 'We scale high-performing ad sets while pruning underperforming angles.' }
    ],
    deliverables: [
      'Custom Multi-Touch Attribution Dashboards',
      'Weekly Ad Spend & Conversion Performance Logs',
      'Fresh Monthly Creative Assets',
      'Landing Page CRO Recommendation Audits'
    ],
    benefits: [
      'Immediate lead and revenue generation from day 1',
      'Full transparency into cost per acquisition (CPA)',
      'Ability to quickly test messaging and scale profitable campaigns',
      'Precise retargeting to recapture warm visitors'
    ],
    faqs: [
      { question: 'What minimum ad spend do you recommend?', answer: 'We typically recommend starting with a minimum monthly ad budget of ₹30,000 to ₹50,000 so algorithms receive sufficient conversion signals to optimize effectively.' },
      { question: 'Who owns the ad accounts and data?', answer: 'You own 100% of your advertising accounts, data, and pixels. NovaRise operates as an authorized partner manager with clear admin access.' }
    ],
    stats: [
      { label: 'Ad Channels', value: 'Omnichannel' },
      { label: 'Attribution', value: 'GA4 + CAPI' },
      { label: 'Data Ownership', value: '100% Client' }
    ]
  },
  {
    id: 'social-media',
    slug: 'social-media',
    title: 'Social Media Marketing',
    shortDescription: 'Build an active social presence that turns followers into loyal customers.',
    fullDescription: 'Strategic social media management, content creation, community engagement, and viral storytelling across Instagram, LinkedIn, Facebook, and YouTube.',
    iconName: 'Share2',
    features: [
      'Instagram & Facebook Strategy',
      'LinkedIn Thought Leadership',
      'Content Calendar & Scheduling',
      'Community & DM Management',
      'Reels & Short-Form Video Creation',
      'Social Analytics & Insights'
    ],
    overview: 'Social media is where your target audience builds brand perception. We craft social strategies that go beyond vanity metrics to drive real conversations, community loyalty, and sales conversions.',
    whatWeDo: [
      'Brand Tone of Voice & Content Pillar Framework',
      'High-Impact Graphic Design & Carousel Posts',
      'Short-Form Video (Reels/Shorts) Scripting & Editing',
      'Active Audience Engagement & Response Management',
      'Influencer Collaboration & Brand Partnerships',
      'Monthly Growth & Engagement Tracking'
    ],
    process: [
      { title: 'Pillar Strategy', desc: 'We define core content themes that resonate with your target buyer.' },
      { title: 'Batch Production', desc: 'Our team designs graphics, writes captions, and produces video Reels.' },
      { title: 'Scheduling', desc: 'We publish at peak engagement times across target platforms.' },
      { title: 'Community Pulse', desc: 'We engage in comments and DMs to build active brand loyalty.' }
    ],
    deliverables: [
      'Monthly Content Calendars with Pre-approved Posts',
      'Custom Reel Videos & Carousel Graphics',
      'Social Brand Identity Guidelines',
      'Monthly Performance & Growth Reports'
    ],
    benefits: [
      'Stronger brand awareness and top-of-mind recall',
      'Direct engagement with prospective customers',
      'Enhanced organic social trust before sales calls',
      'Consistent stream of shareable, high-value visual assets'
    ],
    faqs: [
      { question: 'Do you create videos for Instagram Reels?', answer: 'Yes! We handle video scripting, editing, text overlays, sound trends, and cover design for Reels, Shorts, and TikTok style content.' },
      { question: 'Which platforms are best for my industry?', answer: 'B2B companies thrive on LinkedIn and YouTube, while eCommerce, hospitality, and real estate see massive results on Instagram and Facebook.' }
    ],
    stats: [
      { label: 'Content Strategy', value: 'Pillar Based' },
      { label: 'Video Asset Ratio', value: 'Reels First' },
      { label: 'Turnaround', value: 'Batch Approved' }
    ]
  },
  {
    id: 'branding',
    slug: 'branding',
    title: 'Branding & Visual Identity',
    shortDescription: 'Create a distinctive identity that makes your business easier to remember.',
    fullDescription: 'Crafting premium brand identities, positioning strategy, visual guidelines, logos, typography, and brand stories that differentiate you from competitors.',
    iconName: 'Palette',
    features: [
      'Brand Strategy & Positioning',
      'Logo & Vector Mark Design',
      'Typography & Color Palette',
      'Comprehensive Brand Guidelines',
      'Packaging & Print Collateral',
      'Creative Direction & Storytelling'
    ],
    overview: 'A great brand is the foundation of every high-performing business. We craft visual identities that project authority, build trust instantly, and justify premium pricing.',
    whatWeDo: [
      'Market & Competitor Positioning Analysis',
      'Core Value Proposition & Tagline Definition',
      'Logo Design Exploration & Vector Refinement',
      'Complete Color System & Typography Pairing',
      'Brand Application Across Digital & Physical Assets',
      'Detailed Brand Book / Brand Style Guide (PDF & Digital)'
    ],
    process: [
      { title: 'Discovery', desc: 'We dive deep into your company heritage, target market, and aspirations.' },
      { title: 'Concepts', desc: 'We develop 3 distinct creative concepts with mockups.' },
      { title: 'Refinement', desc: 'We polish chosen logo marks, typography, and palette details.' },
      { title: 'Guidelines', desc: 'We deliver comprehensive guidelines for all future brand uses.' }
    ],
    deliverables: [
      'Primary, Secondary, and Monogram Logo Files (SVG, PNG, EPS)',
      'Digital & Print Brand Identity Book',
      'Typography & Color Palette Specification Specs',
      'Social Media Template Pack & Stationery Mockups'
    ],
    benefits: [
      'Instant credibility with premium buyers and enterprise clients',
      'Consistent brand appearance across all customer touchpoints',
      'Higher conversion rates on all paid ad and web traffic',
      'Higher employee pride and brand equity valuation'
    ],
    faqs: [
      { question: 'What is included in the brand style guide?', answer: 'Our style guide includes logo usage rules, clear space specifications, primary/secondary color hex codes, typography hierarchy, icon styles, imagery direction, and dos/donts.' },
      { question: 'Can you refresh an existing logo without losing our brand recognition?', answer: 'Absolutely. We specialize in modernizing legacy logos into clean, responsive vector marks while preserving your core visual equity.' }
    ],
    stats: [
      { label: 'Logo Exports', value: 'SVG / PNG / EPS' },
      { label: 'Style Guide', value: 'Complete Specs' },
      { label: 'Asset Ownership', value: '100% Transfer' }
    ]
  },
  {
    id: 'web-development',
    slug: 'web-development',
    title: 'Website Design & Development',
    shortDescription: 'Create high-performance websites designed around your customers and business goals.',
    fullDescription: 'Custom, blazing-fast, responsive web experiences designed for conversion, SEO excellence, security, and seamless mobile usability.',
    iconName: 'Code',
    features: [
      'Custom Business Websites',
      'High-Converting Landing Pages',
      'eCommerce Platforms (Shopify, WooCommerce)',
      'UI/UX Architecture & Figma Prototypes',
      'Conversion Rate Optimization (CRO)',
      'Blazing Fast Mobile-First Code'
    ],
    overview: 'Your website is your 24/7 digital storefront. We design modern web experiences that combine striking aesthetics, lightning-fast load speeds, and intuitive user paths designed to convert visitors into inquiries.',
    whatWeDo: [
      'Custom Wireframing & Interactive Figma UI/UX Design',
      'Clean Modern Frontend Development (React, Next.js, HTML5/CSS3)',
      'Mobile-Responsive & Cross-Browser Testing',
      'CMS Integration for Easy Internal Content Updates',
      'Speed & Performance Optimization (90+ Lighthouse)',
      'Analytics, CRM & Pixel Integration'
    ],
    process: [
      { title: 'Wireframing', desc: 'We map user journeys and site structure for maximum conversion clarity.' },
      { title: 'UI Design', desc: 'We craft high-fidelity Figma mockups matching your brand guidelines.' },
      { title: 'Development', desc: 'We build clean, responsive, accessible code optimized for search engines.' },
      { title: 'Testing & Launch', desc: 'We run rigorous QA checks across devices before seamless DNS deployment.' }
    ],
    deliverables: [
      'Fully Responsive Modern Website Codebase',
      'Complete Figma Source File & Asset Export',
      'Content Management System (CMS) Access & Video Training',
      'Post-Launch Technical Warranty & Support Period'
    ],
    benefits: [
      'Significant lift in website conversion rate',
      'Sub-second load times that keep mobile visitors engaged',
      'Flawless indexing by search engine crawlers',
      'Total ownership of website assets without recurring page-builder lock-in'
    ],
    faqs: [
      { question: 'Will my team be able to edit text and photos later?', answer: 'Yes! We build client-friendly management controls and provide easy video walkthroughs so your team can effortlessly update content, blog posts, and photos.' },
      { question: 'Is the website optimized for mobile phones?', answer: 'Every site we build is responsive-first, tested rigorously across iOS, Android, tablets, laptops, and ultra-wide desktop monitors.' }
    ],
    stats: [
      { label: 'Architecture', value: 'Mobile-First' },
      { label: 'Target Speed', value: '90+ Lighthouse' },
      { label: 'Source Code', value: '100% Client Owned' }
    ]
  },
  {
    id: 'content-marketing',
    slug: 'content-marketing',
    title: 'Content Marketing',
    shortDescription: 'Create useful, strategic content that attracts audiences and builds authority.',
    fullDescription: 'High-intent blog articles, whitepapers, website copy, case studies, and email newsletter content that educates prospects and drives commercial search traffic.',
    iconName: 'FileText',
    features: [
      'SEO Blog Article Writing',
      'High-Converting Website Copywriting',
      'Email Marketing & Lead Nurturing',
      'Content Strategy & Topic Clusters',
      'Case Studies & Whitepapers',
      'Copy Editing & Content Audits'
    ],
    overview: 'High-quality content builds authority, resolves buyer friction, and converts casual readers into loyal buyers. We produce strategic content that answers exact search intent.',
    whatWeDo: [
      'Topic Cluster & Keyword Search Intent Research',
      'In-Depth SEO Blog Writing by Subject Specialists',
      'Lead Magnet Creation (Ebooks, Checklists, Guides)',
      'Email Newsletter Sequence Copywriting',
      'Conversion Copy for Product & Service Landing Pages',
      'Content Performance Audit & Continuous Refreshing'
    ],
    process: [
      { title: 'Topic Research', desc: 'We uncover high-intent questions your prospects are asking online.' },
      { title: 'Drafting', desc: 'Our editorial team writes compelling, well-structured, research-backed articles.' },
      { title: 'SEO Review', desc: 'We optimize headings, meta descriptors, schema, and internal links.' },
      { title: 'Distribution', desc: 'We publish and syndicate content across social channels and email digests.' }
    ],
    deliverables: [
      'Ready-to-Publish SEO Blog Posts with Custom Visuals',
      'Lead Magnet PDFs & Landing Page Copy',
      'Drip Email Nurture Sequences',
      'Quarterly Content Audit & Expansion Reports'
    ],
    benefits: [
      'Establishes your executive team as thought leaders in your industry',
      'Educates buyers so sales calls convert faster',
      'Feeds search engines with fresh, keyword-rich pages',
      'Builds a lasting corporate content asset library'
    ],
    faqs: [
      { question: 'Who writes the content?', answer: 'Our in-house team of experienced copywriters and industry-focused researchers write all content, adhering to your brand tone and style guidelines.' },
      { question: 'How do you ensure content quality and accuracy?', answer: 'Every draft undergoes a multi-tier review process including subject accuracy verification, proofreading, SEO optimization check, and plagiarism scanning.' }
    ],
    stats: [
      { label: 'Quality Check', value: 'Multi-Tier Review' },
      { label: 'SEO Integration', value: 'Intent Focused' },
      { label: 'Asset Library', value: 'Compounding' }
    ]
  },
  {
    id: 'lead-generation',
    slug: 'lead-generation',
    title: 'Lead Generation',
    shortDescription: 'Build predictable lead pipelines through targeted digital campaigns.',
    fullDescription: 'End-to-end B2B and consumer lead generation funnels, combining high-converting landing pages, paid traffic, automated follow-up sequences, and CRM qualification.',
    iconName: 'Users',
    features: [
      'High-Converting Lead Funnels',
      'Targeted B2B Lead Gen (LinkedIn/Google)',
      'Custom Multi-Step Qualification Forms',
      'Retargeting & Drop-Off Recovery',
      'CRM Integration (HubSpot, Salesforce, Zoho)',
      'Automated Lead Nurturing Workflows'
    ],
    overview: 'Unpredictable leads kill growth. We design automated lead generation systems that continuously capture, score, and deliver pre-qualified prospects straight to your sales team.',
    whatWeDo: [
      'Sales Funnel Blueprinting & Offer Positioning',
      'Interactive Multi-Step Lead Capture Form Development',
      'Multi-Channel Traffic Injection (PPC, Social Ads, SEO)',
      'Instant Lead Notification Setup (Email, WhatsApp, CRM)',
      'Automated SMS & Email Nurture Sequence Setup',
      'Lead Quality Auditing & CPA Optimization'
    ],
    process: [
      { title: 'Offer Design', desc: 'We craft irresistible lead magnets and high-value initial offers.' },
      { title: 'Funnel Build', desc: 'We build frictionless landing pages and multi-step qualification forms.' },
      { title: 'Traffic Drive', desc: 'We launch precision ads to reach decision-makers with high intent.' },
      { title: 'CRM Sync', desc: 'Leads automatically flow into your CRM with full campaign attribution.' }
    ],
    deliverables: [
      'Turnkey Lead Generation Campaign Funnel',
      'Automated Lead Scoring & CRM Integration',
      'Real-Time Lead Dashboard (Cost per Lead, Conversion Rates)',
      'A/B Testing Reports on Form Completion Rates'
    ],
    benefits: [
      'Consistent stream of qualified sales inquiries every week',
      'Lower Cost Per Qualified Lead (CPQL) through precise targeting',
      'Elimination of manual lead data entry through automated CRM sync',
      'Faster response times to inbound prospects'
    ],
    faqs: [
      { question: 'How do you filter out spam or low-quality leads?', answer: 'We implement custom qualification steps, work email verification, CAPTCHA, and conditional form logic so only genuine prospects complete the form.' },
      { question: 'Can leads sync directly into our CRM?', answer: 'Yes! We seamlessly connect lead forms to HubSpot, Salesforce, Zoho, LeadSquared, Pipedrive, Google Sheets, and custom webhooks.' }
    ],
    stats: [
      { label: 'Qualification', value: 'Multi-Step' },
      { label: 'CRM Sync', value: 'Instant Webhooks' },
      { label: 'Funnel Test', value: 'A/B Optimized' }
    ]
  },
  {
    id: 'creative-design',
    slug: 'creative-design',
    title: 'Creative & Design',
    shortDescription: 'Give your brand scroll-stopping creative that communicates clearly.',
    fullDescription: 'Eye-catching ad creatives, social media visuals, motion graphics, banners, presentations, and marketing collateral designed to break through digital noise.',
    iconName: 'NIcon',
    features: [
      'High-Converting Paid Ad Creatives',
      'Social Media Post & Carousel Packs',
      '2D/3D Motion Design & Video Editing',
      'Investor & Sales Presentation Decks',
      'Marketing Banners & Display Ads',
      'Creative Direction & Visual Assets'
    ],
    overview: 'In a feed-scrolling world, exceptional creative design is your biggest competitive advantage. We produce visual assets that capture instant attention and convey your value proposition in seconds.',
    whatWeDo: [
      'Ad Creative Variety Sprints (Static, Carousel, Video, Animated)',
      'Social Media Brand Asset Libraries',
      'Product Mockup & 3D Visualization Rendering',
      'Pitch Deck & Executive Presentation Design',
      'Event Collateral, Digital Banners & Infographics',
      'Ad Fatigue Refresh & Format Adaptation'
    ],
    process: [
      { title: 'Creative Brief', desc: 'We define visual goals, key message hierarchy, and platform specs.' },
      { title: 'Concepting', desc: 'We produce multiple creative directions testing different visual hooks.' },
      { title: 'Production', desc: 'Our design team crafts pixel-perfect assets optimized for mobile feeds.' },
      { title: 'Iterate', desc: 'We analyze ad click-through rates (CTR) to refine future creative iterations.' }
    ],
    deliverables: [
      'Omnichannel Ad Asset Package (1:1, 9:16, 16:9 Formats)',
      'Editable Figma & Canva Source Templates',
      'High-Resolution Motion Graphics (MP4, GIF)',
      'Custom Presentation Slides (PowerPoint, Keynote, PDF)'
    ],
    benefits: [
      'Dramatically higher Ad Click-Through Rates (CTR)',
      'Stronger visual authority across all customer touchpoints',
      'Fast turnaround times for high-volume creative campaigns',
      'Reduced creative fatigue on long-running ad campaigns'
    ],
    faqs: [
      { question: 'What formats do you deliver for ad creatives?', answer: 'We deliver all standard ad ratios: 1:1 square, 9:16 vertical stories/reels, and 16:9 landscape banners in high-res PNG, MP4, and GIF.' },
      { question: 'Do you provide editable templates?', answer: 'Yes, we provide master Figma files and editable Canva templates so your team can easily make minor text updates.' }
    ],
    stats: [
      { label: 'Ad Ratios', value: '1:1 / 9:16 / 16:9' },
      { label: 'Formats', value: 'PNG / MP4 / GIF' },
      { label: 'Templates', value: 'Figma & Canva' }
    ]
  }
];
