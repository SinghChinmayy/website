import siteData from './site.json';
import cvData from './cv.json';
import workData from './work.json';

export type NavItem = {
    label: string;
    href: string;
    show: boolean;
    children?: { label: string; href: string; show: boolean; }[];
};

/**
 * Enhanced configuration loaded from src/data/site.json (managed by Keystatic).
 */
export const siteConfig = {
    url: siteData.site.url,
    language: siteData.site.language,
    title: siteData.site.title,
    description: siteData.site.description,
    favicon: siteData.site.favicon,

    author: {
        email: siteData.contact.email,
        ...siteData.author
    },
    cms: siteData.cms,

    contact: {
        tel: '',
        ...siteData.contact
    },
    social: siteData.contact.social,
    contactPage: siteData.contactPage,
    newsletter: siteData.newsletter,

    nav: siteData.nav as NavItem[],
    resume: {
        basics: {
            name: siteData.author.name,
            label: cvData.basics?.label || "Programmer",
            image: siteData.author.profilePic || "",
            email: siteData.contact.email,
            phone: (siteData.contact as any).tel || "",
            url: siteData.site.url,
            summary: cvData.basics?.summary || "",
            location: {
                address: "",
                postalCode: "",
                city: siteData.author.location || "",
                countryCode: "",
                region: ""
            },
            profiles: siteData.contact.social.filter(s => !!s.url).map(s => ({
                network: s.platform,
                username: s.platform,
                url: s.url
            }))
        },
        work: workData.work || [],
        volunteer: [],
        education: cvData.education || [],
        awards: [],
        certificates: cvData.certificates || [],
        publications: [],
        skills: cvData.skills || [],
        languages: [],
        interests: [],
        references: [],
        projects: workData.projects || []
    },
    // Keep legacy `cv` for UI backward compatibility until we adapt `cv.astro` fully
    cv: {
        ...cvData,
        about: cvData.basics?.about,
        summary: cvData.basics?.summary,
        workExperience: workData.projects, // Mapped back to UI's expectation momentarily
        projects: workData.projects,
    },
} as const;
