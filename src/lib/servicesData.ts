export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string;
  whatsIncluded: { name: string; desc: string }[];
  howItWorks: { title: string; desc: string }[];
  whoFor: string;
  faqs: ServiceFAQ[];
  ctaHeading: string;
  ctaLabel: string;
  ctaHref: string;
}

export const servicesData: ServiceDetail[] = [
  {
    slug: "strategy-development",
    metaTitle: "Digital & Marketing Strategy Services in Myanmar | Passion Hub",
    metaDescription: "Strategic planning for brands that need direction before execution — digital strategy, content strategy, campaign strategy, and marketing planning, built for the Myanmar market.",
    eyebrow: "Strategy Development",
    h1: "Strategy That Anchors Every Campaign.",
    intro: "Most marketing that underperforms wasn't a creative problem — it was a direction problem. Before we design a single post or write a line of ad copy, we build the thinking that makes everything after it work harder: who you're for, what you're saying, where you're saying it, and why. This is the foundation every other Passion Hub service builds on.",
    whatsIncluded: [
      { name: "Digital Strategy", desc: "A clear roadmap for where your brand shows up online and why, aligned to actual business goals rather than whatever platform is trending this quarter. Covers channel selection, positioning, and a realistic view of what's achievable with your budget and timeline." },
      { name: "Content Strategy", desc: "What to say, where to say it, and how often — built around your audience's real behavior, not a generic content calendar template. Includes pillar topics, tone of voice guidelines, and a content mix suited to your industry." },
      { name: "Campaign Strategy", desc: "Structured plans for product launches, seasonal pushes, and always-on brand building, each with clear objectives, timelines, and success metrics defined upfront." },
      { name: "Marketing Planning", desc: "Budgets, timelines, and channel mix mapped out so every dollar has a job, not spread thin across channels that don't move the needle for your specific business." },
    ],
    howItWorks: [
      { title: "Discovery", desc: "We learn your brand, audience, competitors, and goals through a structured briefing session." },
      { title: "Research & Audit", desc: "We review your current marketing presence (or lack of one) and the competitive landscape in your category." },
      { title: "Strategy Roadmap", desc: "You receive a written strategy document: positioning, channel priorities, content direction, and a realistic execution timeline." },
      { title: "Handoff to Execution", desc: "The strategy becomes the brief for our Social Media Management, Performance Marketing, or Website Development teams — or your own in-house team, if you prefer to execute it yourselves." },
    ],
    whoFor: "Brands that are launching, rebranding, entering a new market, or scaling past the point where ad-hoc posting is working. Also a fit for businesses that already have an internal marketing team but need an outside strategic review.",
    faqs: [
      { question: "Do I need ongoing management to get a strategy built?", answer: "No — strategy is available as a standalone engagement. Many clients bring the roadmap to their own internal team to execute." },
      { question: "How long does a strategy engagement take?", answer: "Typically 1–2 weeks from kickoff to final roadmap for a standard engagement, extending to 3–4 weeks for a full rebrand or multi-market strategy that needs deeper research." },
      { question: "What do we actually receive at the end?", answer: "A written strategy document covering positioning, channel priorities, content direction, and a realistic execution timeline — not just a slide deck." },
    ],
    ctaHeading: "Ready to talk about strategy development?",
    ctaLabel: "Talk to a Strategist",
    ctaHref: "/contact",
  },
  {
    slug: "social-media-management",
    metaTitle: "Social Media Management Services in Myanmar | Standard, Advanced & Premium",
    metaDescription: "Ongoing social media management for Myanmar brands — content creation, visual design, scheduling, and performance reporting across three flexible packages.",
    eyebrow: "Social Media Management",
    h1: "Social Media That Stays Consistent, On-Brand, and Actually Managed.",
    intro: "Posting occasionally isn't a strategy — it's a habit that fades within a month. Our Social Media Management service keeps your channels consistently active, visually on-brand, and backed by regular performance insight, across three tiers built to match where your brand is right now.",
    whatsIncluded: [
      { name: "Content Creation", desc: "Captions and copy written for your brand voice, not generic filler, scaled to your package's monthly post count." },
      { name: "Visual Design", desc: "On-brand graphics and creative for every post, matched to your monthly volume." },
      { name: "Posting & Scheduling", desc: "Consistent publishing on schedule, so your channels never go quiet." },
      { name: "Media Buying", desc: "Optional paid boost management on top of organic content, at a service fee that drops as you move up tiers (see Packages)." },
      { name: "Performance Insights & Recommendations", desc: "Regular reporting on what's working, with recommendations for what to adjust." },
    ],
    howItWorks: [
      { title: "Onboarding & Channel Audit", desc: "We review your existing channels (or set them up from scratch) and confirm brand guidelines." },
      { title: "Content Calendar", desc: "A monthly plan built around your package's post volume and any key dates for your business." },
      { title: "Content Production", desc: "Copy and visuals produced on schedule, reviewed against brand voice before anything goes live." },
      { title: "Posting, Monitoring & Reporting", desc: "Content goes live on schedule; performance is tracked and reported regularly." },
    ],
    whoFor: "Brands that need their social presence to run reliably without hiring a full in-house social team — from businesses just establishing a presence (Standard) to brands ready to scale output and paid reach together (Advanced/Premium).",
    faqs: [
      { question: "How many posts do I get per month?", answer: "4 on Standard, 8 on Advanced, 15 on Premium — full breakdown on the Packages page." },
      { question: "Can I switch tiers later?", answer: "Yes. Upgrades take effect from your next billing cycle — finish out the current month on your existing tier, then move up. Downgrades take effect at the end of your current contract term." },
      { question: "Do you handle ad spend, or just content?", answer: "Media buying is available as an add-on across all tiers, with the service fee decreasing at higher tiers." },
    ],
    ctaHeading: "Ready to talk about social media management?",
    ctaLabel: "View Packages",
    ctaHref: "/packages",
  },
  {
    slug: "performance-marketing",
    metaTitle: "Performance Marketing & Paid Advertising Services in Myanmar | Passion Hub",
    metaDescription: "Paid campaigns built for measurable return — social media advertising, paid search (SEM), and display & video advertising for Myanmar brands.",
    eyebrow: "Performance Marketing",
    h1: "Paid Campaigns Built for Return, Not Just Reach.",
    intro: "Reach without conversion is a vanity metric. Our Performance Marketing service builds and manages paid campaigns tied to actual business outcomes — leads, sales, sign-ups — with clear reporting on what your ad spend is actually producing.",
    whatsIncluded: [
      { name: "Social Media Advertising", desc: "Targeted Facebook, Instagram, TikTok, and LinkedIn campaigns built around your audience and specific business goal, not just \"boost this post.\"" },
      { name: "Paid Search (SEM)", desc: "Google Ads campaigns that put you in front of customers actively searching for what you offer, including Performance Max (PMax), Demand Gen, and App Campaigns alongside traditional search, built for conversion rather than just clicks." },
      { name: "Display & Video Advertising", desc: "Visual campaigns for awareness and retargeting, reaching people who've already shown interest in your brand." },
    ],
    howItWorks: [
      { title: "Audience & Goal Setting", desc: "We define who you're targeting and what a successful outcome looks like before spending a single dollar." },
      { title: "Campaign Build", desc: "Ad creative, targeting, and budget structure built around that goal." },
      { title: "Launch & Monitor", desc: "Campaigns go live with active daily/weekly monitoring, not a \"set and forget\" approach." },
      { title: "Optimize & Report", desc: "Ongoing adjustment based on real performance data, with regular reporting back to you." },
    ],
    whoFor: "Brands with a clear conversion goal — sales, leads, app installs, bookings — who want paid media managed by a team that treats ad spend as an investment to optimize, not a task to check off.",
    faqs: [
      { question: "What's the minimum ad budget to get started?", answer: "$500 per month." },
      { question: "Which platforms do you run ads on?", answer: "Facebook, Instagram, TikTok, and Google (Search, Display, and Video)." },
      { question: "How is performance measured?", answer: "Against the specific goal set at campaign start — cost per lead, cost per sale, or another metric relevant to your business, reported on a regular cadence." },
    ],
    ctaLabel: "Talk About Your Ad Goals",
    ctaHeading: "Ready to talk about performance marketing?",
    ctaHref: "/contact",
  },
  {
    slug: "website-development",
    metaTitle: "Website Development Services in Myanmar | Business, Portfolio & App Development",
    metaDescription: "Websites and apps that reflect your brand and actually convert — portfolio sites, business sites, blog/news sites, and custom app development for Myanmar brands.",
    eyebrow: "Website Development",
    h1: "Sites and Apps That Reflect Your Brand and Actually Convert.",
    intro: "A website that looks good but doesn't load fast, rank, or convert isn't doing its job. We build sites and apps that are fast, easy for you to update yourself, and structured from day one for search visibility — not just launch-day good looks.",
    whatsIncluded: [
      { name: "Portfolio Websites", desc: "Clean, professional sites to showcase your brand, work, or services — ideal for freelancers, consultants, and service businesses." },
      { name: "Business Websites", desc: "Full business sites built to inform, convert, and rank, with clear calls to action throughout." },
      { name: "Blog & News Websites", desc: "Content-first sites built for regular publishing and long-term SEO growth." },
      { name: "App Development", desc: "Custom web and mobile applications for brands that need functionality beyond a standard website." },
    ],
    howItWorks: [
      { title: "Discovery & Wireframe", desc: "We map out site structure and page flow before any visual design begins." },
      { title: "Design", desc: "On-brand visual design for every page, built mobile-first." },
      { title: "Development", desc: "Built for speed and search performance from the ground up." },
      { title: "Launch & Handoff", desc: "You receive a live, fast, self-editable website, with training on how to update content yourself." },
    ],
    whoFor: "Brands that need a new website, a rebuild of an underperforming one, or a custom web/app tool — and want a site they can maintain themselves afterward without ongoing developer dependency.",
    faqs: [
      { question: "How long does a website take to build?", answer: "From 15 days to 3 months, depending on the complexity and type of website." },
      { question: "Will I be able to update content myself after launch?", answer: "Yes — every site is built with a content management layer so you can edit text, images, and blog posts without touching code." },
      { question: "Do you offer ongoing hosting, maintenance, management, and performance improvement?", answer: "Yes. Pricing depends on the scope of work and is confirmed after an initial discussion." },
    ],
    ctaLabel: "Start Your Website Project",
    ctaHeading: "Ready to talk about website development?",
    ctaHref: "/contact",
  },
  {
    slug: "seo-ai-search-optimization",
    metaTitle: "SEO & AI Search Optimization Services in Myanmar | Passion Hub",
    metaDescription: "Getting found on Google — and increasingly, on AI search tools. Technical SEO, on-page SEO, content optimization, local SEO, and AI search optimization for Myanmar brands.",
    eyebrow: "SEO & AI Search Optimization",
    h1: "Getting Found — On Google, and Increasingly, On AI Search.",
    intro: "Search behavior is splitting in two: people still Google things, but they're also asking ChatGPT, Gemini, and AI Overviews directly — and getting an answer without ever seeing a list of blue links. We optimize for both, so your brand shows up whichever way your customer is searching.",
    whatsIncluded: [
      { name: "Technical SEO", desc: "Site speed, structure, and crawlability fixes that give search engines no reason to skip your site." },
      { name: "On-Page SEO", desc: "Optimized titles, headings, content, and internal linking for the keywords that actually matter to your business." },
      { name: "Content Optimization", desc: "Refreshing and restructuring existing content to rank higher and convert better, rather than starting from scratch every time." },
      { name: "Local SEO", desc: "Getting found by customers searching for your business specifically in Myanmar — Google Business Profile, local citations, and location-relevant content." },
      { name: "AI Search Optimization", desc: "Structuring content so it's surfaced and cited by AI search tools like ChatGPT, Gemini, and AI Overviews." },
    ],
    howItWorks: [
      { title: "Audit", desc: "A full review of your current site's technical health, content, and search visibility (traditional and AI search)." },
      { title: "Strategy", desc: "A prioritized action plan based on what will move the needle fastest for your specific site and goals." },
      { title: "Implementation", desc: "Technical fixes, content updates, and structural changes made directly (or handed off as a clear to-do list, your choice)." },
      { title: "Monitoring & Reporting", desc: "Ongoing tracking of rankings, traffic, and — increasingly — visibility in AI-generated answers." },
    ],
    whoFor: "Any brand with a website that isn't showing up where customers are searching — whether that's Google rankings, local search, or the newer AI search tools people are starting to use instead.",
    faqs: [
      { question: "How long until we see SEO results?", answer: "SEO is a compounding effort — early technical fixes can show impact within weeks, but competitive keyword rankings typically build over several months." },
      { question: "What's the difference between regular SEO and AI search optimization?", answer: "Traditional SEO gets you ranked in Google's list of links; AI search optimization gets your content structured clearly enough that AI tools can extract and cite it directly in a generated answer. Both matter now — most sites are set up for the first and not the second." },
      { question: "Do you offer one-time audits or ongoing SEO?", answer: "Yes, both. A one-time audit is available as a standalone deliverable — a full report on technical, on-page, and content issues with prioritized recommendations. Ongoing SEO is available as a monthly engagement covering implementation, content optimization, and continued monitoring. Pricing for both depends on the scope of work and is confirmed after an initial site review." },
    ],
    ctaLabel: "Get an SEO Audit",
    ctaHeading: "Ready to talk about SEO & AI search optimization?",
    ctaHref: "/contact",
  },
];
