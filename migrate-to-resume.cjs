const fs = require('fs');
const path = require('path');

const cvPath = path.join(__dirname, 'src/data/cv.json');
const workOldPath = path.join(__dirname, 'src/data/work.json');
const projectsPath = path.join(__dirname, 'src/data/projects.json');
const sitePath = path.join(__dirname, 'src/data/site.json');

// 1. Read existing data
let cvData = {};
if (fs.existsSync(cvPath)) {
    cvData = JSON.parse(fs.readFileSync(cvPath, 'utf8'));
}

let workData = {};
if (fs.existsSync(workOldPath)) {
    workData = JSON.parse(fs.readFileSync(workOldPath, 'utf8'));
}

let siteData = {};
if (fs.existsSync(sitePath)) {
    siteData = JSON.parse(fs.readFileSync(sitePath, 'utf8'));
}

// 2. Map CV Data
const newCvData = {
    basics: {
        label: siteData.author?.title || "Programmer",
        summary: cvData.summary || "",
        about: cvData.about || ""
    },
    education: (cvData.education || []).map(edu => ({
        institution: edu.school || "",
        url: "",
        area: edu.degree || "",
        studyType: "",
        startDate: edu.start || "",
        endDate: edu.end || "",
        score: "",
        courses: edu.coursework ? edu.coursework.split(',').map(c => ({ name: c.trim() })) : []
    })),
    skills: [
        {
            name: "Core Skills",
            level: "",
            keywords: (cvData.skills || []).map(s => ({ name: s.value || "" }))
        }
    ],
    certificates: (cvData.certifications || []).map(cert => ({
        name: cert.value || "",
        date: "",
        issuer: "",
        url: ""
    }))
};

fs.writeFileSync(cvPath, JSON.stringify(newCvData, null, 2));

// 3. Map Projects Data (was Work Experience)
// The user currently has their work experience saved under 'projects' in work.json
const newProjectsData = {
    projects: ((workData.projects || workData.workExperience) || []).map(proj => ({
        name: proj.company || "",
        description: proj.description || "",
        startDate: proj.start || "",
        endDate: proj.end || "",
        url: proj.link || "",
        highlights: (proj.achievements || []).map(a => ({ value: a.value || "" })),
        keywords: (proj.badges || []).map(b => ({ value: b.value || "" }))
    }))
};

fs.writeFileSync(projectsPath, JSON.stringify(newProjectsData, null, 2));

// Initialize empty work history for JSON Resume completeness
const newWorkData = {
    work: []
};
fs.writeFileSync(workOldPath, JSON.stringify(newWorkData, null, 2));

console.log("Migration to JSON Resume standard complete.");
