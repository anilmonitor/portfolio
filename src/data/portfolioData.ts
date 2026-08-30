export interface Channel {
  id: string;
  name: string;
  handle: string;
  url: string;
  subscribers: string;
  videosCount: string;
  views: string;
  badge: string;
  category: string;
  description: string;
  longDescription: string;
  gradient: string;
  accentColor: string;
  tags: string[];
  featuredPlaylists: string[];
  bannerUrl: string;
}

export interface VideoItem {
  id: string;
  title: string;
  channelId: string;
  channelName: string;
  thumbnail: string;
  youtubeId: string;
  duration: string;
  views: string;
  category: "tech" | "engineering" | "vlog" | "tutorial";
  publishDate: string;
  description: string;
  featured?: boolean;
}

export interface VentureItem {
  id: string;
  name: string;
  role: string;
  url: string;
  logo: string;
  category: string;
  description: string;
  badge: string;
  tags: string[];
  gradient: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  category: "Ventures & Startups" | "Web & Software" | "IoT & Electronics" | "Automation & Tools" | "Open Source";
  tags: string[];
  image: string;
  logo?: string;
  githubUrl?: string;
  demoUrl?: string;
  videoUrl?: string;
  highlights: string[];
  featured?: boolean;
}

export interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  category: string;
  readTime: string;
  publishDate: string;
  author: string;
  coverImage: string;
  content: string[];
  tags: string[];
}

export interface StudioGear {
  category: string;
  items: { name: string; spec: string; iconName: string }[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Anil Kumar",
    tagline: "Software Engineer • Tech Educator • Multi-Channel YouTube Creator & Tech Founder",
    shortTitle: "Software Engineer & Content Creator",
    bio: "Anil Kumar is a Software Engineer, Creator of 3 popular YouTube channels (Anil Monitor, Anil Engineer, Anil Monitor Vlog), and Founder of XpertBite (Software Development Company), distdel.com (Hyperlocal Delivery), and easylike.in, and the architect behind recstudentportal.com (Ramgarh Engineering College) based in Garhwa, Jharkhand.",
    location: "Garhwa, Jharkhand, India",
    address: {
      locality: "Garhwa",
      region: "Jharkhand",
      country: "India",
      postalCode: "822114"
    },
    websiteUrl: "https://anilmonitor.xpertbite.in",
    email: "contact@anilmonitor.com",
    avatar: "/images/anil.jpeg",
    stats: {
      subscribers: "150K+",
      views: "12M+",
      videos: "350+",
      experience: "5+ Years",
      projects: "30+",
      ventures: "5 Platforms",
    },
    socials: {
      youtubeMain: "https://www.youtube.com/@ANILMONITOR",
      youtubeEngineer: "https://www.youtube.com/@ANILENGINEER",
      youtubeVlog: "https://www.youtube.com/@VLOGANIl",
      instagram: "https://instagram.com/anilmonitor",
      github: "https://github.com/anilmonitor",
      twitter: "https://twitter.com/anilmonitor",
      linkedin: "https://linkedin.com/in/anilmonitor",
      facebook: "https://facebook.com/anilmonitorvlog",
      telegram: "https://t.me/anilmonitor",
      xpertbite: "https://xpertbite.in",
      distdel: "https://distdel.com",
      easylike: "https://easylike.in",
      recPortal: "https://recstudentportal.com/",
      garhdeviMandir: "https://maagarhdevimandirgarhwa.vercel.app/",
    }
  },

  ventures: [
    {
      id: "xpertbite",
      name: "XpertBite",
      role: "Founder & Owner",
      url: "https://xpertbite.in",
      logo: "/images/xpertbitelogo.png",
      category: "Software Development Company",
      badge: "Garhwa's Leading Tech Agency",
      description: "Premier software development company in Garhwa providing high-performance web applications, mobile apps, enterprise cloud systems, and digital transformations.",
      tags: ["Software Company", "Web & App Dev", "Garhwa IT Hub", "Enterprise Solutions"],
      gradient: "from-blue-600/20 to-indigo-600/20",
    },
    {
      id: "rec-portal",
      name: "REC Student Portal",
      role: "Lead Architect & UI/UX Redesigner",
      url: "https://recstudentportal.com/",
      logo: "/images/RECstudentportal.png",
      category: "Campus Academic Ecosystem",
      badge: "Ramgarh Engineering College",
      description: "Redesigned and engineered the official modern student portal for Ramgarh Engineering College (REC), providing seamless academic resources, syllabus, notices, previous year questions, and student utilities.",
      tags: ["Ramgarh Engineering College", "REC Student Portal", "Academic SaaS", "Next.js"],
      gradient: "from-sky-500/20 to-blue-700/20",
    },
    {
      id: "distdel",
      name: "distdel.com",
      role: "Founder & Owner",
      url: "https://distdel.com",
      logo: "/images/distdel-logo.png",
      category: "Hyperlocal Quick Commerce",
      badge: "Garhwa Delivery Network",
      description: "On-demand delivery and local commerce platform connecting restaurants, grocery outlets, and local merchants across Garhwa with fast delivery.",
      tags: ["Hyperlocal Delivery", "Quick Commerce", "Garhwa Startup", "Logistics"],
      gradient: "from-amber-500/20 to-orange-600/20",
    },
    {
      id: "easylike",
      name: "easylike.in",
      role: "Founder & Owner",
      url: "https://easylike.in",
      logo: "/images/easylike.png",
      category: "Digital Growth & Tools",
      badge: "Creator SaaS & Analytics",
      description: "Smart digital engagement platform and web utility helping creators, digital marketers, and businesses optimize their social growth and analytics.",
      tags: ["SaaS Utility", "Digital Growth", "Creator Tools", "Automation"],
      gradient: "from-rose-500/20 to-purple-600/20",
    },
    {
      id: "garhdevi-mandir",
      name: "Maa Garhdevi Mandir Official Portal",
      role: "Website Founder & Lead Architect",
      url: "https://maagarhdevimandirgarhwa.vercel.app/",
      logo: "/images/garhdevi-mandir-logo.png",
      category: "Public Digital Infrastructure",
      badge: "Garhwa Heritage Portal",
      description: "Developed and engineered the official digital portal for the historic Maa Garhdevi Mandir in Garhwa, Jharkhand, providing online temple info, festival schedules, and pilgrim resources.",
      tags: ["Heritage Portal", "Garhdevi Mandir", "Garhwa Temple", "Online Aarti & History"],
      gradient: "from-emerald-500/20 to-teal-600/20",
    }
  ] as VentureItem[],

  channels: [
    {
      id: "anil-monitor",
      name: "Anil Monitor",
      handle: "@ANILMONITOR",
      url: "https://www.youtube.com/@ANILMONITOR",
      subscribers: "100K+",
      videosCount: "220+",
      views: "8.5M+",
      badge: "Primary Tech Hub",
      category: "Tech & Troubleshooting",
      description: "In-depth tech tutorials, PC & Windows troubleshooting, smartphone hacks, software mastery, and honest tech reviews.",
      longDescription: "Anil Monitor is the premier destination for tech learners looking for step-by-step PC problem solving, Windows 11 optimizations, software tutorials, and everyday digital productivity tips.",
      gradient: "from-blue-600 to-indigo-600",
      accentColor: "#6366f1",
      tags: ["Tech Tutorials", "Windows / PC Fixes", "Software Tools", "Smartphone Tips", "Garhwa Tech"],
      featuredPlaylists: ["Windows Mastery Series", "Speed Up Your PC 2026", "Top Productivity Software", "Tech Troubleshooting 101"],
      bannerUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&auto=format&fit=crop&q=80",
    },
    {
      id: "anil-engineer",
      name: "Anil Engineer",
      handle: "@ANILENGINEER",
      url: "https://www.youtube.com/@ANILENGINEER",
      subscribers: "35K+",
      videosCount: "85+",
      views: "2.8M+",
      badge: "Engineering & Code",
      category: "Engineering & Hardware",
      description: "Real-world engineering projects, embedded electronics, coding masterclasses, IoT systems, and DIY hardware innovations.",
      longDescription: "Anil Engineer dives deep into hands-on technology: microcontrollers (Arduino, ESP32, Raspberry Pi), full-stack web applications, robotics, circuit design, and automation.",
      gradient: "from-emerald-500 to-teal-700",
      accentColor: "#10b981",
      tags: ["Electronics & IoT", "Web Development", "Microcontrollers", "Automation", "Engineering Projects"],
      featuredPlaylists: ["ESP32 & IoT Projects", "Full-Stack Coding Crash Courses", "DIY Home Automation", "Robotics Basics"],
      bannerUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&auto=format&fit=crop&q=80",
    },
    {
      id: "anil-vlog",
      name: "Anil Monitor Vlog",
      handle: "@VLOGANIl",
      url: "https://www.youtube.com/@VLOGANIl",
      subscribers: "20K+",
      videosCount: "60+",
      views: "1.2M+",
      badge: "Life & BTS",
      category: "Vlogs & Lifestyle",
      description: "Behind the scenes of tech creation, studio building, creator routines, life updates, tech travel, and personal stories.",
      longDescription: "Anil Monitor Vlog shares the authentic journey of an engineer, founder, and creator. Experience studio tours, day-in-the-life vlogs, Garhwa lifestyle, creator milestones, and reflections.",
      gradient: "from-rose-500 to-amber-600",
      accentColor: "#f43f5e",
      tags: ["Creator Vlogs", "Studio Setup BTS", "Jharkhand Travel", "Creator Journey", "Lifestyle"],
      featuredPlaylists: ["Dream Studio Build", "Day in the Life of an Engineer", "Tech Expos & Meets", "Creator Milestones"],
      bannerUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&auto=format&fit=crop&q=80",
    }
  ] as Channel[],

  featuredVideos: [
    {
      id: "v1",
      title: "Top 10 Windows 11 Secret Tweaks To Boost Gaming & Productivity",
      channelId: "anil-monitor",
      channelName: "Anil Monitor",
      thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80",
      youtubeId: "dQw4w9WgXcQ",
      duration: "14:25",
      views: "480K",
      category: "tech",
      publishDate: "2026",
      description: "Learn hidden registry tricks, bloatware removal, and performance optimizations every PC user must enable today.",
      featured: true,
    },
    {
      id: "v2",
      title: "Building an AI-Powered Smart Home Hub using ESP32 & Next.js",
      channelId: "anil-engineer",
      channelName: "Anil Engineer",
      thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
      youtubeId: "dQw4w9WgXcQ",
      duration: "22:10",
      views: "185K",
      category: "engineering",
      publishDate: "2026",
      description: "Full end-to-end hardware tutorial on building a custom smart home dashboard with sensor telemetry and local voice commands.",
      featured: true,
    },
    {
      id: "v3",
      title: "My Ultimate Dream Studio Setup Tour - 3 Channels, 1 Creator",
      channelId: "anil-vlog",
      channelName: "Anil Monitor Vlog",
      thumbnail: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&auto=format&fit=crop&q=80",
      youtubeId: "dQw4w9WgXcQ",
      duration: "18:40",
      views: "92K",
      category: "vlog",
      publishDate: "2026",
      description: "A complete walkthrough of the lighting, microphones, triple monitor workstation, and recording studio.",
      featured: true,
    },
    {
      id: "v4",
      title: "How to Recover Deleted Files & Partition Errors in 2026",
      channelId: "anil-monitor",
      channelName: "Anil Monitor",
      thumbnail: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80",
      youtubeId: "dQw4w9WgXcQ",
      duration: "11:05",
      views: "310K",
      category: "tutorial",
      publishDate: "2026",
      description: "A reliable, safe guide to recovering lost partition data and corrupted external drives without expensive software.",
      featured: false,
    },
    {
      id: "v5",
      title: "Custom PCB Design & Soldering Guide for Complete Beginners",
      channelId: "anil-engineer",
      channelName: "Anil Engineer",
      thumbnail: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80",
      youtubeId: "dQw4w9WgXcQ",
      duration: "28:50",
      views: "140K",
      category: "engineering",
      publishDate: "2026",
      description: "From schematic in KiCad to fabrication and hand-soldering SMD components. Step by step engineering walkthrough.",
      featured: false,
    },
    {
      id: "v6",
      title: "Behind The Scenes: Shooting 4 Videos in 24 Hours",
      channelId: "anil-vlog",
      channelName: "Anil Monitor Vlog",
      thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&auto=format&fit=crop&q=80",
      youtubeId: "dQw4w9WgXcQ",
      duration: "15:15",
      views: "78K",
      category: "vlog",
      publishDate: "2026",
      description: "A candid look into my content production workflow, scripting methods, and running a tech lab.",
      featured: false,
    }
  ] as VideoItem[],

  projects: [
    {
      id: "p-rec-portal",
      title: "REC Student Portal - Ramgarh Engineering College",
      description: "Engineered and completely redesigned the modern digital academic ecosystem for Ramgarh Engineering College (REC). Serves thousands of engineering students with automated syllabus tracking, previous year questions, semester notices, and campus services.",
      category: "Ventures & Startups",
      tags: ["Lead Architect & Redesigner", "Ramgarh Engineering College", "REC Student Portal", "Next.js 14"],
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80",
      logo: "/images/RECstudentportal.png",
      demoUrl: "https://recstudentportal.com/",
      featured: true,
      highlights: [
        "Complete modern UI/UX redesign for Ramgarh Engineering College students",
        "Fast access to PYQs, branch-wise syllabi, routine, and official notices",
        "Live at https://recstudentportal.com/ engineered by Anil Kumar"
      ]
    },
    {
      id: "p-xpertbite",
      title: "XpertBite - Software Development & Cloud Solutions",
      description: "Software engineering agency founded by Anil Kumar in Garhwa, Jharkhand. Builds enterprise SaaS products, custom mobile applications, and high-conversion web platforms.",
      category: "Ventures & Startups",
      tags: ["Founder & Owner", "Software Development", "Garhwa IT Agency", "Full Stack"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
      logo: "/images/xpertbitelogo.png",
      demoUrl: "https://xpertbite.in",
      featured: true,
      highlights: [
        "Full-cycle custom software & mobile app development",
        "Empowering businesses in Garhwa, Jharkhand & global clients",
        "Next.js, React, Node.js, Flutter, and Cloud Infrastructure"
      ]
    },
    {
      id: "p0",
      title: "distdel.com - Hyperlocal Quick Commerce & Delivery Platform",
      description: "Founded and engineered by Anil Kumar, distdel.com is Garhwa's on-demand delivery platform empowering local restaurants, grocery vendors, and customers with seamless logistics.",
      category: "Ventures & Startups",
      tags: ["Founder & Owner", "E-Commerce", "Logistics", "Garhwa Startup", "Full Stack App"],
      image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&auto=format&fit=crop&q=80",
      logo: "/images/distdel-logo.png",
      demoUrl: "https://distdel.com",
      featured: true,
      highlights: [
        "Hyperlocal instant delivery network in Garhwa, Jharkhand",
        "Merchant portal, customer ordering web/app, and real-time GPS delivery tracking",
        "Scaled to serve thousands of local orders across the region"
      ]
    },
    {
      id: "p-easylike",
      title: "easylike.in - Creator Growth & Social Engagement SaaS",
      description: "Digital growth platform and analytics suite built to help content creators, marketing agencies, and businesses optimize their online reach and engagement metrics.",
      category: "Ventures & Startups",
      tags: ["Founder & Owner", "SaaS Platform", "Social Analytics", "Automation"],
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=80",
      logo: "/images/easylike.png",
      demoUrl: "https://easylike.in",
      featured: true,
      highlights: [
        "Automated engagement analytics and growth dashboard",
        "Lightweight high-speed API architecture",
        "Built and scaled by Anil Kumar"
      ]
    },
    {
      id: "p-garhdevi",
      title: "Maa Garhdevi Mandir Official Web Portal",
      description: "Designed and engineered the official digital information website for the historic Maa Garhdevi Mandir in Garhwa, featuring temple history, online Aarti schedules, and visitor guides.",
      category: "Web & Software",
      tags: ["Founder / Lead Architect", "Garhdevi Mandir", "Garhwa Temple Portal", "Garhwa Heritage"],
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80",
      logo: "/images/garhdevi-mandir-logo.png",
      demoUrl: "https://maagarhdevimandirgarhwa.vercel.app/",
      featured: true,
      highlights: [
        "Official digital presence for Maa Garhdevi Mandir, Garhwa",
        "Accessible online temple history, aarti timings & pilgrim guides",
        "Engineered with Next.js and deployed at maagarhdevimandirgarhwa.vercel.app"
      ]
    },
    {
      id: "p1",
      title: "IoT Environmental & Air Quality Monitor",
      description: "Custom ESP32 hardware device measuring PM2.5, CO2, temperature, and humidity with a real-time Next.js web dashboard and Telegram alert bot.",
      category: "IoT & Electronics",
      tags: ["ESP32", "C++", "Next.js", "WebSockets", "Hardware Design"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
      githubUrl: "https://github.com/anilmonitor",
      demoUrl: "https://github.com/anilmonitor",
      highlights: [
        "Real-time sensor telemetry with sub-second latency",
        "Low power sleep modes with 6+ months battery lifespan",
        "Responsive dark-mode telemetry dashboard"
      ]
    }
  ] as ProjectItem[],

  skills: [
    {
      category: "Engineering & Development",
      items: ["JavaScript / TypeScript", "React & Next.js", "Node.js & Python", "C++ / Embedded C", "REST APIs & WebSockets", "Tailwind CSS", "Git & GitHub"]
    },
    {
      category: "Hardware & IoT",
      items: ["ESP32 / ESP8266", "Arduino Architecture", "Raspberry Pi", "PCB Design (KiCad)", "Circuit Troubleshooting", "Soldering & Prototyping", "Sensor Integration"]
    },
    {
      category: "Content Production & Studio",
      items: ["DaVinci Resolve / Premiere Pro", "OBS Studio Live Streaming", "Audio Engineering & DSP", "Lighting Design", "YouTube SEO & Analytics", "Scripting & Storytelling"]
    },
    {
      category: "Systems & Troubleshooting",
      items: ["Windows OS Internals", "Linux / Debian", "PC Hardware Assembly", "Network Configuration", "Data Recovery Techniques", "System Benchmarking"]
    }
  ],

  studioGear: [
    {
      category: "Cameras & Optics",
      items: [
        { name: "Sony Alpha Full-Frame", spec: "4K 60FPS Creator Camera", iconName: "Camera" },
        { name: "Sigma 24-70mm F2.8 Lens", spec: "Crisp Cinematic Bokeh", iconName: "Eye" },
        { name: "Elgato Cam Link 4K", spec: "Direct HDMI Capture Card", iconName: "MonitorPlay" },
      ]
    },
    {
      category: "Audio & Acoustics",
      items: [
        { name: "Shure SM7B Dynamic Mic", spec: "Broadcast Quality Voice", iconName: "Mic" },
        { name: "GoXLR / Focusrite Interface", spec: "Pre-amp with hardware DSP", iconName: "Sliders" },
        { name: "Cloudlifter CL-1", spec: "+25dB Clean Gain Activator", iconName: "Zap" },
      ]
    },
    {
      category: "Workstation Specs",
      items: [
        { name: "AMD Ryzen 9 7950X", spec: "16 Cores, 32 Threads Beast", iconName: "Cpu" },
        { name: "NVIDIA RTX 4080 16GB", spec: "4K Render & AI Acceleration", iconName: "CircuitBoard" },
        { name: "64GB DDR5 6000MHz RAM", spec: "Dual Channel High-Speed", iconName: "HardDrive" },
        { name: "LG 34\" Ultrawide 144Hz", spec: "Color-Accurate IPS Workspace", iconName: "Monitor" },
      ]
    },
    {
      category: "Lab & Electronics",
      items: [
        { name: "Rigol Digital Oscilloscope", spec: "4-Channel 100MHz Signal Analyzer", iconName: "Activity" },
        { name: "Pinecil Smart Soldering Iron", spec: "Precision Temperature Control", iconName: "Flame" },
        { name: "Benchtop DC Power Supply", spec: "0-30V 5A Adjustable Clean Power", iconName: "BatteryCharging" },
      ]
    }
  ] as StudioGear[],

  blogs: [
    {
      slug: "complete-guide-to-optimizing-windows-for-creators-2026",
      title: "The Complete Guide to Optimizing Windows 11 for Creators & Engineers in 2026",
      summary: "Step-by-step optimization roadmap to eliminate system latency, maximize video render speeds, and strip unnecessary telemetry from Windows 11.",
      category: "Tech & Optimization",
      readTime: "6 min read",
      publishDate: "August 2026",
      author: "Anil Kumar",
      coverImage: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&auto=format&fit=crop&q=80",
      tags: ["Windows 11", "Performance", "Optimization", "Anil Monitor", "Garhwa YouTuber"],
      content: [
        "When you're editing 4K video timelines or compiling heavy TypeScript and C++ codebases, even a small background hitch or thermal spike can slow down your entire creative flow.",
        "In this guide, we dive into the exact system adjustments I apply to every workstation in my studio. From configuring power profiles and memory paging to disabling Windows background telemetry and optimizing GPU scheduling, this checklist will squeeze maximum performance from your machine.",
        "Key Tweaks Covered:",
        "1. Enabling Ultimate Performance Power Plan via PowerShell command.",
        "2. Disabling SysMain and unnecessary startup telemetry agents.",
        "3. Setting up Hardware-Accelerated GPU Scheduling (HAGS) for DaVinci Resolve and Adobe Premiere.",
        "4. Allocating custom virtual memory pagefiles on dedicated NVMe drives.",
        "Watch the companion video on Anil Monitor for full live benchmarks before and after applying these tweaks!"
      ]
    },
    {
      slug: "redesigning-rec-student-portal-for-ramgarh-engineering-college",
      title: "How I Redesigned and Engineered the REC Student Portal (recstudentportal.com)",
      summary: "Inside the architecture, modern Next.js UI/UX redesign, and performance optimizations of the Ramgarh Engineering College (REC) Student Portal.",
      category: "Engineering & Case Study",
      readTime: "7 min read",
      publishDate: "August 2026",
      author: "Anil Kumar",
      coverImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&auto=format&fit=crop&q=80",
      tags: ["recstudentportal.com", "Ramgarh Engineering College", "Next.js", "REC Student Portal", "UI/UX Redesign"],
      content: [
        "Engineering students need immediate, frictionless access to academic resources, semester syllabus, PYQs, and examination notices without clunky legacy portals.",
        "In this project, I took on the complete redesign and full-stack re-engineering of the Ramgarh Engineering College Student Portal at recstudentportal.com.",
        "We restructured the portal using Next.js, implementing sub-second page loads, a responsive mobile layout for students on phones, dark mode support, and an automated PDF resource repository.",
        "Explore the live portal at https://recstudentportal.com/."
      ]
    },
    {
      slug: "how-i-built-distdel-com-and-scaled-3-youtube-channels-from-garhwa",
      title: "How I Built XpertBite, distdel.com & Scaled 3 YouTube Channels from Garhwa",
      summary: "The entrepreneurial and technical journey of founding XpertBite software company, building distdel.com and easylike.in, and scaling 3 YouTube channels from Garhwa, Jharkhand.",
      category: "Entrepreneurship & Journey",
      readTime: "7 min read",
      publishDate: "August 2026",
      author: "Anil Kumar",
      coverImage: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=1200&auto=format&fit=crop&q=80",
      tags: ["XpertBite", "distdel.com", "easylike.in", "Garhwa Software Company", "Anil Kumar"],
      content: [
        "Building software companies and growing digital audiences does not require moving away from hometown roots. From Garhwa, Jharkhand, I have founded XpertBite (software company), distdel.com (hyperlocal delivery), and built an audience of over 150,000 subscribers.",
        "In this article, I share how engineering fundamentals powered the design of XpertBite and distdel.com, along with building public digital infrastructure like the official Maa Garhdevi Mandir portal.",
        "We discuss technology architecture choices (Next.js, Node.js, Cloud APIs), scaling local businesses, and how regional engineers can create lasting impact."
      ]
    }
  ] as BlogPost[],

  milestones: [
    { year: "2021", title: "The Journey Begins", description: "Launched Anil Monitor with PC troubleshooting tutorials, reaching viewers across India." },
    { year: "2022", title: "10,000 Subscribers & Community Growth", description: "Expanded into comprehensive Windows optimization, hardware fixes, and smartphone tech." },
    { year: "2023", title: "Founded XpertBite & distdel.com", description: "Created Anil Engineer for IoT/coding, founded XpertBite software company and distdel.com delivery platform in Garhwa." },
    { year: "2024", title: "Silver Play Button & 100K Subs", description: "Anil Monitor crossed 100,000 subscribers and received YouTube's Silver Creator Award." },
    { year: "2025", title: "Redesigned REC Student Portal & Launched easylike.in", description: "Engineered recstudentportal.com for Ramgarh Engineering College; launched easylike.in and the official Maa Garhdevi Mandir portal." },
    { year: "2026", title: "Integrated Tech & Creator Ecosystem", description: "Managing 3 YouTube channels (150K+ subs), scaling XpertBite, distdel.com, and developing community software." },
  ],

  testimonials: [
    {
      quote: "The redesigned REC Student Portal is so fast and clean! Finding syllabus and PYQs for our semester is now instant.",
      author: "Aman Verma",
      role: "Student • Ramgarh Engineering College (REC)",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80"
    },
    {
      quote: "XpertBite built an exceptional web application for our business. Anil's engineering leadership is top-notch!",
      author: "Priya Patel",
      role: "Client • XpertBite Software",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
    },
    {
      quote: "Anil's PC tutorials on Anil Monitor and hardware projects on Anil Engineer are the best in Jharkhand!",
      author: "Vikram Mehta",
      role: "Subscriber • Anil Monitor",
      avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&auto=format&fit=crop&q=80"
    }
  ],

  faqs: [
    {
      question: "Who is Anil Kumar?",
      answer: "Anil Kumar is a Software Engineer, YouTube Creator (@ANILMONITOR, @ANILENGINEER, @VLOGANIl), and Tech Founder who established XpertBite, distdel.com, easylike.in, and redesigned the REC Student Portal for Ramgarh Engineering College."
    },
    {
      question: "What is recstudentportal.com?",
      answer: "recstudentportal.com is the comprehensive digital student portal for Ramgarh Engineering College (REC), redesigned and architected by Anil Kumar to provide fast access to syllabus, notices, previous year questions (PYQs), and academic tools."
    },
    {
      question: "What is XpertBite?",
      answer: "XpertBite (https://xpertbite.in) is a full-service software development company founded and owned by Anil Kumar in Garhwa, specializing in web development, mobile applications, cloud architecture, and custom business automation."
    },
    {
      question: "What is distdel.com?",
      answer: "distdel.com is an on-demand hyperlocal delivery and quick-commerce platform founded by Anil Kumar in Garhwa, connecting local restaurants, stores, and customers with fast delivery."
    },
    {
      question: "What is easylike.in?",
      answer: "easylike.in is a creator-focused digital growth, analytics, and social engagement utility platform founded by Anil Kumar."
    },
    {
      question: "What is the official Maa Garhdevi Mandir website?",
      answer: "The official website for Maa Garhdevi Mandir, Garhwa is https://maagarhdevimandirgarhwa.vercel.app/, engineered and launched by Anil Kumar."
    }
  ] as FAQItem[]
};
