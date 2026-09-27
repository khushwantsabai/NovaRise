export interface IndustryItem {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  keyChallenges: string[];
  ourSolutions: string[];
  expectedOutcomes: string[];
}

export const industriesData: IndustryItem[] = [
  {
    id: 'real-estate',
    name: 'Real Estate',
    shortDesc: 'Drive high-intent buyer leads and sold-out property campaigns.',
    fullDesc: 'We help developers, brokerage firms, and luxury housing brands capture verified buyer leads, optimize Google Maps local search, and showcase properties with interactive digital funnels.',
    iconName: 'Building2',
    keyChallenges: [
      'High Cost Per Lead (CPL) on generic ad campaigns',
      'Unqualified buyer inquiries wasting broker time',
      'Slow mobile websites failing to showcase luxury property images'
    ],
    ourSolutions: [
      'Hyper-targeted Meta & Google ads targeting high-net-worth buyers',
      'Multi-step lead qualification forms capturing budget & possession timelines',
      'GEO-targeted local SEO for project site offices and Google Maps'
    ],
    expectedOutcomes: [
      'Predictable flow of verified site visit bookings',
      'Lower Cost Per Qualified Lead (CPQL) by 30-45%',
      'Faster project inventory sell-out timelines'
    ]
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Clinics',
    shortDesc: 'Build patient trust, local SEO dominance, and online booking.',
    fullDesc: 'Hospitals, specialty clinics, diagnostics, and wellness centers rely on us for patient-centric websites, local search rankings, and educational content that converts searchers into appointments.',
    iconName: 'Stethoscope',
    keyChallenges: [
      'Strict advertising compliance guidelines (Google & Meta)',
      'Fragmented clinic reviews across Google Maps and directories',
      'Friction in patient online appointment scheduling'
    ],
    ourSolutions: [
      'HIPAA-compliant, sub-second responsive website booking portals',
      'Review management and Local SEO 3-Pack optimization',
      'Medically-reviewed patient education guides for Google rankings'
    ],
    expectedOutcomes: [
      'Significant increase in online appointment bookings',
      'Dominant Google Maps visibility across all clinic branches',
      'Higher patient trust and positive review scores'
    ]
  },
  {
    id: 'education',
    name: 'Education & EdTech',
    shortDesc: 'Fill batch enrollments with qualified student applicants.',
    fullDesc: 'From universities and coaching institutes to executive EdTech platforms, we design high-converting webinar funnels and search campaigns that drive verified student admissions.',
    iconName: 'GraduationCap',
    keyChallenges: [
      'Long decision cycles and high student drop-off',
      'High competition on Google Search keywords',
      'Low attendance on webinars and counseling calls'
    ],
    ourSolutions: [
      'Masterclass & webinar lead funnels with instant SMS/WhatsApp reminders',
      'High-intent Google Search campaigns for specific degree & skill courses',
      'Graduate outcome & salary proof landing page optimizations'
    ],
    expectedOutcomes: [
      'Batches filled weeks before application deadlines',
      'Higher webinar attendance and counselor conversion rates',
      'Lower cost per enrolled student'
    ]
  },
  {
    id: 'ecommerce',
    name: 'eCommerce & D2C',
    shortDesc: 'Scale online store sales, ROAS, and repeat customer LTV.',
    fullDesc: 'We help apparel, beauty, electronics, and lifestyle brands scale Shopify & custom eCommerce stores using full-funnel ad strategies, short-form video creative, and email automation.',
    iconName: 'ShoppingBag',
    keyChallenges: [
      'Creative fatigue driving down ad ROAS',
      'High cart abandonment rates on checkout',
      'Rising customer acquisition costs (CAC)'
    ],
    ourSolutions: [
      'Monthly high-volume Reel ad production engine',
      'Dynamic product retargeting (DPA) and Klaviyo abandoned cart flows',
      'Conversion Rate Optimization (CRO) on product detail pages'
    ],
    expectedOutcomes: [
      'Consistent 3.5x to 4.5x ROAS across paid channels',
      'Higher average order value (AOV) and customer lifetime value (LTV)',
      'Rapid monthly store revenue scaling'
    ]
  },
  {
    id: 'hospitality',
    name: 'Hospitality & Travel',
    shortDesc: 'Direct hotel bookings, dining reservations, and brand prestige.',
    fullDesc: 'Resorts, boutique hotels, fine dining restaurants, and travel experiences choose NovaRise to increase commission-free direct bookings and showcase stunning visual ambiance.',
    iconName: 'UtensilsCrossed',
    keyChallenges: [
      'Heavy reliance on third-party OTAs charging 15-25% commissions',
      'Seasonal demand fluctuations',
      'Low engagement on traditional social media channels'
    ],
    ourSolutions: [
      'Direct booking engine landing pages with exclusive perk incentives',
      'Visual storytelling Reels highlighting luxury rooms, food, and views',
      'Retargeting campaigns targeting travellers searching for vacation destinations'
    ],
    expectedOutcomes: [
      'Higher proportion of direct, commission-free website bookings',
      'Consistent weekend and holiday occupancy rates',
      'Viral organic social media reach'
    ]
  },
  {
    id: 'technology',
    name: 'SaaS & Technology',
    shortDesc: 'Acquire trial users, demo bookings, and recurring MRR growth.',
    fullDesc: 'B2B SaaS companies and tech platforms partner with us to optimize signup funnels, execute targeted LinkedIn campaigns, and rank for technical commercial keywords.',
    iconName: 'Cpu',
    keyChallenges: [
      'Explaining complex technical software features quickly',
      'High acquisition costs for free trial signups',
      'Converting free trial users into paying monthly subscriptions'
    ],
    ourSolutions: [
      'Frictionless demo booking and interactive product tour landing pages',
      'LinkedIn Sponsored Content targeting specific job titles and company sizes',
      'Comparison and alternative landing pages (e.g. "Competitor vs Your Brand")'
    ],
    expectedOutcomes: [
      'Steady stream of qualified demo requests for sales reps',
      'Lower cost per lead (CPL) and higher trial-to-paid conversion',
      'Scalable monthly recurring revenue (MRR) growth'
    ]
  },
  {
    id: 'finance',
    name: 'Finance & Wealth',
    shortDesc: 'Build financial authority, HNI leads, and brand trust.',
    fullDesc: 'Wealth advisors, fintech apps, insurance, and NBFCs leverage our branding and lead generation systems to connect with affluent investors and business owners.',
    iconName: 'DollarSign',
    keyChallenges: [
      'Skeptical prospects demanding deep security and trust signals',
      'Strict regulatory marketing compliance',
      'Low conversion rates on complex financial lead forms'
    ],
    ourSolutions: [
      'Sophisticated visual branding projecting institutional credibility',
      'Interactive financial planning calculators and assessment tools',
      'Search campaigns targeting high-intent wealth keywords'
    ],
    expectedOutcomes: [
      'Significant growth in Assets Under Advisory (AUA)',
      'Pre-qualified leads with verified investment budgets',
      'High conversion rates on financial consultation requests'
    ]
  },
  {
    id: 'professional-services',
    name: 'Professional Services',
    shortDesc: 'Attract corporate clients for law, consulting, and accounting.',
    fullDesc: 'Law firms, management consultants, auditing agencies, and architecture studios use our B2B marketing engines to showcase expertise and win high-retainer corporate contracts.',
    iconName: 'Briefcase',
    keyChallenges: [
      'Long sales cycles with multiple decision makers',
      'Standing out from commoditized local service providers',
      'Generating consistent inbound B2B inquiries'
    ],
    ourSolutions: [
      'LinkedIn thought leadership and executive personal branding',
      'Authoritative whitepapers, case studies, and corporate guides',
      'Search engine optimization targeting commercial search queries'
    ],
    expectedOutcomes: [
      'Inbound high-ticket corporate retainer inquiries',
      'Shortened sales cycle due to pre-built authority',
      'Higher win rates on competitive RFPs'
    ]
  },
  {
    id: 'restaurants',
    name: 'Restaurants & Cafes',
    shortDesc: 'Pack tables, promote delivery, and build food community loyalty.',
    fullDesc: 'Fine dining establishments, cafe chains, and cloud kitchens count on us for mouth-watering social media visuals, influencer food tastings, and local Google Maps search ranking.',
    iconName: 'Coffee',
    keyChallenges: [
      'High food delivery platform commissions (Zomato/Swiggy)',
      'Fierce local competition in city dining hubs',
      'Maintaining consistent weekend table reservations'
    ],
    ourSolutions: [
      'High-impact food cinematography Reels and story highlights',
      'Influencer tasting events driving viral local buzz',
      'Google Maps 3-Pack SEO for terms like "best cafe near me"'
    ],
    expectedOutcomes: [
      'Packed weekend table reservations and long queue demand',
      'Massive local Instagram follower growth and tags',
      'Increased direct phone and website table bookings'
    ]
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing & B2B',
    shortDesc: 'Expand industrial distributor networks and international exports.',
    fullDesc: 'Industrial manufacturers, exporters, and OEM suppliers trust NovaRise to modernize their digital presence, rank on global B2B buyer search terms, and generate distributor inquiries.',
    iconName: 'Factory',
    keyChallenges: [
      'Outdated legacy websites that look 10 years behind competitors',
      'Finding international buyers and regional distributors',
      'Showcasing heavy machinery and custom production capabilities'
    ],
    ourSolutions: [
      'Modern industrial web portals with catalog specifications and RFQ forms',
      'Global SEO for international trade keywords',
      'Google Search campaigns targeting wholesale purchasing managers'
    ],
    expectedOutcomes: [
      'Inbound Requests for Quotation (RFQs) from global buyers',
      'New regional distributor partnerships signed',
      'Elevated brand reputation in international markets'
    ]
  }
];
