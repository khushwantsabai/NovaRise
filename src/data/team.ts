export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  initials: string;
  color: string;
}

export const teamData: TeamMember[] = [
  {
    id: 'strategy-director',
    name: 'Digital Growth Strategist',
    role: 'Strategy & Campaign Leadership',
    bio: 'Oversees digital growth roadmaps, multi-channel budget allocation, and target KPI blueprints for retainer clients.',
    initials: 'GS',
    color: 'from-[#7C3AED] to-[#6366F1]'
  },
  {
    id: 'performance-lead',
    name: 'Performance Media Specialist',
    role: 'Paid Search & Social Advertising',
    bio: 'Manages bidding architecture, audience micro-segmentation, and server-side tracking (GA4 + CAPI) across Google & Meta.',
    initials: 'PM',
    color: 'from-[#06B6D4] to-[#3B82F6]'
  },
  {
    id: 'creative-director',
    name: 'Brand Art Director',
    role: 'Creative & Motion Design',
    bio: 'Leads visual storytelling, brand style guides, high-converting ad creative sprints, and short-form video hooks.',
    initials: 'AD',
    color: 'from-purple-600 to-[#7C3AED]'
  },
  {
    id: 'seo-strategist',
    name: 'Technical SEO Architect',
    role: 'Search & Content Optimization',
    bio: 'Executes technical crawl audits, structured schema implementations, keyword cluster mapping, and organic authority building.',
    initials: 'SE',
    color: 'from-emerald-500 to-[#06B6D4]'
  }
];
