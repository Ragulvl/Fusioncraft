// Centralized company data configuration
// This file will contain all the data that was previously hardcoded in components

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  avatar: string;
  content: string;
  rating: number;
  project: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface ContactInfo {
  icon: string;
  title: string;
  details: string;
  subDetails: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  email: string;
  phone: string;
  joinDate: string;
  status: string;
  projectsActive: number;
  projectsCompleted: number;
  skills: string[];
  avatar: string;
  experience: string;
}

export interface Client {
  id: string;
  name: string;
  contactPerson: string;
  email: string;
  phone: string;
  company: string;
  location: string;
  projects: number;
  totalValue: string;
  status: string;
  rating: number;
  joinDate: string;
  avatar: string;
}

export interface ProjectRecord {
  id: string;
  name: string;
  client: string;
  status: string;
  progress: number;
  startDate: string;
  deadline: string;
  budget: string;
  team: string;
}

export interface CompanyInfo {
  name: string;
  mission: string;
  vision: string;
  stats: {
    projects: number;
    clients: number;
    experience: number;
  };
  contact: {
    email: string;
    phone: string;
    address: string;
    workingHours: string;
  };
}

// FusionCrafts company data
export const companyData: CompanyInfo = {
  name: "FusionCrafts",
  mission: "At FusionCrafts, our mission is to fuse creativity with technology to deliver high-quality websites, software, and digital experiences. We are committed to innovation, precision, and customer satisfaction — building solutions that are not just functional, but smartly crafted to inspire growth and create lasting impact.",
  vision: "To become a global leader in crafting intelligent, future-ready digital solutions that empower businesses to grow, connect, and innovate seamlessly.",
  stats: {
    projects: 2,
    clients: 2,
    experience: 1
  },
  contact: {
    email: "contact.fusioncraft@gmail.com",
    phone: "+91 93635 99577",
    address: "No. 58, Jayaprakash Street, Palladam, Tiruppur, Tamil Nadu, India",
    workingHours: "8 AM – 10 PM (All Days)"
  }
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Dinez",
    category: "Mobile Application",
    description: "Smart canteen food ordering platform where users can browse menus, place orders, and track deliveries.",
    fullDescription: "Dinez is a comprehensive mobile application developed for canteen food ordering. This joint project by FusionCrafts and Silo features a user-friendly interface for browsing menus, placing orders, and tracking deliveries in real-time. The app includes admin dashboard functionality for managing orders, inventory, and customer relationships. Built with modern technologies to ensure scalability and performance.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop",
    technologies: ["React Native", "Node.js", "MongoDB", "Firebase"],
    liveUrl: "https://kit-dinez.onrender.com/",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "Lee Gym",
    category: "Website",
    description: "Responsive website for Lee Gym, showcasing facilities, schedules, and membership plans with a clean UI.",
    fullDescription: "Lee Gym website is a modern, responsive web application designed to showcase the fitness center's facilities, class schedules, and membership plans. The website features a clean, professional UI that effectively communicates the gym's brand and services. Built with React.js and TailwindCSS, it provides an excellent user experience across all devices with smooth animations and intuitive navigation.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
    technologies: ["React.js", "TailwindCSS", "Node.js"],
    liveUrl: "https://leegym.web.app",
    githubUrl: "#"
  }
];
export const testimonials: Testimonial[] = [];
export const services: Service[] = [
  {
    icon: 'Code',
    title: 'Website Development',
    description: 'Responsive, modern, and scalable websites tailored to brand identity with SEO-friendly designs.',
    features: ['Responsive Design', 'SEO Optimization', 'Brand Integration', 'Modern UI/UX']
  },
  {
    icon: 'Smartphone',
    title: 'Mobile App Development',
    description: 'Android & iOS apps with smooth UI/UX, real-time features, and cloud integration.',
    features: ['Cross-Platform Apps', 'Real-time Features', 'API Integration', 'Cloud Services']
  },
  {
    icon: 'Database',
    title: 'Custom Software Solutions',
    description: 'Business automation tools, ERP/CRM integrations with secure and scalable backend systems.',
    features: ['Business Automation', 'ERP/CRM Integration', 'Secure Backend', 'Scalable Systems']
  },
  {
    icon: 'Zap',
    title: 'AI-Powered Solutions',
    description: 'Chatbot customer support with Gemini AI integration, predictive analytics & automation.',
    features: ['AI Chatbots', 'Predictive Analytics', 'Process Automation', 'Smart Integration']
  },
  {
    icon: 'Palette',
    title: 'Branding & Digital Presence',
    description: 'Logo & identity design, portfolio-ready company websites, and marketing website development.',
    features: ['Logo Design', 'Brand Identity', 'Portfolio Websites', 'Marketing Sites']
  }
];
export const contactInfo: ContactInfo[] = [
  {
    icon: 'Mail',
    title: 'Email Us',
    details: 'contact.fusioncraft@gmail.com',
    subDetails: 'We reply within 24 hours'
  },
  {
    icon: 'Phone',
    title: 'Call Us',
    details: '+91 93635 99577',
    subDetails: 'All days from 8am to 10pm'
  },
  {
    icon: 'MapPin',
    title: 'Visit Us',
    details: 'No. 58, Jayaprakash Street',
    subDetails: 'Palladam, Tiruppur, Tamil Nadu, India'
  },
  {
    icon: 'Clock',
    title: 'Working Hours',
    details: '8 AM – 10 PM',
    subDetails: 'All Days'
  }
];
export const teamMembers: TeamMember[] = [
  {
    id: 'TM-001',
    name: 'Ragul V.L',
    role: 'Founder & Full-Stack Developer',
    department: 'Development & Management',
    email: 'contact.fusioncraft@gmail.com',
    phone: '+91 93635 99577',
    joinDate: '2024-01-01',
    status: 'Active',
    projectsActive: 2,
    projectsCompleted: 2,
    skills: ['Web Development', 'Mobile Apps', 'UI/UX Design', 'AI Integration', 'Cloud Deployment'],
    avatar: '',
    experience: 'Startup Founder (2 Projects Completed)'
  }
];
export const clients: Client[] = [
  {
    id: 'CLI-001',
    name: 'Dinez Client',
    contactPerson: 'Project Manager',
    email: 'contact@dinez.com',
    phone: '+91 98765 43210',
    company: 'Food Service Provider',
    location: 'India',
    projects: 1,
    totalValue: '₹2,50,000',
    status: 'Active',
    rating: 4.8,
    joinDate: '2024-01-15',
    avatar: ''
  },
  {
    id: 'CLI-002',
    name: 'Lee Gym',
    contactPerson: 'Gym Owner',
    email: 'contact@leegym.com',
    phone: '+91 87654 32109',
    company: 'Fitness Center',
    location: 'India',
    projects: 1,
    totalValue: '₹1,80,000',
    status: 'Active',
    rating: 4.9,
    joinDate: '2024-02-01',
    avatar: ''
  }
];

export const projectRecords: ProjectRecord[] = [
  {
    id: 'PRJ-001',
    name: 'Dinez Mobile App',
    client: 'Dinez Client',
    status: 'Completed',
    progress: 100,
    startDate: '2024-01-15',
    deadline: '2024-03-15',
    budget: '₹2,50,000',
    team: 'FusionCrafts & Silo'
  },
  {
    id: 'PRJ-002',
    name: 'Lee Gym Website',
    client: 'Lee Gym',
    status: 'Completed',
    progress: 100,
    startDate: '2024-02-01',
    deadline: '2024-03-01',
    budget: '₹1,80,000',
    team: 'FusionCrafts'
  }
];

// Project types for GetStartedPage
export const projectTypes = [
  {
    id: 'new-website',
    title: 'New Website',
    description: 'Build a brand new website from scratch',
    icon: 'Globe',
    popular: true
  },
  {
    id: 'redesign',
    title: 'Website Redesign',
    description: 'Modernize your existing website',
    icon: 'Palette',
    popular: false
  },
  {
    id: 'web-app',
    title: 'Web Application',
    description: 'Custom web application development',
    icon: 'Code',
    popular: true
  },
  {
    id: 'mobile-app',
    title: 'Mobile App',
    description: 'iOS and Android mobile applications',
    icon: 'Smartphone',
    popular: false
  },
  {
    id: 'software',
    title: 'Custom Software',
    description: 'Enterprise software solutions',
    icon: 'Database',
    popular: false
  },
  {
    id: 'branding',
    title: 'Branding Package',
    description: 'Complete brand identity design',
    icon: 'Target',
    popular: false
  }
];

export const budgetRanges = [
  { id: 'under-5k', label: 'Under ₹4,00,000', description: 'Small projects, landing pages' },
  { id: '5k-15k', label: '₹4,00,000 - ₹12,00,000', description: 'Medium websites, basic apps' },
  { id: '15k-50k', label: '₹12,00,000 - ₹40,00,000', description: 'Complex applications, e-commerce' },
  { id: '50k-plus', label: '₹40,00,000+', description: 'Enterprise solutions, large platforms' },
  { id: 'discuss', label: 'Let\'s Discuss', description: 'Custom pricing for unique projects' }
];

export const timelines = [
  { id: 'asap', label: 'ASAP', description: 'Rush project (may incur additional costs)' },
  { id: '1-month', label: '1 Month', description: 'Quick turnaround for simple projects' },
  { id: '2-3-months', label: '2-3 Months', description: 'Standard timeline for most projects' },
  { id: '3-6-months', label: '3-6 Months', description: 'Complex projects with extensive features' },
  { id: '6-plus', label: '6+ Months', description: 'Large-scale enterprise solutions' }
];

export const projectGoals = [
  'Increase online presence',
  'Generate more leads',
  'Improve user experience',
  'Modernize existing systems',
  'Expand to mobile users',
  'Automate business processes',
  'Enhance brand identity',
  'Scale existing platform'
];

// Admin Dashboard Data
export const dashboardStats = [
  {
    title: 'Total Projects',
    value: '2',
    change: '+100%',
    icon: 'FileText',
    color: 'text-blue-600',
    trend: 'up' as const
  },
  {
    title: 'Active Clients',
    value: '2',
    change: '+100%',
    icon: 'Users',
    color: 'text-green-600',
    trend: 'up' as const
  },
  {
    title: 'Total Revenue',
    value: '₹4.3L',
    change: '+100%',
    icon: 'DollarSign',
    color: 'text-purple-600',
    trend: 'up' as const
  },
  {
    title: 'Website Visits',
    value: '1.2K',
    change: '+25%',
    icon: 'Globe',
    color: 'text-orange-600',
    trend: 'up' as const
  }
];

export const recentActivities = [
  { action: 'Project completed', details: 'Lee Gym website launched successfully', time: '2 hours ago', type: 'project' },
  { action: 'Client meeting', details: 'Requirements discussion with Dinez team', time: '4 hours ago', type: 'meeting' },
  { action: 'Payment received', details: '₹1,80,000 from Lee Gym project', time: '1 day ago', type: 'payment' },
  { action: 'Project completed', details: 'Dinez mobile app delivered to client', time: '3 days ago', type: 'project' },
  { action: 'System backup', details: 'All data successfully backed up to cloud', time: '1 week ago', type: 'system' }
];

export const systemMetrics = [
  { name: 'Server Performance', value: 95, color: 'bg-green-500' },
  { name: 'Database Optimization', value: 88, color: 'bg-blue-500' },
  { name: 'Security Score', value: 92, color: 'bg-purple-500' },
  { name: 'User Satisfaction', value: 98, color: 'bg-orange-500' }
];

// Analytics Data
export const websiteStats = [
  { label: 'Total Visitors', value: '1,247', change: '+25%', trend: 'up' },
  { label: 'Page Views', value: '3,892', change: '+18%', trend: 'up' },
  { label: 'Bounce Rate', value: '32%', change: '-5%', trend: 'down' },
  { label: 'Avg. Session', value: '2m 45s', change: '+12%', trend: 'up' },
];

export const topPages = [
  { page: '/home', views: 1247, percentage: 35.2 },
  { page: '/services', views: 892, percentage: 25.1 },
  { page: '/portfolio', views: 642, percentage: 18.0 },
  { page: '/about', views: 489, percentage: 13.7 },
  { page: '/contact', views: 287, percentage: 8.0 },
];

export const trafficSources = [
  { source: 'Organic Search', visitors: 498, percentage: 40.0, color: 'bg-blue-500' },
  { source: 'Direct', visitors: 374, percentage: 30.0, color: 'bg-green-500' },
  { source: 'Social Media', visitors: 187, percentage: 15.0, color: 'bg-purple-500' },
  { source: 'Referrals', visitors: 125, percentage: 10.0, color: 'bg-orange-500' },
  { source: 'Email', visitors: 63, percentage: 5.0, color: 'bg-pink-500' },
];

// Security Data
export const securityEvents = [
  {
    timestamp: '2024-01-15 14:35:22',
    type: 'Login Attempt',
    severity: 'low',
    message: 'Successful admin login from IP 192.168.1.100',
    action: 'Allowed'
  },
  {
    timestamp: '2024-01-15 14:32:15',
    type: 'Failed Login',
    severity: 'medium',
    message: 'Failed login attempt from IP 45.67.89.123',
    action: 'Blocked'
  },
  {
    timestamp: '2024-01-15 14:28:08',
    type: 'Firewall',
    severity: 'high',
    message: 'Suspicious port scan detected from IP 123.45.67.89',
    action: 'Blocked'
  },
  {
    timestamp: '2024-01-15 14:25:45',
    type: 'Rate Limit',
    severity: 'medium',
    message: 'Rate limit exceeded for API endpoint /api/users',
    action: 'Throttled'
  },
  {
    timestamp: '2024-01-15 14:20:33',
    type: 'SSL Update',
    severity: 'low',
    message: 'SSL certificate renewed successfully',
    action: 'Completed'
  }
];

export const vulnerabilities = [
  {
    id: 'VUL-001',
    title: 'Outdated Dependencies',
    severity: 'Medium',
    description: '3 npm packages have security updates available',
    status: 'Open',
    cve: 'CVE-2024-0001'
  },
  {
    id: 'VUL-002',
    title: 'Weak Password Policy',
    severity: 'Low',
    description: 'Password policy does not enforce special characters',
    status: 'In Progress',
    cve: null
  },
  {
    id: 'VUL-003',
    title: 'Missing Security Headers',
    severity: 'Medium',
    description: 'X-Frame-Options header not configured',
    status: 'Resolved',
    cve: null
  }
];

export const securityMetrics = [
  { name: 'SSL Certificate', status: 'Valid', expiry: '2024-12-15', icon: 'Lock', color: 'text-green-600' },
  { name: 'Firewall', status: 'Active', rules: '47 rules', icon: 'Shield', color: 'text-blue-600' },
  { name: 'Two-Factor Auth', status: 'Enabled', users: '1 user', icon: 'Key', color: 'text-purple-600' },
  { name: 'Access Control', status: 'Active', permissions: '3 roles', icon: 'Users', color: 'text-orange-600' },
];
