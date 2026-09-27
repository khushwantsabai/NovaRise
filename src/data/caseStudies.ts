export interface CaseStudyItem {
  id: string;
  slug: string;
  clientName: string;
  industry: string;
  services: string[];
  tagline: string;
  shortResult: string;
  featuredImage: string;
  heroImage: string;
  overview: string;
  challenge: string;
  objectives: string[];
  strategy: string;
  execution: string[];
  creativeDirection: string;
  metrics: { value: string; label: string }[];
  finalOutcome: string;
}

export const caseStudiesData: CaseStudyItem[] = [
  {
    id: 'auraspace',
    slug: 'auraspace',
    clientName: 'AuraSpace',
    industry: 'Real Estate',
    services: ['SEO', 'Performance Marketing'],
    tagline: 'Luxury Residential Lead Capture & Search Dominance Blueprint',
    shortResult: 'Targeted High-Intent Buyer Lead Capture Funnel',
    featuredImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    overview: 'AuraSpace is a residential real estate developer operating luxury apartment projects across major metro hubs. They required a direct digital acquisition model to attract qualified home buyers.',
    challenge: 'High cost per lead on un-optimized ad channels, low search visibility for commercial property queries, and a high drop-off rate on legacy desktop forms.',
    objectives: [
      'Lower Cost Per Qualified Lead through pre-qualification filters',
      'Optimize Google Maps and local SEO for project site offices',
      'Deploy interactive property tour funnels for interested buyers',
      'Increase lead-to-site-visit scheduling conversion rate'
    ],
    strategy: 'We implemented a hyper-local SEO strategy coupled with laser-targeted Meta & Google Search campaigns, supported by interactive floorplan previews and WhatsApp direct enquiry hooks.',
    execution: [
      'Structured schema markup for real estate listings and GEO-targeted pages',
      'Created 24 location landing pages with virtual tour integration',
      'Launched Meta lead ads with custom multi-step financial pre-qualification forms',
      'Implemented automated CRM routing to instantly alert property sales executives'
    ],
    creativeDirection: 'Sleek, architectural aesthetic with rich warm neutral tones, high-res lifestyle photography, and clean minimalist typography emphasizing elegance and trust.',
    metrics: [
      { value: 'SEO', label: 'GEO Local Search Optimized' },
      { value: 'Funnels', label: 'Multi-Step Qualification' },
      { value: 'CRM', label: 'Instant Lead Routing' },
      { value: 'Tracking', label: 'GA4 + Meta CAPI Integrated' }
    ],
    finalOutcome: 'AuraSpace established a predictable digital buyer pipeline that significantly reduced reliance on traditional offline brokers.'
  },
  {
    id: 'kova-apparel',
    slug: 'kova-apparel',
    clientName: 'Kova Apparel',
    industry: 'Fashion eCommerce',
    services: ['Social Media', 'Paid Ads', 'Creative'],
    tagline: 'Direct-to-Consumer Apparel Growth & Creative Engine Framework',
    shortResult: 'High-Volume Video Creative Testing & Retargeting',
    featuredImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80',
    heroImage: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1600&q=80',
    overview: 'Kova Apparel is an upcoming premium apparel and lifestyle eCommerce brand targeting modern urban youth. They needed to scale online store sales while establishing a distinct visual identity.',
    challenge: 'Stagnant ad scaling due to creative fatigue, high cart abandonment, and lack of automated post-purchase customer retention sequences.',
    objectives: [
      'Maintain consistent ad return on spend while scaling monthly ad budgets',
      'Increase Instagram follower engagement rate through short-form video',
      'Reduce checkout drop-off rate via retargeting and email automation',
      'Establish a monthly creative production engine for Reels and UGC ads'
    ],
    strategy: 'We built a high-volume creative testing flywheel, producing short-form video Reel ads focusing on outfit styling, unboxing, and user reviews, combined with dynamic catalog retargeting.',
    execution: [
      'Produced trend-focused Reel ads with clear hook-point optimization',
      'Designed dynamic DPA carousel campaigns for abandoned shopping carts',
      'Built post-purchase email nurture sequences offering styling recommendations',
      'Partnered with micro-creators for authentic social proof content'
    ],
    creativeDirection: 'Vibrant, editorial fashion photography with bold typography, high-contrast color pops, and fast-paced video edits.',
    metrics: [
      { value: 'Catalog', label: 'Dynamic DPA Retargeting' },
      { value: 'Creatives', label: 'Monthly Reel Production' },
      { value: 'Automation', label: 'Klaviyo Email Flows' },
      { value: 'Store', label: 'Shopify CRO Optimized' }
    ],
    finalOutcome: 'Kova Apparel established a scalable e-commerce infrastructure supporting expanded inventory lines and nationwide order fulfillment.'
  },
  {
    id: 'pulse-care',
    slug: 'pulse-care',
    clientName: 'PulseCare Clinics',
    industry: 'Healthcare',
    services: ['SEO', 'Content Marketing', 'Web Development'],
    tagline: 'Patient Appointment Portal & Multi-Clinic Search Dominance',
    shortResult: 'Sub-Second Booking Portal & Local Maps Optimization',
    featuredImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80',
    heroImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=80',
    overview: 'PulseCare Clinics is a chain of multi-specialty medical clinics providing advanced diagnostic and specialist healthcare. They required a modern, compliant patient booking portal and local search optimization.',
    challenge: 'Fragmented clinic listings across Google Maps, slow mobile website load speeds, and friction in patient online booking.',
    objectives: [
      'Redesign the main website into a fast, patient-friendly appointment portal',
      'Optimize Google Business Profiles for multiple clinic locations',
      'Publish medically reviewed educational health content targeting local queries',
      'Streamline online appointment booking to under 30 seconds'
    ],
    strategy: 'We rebuilt the website on React with sub-second page loads, structured Schema for doctors and medical conditions, and produced authoritative medical blog content.',
    execution: [
      'Developed location-specific landing pages with live doctor schedules',
      'Published medically reviewed patient guides on health prevention and symptoms',
      'Integrated instant WhatsApp booking and SMS confirmation reminders',
      'Optimized Google Maps local SEO for clinic branches'
    ],
    creativeDirection: 'Clean, clinical, and reassuring palette with deep navy, soft cyan accents, clear iconography, and accessible high-contrast text.',
    metrics: [
      { value: 'Speed', label: 'Sub-Second Mobile Load' },
      { value: 'Local SEO', label: 'Google Maps 3-Pack' },
      { value: 'Schema', label: 'Medical Entity JSON-LD' },
      { value: 'Booking', label: 'Automated SMS / WhatsApp' }
    ],
    finalOutcome: 'PulseCare Clinics streamlined patient booking workflows while reducing manual front-desk phone inquiries through direct web appointments.'
  },
  {
    id: 'asset-prime',
    slug: 'asset-prime',
    clientName: 'AssetPrime',
    industry: 'Finance / WealthTech',
    services: ['Branding', 'Website Design', 'Lead Generation'],
    tagline: 'Premium Brand Identity & Interactive Wealth Planning Portal',
    shortResult: 'Institutional Brand Positioning & Calculator Tool',
    featuredImage: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1000&q=80',
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
    overview: 'AssetPrime is an automated wealth management and investment advisory firm catering to corporate executives and tech founders. They needed a sophisticated corporate identity and lead generation engine.',
    challenge: 'Establishing trust among high-net-worth clientele, complex financial terminology, and low conversion rate on standard contact forms.',
    objectives: [
      'Craft a premium financial brand identity and logo mark',
      'Design an interactive wealth planning calculator on the website',
      'Drive high-ticket wealth advisory leads via Search & LinkedIn campaigns'
    ],
    strategy: 'We created an ultra-premium visual identity featuring emerald greens, deep slates, and subtle gold highlights, coupled with an interactive web portal where clients compute portfolio projections.',
    execution: [
      'Designed complete brand book, stationery, pitch decks, and digital assets',
      'Engineered an interactive 3-step Wealth Assessment Calculator web tool',
      'Ran LinkedIn sponsored content campaigns targeting decision-makers',
      'Integrated CRM scoring based on investment portfolio size'
    ],
    creativeDirection: 'Sophisticated corporate finance look with dark charcoal backgrounds, gold/emerald accents, crisp data visualizations, and glassmorphism elements.',
    metrics: [
      { value: 'Identity', label: 'Complete Brand Guidelines' },
      { value: 'Tool', label: 'Interactive Wealth Calculator' },
      { value: 'Targeting', label: 'LinkedIn B2B Executive Ads' },
      { value: 'Scoring', label: 'Automated Lead Qualification' }
    ],
    finalOutcome: 'AssetPrime launched a cohesive financial brand identity that projects immediate institutional trust to target investors.'
  },
  {
    id: 'haven-living',
    slug: 'haven-living',
    clientName: 'Haven Living',
    industry: 'Lifestyle & Home Décor',
    services: ['Social Media', 'Creative', 'Content Marketing'],
    tagline: 'Artisan Storytelling & Short-Form Video Content Strategy',
    shortResult: 'Cinematic Reel Series & Lookbook Design',
    featuredImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80',
    heroImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=80',
    overview: 'Haven Living curates handcrafted sustainable home furnishings and interior décor created by master craftsmen. They wanted to connect with design-conscious homeowners.',
    challenge: 'Conveying artisan craftsmanship online, generic social media visuals, and low repeat engagement.',
    objectives: [
      'Build a visually captivating Instagram and Pinterest ecosystem',
      'Highlight artisan behind-the-scenes stories through short documentary Reels',
      'Increase organic website referral traffic driven directly from social media'
    ],
    strategy: 'We focused on editorial artisan storytelling — taking followers inside craft workshops, showing raw materials, wood carving, and styling ideas for modern living spaces.',
    execution: [
      'Shot mini-documentary Reel videos of master craftsmen at work',
      'Created aesthetic home styling lookbooks and Pinterest moodboards',
      'Launched user-generated content campaigns encouraging customers to share home tags',
      'Published monthly interior design blog guides'
    ],
    creativeDirection: 'Warm earthy tones, soft natural lighting, organic textures, and cinematic slow-motion video editing.',
    metrics: [
      { value: 'Storytelling', label: 'Artisan Documentary Reels' },
      { value: 'Lookbooks', label: 'Pinterest & IG Styling Packs' },
      { value: 'Community', label: 'UGC Home Tag Campaigns' },
      { value: 'Traffic', label: 'Organic Social Referrals' }
    ],
    finalOutcome: 'Haven Living established a strong social media brand presence and active community engagement.'
  },
  {
    id: 'prolearn-global',
    slug: 'prolearn-global',
    clientName: 'ProLearn Global',
    industry: 'Education / EdTech',
    services: ['Lead Generation', 'Google Ads', 'SEO'],
    tagline: 'Executive Certification Admissions & Masterclass Funnel',
    shortResult: 'High-Intent Masterclass Funnel & Search Strategy',
    featuredImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80',
    heroImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80',
    overview: 'ProLearn Global offers executive certification programs in Data Science, AI, and Product Management for working professionals looking to upskill.',
    challenge: 'High cost per admission on generic ad channels, long decision cycle, and high drop-off during initial counseling scheduling.',
    objectives: [
      'Lower cost per applicant through warm webinar qualification',
      'Automate counseling webinar bookings with high attendance rates',
      'Rank for executive AI and Data Science certification queries'
    ],
    strategy: 'We built a high-intent webinar funnel where prospects registered for a free career roadmap masterclass before speaking to admissions counselors.',
    execution: [
      'Created single-page registration funnels with live countdown timers',
      'Targeted high-intent search queries on Google Search',
      'Implemented automated WhatsApp and SMS webinar reminder sequences',
      'Optimized program landing pages with course curriculum specs'
    ],
    creativeDirection: 'Modern, aspirational tech aesthetic with navy blue, vibrant cyan accents, data graphs, and professional alumni portraits.',
    metrics: [
      { value: 'Funnel', label: 'Masterclass Registration' },
      { value: 'Reminders', label: 'Automated SMS & WhatsApp' },
      { value: 'Search', label: 'Intent Google Search PPC' },
      { value: 'Qualify', label: 'Pre-Counseling Forms' }
    ],
    finalOutcome: 'ProLearn Global built a structured student acquisition funnel that operates predictably across enrollment cycles.'
  }
];
