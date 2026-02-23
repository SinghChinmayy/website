const fs = require('fs');
const path = require('path');

const sitePath = path.join(__dirname, 'src/data/site.json');
const cvPath = path.join(__dirname, 'src/data/cv.json');
const workPath = path.join(__dirname, 'src/data/work.json');

const siteData = JSON.parse(fs.readFileSync(sitePath, 'utf8'));

if (siteData.cv) {
    const { workExperience, ...cvData } = siteData.cv;

    fs.writeFileSync(cvPath, JSON.stringify(cvData, null, 2));
    fs.writeFileSync(workPath, JSON.stringify({ workExperience }, null, 2));

    delete siteData.cv;
    fs.writeFileSync(sitePath, JSON.stringify(siteData, null, 2));

    console.log('Migration successful');
} else {
    console.log('Already migrated');
}
