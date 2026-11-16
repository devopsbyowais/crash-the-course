// All course content lives in this file so it stays easy to update.
//
// Per course:
//   availabilityStatus - 'active' (accepting students), 'opening_soon'
//                        (enrollment opens soon) or 'coming_soon' (still in
//                        the pipeline). The default for a new course is
//                        'opening_soon'.
//   whatsappGroupLink  - the course's own WhatsApp group invitation link.
//                        Leave it as an empty string until the real invite
//                        URL is available. No fake links are generated.
//
// Active courses show a "Join Now" button that opens their WhatsApp group.
// Courses without a link fall back to a "Contact for Enrollment" button, and
// courses marked 'opening_soon' or 'coming_soon' cannot be joined at all.
//
// Optional fields: 'lessons', 'rating' and 'price' may be null while a course
// is being prepared. Missing values are hidden from the interface instead of
// being replaced with invented numbers (the price then reads
// "Contact for pricing"). 'originalPrice' with 'priceDiscount' shows a
// struck-through original price next to a discount badge, and 'priceCurrency'
// sets the currency used for the price (PKR shows grouped amounts, the
// default is dollars). 'closingStatement' is optional and, when present,
// is shown as a highlighted closing line in the course modal. 'summary',
// 'closingHeading', 'closingText' and 'enrollmentNote' are optional too and
// simply add a lead line, a closing block or a custom enrollment note.
// 'availabilityLabel' overrides the visible badge text without changing the
// course's availabilityStatus (e.g. an active course shown as
// "Slots Available").
//
// 'enrollmentCourse' marks a course as open for registration and holds the
// exact course name that is sent to Google Sheets (it must match the name the
// Apps Script uses to pick the right spreadsheet).
//
// 'mock' marks an informational course that is not open for registration yet.
// Mock courses are listed after the enrollment courses and never open the
// registration form.

export const AVAILABILITY = {
  ACTIVE: 'active',
  OPENING_SOON: 'opening_soon',
  COMING_SOON: 'coming_soon',
};

export const availabilityLabels = {
  [AVAILABILITY.ACTIVE]: 'Active',
  [AVAILABILITY.OPENING_SOON]: 'Enrollment Opening Soon',
  [AVAILABILITY.COMING_SOON]: 'Coming Soon',
};

// Visual tones used by the status badges and their buttons.
export const availabilityTones = {
  [AVAILABILITY.ACTIVE]: 'active',
  [AVAILABILITY.OPENING_SOON]: 'opening-soon',
  [AVAILABILITY.COMING_SOON]: 'coming-soon',
};

export function getAvailabilityTone(course) {
  return availabilityTones[course?.availabilityStatus] || availabilityTones[AVAILABILITY.OPENING_SOON];
}

export function isCourseActive(course) {
  return course?.availabilityStatus === AVAILABILITY.ACTIVE;
}

export function isCourseComingSoon(course) {
  return course?.availabilityStatus === AVAILABILITY.COMING_SOON;
}

export function getAvailabilityLabel(course) {
  // A course may override the visible badge text (for example "Slots
  // Available") while keeping its internal status untouched.
  if (course?.availabilityLabel) return course.availabilityLabel;

  return availabilityLabels[course?.availabilityStatus] || availabilityLabels[AVAILABILITY.OPENING_SOON];
}

export const courses = [
  {
    id: 'shopify-local-international',
    title: 'Shopify Local & International – Basic To Advanced Course',
    shortDescription:
      'Learn Basic to Advanced E-commerce skills, and start your online business globally.',
    description:
      '🚀 TURN YOUR IDEAS INTO A SUCCESSFUL ONLINE BUSINESS WITH SHOPIFY!\n\nReady to enter the world of E-commerce? Take your first step towards becoming a confident online entrepreneur with our Shopify Local & International Basic to Advanced Course!\n\nMaster the art of building professional Shopify stores, discovering winning products, finding trusted suppliers, managing orders, and creating effective sales strategies. From launching your first local store to exploring international markets, you\'ll gain practical, industry-focused knowledge to build and grow your E-commerce business.\n\n🔥 Learn. Launch. Market. Scale. Your E-commerce Journey Starts Here!',
    summary:
      'Learn Basic to Advanced E-commerce skills, and start your online business globally.',
    category: 'E-Commerce & Shopify',
    categoryShort: 'E-Commerce & Shopify',
    level: 'Beginner to Advanced',
    duration: '16 Hours',
    lessons: 8,
    rating: 4.8,
    price: 10000,
    originalPrice: 20000,
    priceDiscount: '50% OFF',
    priceCurrency: 'PKR',
    whatsappGroupLink: '',
    availabilityStatus: 'active',
    availabilityLabel: 'Slots Available',
    enrollmentCourse: 'Shopify Local & International',
    art: 'shopify',
    featured: false,
    closingHeading: 'Your Transformation Starts Here!',
    closingText:
      'Whether you\'re a complete beginner or looking to advance your E-commerce skills, this course provides a step-by-step learning journey to help you build, launch, manage, and scale your own online business.',
    closingStatement:
      'Learn. Launch. Market. Scale. Your E-commerce Journey Starts Here!',
    topics: [
      'Shopify Store Creation & Professional Designing',
      'Complete Store Management',
      'Winning Product Hunting & Market Research',
      'Product Sourcing & Supplier Management',
      'Local Shopify Business Strategies',
      'International Shopify & Dropshipping',
      'Meta (Facebook & Instagram) Marketing',
      'TikTok Marketing & Advertising',
      'Google Ads & Customer Acquisition',
    ],
  },
  {
    id: 'saas-entrepreneurship',
    title: 'SaaS Entrepreneurship – Turn Free Software Into Big Opportunities!',
    shortDescription:
      'Turn free, open-source software from GitHub into digital products, online services, and real income opportunities.',
    description:
      'Think you need thousands of dollars to enter the software business? Think again! Discover how ordinary software engineers and beginners can use free, open-source software from GitHub to create valuable digital products, offer online services, and build new income opportunities.\n\nLearn how SaaS businesses work, how free tools can help you get started, how software products make money, and how individuals can turn technical skills into opportunities in the global market.',
    category: 'SaaS Entrepreneurship',
    categoryShort: 'SaaS Entrepreneurship',
    level: 'Beginner',
    duration: '16 Hours',
    lessons: null,
    rating: null,
    price: null,
    whatsappGroupLink: '',
    availabilityStatus: 'active',
    availabilityLabel: 'Slots Available',
    enrollmentCourse: 'SaaS Entrepreneurship',
    art: 'saas',
    featured: false,
    closingStatement:
      'No huge investment. No expensive software. Just skills, smart ideas, and endless opportunities!',
    topics: [
      'How SaaS businesses work and make money.',
      'Finding free and open-source software on GitHub.',
      'Turning existing software into useful business solutions.',
      'Exploring software licensing and commercial use.',
      'Finding clients and selling software services.',
      'Understanding subscriptions and recurring income.',
      'Exploring ways to earn in the international market.',
    ],
  },
  {
    id: 'full-stack-web-development',
    title: 'Full-Stack Web Development Bootcamp',
    shortDescription:
      'Build fast, responsive web apps from polished interfaces to production-ready APIs.',
    description:
      'Go from the fundamentals of HTML, CSS, and JavaScript to building complete applications with React and Node.js. Learn by shipping real interfaces, connecting APIs, and deploying projects that belong in your portfolio.',
    category: 'Programming & Development',
    categoryShort: 'Programming',
    level: 'Beginner',
    duration: '42 hours',
    lessons: 128,
    rating: 4.9,
    price: 89.99,
    whatsappGroupLink: '',
    availabilityStatus: 'opening_soon',
    art: 'web',
    featured: true,
    topics: ['Modern JavaScript and React', 'Node.js APIs and databases', 'Deployment and performance'],
  },
  {
    id: 'ethical-hacking-essentials',
    title: 'Ethical Hacking Essentials',
    shortDescription:
      'Think like a security professional and learn to find, assess, and fix real vulnerabilities.',
    description:
      'Develop a practical security mindset through guided labs covering reconnaissance, network scanning, web application testing, and responsible disclosure. Build the foundation you need to keep systems and users safer.',
    category: 'Cybersecurity',
    categoryShort: 'Cybersecurity',
    level: 'Intermediate',
    duration: '28 hours',
    lessons: 96,
    rating: 4.8,
    price: 74.99,
    whatsappGroupLink: '',
    availabilityStatus: 'opening_soon',
    art: 'cyber',
    featured: true,
    topics: ['Network and system reconnaissance', 'Web application security testing', 'Reporting and responsible disclosure'],
  },
  {
    id: 'ai-machine-learning-foundations',
    title: 'AI & Machine Learning Foundations',
    shortDescription:
      'Understand how modern AI works and build your first intelligent models with Python.',
    description:
      'Learn the ideas behind machine learning through clear explanations and hands-on notebooks. Explore data preparation, model training, evaluation, and the responsible use of AI as you build practical projects from the ground up.',
    category: 'Artificial Intelligence & Data Science',
    categoryShort: 'AI & Data Science',
    level: 'Beginner',
    duration: '36 hours',
    lessons: 112,
    rating: 4.9,
    price: 'Free',
    whatsappGroupLink: '',
    availabilityStatus: 'opening_soon',
    art: 'ai',
    featured: true,
    topics: ['Python for machine learning', 'Training and evaluating models', 'Responsible AI foundations'],
  },
  {
    id: 'digital-marketing-growth-playbook',
    title: 'Digital Marketing Growth Playbook',
    shortDescription:
      'Create campaigns that connect with real people and turn attention into measurable growth.',
    description:
      'Build a complete digital marketing toolkit spanning positioning, content, social, email, and paid acquisition. Learn how to plan campaigns, read the numbers, and improve results without relying on guesswork.',
    category: 'Digital Marketing',
    categoryShort: 'Digital Marketing',
    level: 'Intermediate',
    duration: '18 hours',
    lessons: 64,
    rating: 4.7,
    price: 59.99,
    whatsappGroupLink: '',
    availabilityStatus: 'opening_soon',
    art: 'marketing',
    featured: true,
    topics: ['Audience research and positioning', 'Content and channel strategy', 'Campaign measurement'],
  },
  {
    id: 'ui-ux-design-fundamentals',
    title: 'UI/UX Design Fundamentals',
    shortDescription:
      'Design clear, human-centered digital products from first sketch to clickable prototype.',
    description:
      'Learn the design process behind useful digital products. Practice research, information architecture, wireframing, visual design, and prototyping while building a project you can present with confidence.',
    category: 'Design & Creativity',
    categoryShort: 'Design',
    level: 'Beginner',
    duration: '24 hours',
    lessons: 82,
    rating: 4.8,
    price: 69.99,
    whatsappGroupLink: '',
    availabilityStatus: 'opening_soon',
    art: 'design',
    featured: false,
    topics: ['User research and journey mapping', 'Wireframes and interface systems', 'Prototyping and usability testing'],
  },
  {
    id: 'javascript-essentials',
    title: 'JavaScript Essentials: Zero to Fluent',
    shortDescription:
      'Master the language of the web with clear explanations and practical coding challenges.',
    description:
      'Build a strong JavaScript foundation through focused lessons and small projects. Practice variables, functions, arrays, DOM interaction, and modern syntax until the fundamentals feel natural.',
    category: 'Programming & Development',
    categoryShort: 'Programming',
    level: 'Beginner',
    duration: '20 hours',
    lessons: 68,
    rating: 4.8,
    price: 44.99,
    whatsappGroupLink: '',
    availabilityStatus: 'opening_soon',
    art: 'web',
    featured: false,
    topics: ['Core JavaScript syntax', 'DOM interaction and events', 'Practical coding challenges'],
  },
  {
    id: 'startup-fundamentals',
    title: 'Startup Fundamentals: Idea to Launch',
    shortDescription:
      'Turn an early idea into a validated offer with a clear path to your first customers.',
    description:
      'Move from assumption to evidence using practical frameworks for customer discovery, positioning, validation, and launch. Build the confidence to test your idea in the real world before investing heavily in it.',
    category: 'Business & Entrepreneurship',
    categoryShort: 'Business',
    level: 'Beginner',
    duration: '16 hours',
    lessons: 58,
    rating: 4.7,
    price: 49.99,
    whatsappGroupLink: '',
    availabilityStatus: 'coming_soon',
    art: 'business',
    featured: false,
    topics: ['Customer discovery interviews', 'Value proposition design', 'Validation and launch planning'],
  },
  {
    id: 'python-data-analysis',
    title: 'Python for Data Analysis',
    shortDescription:
      'Clean, explore, and communicate data with Python, pandas, and clear visual stories.',
    description:
      'Build a practical data workflow from raw files to useful insight. Learn Python fundamentals, data cleaning with pandas, exploratory analysis, and visualization techniques that make your findings easy to understand.',
    category: 'Artificial Intelligence & Data Science',
    categoryShort: 'AI & Data Science',
    level: 'Beginner',
    duration: '22 hours',
    lessons: 74,
    rating: 4.8,
    price: 64.99,
    whatsappGroupLink: '',
    availabilityStatus: 'coming_soon',
    art: 'data',
    featured: false,
    topics: ['Python and pandas essentials', 'Data cleaning and exploration', 'Visualization and insight storytelling'],
  },
  {
    id: 'brand-identity-design-lab',
    title: 'Brand Identity Design Lab',
    shortDescription:
      'Create distinctive brand systems with thoughtful strategy, typography, and visual language.',
    description:
      'Go beyond a logo and build a cohesive brand identity. Work through positioning, moodboards, type and color systems, and presentation while developing a complete identity project from concept to delivery.',
    category: 'Design & Creativity',
    categoryShort: 'Design',
    level: 'Intermediate',
    duration: '14 hours',
    lessons: 46,
    rating: 4.8,
    price: 54.99,
    whatsappGroupLink: '',
    availabilityStatus: 'coming_soon',
    art: 'brand',
    featured: false,
    topics: ['Brand strategy and positioning', 'Visual identity systems', 'Presenting a complete brand kit'],
  },
  {
    id: 'cloud-security-foundations',
    title: 'Cloud Security Foundations',
    shortDescription:
      'Secure cloud environments with practical identity, access, and monitoring fundamentals.',
    description:
      'Understand the shared responsibility model and the habits that keep cloud systems safer. Explore identity and access controls, secure configuration, logging, and incident response basics.',
    category: 'Cybersecurity',
    categoryShort: 'Cybersecurity',
    level: 'Beginner',
    duration: '18 hours',
    lessons: 54,
    rating: 4.7,
    price: 64.99,
    whatsappGroupLink: '',
    availabilityStatus: 'coming_soon',
    art: 'cyber',
    featured: false,
    topics: ['Cloud security fundamentals', 'Identity and access controls', 'Monitoring and response basics'],
  },
  {
    id: 'email-and-social-growth',
    title: 'Email & Social Growth Marketing',
    shortDescription:
      'Build a repeatable content system that grows an engaged audience and drives action.',
    description:
      'Turn scattered posting into a focused growth system. Plan content, write high-performing emails, build social campaigns, and measure what is actually moving your audience to act.',
    category: 'Digital Marketing',
    categoryShort: 'Digital Marketing',
    level: 'Intermediate',
    duration: '12 hours',
    lessons: 38,
    rating: 4.6,
    price: 39.99,
    whatsappGroupLink: '',
    availabilityStatus: 'coming_soon',
    art: 'marketing',
    featured: false,
    topics: ['Audience-first content planning', 'Email campaigns that convert', 'Testing and measuring growth'],
  },
  {
    id: 'lean-startup-launchpad',
    title: 'Lean Startup Launchpad',
    shortDescription:
      'Test, refine, and launch a lean business idea without wasting time or resources.',
    description:
      'Use a lean approach to move from concept to launch with confidence. Build experiments, gather useful feedback, refine your offer, and create a practical plan for your first customers.',
    category: 'Business & Entrepreneurship',
    categoryShort: 'Business',
    level: 'Intermediate',
    duration: '20 hours',
    lessons: 60,
    rating: 4.7,
    price: 57.99,
    whatsappGroupLink: '',
    availabilityStatus: 'coming_soon',
    art: 'business',
    featured: false,
    topics: ['Rapid idea validation', 'Lean experiments and feedback', 'Launch and first-customer planning'],
  },
  {
    id: 'ai-automation-for-business',
    title: 'AI Automation for Business',
    shortDescription:
      'Learn how to automate business operations using AI tools, workflows, and intelligent automation systems.',
    description:
      'Learn how to automate business operations using AI tools, workflows, and intelligent automation systems.',
    category: 'Artificial Intelligence & Data Science',
    categoryShort: 'AI & Automation',
    level: 'Beginner to Intermediate',
    duration: '16 Hours',
    lessons: null,
    rating: null,
    price: null,
    whatsappGroupLink: '',
    availabilityStatus: 'opening_soon',
    art: 'ai',
    featured: false,
    mock: true,
    topics: [],
  },
  {
    id: 'digital-marketing-growth',
    title: 'Digital Marketing & Growth',
    shortDescription:
      'Learn digital marketing fundamentals, social media strategies, content marketing, and techniques for growing online businesses.',
    description:
      'Learn digital marketing fundamentals, social media strategies, content marketing, and techniques for growing online businesses.',
    category: 'Digital Marketing',
    categoryShort: 'Digital Marketing',
    level: 'Beginner',
    duration: '12 Hours',
    lessons: null,
    rating: null,
    price: null,
    whatsappGroupLink: '',
    availabilityStatus: 'opening_soon',
    art: 'marketing',
    featured: false,
    mock: true,
    topics: [],
  },
  {
    id: 'freelancing-client-acquisition',
    title: 'Freelancing & Client Acquisition',
    shortDescription:
      'Learn how to build a freelancing profile, find international clients, create proposals, and develop long-term client relationships.',
    description:
      'Learn how to build a freelancing profile, find international clients, create proposals, and develop long-term client relationships.',
    category: 'Business & Entrepreneurship',
    categoryShort: 'Freelancing',
    level: 'Beginner',
    duration: '14 Hours',
    lessons: null,
    rating: null,
    price: null,
    whatsappGroupLink: '',
    availabilityStatus: 'opening_soon',
    art: 'business',
    featured: false,
    mock: true,
    topics: [],
  },
  {
    id: 'full-stack-web-development-mock',
    title: 'Full Stack Web Development',
    shortDescription:
      'Learn frontend and backend development, build dynamic websites, and understand modern web application development.',
    description:
      'Learn frontend and backend development, build dynamic websites, and understand modern web application development.',
    category: 'Programming & Development',
    categoryShort: 'Programming',
    level: 'Beginner to Advanced',
    duration: '24 Hours',
    lessons: null,
    rating: null,
    price: null,
    whatsappGroupLink: '',
    availabilityStatus: 'coming_soon',
    art: 'web',
    featured: false,
    mock: true,
    topics: [],
  },
  {
    id: 'python-programming-automation',
    title: 'Python Programming & Automation',
    shortDescription:
      'Learn Python programming fundamentals, scripting, automation, and practical programming techniques.',
    description:
      'Learn Python programming fundamentals, scripting, automation, and practical programming techniques.',
    category: 'Artificial Intelligence & Data Science',
    categoryShort: 'Python',
    level: 'Beginner',
    duration: '18 Hours',
    lessons: null,
    rating: null,
    price: null,
    whatsappGroupLink: '',
    availabilityStatus: 'coming_soon',
    art: 'data',
    featured: false,
    mock: true,
    topics: [],
  },
  {
    id: 'ui-ux-design-fundamentals-mock',
    title: 'UI/UX Design Fundamentals',
    shortDescription:
      'Learn user interface design, user experience principles, wireframing, prototyping, and modern design workflows.',
    description:
      'Learn user interface design, user experience principles, wireframing, prototyping, and modern design workflows.',
    category: 'Design & Creativity',
    categoryShort: 'Design',
    level: 'Beginner',
    duration: '14 Hours',
    lessons: null,
    rating: null,
    price: null,
    whatsappGroupLink: '',
    availabilityStatus: 'coming_soon',
    art: 'design',
    featured: false,
    mock: true,
    topics: [],
  },
];

export const featuredCourses = courses.filter((course) => course.featured);

// Courses that can be registered for. They are the ones offered in the
// registration form and are always listed first.
export const enrollmentCourses = courses.filter((course) => course.enrollmentCourse);

// Informational courses that are not open for registration yet. They are
// listed after the enrollment courses and never open the registration form.
export const mockCourses = courses.filter((course) => course.mock);

// The course listing: the two enrollment courses first, then the upcoming ones.
export const listedCourses = [...enrollmentCourses, ...mockCourses];

// Options for the "Select Course" field, in the order they are offered.
export const enrollmentCourseOptions = [
  'SaaS Entrepreneurship',
  'Shopify Local & International',
];

export const activeCourses = courses.filter((course) => isCourseActive(course));

export const openingSoonCourses = courses.filter(
  (course) => course.availabilityStatus === AVAILABILITY.OPENING_SOON,
);

export const comingSoonCourses = courses.filter((course) => isCourseComingSoon(course));
