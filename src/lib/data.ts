export const SOCIAL_LINKS = {
  discord: "https://discord.gg/JnnmcpB3Ua",
  linkedin: "https://www.linkedin.com/company/sports-analytics-club-at-yorku",
  linktree: "https://linktr.ee/yorkusac",
  instagram: "https://instagram.com/yorkusac",
};

// Google Form link - CHANGE: Add your Google Form URL here
export const CONTACT_FORM_URL = "https://forms.gle/your-google-form-id"; // Replace with your Google Form URL

// Centralized configuration and content for the website
export const siteConfig = {
  club: {
    name: "York Sports Analytics Club",
    shortName: "YSAC",
    tagline: "Data-Driven Sports Intelligence",
    description:
      "York Sports Analytics Club is dedicated to exploring the intersection of sports and data science. We analyze game statistics, player performance, and team dynamics using modern analytics techniques.",
    logoUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/YSAC-UbuoH8fvb9e2dcRvr8411gyHEV2ZT7.jpg",
    linktree: SOCIAL_LINKS.linktree,
  },

  clubInfo: {
    sections: [
      {
        title: "Who We Are",
        content:
          "We are a group of passionate students and data enthusiasts brought together by a shared love for sports and analytics. Our club bridges the gap between traditional sports knowledge and cutting-edge data science methodologies.",
      },
      {
        title: "What We Do",
        content:
          "We explore sports data, work with analytical tools, and collaborate on projects, hackathons, and competitions. Our activities include engaging in discussions about the latest trends and research in sports analytics.",
      },
      {
        title: "Why Join Us",
        content:
          "YSAC is a place for both learning and enjoyment! We offer a collaborative environment to learn, grow, and have fun with sports-related activities. Get ready to dive into the world of sports analytics with us.",
      },
    ],
  },

  events: [
    {
      id: 1,
      title: "Introduction to Sports Analytics",
      date: "November 15, 2025",
      time: "18:00 - 19:30",
      description:
        "Join us for an introductory session on sports analytics. We'll cover the fundamentals of data analysis in sports, common metrics, and real-world applications.",
      fullDescription:
        "This comprehensive introduction will walk you through the basics of sports analytics, including key metrics used in basketball, football, and other sports. We'll discuss how teams use data to make strategic decisions and explore practical examples from recent seasons.",
      location: "York University",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Beginner", "Workshop"],
    },
    {
      id: 2,
      title: "Tech in Sport: MLSE Digital Labs Panel",
      date: "November 24, 2025",
      time: "TBA",
      description:
        "Join us for a panel featuring members from MLSE (Maple Leafs Sports & Entertainment) Digital Labs. Topics include ML/AI, data science, product management, and business analytics.",
      fullDescription:
        "Industry professionals from MLSE Digital Labs will share insights into how major sports organizations leverage technology and analytics. Topics covered include machine learning in sports, data-driven decision making, product strategy, and career paths in sports tech. This event is co-hosted with the CS Club.",
      location: "York University",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Panel", "Industry", "Networking"],
      link: "https://www.mlsedigital.com/",
    },
    {
      id: 3,
      title: "Ontario University Sports Analytics Coalition Conference",
      date: "March 2026",
      time: "TBA",
      description:
        "Join us at the OUSAC Sports Analytics Conference featuring presentations, workshops, and networking opportunities.",
      fullDescription:
        "The Ontario University Sports Analytics Coalition (OUSAC) conference brings together students and professionals from across Ontario universities to share research, projects, and insights in sports analytics. A great opportunity to network and learn from peers.",
      location: "TBA",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Conference", "Networking", "Research"],
      link: "https://www.linkedin.com/company/ontario-universities-sports-analytics-coalition",
    },
  ],

  projects: [
    {
      id: 1,
      title: "OUSAC Website",
      description:
        "Official website for the Ontario University Sports Analytics Coalition, featuring news, resources, and event information.",
      status: "Active",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      icon: "🌐",
      link: "https://www.linkedin.com/company/ontario-universities-sports-analytics-coalition",
    },
  ],

  team: [
    {
      id: 1,
      name: "Yashna Garg",
      role: "President",
      bio: "Leading YSAC with a passion for sports analytics and data science.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "https://www.linkedin.com/in/yashna-garg/", // Uncomment and add URL when available
    },
    {
      id: 2,
      name: "OJ Adeyemi",
      role: "Vice President",
      bio: "Leading all technical initiatives and driving innovation in sports analytics.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "https://linkedin.com/in/ojadeyemi",
      portfolio: "https://ojadeyemi.github.io/",
    },
    // {
    //   id: 3,
    //   name: "Team Member 3",
    //   role: "Treasurer",
    //   bio: "Coming soon...",
    //   image: "/placeholder.svg?height=300&width=300",
    //   // linkedin: "", // Add when available
    //   // portfolio: "", // Add when available
    //   // email: "", // Add when available
    // },
    // {
    //   id: 4,
    //   name: "Team Member 4",
    //   role: "Events Coordinator",
    //   bio: "Coming soon...",
    //   image: "/placeholder.svg?height=300&width=300",
    //   // linkedin: "", // Add when available
    //   // portfolio: "", // Add when available
    //   // email: "", // Add when available
    // },
    // {
    //   id: 5,
    //   name: "Team Member 5",
    //   role: "Marketing Lead",
    //   bio: "Coming soon...",
    //   image: "/placeholder.svg?height=300&width=300",
    //   // linkedin: "", // Add when available
    //   // portfolio: "", // Add when available
    //   // email: "", // Add when available
    // },
    // {
    //   id: 6,
    //   name: "Team Member 6",
    //   role: "General Member",
    //   bio: "Coming soon...",
    //   image: "/placeholder.svg?height=300&width=300",
    //   // linkedin: "", // Add when available
    //   // portfolio: "", // Add when available
    //   // email: "", // Add when available
    // },
  ],

  footer: {
    copyrightYear: 2026,
    contactEmail: "yorkusac@gmail.com",
    socialLinks: SOCIAL_LINKS,
  },
};
