const fs = require('fs');

function reorderFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  const aboutRegex = /\s*\{\/\* About Section \*\/\}[\s\S]*?(?=\s*\{\/\* (Certifications|Skills|Projects|Featured Blog Articles|Contact) Section \*\/\}|\s*<\/main>)/;
  const certsRegex = /\s*\{\/\* Certifications Section \*\/\}[\s\S]*?(?=\s*\{\/\* (About|Skills|Projects|Featured Blog Articles|Contact) Section \*\/\}|\s*<\/main>)/;
  const skillsRegex = /\s*\{\/\* Skills Section \*\/\}[\s\S]*?(?=\s*\{\/\* (About|Certifications|Projects|Featured Blog Articles|Contact) Section \*\/\}|\s*<\/main>)/;
  const projectsRegex = /\s*\{\/\* Projects Section \*\/\}[\s\S]*?(?=\s*\{\/\* (About|Certifications|Skills|Featured Blog Articles|Contact) Section \*\/\}|\s*<\/main>)/;
  const blogRegex = /\s*\{\/\* Featured Blog Articles Section \*\/\}[\s\S]*?(?=\s*\{\/\* (About|Certifications|Skills|Projects|Contact) Section \*\/\}|\s*<\/main>)/;
  const contactRegex = /\s*\{\/\* Contact Section \*\/\}[\s\S]*?(?=\s*<\/main>)/;

  const aboutMatch = content.match(aboutRegex)[0];
  const certsMatch = content.match(certsRegex)[0];
  const skillsMatch = content.match(skillsRegex)[0];
  const projectsMatch = content.match(projectsRegex)[0];
  const blogMatch = content.match(blogRegex)[0];
  const contactMatch = content.match(contactRegex)[0];

  // Adjust numbering
  const newAbout = aboutMatch.replace(/\/\/ 0\d\./, '// 01.');
  const newProjects = projectsMatch.replace(/\/\/ 0\d\./, '// 02.');
  const newCerts = certsMatch.replace(/\/\/ 0\d\./, '// 03.');
  const newSkills = skillsMatch.replace(/\/\/ 0\d\./, '// 04.');
  const newBlog = blogMatch.replace(/\/\/ 0\d\./, '// 05.');
  const newContact = contactMatch.replace(/\/\/ 0\d\./, '// 06.');

  const orderedSections = newAbout + newProjects + newCerts + newSkills + newBlog + newContact;

  // The sections are all inside `<main> ... </main>`. Specifically after the `<section id="home"> ... </section>`.
  // Let's replace the whole chunk.
  
  const sectionsRegex = new RegExp(
    aboutMatch.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '|' +
    certsMatch.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '|' +
    skillsMatch.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '|' +
    projectsMatch.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '|' +
    blogMatch.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '|' +
    contactMatch.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'
  );

  let newContent = content.replace(sectionsRegex, '');
  
  // Now we need to insert orderedSections right before `</main>`
  newContent = newContent.replace(/\s*<\/main>/, orderedSections + '\n      </main>');

  fs.writeFileSync(filePath, newContent);
  console.log(`Reordered sections in ${filePath}`);
}

reorderFile('src/app/page.tsx');
reorderFile('src/app/backend/page.tsx');
reorderFile('src/app/full-stack/page.tsx');

