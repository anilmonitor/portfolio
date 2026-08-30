import { PORTFOLIO_DATA } from "@/data/portfolioData";

export function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": PORTFOLIO_DATA.personal.name,
    "alternateName": [
      "Anil Monitor",
      "Anil Engineer",
      "Anil Monitor Vlog",
      "XpertBite Founder",
      "distdel.com Owner",
      "easylike.in Founder",
      "REC Student Portal Developer",
      "Garhdevi Mandir Website Developer",
      "Garhwa Biggest YouTuber"
    ],
    "jobTitle": "Software Engineer, YouTube Creator & Founder of XpertBite, distdel.com, REC Student Portal",
    "url": PORTFOLIO_DATA.personal.websiteUrl,
    "image": `${PORTFOLIO_DATA.personal.websiteUrl}/images/anil.jpeg`,
    "description": PORTFOLIO_DATA.personal.bio,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Garhwa",
      "addressRegion": "Jharkhand",
      "addressCountry": "India",
      "postalCode": "822114"
    },
    "homeLocation": {
      "@type": "Place",
      "name": "Garhwa, Jharkhand, India"
    },
    "worksFor": [
      {
        "@type": "Organization",
        "name": "XpertBite",
        "url": "https://xpertbite.in",
        "logo": `${PORTFOLIO_DATA.personal.websiteUrl}/images/xpertbite-logo.png`,
        "description": "Garhwa Software Development Company"
      },
      {
        "@type": "Organization",
        "name": "REC Student Portal",
        "url": "https://recstudentportal.com/",
        "logo": `${PORTFOLIO_DATA.personal.websiteUrl}/images/recstudentportal-logo.png`,
        "description": "Ramgarh Engineering College Student Portal"
      },
      {
        "@type": "Organization",
        "name": "distdel.com",
        "url": "https://distdel.com",
        "logo": `${PORTFOLIO_DATA.personal.websiteUrl}/images/distdel-logo.png`,
        "description": "Hyperlocal quick commerce and delivery platform in Garhwa"
      },
      {
        "@type": "Organization",
        "name": "easylike.in",
        "url": "https://easylike.in",
        "logo": `${PORTFOLIO_DATA.personal.websiteUrl}/images/easylike-logo.png`,
        "description": "Digital growth & creator tools platform"
      }
    ],
    "sameAs": [
      PORTFOLIO_DATA.personal.socials.youtubeMain,
      PORTFOLIO_DATA.personal.socials.youtubeEngineer,
      PORTFOLIO_DATA.personal.socials.youtubeVlog,
      PORTFOLIO_DATA.personal.socials.instagram,
      PORTFOLIO_DATA.personal.socials.github,
      PORTFOLIO_DATA.personal.socials.twitter,
      PORTFOLIO_DATA.personal.socials.linkedin,
      PORTFOLIO_DATA.personal.socials.facebook,
      PORTFOLIO_DATA.personal.socials.xpertbite,
      PORTFOLIO_DATA.personal.socials.distdel,
      PORTFOLIO_DATA.personal.socials.easylike,
      PORTFOLIO_DATA.personal.socials.recPortal,
    ],
    "knowsAbout": [
      "REC Student Portal",
      "recstudentportal.com",
      "Ramgarh Engineering College Student Portal",
      "REC Ramgarh Portal Developer",
      "Garhwa Software Development Company",
      "Software Development Company in Garhwa",
      "Best Software Company in Garhwa Jharkhand",
      "Website Development Garhwa",
      "App Development Company Garhwa",
      "XpertBite Software Company Garhwa",
      "XpertBite.in Owner",
      "Garhdevi Mandir Website Founder",
      "Garhdevi Mandir Garhwa",
      "distdel.com Owner",
      "distdel.com Founder",
      "easylike.in Owner",
      "Garhwa YouTuber",
      "Garhwa Biggest YouTuber",
      "Garhwa Instagram Influencer",
      "Garhwa Vlogger",
      "Embedded Electronics & IoT",
      "Next.js and Full Stack Web Architecture"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "XpertBite",
        "url": "https://xpertbite.in",
        "logo": `${PORTFOLIO_DATA.personal.websiteUrl}/images/xpertbite-logo.png`,
        "founder": {
          "@type": "Person",
          "name": "Anil Kumar"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Garhwa",
          "addressRegion": "Jharkhand",
          "addressCountry": "India"
        },
        "description": "Leading software development company in Garhwa providing web design, mobile apps, enterprise cloud software, and IT services."
      },
      {
        "@type": "Organization",
        "name": "REC Student Portal",
        "url": "https://recstudentportal.com/",
        "logo": `${PORTFOLIO_DATA.personal.websiteUrl}/images/recstudentportal-logo.png`,
        "founder": {
          "@type": "Person",
          "name": "Anil Kumar"
        },
        "description": "Digital academic portal for Ramgarh Engineering College (REC) designed and architected by Anil Kumar."
      },
      {
        "@type": "Organization",
        "name": "distdel.com",
        "url": "https://distdel.com",
        "logo": `${PORTFOLIO_DATA.personal.websiteUrl}/images/distdel-logo.png`,
        "founder": {
          "@type": "Person",
          "name": "Anil Kumar"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Garhwa",
          "addressRegion": "Jharkhand",
          "addressCountry": "India"
        },
        "description": "Hyperlocal quick commerce and on-demand delivery network in Garhwa, Jharkhand."
      },
      {
        "@type": "Organization",
        "name": "easylike.in",
        "url": "https://easylike.in",
        "logo": `${PORTFOLIO_DATA.personal.websiteUrl}/images/easylike-logo.png`,
        "founder": {
          "@type": "Person",
          "name": "Anil Kumar"
        },
        "description": "Smart digital engagement platform and analytics SaaS platform founded by Anil Kumar."
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Anil Kumar - Software Engineer, YouTube Creator & Founder of XpertBite, distdel.com",
    "url": PORTFOLIO_DATA.personal.websiteUrl,
    "author": {
      "@type": "Person",
      "name": "Anil Kumar"
    },
    "description": "Official website and portfolio of Anil Kumar - creator of Anil Monitor, Anil Engineer, Anil Monitor Vlog, founder of XpertBite, and architect of recstudentportal.com.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${PORTFOLIO_DATA.personal.websiteUrl}/channels?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FaqSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": PORTFOLIO_DATA.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
