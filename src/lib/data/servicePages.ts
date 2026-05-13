export interface ServicePageFaq {
  question: string
  answer: string
}

export interface ServiceFeaturedWork {
  href: string
  imageSrc: string
  imageAlt: string
  eyebrow: string
  title: string
  summary: string
}

export interface ServicePageData {
  slug: string
  name: string
  navLabel: string
  seoTitle: string
  seoDescription: string
  heroLabel: string
  heroTitle: string
  heroIntro: string
  heroSummary: string
  primaryCta: string
  secondaryCta: string
  valuePoints: string[]
  idealFor: string[]
  deliverables: string[]
  processTitle: string
  processBody: string[]
  techStack: string[]
  faq: ServicePageFaq[]
  featuredWork?: ServiceFeaturedWork
}

export const servicePages: ServicePageData[] = [
  {
    slug: 'web-development',
    name: 'Web Development Services',
    navLabel: 'Web Development',
    seoTitle: 'Web Development Services — Fast, Scalable Business Websites and Web Apps',
    seoDescription:
      'Custom web development services for businesses that need a fast, reliable website or web application built to support growth, lead generation, and day-to-day operations.',
    heroLabel: '// Web development services',
    heroTitle: 'Web products that look sharp, load fast, and hold up under real use.',
    heroIntro:
      'We design and build business websites, dashboards, and web applications that are easy to manage and pleasant to use. The goal is not just a launch. The goal is a system your team can rely on when traffic grows, content changes, and business needs shift.',
    heroSummary:
      'Custom websites and web applications built for speed, clarity, and long-term maintainability.',
    primaryCta: 'Start a Web Project',
    secondaryCta: 'See All Services',
    valuePoints: [
      'Clear architecture from the start so the project does not become harder to maintain with every release.',
      'Fast, responsive interfaces that help visitors trust the business and move through the site without friction.',
      'Flexible content and integration layers so the site can evolve without a rebuild every few months.',
    ],
    idealFor: [
      'Service businesses that need a stronger website to convert inbound traffic into leads.',
      'Growing teams replacing a dated site or clumsy internal web tool.',
      'Founders who need a product-ready web application instead of a brochure page dressed up as one.',
    ],
    deliverables: [
      'Business websites and landing pages',
      'Custom web applications and dashboards',
      'CMS and admin experiences',
      'Third-party integrations and data workflows',
      'Performance, accessibility, and deployment setup',
    ],
    processTitle: 'We build around business goals first, then shape the technology around them.',
    processBody: [
      'Every project starts by clarifying what the site or application needs to do for the business. That usually means understanding the audience, the operational workflow, and the places where the current experience is losing time or trust.',
      'From there we define the right structure, choose a practical stack, and build in a way that keeps the codebase readable. Clean systems tend to stay useful longer, and that matters when you are investing in a real business asset.',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'CMS Integration', 'API Integration', 'Vercel'],
    faq: [
      {
        question: 'What kinds of web projects do you build?',
        answer:
          'We build marketing sites, business websites, custom dashboards, portals, and full web applications. The stack and scope depend on the problem, not on a fixed package.',
      },
      {
        question: 'Can you rebuild an existing site without disrupting the business?',
        answer:
          'Yes. We can phase a rebuild carefully so design, content, SEO, and operational dependencies are handled without a chaotic cutover.',
      },
      {
        question: 'Do you handle integrations as part of a web project?',
        answer:
          'Yes. Many web projects need forms, CRM connections, scheduling, payments, analytics, or internal tools. We treat those as part of the real system, not as an afterthought.',
      },
    ],
  },
  {
    slug: 'scalable-saas-architecture',
    name: 'Scalable SaaS Architecture Services',
    navLabel: 'Scalable SaaS Architecture',
    seoTitle: 'Scalable SaaS Architecture Services — Product Foundations for Serious Growth',
    seoDescription:
      'SaaS architecture services for founders and teams building software products that need strong foundations for user growth, roles, billing, operational clarity, and long-term maintainability.',
    heroLabel: '// Scalable SaaS architecture',
    heroTitle: 'SaaS products built with the structure they need before growth exposes every shortcut.',
    heroIntro:
      'When a SaaS product starts gaining traction, weak architecture turns into expensive drag very quickly. We help teams plan and build the application structure behind accounts, permissions, billing, reporting, and internal operations so the product remains manageable as usage grows.',
    heroSummary:
      'Architecture and product planning for SaaS platforms that need a cleaner path to scale.',
    primaryCta: 'Scope a SaaS Platform',
    secondaryCta: 'Explore Services',
    valuePoints: [
      'Clear account, permission, and data boundaries so the product does not become harder to manage with each new customer.',
      'Foundations for billing, dashboards, and internal tooling that support real product operations, not just a launch demo.',
      'Architecture decisions made early enough to avoid expensive rewrites once the product starts to grow.',
    ],
    idealFor: [
      'Founders building a serious first version of a SaaS product.',
      'Teams outgrowing a quick MVP and needing stronger application structure.',
      'Businesses adding account-based product experiences to an existing service or platform.',
    ],
    deliverables: [
      'SaaS product architecture and application planning',
      'Authentication, roles, and account structures',
      'Billing and subscription flow planning',
      'Admin tooling and operational dashboards',
      'Data model and integration planning for product growth',
    ],
    processTitle: 'The product has to work for users and for the team running it every day.',
    processBody: [
      'That means looking beyond the visible screens. Good SaaS architecture includes account rules, data ownership, support workflows, billing logic, and the operational edge cases that appear once customers start relying on the product.',
      'We design with that full picture in mind so the platform is easier to extend, support, and operate as the roadmap grows more ambitious.',
    ],
    techStack: ['Next.js', 'TypeScript', 'Postgres', 'Role-Based Access', 'Billing Systems', 'Product Dashboards'],
    faq: [
      {
        question: 'What does scalable SaaS architecture usually include?',
        answer:
          'It usually includes account structure, authentication, roles, billing flows, data modeling, admin tooling, reporting surfaces, and the integration decisions that keep the product manageable as usage grows.',
      },
      {
        question: 'Can you help improve a SaaS product that already exists?',
        answer:
          'Yes. We can work on a product that already has users and help untangle weak architecture, improve the internal structure, and make the next stage of growth less painful.',
      },
      {
        question: 'Do you help shape the product, not just build it?',
        answer:
          'Yes. The strongest SaaS work comes from clear product thinking, so we help define scope, workflow, and operational realities instead of treating implementation like a blind handoff.',
      },
    ],
    featuredWork: {
      href: '/work/chainblocks',
      imageSrc: '/work/chainblocks/cb-dash.webp',
      imageAlt: 'ChainBlocks dashboard preview showing cross-chain KPIs and analytics modules',
      eyebrow: '// Delivered work',
      title: 'ChainBlocks',
      summary:
        'A multi-chain analytics dashboard built with protected API access, caching, operational metrics, and product structure that supports future expansion.',
    },
  },
  {
    slug: 'ai-automation',
    name: 'AI Automation Services',
    navLabel: 'AI Automation',
    seoTitle: 'AI Automation Services — Practical Workflow Automation for Businesses',
    seoDescription:
      'AI automation services for businesses that want to reduce repetitive work, improve response speed, and connect existing tools with practical AI workflows.',
    heroLabel: '// AI automation services',
    heroTitle: 'Automation that saves time without creating a bigger mess behind the scenes.',
    heroIntro:
      'Most teams do not need an AI demo. They need less manual work, faster response times, and fewer repetitive tasks draining attention from the work that matters. We build AI-assisted workflows that plug into real operations, with clear inputs, clear outputs, and sensible controls.',
    heroSummary:
      'Practical AI workflow design for businesses that want useful automation, not novelty.',
    primaryCta: 'Plan an Automation Project',
    secondaryCta: 'View Services',
    valuePoints: [
      'AI features tied to measurable business tasks instead of vague experimentation.',
      'Workflow design that keeps human review where it matters and removes it where it wastes time.',
      'Integration with your existing systems so the automation fits operations instead of disrupting them.',
    ],
    idealFor: [
      'Teams handling repetitive inquiries, document processing, classification, or summarization work.',
      'Businesses that want to add AI capabilities to an existing product or internal tool.',
      'Operators who need automation to reduce workload without sacrificing oversight.',
    ],
    deliverables: [
      'Workflow automation and orchestration',
      'AI-assisted internal tools and dashboards',
      'LLM integration for support, search, and classification',
      'Prompt, evaluation, and fallback design',
      'Human review flows and operational safeguards',
    ],
    processTitle: 'The work starts with the process, not the model.',
    processBody: [
      'We look at where time is being wasted, where response quality breaks down, and where team members are repeating the same reasoning tasks over and over. That is usually where automation pays off.',
      'Then we design the flow around concrete business rules. That includes model selection, system prompts, routing, validation, and the places where a person should stay in the loop.',
    ],
    techStack: ['OpenAI', 'Workflow Automation', 'APIs', 'Vector Search', 'Internal Tools', 'Evaluation'],
    faq: [
      {
        question: 'What kinds of AI automation projects do you handle?',
        answer:
          'We build automations for support workflows, content operations, internal knowledge access, document handling, categorization, and product features that need structured AI assistance.',
      },
      {
        question: 'Do you replace people with automation?',
        answer:
          'The better framing is that we remove wasteful repetition. In many cases the right solution keeps people involved at review points and lets the system handle the heavy lifting around them.',
      },
      {
        question: 'Can AI automation work with the tools we already use?',
        answer:
          'Yes. Most useful automation projects depend on connecting existing systems such as CRMs, forms, support tools, spreadsheets, or internal databases.',
      },
    ],
  },
  {
    slug: 'shopify-development',
    name: 'Shopify Development Services',
    navLabel: 'Shopify Development',
    seoTitle: 'Shopify Development Services — Fast, Flexible Ecommerce for Growing Brands',
    seoDescription:
      'Shopify development services for businesses that need a faster storefront, cleaner buying experience, and better integration between ecommerce and operations.',
    heroLabel: '// Shopify development',
    heroTitle: 'Shopify stores built to sell clearly, load quickly, and stay manageable.',
    heroIntro:
      'A commerce site has to do more than look polished. It has to help shoppers move confidently, keep operations organized, and make growth easier instead of harder. We build Shopify experiences that balance conversion, performance, and maintainability.',
    heroSummary:
      'Shopify development for brands that need a stronger storefront and a smoother operational setup.',
    primaryCta: 'Start a Shopify Project',
    secondaryCta: 'See All Services',
    valuePoints: [
      'Cleaner storefront experiences that reduce friction in browsing, product discovery, and checkout.',
      'Theme and architecture choices that support updates without turning the store into a fragile patchwork.',
      'Operational integrations that keep inventory, fulfillment, and customer flows more reliable.',
    ],
    idealFor: [
      'Brands launching a new Shopify storefront.',
      'Existing stores that feel slow, cluttered, or difficult to update.',
      'Businesses that need custom storefront behavior or deeper system integrations.',
    ],
    deliverables: [
      'Shopify storefront builds and redesigns',
      'Theme customization and UX improvements',
      'Shopify integrations with ERP, CRM, or fulfillment tools',
      'Performance improvements and conversion-focused refinements',
      'Headless or advanced storefront planning where appropriate',
    ],
    processTitle: 'We treat ecommerce as both a buying experience and an operating system.',
    processBody: [
      'A good commerce build needs to support real customer behavior while also respecting the day-to-day needs of the team managing products, content, orders, and promotions.',
      'We shape the store around those realities. That means careful decisions about navigation, template structure, app usage, integrations, and what should stay simple instead of being over-engineered.',
    ],
    techStack: ['Shopify', 'Theme Customization', 'Headless Commerce', 'API Integration', 'Checkout Flows', 'Analytics'],
    faq: [
      {
        question: 'Do you only work on new Shopify stores?',
        answer:
          'No. We also improve existing stores, whether that means redesigning the experience, cleaning up theme logic, improving speed, or connecting the store to other business systems.',
      },
      {
        question: 'Can you help with Shopify performance and conversion issues?',
        answer:
          'Yes. We look at the storefront experience, content structure, and technical setup together because those issues usually affect each other.',
      },
      {
        question: 'When does headless Shopify make sense?',
        answer:
          'It makes sense when the storefront needs more flexibility than a standard theme setup can comfortably provide. It is not always the right answer, so we only recommend it when the complexity is justified.',
      },
    ],
  },
  {
    slug: 'api-integration',
    name: 'API Integration Services',
    navLabel: 'API Integration',
    seoTitle: 'API Integration Services — Connect Business Systems Cleanly and Reliably',
    seoDescription:
      'API integration services for businesses that need their websites, products, CRMs, ecommerce systems, and internal tools to share data reliably.',
    heroLabel: '// API integration services',
    heroTitle: 'Systems that talk to each other cleanly, so your team spends less time patching around them.',
    heroIntro:
      'A lot of business friction comes from tools that almost work together. Orders get copied by hand, form submissions disappear into inboxes, data drifts out of sync, and teams build routines around broken connections. We design and implement integrations that reduce that friction and make the stack behave more like one system.',
    heroSummary:
      'Reliable API integration work for teams that need cleaner data flow across their business tools.',
    primaryCta: 'Plan an Integration Project',
    secondaryCta: 'See All Services',
    valuePoints: [
      'Fewer manual workarounds across sales, support, operations, and reporting.',
      'More dependable data movement between the tools your business already depends on.',
      'Integration architecture that is easier to understand and maintain later.',
    ],
    idealFor: [
      'Businesses whose website, CRM, commerce, and internal tools are disconnected.',
      'Teams that rely on spreadsheets and manual copying to bridge system gaps.',
      'Products that need secure third-party integrations or custom API layers.',
    ],
    deliverables: [
      'Custom API integration planning and implementation',
      'CRM, ERP, ecommerce, and internal tool connections',
      'Webhook handling and event-driven workflows',
      'Custom middleware or proxy layers',
      'Monitoring and error-handling foundations',
    ],
    processTitle: 'Good integration work removes operational drag, not just technical errors.',
    processBody: [
      'We look at how data enters the business, where it moves next, and which parts of the flow are currently fragile or manual. That helps us design integrations around real business usage instead of a narrow technical checklist.',
      'Then we build the connection points carefully, with clear ownership, validation, and fallback behavior so the system is easier to trust day to day.',
    ],
    techStack: ['REST APIs', 'GraphQL', 'Webhooks', 'Middleware', 'CRM Integration', 'Operational Monitoring'],
    faq: [
      {
        question: 'What kinds of systems can you integrate?',
        answer:
          'We work across websites, CRMs, ecommerce platforms, dashboards, internal tools, scheduling systems, payment tools, and other third-party services that expose usable APIs or webhook flows.',
      },
      {
        question: 'Can you fix a brittle integration that already exists?',
        answer:
          'Yes. In many cases the right move is to simplify and stabilize an existing integration rather than replace everything around it.',
      },
      {
        question: 'Do you build custom APIs as well as connect existing ones?',
        answer:
          'Yes. Some projects need a clean internal API layer to make external and internal systems work together more reliably.',
      },
    ],
  },
]

export const servicePagesBySlug = Object.fromEntries(
  servicePages.map((service) => [service.slug, service])
) as Record<string, ServicePageData>
