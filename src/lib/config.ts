// Central site config — flip SHOW_PRICING to true when ready to reveal package prices.
export const SHOW_PRICING = false;

// Update this if/when a custom domain is connected in Cloudflare Pages.
export const SITE_URL = "https://passion-hub-website.pages.dev";
export const FB_MESSENGER_URL = "https://m.me/PassionHub.BrandingAndDigitalMarketing";
export const VIBER_DISPLAY = "09 443 230 418";
export const VIBER_HREF = "viber://chat?number=%2B959443230418";
export const CONTACT_EMAIL = "passionhub.dm@gmail.com";
export const CONTACT_PHONE_DISPLAY = "+959 798 822 267";
export const CONTACT_PHONE_HREF = "tel:+959798822267";

// Get a free key at https://web3forms.com/#get-started — no password required.
export const WEB3FORMS_ACCESS_KEY = "929bd158-c131-49b2-9cc3-381308a1aa6d";

// "Service Interested In" dropdown — shared by the main Contact page form and
// every quick-contact form (ContactCTA) so the list can't drift between them.
export const SERVICE_INQUIRY_OPTIONS = [
  'Social Media Management',
  'Website Development',
  'Performance Marketing',
  'SEO Copywriting',
  'SEO & AI Search Optimization',
  'Video Editing / Reels',
  'Marketing Training & Workshops',
  'Something else',
];

// Section-level visibility toggles — same on/off pattern as SHOW_PRICING above,
// and SHOW_SOCIAL_LINKS below. Once Decap CMS is set up, each of these becomes a
// checkbox on that page's CMS entry instead of a code edit. Add a new key here
// any time another section needs a hide/unhide switch.
export const SECTION_VISIBILITY = {
  aboutClientWork: true, // "Selected Work" carousel on the About page
};

// Social links — coded and ready, hidden from the UI until you're ready to reveal them.
export const SHOW_SOCIAL_LINKS = false;
export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/PassionHub.BrandingAndDigitalMarketing",
  instagram: "",
  tiktok: "",
  linkedin: "",
};

// Per-page SEO meta — used by Layout.astro. Falls back to site defaults if a page doesn't override.
export const pageMeta = {
  home: {
    title: "Passion Hub | Branding & Digital Marketing Agency in Myanmar",
    description: "Passion Hub helps Myanmar brands grow faster with strategy-led branding, social media management, performance marketing, and SEO — backed by a team with regional experience across Cambodia, Laos, and Thailand.",
  },
  about: {
    title: "About Passion Hub | Branding & Digital Marketing Agency in Myanmar",
    description: "Meet Passion Hub — a decade-strong branding and digital marketing agency based in Myanmar, with a team bringing regional experience across Cambodia, Laos, and Thailand.",
  },
  services: {
    title: "Digital Marketing Services | Strategy, Social Media, SEO & Web Development",
    description: "Explore Passion Hub's full range of digital marketing services — strategy development, social media management, performance marketing, website development, and SEO.",
  },
  packages: {
    title: "Social Media Management Packages | Standard, Advanced & Premium Plans",
    description: "Compare Passion Hub's flexible social media management packages — Standard, Advanced, and Premium — built to match your brand's growth stage.",
  },
  insights: {
    title: "Marketing Insights & Blog | Passion Hub",
    description: "Real-world marketing tips, branding advice, and digital strategy insights from the Passion Hub team, based in Myanmar with experience across Southeast Asia.",
  },
  contact: {
    title: "Contact Passion Hub | Start Your Marketing Project",
    description: "Ready to move your marketing forward? Contact Passion Hub today for a free consultation on branding, social media, and digital marketing services.",
  },
  thankYou: {
    title: "Thank You | Passion Hub",
    description: "Thanks for reaching out to Passion Hub — we'll be in touch within one business day.",
  },
  training: {
    title: "Marketing Training & Workshops in Myanmar | Passion Hub",
    description: "Practical marketing training for companies and individuals — corporate team training, masterclasses, custom workshops, and 1:1 coaching from the Passion Hub team.",
  },
};

export interface PackageTier {
  name: string;
  nickname: string;
  bestFor: string;
  tagline: string;
  feeCallout: string;
  price: string;
  period: string;
  postCount: string;
  featured?: boolean;
  deliverables: string[];
}

export const packageTiers: PackageTier[] = [
  {
    name: "Standard",
    nickname: "Start",
    bestFor: "Best for brands building a consistent social presence for the first time.",
    tagline: "Getting your brand set up and consistently active.",
    feeCallout: "",
    price: "MMK 200,000",
    period: "/month",
    postCount: "4 posts / month",
    deliverables: [
      "Manage social media",
      "Content creation (4 posts)",
      "Visual design (4 posts)",
      "Posting & scheduling",
      "Media buying (+25% service fee)",
      "Performance insights & recommendations",
    ],
  },
  {
    name: "Advanced",
    nickname: "Grow",
    bestFor: "Best for brands ready to scale content, engagement, and paid reach together.",
    tagline: "Full social media management with steady output.",
    feeCallout: "and a lower media buying fee than Standard",
    price: "MMK 400,000",
    period: "/month",
    postCount: "8 posts / month",
    featured: true,
    deliverables: [
      "Manage social media",
      "Content creation (8 posts)",
      "Visual design (8 posts)",
      "FOC special day posts",
      "Posting & scheduling",
      "Media buying (+20% service fee)",
      "Performance insights & recommendations",
    ],
  },
  {
    name: "Premium",
    nickname: "Scale",
    bestFor: "Best for brands that need high-volume content and dedicated strategic attention.",
    tagline: "High-output management for brands that need volume.",
    feeCallout: "at our lowest media buying fee",
    price: "MMK 750,000",
    period: "/month",
    postCount: "15 posts / month",
    deliverables: [
      "Manage social media",
      "Content creation (15 posts)",
      "Visual design (15 posts)",
      "FOC special day posts",
      "Posting & scheduling",
      "Media buying (+15% service fee)",
      "Performance insights & recommendations",
    ],
  },
];

export const feeDropCallout = "The more you scale, the less you pay in media buying fees — our service fee drops from 25% to 15% as you move from Standard to Premium.";

export interface ComparisonRow {
  feature: string;
  values: string[]; // one per tier, in tier order
}

export const comparisonRows: ComparisonRow[] = [
  { feature: "Posts / month", values: ["4", "8", "15"] },
  { feature: "Social media management", values: ["Full management", "Full management", "Full management"] },
  { feature: "FOC special day posts", values: ["—", "✓", "✓"] },
  { feature: "Media buying service fee", values: ["+25%", "+20%", "+15%"] },
  { feature: "Performance insights", values: ["✓", "✓", "✓"] },
  { feature: "Strategy call frequency", values: ["—", "Once every 3 months", "Once a month"] },
  { feature: "Revision rounds per post", values: ["1", "3", "Unlimited"] },
  { feature: "Reporting frequency", values: ["—", "Once a month", "Once a month"] },
  { feature: "Turnaround time", values: ["Within 24 hours", "Within 12 hours", "Within 6 hours"] },
];

export interface PillItem {
  name: string;
  desc: string;
}

export const projectBasedServices: PillItem[] = [
  { name: "Logo Design", desc: "A custom logo and basic brand mark, delivered in the file formats you need for print and digital use." },
  { name: "Website Development", desc: "A new website or landing page scoped and built as a standalone project — see our Website Development service for full detail." },
  { name: "Photography / Videography", desc: "On-location or studio photo and video shoots for product, brand, or campaign content." },
  { name: "Reels / Short-Form Videos", desc: "Edited short-form video content for Instagram Reels, TikTok, and YouTube Shorts." },
  { name: "SEO Copywriting", desc: "Search-optimized copy for web pages, product listings, or blog content, written to rank and convert." },
];

export const addOnServices: PillItem[] = [
  { name: "Ads Campaign Setup", desc: "One-time setup of a paid ad campaign — audience targeting, creative, and budget structure — for brands managing their own ad spend." },
  { name: "Analytics Setup", desc: "Google Analytics (or equivalent) implementation with goal tracking, so you can see what's actually working." },
  { name: "Additional Content", desc: "Extra captions and copy beyond your package's monthly post count, for busier months or campaigns." },
  { name: "Additional Visuals", desc: "Extra graphic design beyond your package's monthly post count." },
  { name: "Additional Videos", desc: "Extra video content beyond your package's monthly post count." },
  { name: "Marketing Assist", desc: "Flexible, ad-hoc marketing support when you need an extra hand outside your regular package scope." },
];

export interface ServiceCategory {
  name: string;
  slug: string;
  desc: string;
  items: string[];
  external?: string; // if set, links here instead of a service detail page
}

export const serviceCategories: ServiceCategory[] = [
  {
    name: "Strategy Development",
    slug: "strategy-development",
    desc: "The thinking that anchors every campaign before a single post goes out.",
    items: ["Digital Strategy", "Content Strategy", "Campaign Strategy", "Marketing Planning"],
  },
  {
    name: "Social Media Management",
    slug: "social-media-management",
    desc: "Consistent, on-brand content and community management across Standard, Advanced, and Premium tiers.",
    items: ["Standard", "Advanced", "Premium"],
  },
  {
    name: "Performance Marketing",
    slug: "performance-marketing",
    desc: "Paid campaigns built for measurable return, not just reach.",
    items: ["Social Media Advertising", "Paid Search (SEM)", "Display & Video Advertising"],
  },
  {
    name: "Website Development",
    slug: "website-development",
    desc: "Sites and apps that reflect your brand and actually convert.",
    items: ["Portfolio Websites", "Business Websites", "Blog & News Websites", "App Development"],
  },
  {
    name: "SEO & AI Search Optimization",
    slug: "seo-ai-search-optimization",
    desc: "Getting found — on Google, and increasingly, on AI search.",
    items: ["Technical SEO", "On-Page SEO", "Content Optimization", "Local SEO", "AI Search Optimization"],
  },
  {
    name: "Marketing Training & Workshops",
    slug: "training-workshops",
    desc: "Practical, hands-on marketing training for teams and individuals — not just theory.",
    items: ["Corporate Training", "Masterclasses", "Custom Workshops", "1:1 Coaching"],
  },
];

export interface TrainingPackage {
  name: string;
  bestFor: string;
  desc: string;
  structure: string;
}

export const trainingPackages: TrainingPackage[] = [
  {
    name: "Team Training",
    bestFor: "Best for companies onboarding a new marketing hire or upskilling an existing team.",
    desc: "A structured multi-session program covering digital strategy, social media, and performance marketing fundamentals, delivered to your team as a group so everyone builds shared vocabulary and working knowledge together.",
    structure: "4 sessions, ~2 hours each, delivered over 2–3 weeks — on-site, online, or hybrid.",
  },
  {
    name: "Marketing Masterclasses",
    bestFor: "Best for teams or individuals wanting a deep dive into one specific topic.",
    desc: "A single focused session on one topic, chosen from a running list — e.g. \"Paid Social Fundamentals,\" \"SEO Basics for Non-Marketers,\" \"Reading Your Analytics,\" \"Content Strategy 101.\"",
    structure: "Single 2–3 hour session, topic selected in advance.",
  },
  {
    name: "Custom Corporate Workshops",
    bestFor: "Best for companies with a specific challenge or goal.",
    desc: "A workshop built entirely around your brand and situation — preparing for a product launch, building an internal content calendar process, or solving a specific marketing bottleneck your team is facing.",
    structure: "Scoped individually after a discovery call; typically a half-day or full-day session.",
  },
  {
    name: "1:1 Marketing Coaching",
    bestFor: "Best for individual professionals or business owners running their own marketing.",
    desc: "Ongoing, personalized guidance as you build or run your own marketing — structured around your specific goals and current skill gaps, revisited and adjusted as you progress.",
    structure: "Recurring sessions (e.g. biweekly or monthly), 60–90 minutes each, ongoing engagement.",
  },
];

export const whyPassionHub = [
  { title: "Real-World Experience", desc: "10+ years across categories and 4 markets, not theory." },
  { title: "Strategy Meets Creativity", desc: "Every campaign starts with insight, then comes to life through creative execution." },
  { title: "Business-Focused", desc: "We measure success by your business outcomes, not vanity metrics." },
  { title: "Flexible Solutions", desc: "Packages and project work that scale with where your brand is right now." },
];

export interface PortfolioItem {
  image: string;
  alt: string;
  client: string;
  category: string;
}

// Single source of truth for portfolio images — used in the About page carousel only.
// All client work is included except items excluded for a specific reason:
// Client_work_3 (real-person/likeness concern) and Client_work_4 (excluded per client request).
// Images vary in aspect ratio — the carousel uses letterboxing (object-contain), not
// cropping, so every image displays in full regardless of its original dimensions.
export const portfolioItems: PortfolioItem[] = [
  { image: "/images/portfolio/nail-lounge-eyebrow-waxing.webp", alt: "Passion Hub social media campaign for The Nail Lounge, a Myanmar beauty brand — eyebrow waxing service promotion", client: "The Nail Lounge", category: "Beauty" },
  { image: "/images/portfolio/kong-kong-hotel-stay.webp", alt: "Passion Hub campaign for Kong Kong Hotel, a Magway hospitality brand — stay and relax promotion", client: "Kong Kong Hotel", category: "Hospitality" },
  { image: "/images/portfolio/burma-food-house-caramel.webp", alt: "Passion Hub campaign for The Burma Food House — cream caramel dessert promotion", client: "The Burma Food House", category: "F&B" },
  { image: "/images/portfolio/april-theory-heal.webp", alt: "Passion Hub brand campaign for April Theory, a Myanmar yoga and wellness studio", client: "April Theory", category: "Wellness" },
  { image: "/images/portfolio/rentpro-thailand.webp", alt: "Passion Hub campaign for RentPro Thailand — condo rental service promotion", client: "RentPro Thailand", category: "Real Estate" },
  { image: "/images/portfolio/thounsay-snacks-1.webp", alt: "Passion Hub product promotion for Thoun Say, a Myanmar snack brand", client: "Thoun Say", category: "F&B" },
  { image: "/images/portfolio/nextgenlanded-realestate.webp", alt: "Passion Hub campaign for NextGenLanded Real Estate — condo project highlight", client: "NextGenLanded", category: "Real Estate" },
  { image: "/images/portfolio/cue-master-venue.webp", alt: "Passion Hub event promotion for Cue Master, a Myanmar billiards club", client: "Cue Master", category: "Sports & Leisure" },
  { image: "/images/portfolio/kong-kong-hotel-travel.webp", alt: "Passion Hub travel campaign for Kong Kong Hotel, Magway", client: "Kong Kong Hotel", category: "Hospitality" },
  { image: "/images/portfolio/thounsay-snacks-2.webp", alt: "Passion Hub delivery campaign for Thoun Say snack brand", client: "Thoun Say", category: "F&B" },
  { image: "/images/portfolio/thounsay-snacks-3.webp", alt: "Passion Hub late-night delivery campaign for Thoun Say snack brand", client: "Thoun Say", category: "F&B" },
  { image: "/images/portfolio/april-theory-stress.webp", alt: "Passion Hub stress-relief yoga campaign for April Theory", client: "April Theory", category: "Wellness" },
];

export interface Testimonial {
  clientName: string;
  position: string;
  company: string;
  quote: string;
  avatar?: string;
}

// Empty until real client testimonials are provided — we don't fabricate these.
// Home/About sections check this array and simply don't render if empty.
export const testimonials: Testimonial[] = [];

export const insightCategories = ["All", "Marketing", "Branding", "Social Media", "Content", "Digital & AI"];
