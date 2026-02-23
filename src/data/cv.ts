export interface CV {
    name: string;
    title: string;
    location: string;
    locationLink: string;
    about: string;
    summary: string;
    personalWebsiteUrl: string;
    contact: Contact;
    projects: Project[];
    education: Education[];
    skills: string[];
    certifications: string[];
}

export interface Contact {
    email: string;
    tel: string;
    social: Social[];
}

export interface Social {
    name: string;
    url: string;
}

export interface Project {
    company: string;
    link: string;
    title: string;
    start: string;
    end: string | null;
    description: string;
    achievements?: string[];
    badges?: string[];
}

export interface Education {
    school: string;
    degree: string;
    start: string;
    end: string | null;
    coursework?: string;
}

export const CV_DATA: CV = {
    name: "Chinmay Singh",
    title: "Systems & Backend Engineering",
    location: "Bangalore, India",
    locationLink: "https://www.google.com/maps/place/Bengaluru",
    about: "Systems-oriented CS student passionate about backend development, networking, and self-hosted infrastructure.",
    summary: `Systems-oriented computer science student with hands-on experience in backend development, networking, 
        and self-hosted infrastructure. Passionate about building reliable systems end-to-end — from servers and 
        networking to applications and data pipelines. Seeking a technical internship in backend, infrastructure, 
        or platform engineering.`,
    personalWebsiteUrl: "https://chinmaysingh.me",
    contact: {
        email: "singhchinmayy@gmail.com",
        tel: "+919472174597",
        social: [
            { name: "GitHub", url: "https://github.com/SinghChinmayy" },
            { name: "LinkedIn", url: "https://linkedin.com/in/singhchinmay" },
        ],
    },
    projects: [
        {
            company: "VPS Infrastructure & Self-Hosted Services Platform",
            link: "https://github.com/SinghChinmayy",
            title: "Personal Project",
            start: "2024",
            end: "Present",
            description: "Designed, deployed, and maintained a self-managed VPS and ARM-based Linux infrastructure using Docker to run and operate self-hosted services with focus on reliability, security, and full lifecycle management.",
            achievements: [
                "Implemented secure remote access using WireGuard and Tailscale for private network connectivity.",
                "Configured Caddy reverse proxy with domain-based routing and automated HTTPS certificate management.",
                "Deployed and managed containerized services using Docker and Docker Compose with Portainer for orchestration.",
                "Integrated AdGuard DNS filtering solutions for network-wide ad blocking and privacy.",
                "Managed DNS configuration through Cloudflare for custom domain exposure.",
            ],
            badges: ["Docker", "Docker Compose", "Linux", "Caddy", "Tailscale", "WireGuard", "Cloudflare", "Portainer", "AWS EC2"],
        },
        {
            company: "Modular NLP Search Engine",
            link: "https://github.com/SinghChinmayy/search-engine",
            title: "In Progress",
            start: "2025",
            end: "Present",
            description: "Designing a modular pipeline for document ingestion, normalization, tokenization, and indexing with clean architecture and separation of concerns.",
            achievements: [
                "Implemented inverted index-based keyword search for efficient document retrieval.",
                "Built modular pipeline architecture with pluggable components for extensibility.",
                "Focused on clean architecture with separation of concerns for scalability.",
            ],
            badges: ["Python", "NLP", "Data Structures"],
        },
        {
            company: "C++ CLI Tool – FFmpeg Wrapper",
            link: "https://github.com/SinghChinmayy",
            title: "Personal Project",
            start: "2024",
            end: "Present",
            description: "Developed a modular C++ command-line application to abstract and orchestrate FFmpeg media workflows in a Linux system environment.",
            achievements: [
                "Implemented argument parsing, external process execution, and structured error handling.",
                "Designed with focus on maintainability and extensibility for future GUI transition.",
                "Built in C++ for performance and learning systems programming fundamentals.",
            ],
            badges: ["C++", "Linux", "FFmpeg", "CLI"],
        },
        {
            company: "Multi-Model Agentic AI Prototype",
            link: "https://github.com/SinghChinmayy",
            title: "Rakuten Hackathon",
            start: "2024",
            end: "2024",
            description: "Collaborated in a team to integrate multiple AI components into a cohesive system under competitive time constraints.",
            achievements: [
                "Contributed to coding, debugging, and subsystem integration across the full stack.",
                "Advanced to the penultimate round of the competition.",
            ],
            badges: ["Python", "AI", "Teamwork"],
        },
        {
            company: "Identity & Access Management System",
            link: "https://github.com/SinghChinmayy",
            title: "Academic Project",
            start: "2024",
            end: "2024",
            description: "Designed and implemented backend logic and database schema for user authentication and role-based access control.",
            achievements: [
                "Built authentication logic and role-based access concepts with a MySQL backend.",
                "Developed frontend using HTML, CSS, and JavaScript for the admin interface.",
                "Supported the complete software lifecycle including development, testing, debugging, and issue resolution.",
            ],
            badges: ["Python", "MySQL", "HTML", "CSS", "JavaScript"],
        },
    ],
    education: [
        {
            school: "Manipal Academy of Higher Education",
            degree: "Bachelor of Technology — Computer Science",
            start: "2023",
            end: "2027",
            coursework: "Data Structures & Algorithms, Databases, Computer Networks, Operating Systems",
        },
    ],
    skills: [
        "C++", "C", "Python", "Docker", "Docker Compose", "Linux", "Git", "AWS (EC2, S3)",
        "PostgreSQL", "MySQL", "WireGuard", "Tailscale", "Caddy", "Cloudflare",
        "HTML", "CSS", "Bash", "Networking Fundamentals",
    ],
    certifications: [
        "Learn Fundamentals Of Computer Programming With C Language",
        "Digital Systems: From Logic Gates to Processors",
        "Introduction to Java and Object-Oriented Programming",
        "Docker for Absolute Beginners",
        "Ordered Data Structures",
    ],
};