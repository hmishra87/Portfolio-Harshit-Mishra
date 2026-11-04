export const candidateInfo = {
  name: "HARSHIT MISHRA",
  handle: "@hmishra_devops",
  callsign: "SRE//ALPHA-01",
  title: "DevOps Engineer — Cloud & Infrastructure Specialist",
  tagline: "High-Availability Cloud Architecture, DevSecOps & Production Site Reliability for Enterprise AI",
  location: "Lucknow, India",
  phone: "+91 8707626490",
  email: "hmishra8707@gmail.com",
  linkedin: "https://linkedin.com/in/harshit-mishra-devops",
  github: "https://github.com/hmishra8707",
  availability: "Immediate Joiner (15 Days Notice Period)",
  experienceYears: "3+ Years",
  systemUptime: "99.9% Production SLA",
  languages: ["English", "Hindi"],
  
  summary: `DevOps Engineer with 3+ years of hands-on expertise in cloud architecture, CI/CD pipeline automation, and production site reliability engineering (SRE). Proven track record of designing, deploying, and managing scalable AWS environments for enterprise AI applications (Xelta.ai, Streamplay.ai, Healnova.ai). Specialization in DevSecOps practices—integrating automated code quality (SonarQube) and image vulnerability scanning (Trivy)—alongside robust SSH key management, SSL/TLS certificate automation, and high-availability database disaster recovery strategies to ensure maximum uptime, zero-downtime releases, and strict operational predictability.`,

  keyStrengths: [
    { title: "Site Reliability", desc: "99.9% SLA enforcement, Grafana/CloudWatch telemetry & proactive automated remediation." },
    { title: "High Availability Architecture", desc: "Multi-AZ fault-tolerant design on AWS (ECS, EKS, RDS Multi-AZ, ELB, Auto-scaling)." },
    { title: "DevSecOps & Zero Trust", desc: "Automated vulnerability gating with Trivy & SonarQube, SSL/TLS lifecycle automation." },
    { title: "Troubleshooting Under Pressure", desc: "Rapid root cause analysis, point-in-time database DR, and zero-downtime rollbacks." },
    { title: "GitOps & Infrastructure as Code", desc: "AWS CloudFormation, Terraform, ArgoCD, and automated declarative workflows." }
  ],

  stats: [
    { label: "Production Uptime", value: "99.9%", subtitle: "Strict Enterprise SLA" },
    { label: "Deployment Effort Reduction", value: "70%", subtitle: "Automated CI/CD Gates" },
    { label: "AI Platforms Engineered", value: "3+", subtitle: "Xelta, Streamplay, Healnova" },
    { label: "Critical CVEs Passed to Prod", value: "0", subtitle: "Trivy & SonarQube Gates" },
    { label: "Notice Period", value: "15d", subtitle: "Immediate Availability" }
  ],

  projects: [
    {
      id: "xelta-ai",
      name: "Xelta.ai",
      category: "Enterprise AI Infrastructure",
      badge: "PRODUCTION LIVE",
      subtitle: "AI Infrastructure, CI/CD & Container Security",
      description: "Engineered and managed end-to-end cloud infrastructure and CI/CD release automation for AI-based machine learning applications across staging and production environments.",
      highlights: [
        "Architected, deployed, and maintained containerized microservices using Docker on scalable AWS infrastructure.",
        "Integrated SonarQube into automated workflows for continuous code quality analysis and strict quality gate enforcement.",
        "Implemented Trivy for automated Docker image vulnerability scanning as a mandatory pre-deployment gate.",
        "Configured and managed AWS services (EC2, ECS, S3, RDS, ELB) guaranteeing fault tolerance, elasticity, and high throughput."
      ],
      techStack: ["AWS ECS", "Docker", "SonarQube", "Trivy", "RDS Multi-AZ", "ELB", "S3", "GitHub Actions"],
      metrics: {
        uptime: "99.95%",
        deployFrequency: "14 releases/wk",
        securityScore: "A+"
      },
      accentColor: "#D2FF00"
    },
    {
      id: "streamplay-ai",
      name: "Streamplay.ai",
      category: "Media Streaming Infrastructure",
      badge: "HIGH THROUGHPUT",
      subtitle: "Media Application Release Automation & Cloud Operations",
      description: "Streamlined containerized application deployments and high-volume release automation processes for intelligent media streaming platforms.",
      highlights: [
        "Configured, optimized, and maintained resilient AWS cloud infrastructure and deployment pipeline workflows.",
        "Embedded SonarQube within CI/CD pipelines to run automated code quality checks prior to production deployment.",
        "Implemented Trivy security scans to proactively detect and mitigate container image vulnerabilities before live release.",
        "Delivered ongoing production deployment support and real-time infrastructure monitoring using Grafana and CloudWatch."
      ],
      techStack: ["AWS EKS", "CloudFront CDN", "Docker", "Trivy", "Grafana", "CloudWatch", "Nginx", "Jenkins"],
      metrics: {
        latency: "<18ms",
        streamCapacity: "100k+ concurrent",
        securityScore: "Zero Vulnerabilities"
      },
      accentColor: "#FF5500"
    },
    {
      id: "healnova-ai",
      name: "Healnova.ai",
      category: "Healthcare AI Infrastructure",
      badge: "MISSION CRITICAL",
      subtitle: "Healthcare AI Platform Deployment & Release Management",
      description: "Overseeing deployment pipelines and secure cloud infrastructure for AI-powered healthcare platforms with strict HIPAA compliance, high uptime requirements, and point-in-time disaster recovery.",
      highlights: [
        "Deployed Dockerized healthcare services consistently across staging and production environments with zero downtime.",
        "Integrated SonarQube and Trivy into automated deployment workflows to elevate code quality standards and infrastructure security.",
        "Managed active infrastructure monitoring, log analysis, active troubleshooting, and release management operations.",
        "Built automated database backup mechanisms and DR recovery procedures, enabling rapid point-in-time recovery during infrastructure crashes."
      ],
      techStack: ["AWS EC2", "Docker", "SonarQube", "Trivy", "PostgreSQL RDS", "Grafana", "Disaster Recovery", "CloudWatch"],
      metrics: {
        rpo: "< 5 mins",
        rto: "< 15 mins",
        downtime: "0 seconds"
      },
      accentColor: "#00F0FF"
    }
  ],

  experiences: [
    {
      role: "DevOps Engineer",
      company: "Match Best Software Pvt. Ltd.",
      location: "Lucknow, India",
      period: "Jan 2026 – Present",
      status: "CURRENT MISSION",
      type: "Full-Time",
      description: "Managing end-to-end CI/CD release automation and production cloud infrastructure for flagship AI platforms.",
      deliverables: [
        "Manage end-to-end CI/CD release automation and production cloud infrastructure for AI platforms including Xelta.ai, Streamplay.ai, and Healnova.ai.",
        "Architect and deploy multi-tier application environments on AWS using EC2, ECS, and EKS with containerized Docker services.",
        "Implement continuous security and code quality gates using SonarQube and Trivy in GitHub Actions/Jenkins pipelines, identifying vulnerabilities pre-deployment.",
        "Configured Nginx reverse proxies and secure routing with complete SSL/TLS Certificate Lifecycle Management to protect high-volume external traffic.",
        "Built automated database backup mechanisms and DR recovery procedures, enabling rapid point-in-time recovery during infrastructure crashes.",
        "Set up real-time observability using Grafana and AWS CloudWatch, establishing health checks and incident analysis workflows to ensure 99.9% system availability.",
        "Enforced Secure-by-Design cloud architectures utilizing AWS CloudFormation infrastructure-as-code templates."
      ],
      tags: ["AWS", "Kubernetes", "EKS", "ECS", "SonarQube", "Trivy", "CloudFormation", "Grafana", "Nginx", "DR"]
    },
    {
      role: "DevOps Engineer",
      company: "HyperTechGlobal Technology",
      location: "India",
      period: "Jan 2025 – Dec 2025",
      status: "COMPLETED",
      type: "Full-Time",
      description: "Pioneered deployment automation, containerization, and infrastructure cost optimization.",
      deliverables: [
        "Managed cloud environments supporting staging and production applications, reducing overall deployment manual effort by 70%.",
        "Administered Source Code Management (SCM) workflows using Git/GitHub and containerized microservices with Docker and Docker Compose on AWS EC2.",
        "Integrated automated static code analysis into release pipelines via SonarQube to uphold quality gates.",
        "Monitored system metrics using Grafana dashboards and enforced strict access control policies including automated password rotations.",
        "Led cloud resource cleanup and decommissioning drives, lowering compute costs and eliminating technical debt."
      ],
      tags: ["AWS EC2", "Docker Compose", "CI/CD Automation", "SonarQube", "Grafana", "FinOps Cleanup", "IAM"]
    },
    {
      role: "Sr. Executive – IT",
      company: "Katyayan Group of Companies",
      location: "India",
      period: "Jul 2023 – Dec 2024",
      status: "COMPLETED",
      type: "Full-Time",
      description: "Administered hybrid enterprise infrastructure comprising Linux and Windows server fleets.",
      deliverables: [
        "Administered hybrid enterprise infrastructure comprising Linux and Windows server fleets across on-premise and cloud nodes.",
        "Handled server provisioning, IAM user access controls, application DNS routing, and enterprise data backup solutions.",
        "Collaborated with cross-functional technical teams to minimize downtime and maintain compliance standards."
      ],
      tags: ["Linux Fleet", "Windows Server", "IAM Access", "DNS Routing", "Enterprise Backups", "Disaster Recovery"]
    }
  ],

  skillsCategories: [
    {
      category: "Cloud Platforms",
      badge: "AWS & AZURE",
      skills: [
        { name: "AWS EC2", level: 95 },
        { name: "AWS ECS & EKS", level: 92 },
        { name: "AWS S3 & CloudFront", level: 95 },
        { name: "AWS VPC & Route 53", level: 90 },
        { name: "AWS IAM & Security", level: 94 },
        { name: "AWS RDS & Multi-AZ", level: 90 },
        { name: "AWS Auto Scaling & ELB", level: 92 },
        { name: "AWS Lambda & CodePipeline", level: 88 },
        { name: "Azure (VM, VNet, NSG, Front Door)", level: 85 }
      ]
    },
    {
      category: "DevOps & CI/CD",
      badge: "AUTOMATION ENGINE",
      skills: [
        { name: "Docker & Containerization", level: 96 },
        { name: "Kubernetes Orchestration", level: 90 },
        { name: "GitHub Actions", level: 95 },
        { name: "Jenkins CI/CD", level: 92 },
        { name: "ArgoCD & GitOps", level: 86 },
        { name: "AWS CloudFormation", level: 90 },
        { name: "Terraform IaC", level: 88 }
      ]
    },
    {
      category: "Security & DevSecOps",
      badge: "ZERO-VULNERABILITY",
      skills: [
        { name: "SonarQube Quality Gates", level: 95 },
        { name: "Trivy Vulnerability Scanning", level: 94 },
        { name: "SSL/TLS Lifecycle Management", level: 92 },
        { name: "SSH Key Management & Rotation", level: 90 },
        { name: "Secure-by-Design IaC", level: 92 }
      ]
    },
    {
      category: "Observability & SRE",
      badge: "99.9% UPTIME",
      skills: [
        { name: "Grafana Dashboards", level: 94 },
        { name: "AWS CloudWatch & Alarms", level: 92 },
        { name: "Nginx Reverse Proxy", level: 94 },
        { name: "DB Disaster Recovery (Point-in-Time)", level: 92 },
        { name: "Linux Administration & Bash", level: 95 }
      ]
    }
  ],

  certifications: [
    {
      code: "SAA-C03",
      title: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      date: "Verified Credential",
      description: "Validation of comprehensive expertise in designing resilient, high-performing, secure, and cost-optimized architectures on AWS.",
      highlight: "Solutions Architect Associate",
      badgeIcon: "aws",
      color: "#FF9900"
    },
    {
      code: "AZ-104",
      title: "Microsoft Certified: Azure Administrator Associate",
      issuer: "Microsoft",
      date: "Verified Credential",
      description: "Subject matter expertise in implementing, managing, and monitoring Microsoft Azure identities, governance, storage, compute, and virtual networks.",
      highlight: "Azure Administrator Associate",
      badgeIcon: "azure",
      color: "#008AD7"
    },
    {
      code: "DIT-NET",
      title: "Diploma in Network Administration",
      issuer: "Jetking, Lucknow",
      date: "Certified Professional",
      description: "Deep foundational mastery of TCP/IP protocols, enterprise routing, switching, subnetting, firewall engineering, and Linux system internals.",
      highlight: "Enterprise Networking",
      badgeIcon: "network",
      color: "#D2FF00"
    }
  ],

  education: [
    {
      degree: "Master of Business Administration (MBA)",
      institution: "Subharthi University",
      timeline: "Expected 2025",
      details: "Strategic technology management, operational excellence, and enterprise systems management."
    },
    {
      degree: "Bachelor's Degree",
      institution: "Kanpur University",
      timeline: "Graduated 2023",
      details: "Analytical foundation, computer applications, and technical problem-solving."
    }
  ]
};

