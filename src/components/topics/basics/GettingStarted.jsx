import React from 'react'
import { CiRoute, CiSquareQuestion } from 'react-icons/ci';
import { FaCode, FaReact, FaRegFolder, FaSync } from 'react-icons/fa';
import { GrConfigure } from 'react-icons/gr';
import { MdInstallDesktop, MdRoute } from 'react-icons/md';
import { RxDoubleArrowUp } from 'react-icons/rx';
import { TbBrandTailwind, TbBrandTypescript, TbFolder } from 'react-icons/tb';


const reactGuide = {
  title: "Getting Started with React",
  prerequisites: {
    title: "Prerequisites for installing React",
    description: "Before installing React, ensure you have the following installed on your system:",
    requirements: [
      { item: "Node.js", note: "(Recommended: Latest LTS version) ✅" },
      { item: "npm (Node Package Manager)", note: "(Comes with Node.js) ✅" },
      { item: "Code Editor", note: "(Recommended: Visual Studio Code) ✅" }
    ],
    verificationSteps: [
      "Open the terminal (Command Prompt, PowerShell, or macOS Terminal) and run:",
      "node -v   # Check Node.js version",
      "npm -v    # Check npm version"
    ],
    downloadLink: "https://nodejs.org",
    downloadNote: "If you don’t have Node.js installed, download and install it from the link above."
  },

  installation:{ 
    title:"Installation Methods",
    para:"There are two main ways to install and start a React project:",
    install:[
    {
      id: 1,
      method: "1. Create React App (CRA)",
      steps: [
        {
          list:"Create a new React project:",
          link:" npx create-react-app my-app"

        },
        {
          list:"Navigate to the project directory:",
          link:" cd my-app"

        },
        {
          list:"Start the development server:",
          link:" npm start"

        }
      ]
    },
    {
      id: 2,
      method: "2. Vite (Faster Alternative)",
      steps: [
        {
          list:"Run the command:",
          link:"npm create vite@latest my-app --template react"
        },
        {
          list:"Navigate to the project directory:",
          link:" cd my-app"
        },
        {
          list:"Install dependencies:",
          link:"npm install"
        },
        {
          list:"Start the development serve:",
          link:" npm run dev"
        }
      ]
    }
  ]},

  folderStructure: {
    title: "Understanding React Folder Structure",
    description: "After installing React, the project structure looks like this:",
    structure: [
      { name: "node_modules/", description: "Contains installed dependencies (do not modify)" },
      { name: "public/", description: "Static files (index.html, favicons, etc.)" },
      { name: "src/", description: "Main source code folder" },
      { name: "src/components/", description: "Folder to store reusable components" },
      { name: "src/assets/", description: "Store images, fonts, etc." },
      { name: "src/styles/", description: "CSS or SCSS files" },
      { name: "package.json", description: "Project configuration and dependencies" },
      { name: "README.md", description: "Documentation file" },
    ],
    code:[
"│── node_modules/      ",
"│── public/            ",
"│── src/                ",
"│   ├── App.js         ",
"│   ├── index.js       ",
"│── .gitignore          ",
"│── package.json        ",
"│── README.md           "
    ]
  },

  commands: {
    title:"Common Commands",
    commandObj:[
    { id: 1, command: "npm start", description: "Start development server (CRA)" },
    { id: 2, command: "npm run dev", description: "Start development server (Vite)" },
    { id: 3, command: "npm run build", description: "Build for production" }
  ]},

  additionalConfigurations: [
    {
      id: 1,
      icon:<TbBrandTypescript className='iconh1'/>,
      title: "Using TypeScript",
      steps: [
        "Run: npx create-react-app my-app --template typescript",
        "This sets up React with TypeScript instead of JavaScript."
      ]
    },
    {
      id: 2,
      icon:<TbBrandTailwind className='iconh1'/>,
      title: "Using Tailwind CSS",
      steps: [
        "Run: npm install -D tailwindcss postcss autoprefixer",
        "Run: npx tailwindcss init -p",
        "Configure tailwind.config.js and import Tailwind into your CSS."
      ]
    },
    {
      id: 3,
      icon:<MdRoute  className='iconh1'/>,
      title: "Adding React Router",
      steps: [
        "Run: npm install react-router-dom",
        "Import and configure routing inside your React app."
      ]
    }
  ]
};


const GettingStarted = ({scrollToTop}) => {
  return (
    <div className="container">
      {/* Title */}
      <h1 className='title'><FaReact className='iconh1'/>{reactGuide.title}</h1>
      <hr />

       {/* Prerequisites Section */}
       <section className='section'>
        <h2><CiSquareQuestion className='iconh2'/>{reactGuide.prerequisites.title}</h2>
        <p>{reactGuide.prerequisites.description}</p>
        <ul>
          {reactGuide.prerequisites.requirements.map((req, idx) => (
            <li key={idx}>
              <strong>{req.item}</strong> {req.note}
            </li>
          ))}
        </ul>
        <h4>Verification Steps</h4>
        <ul>
          {reactGuide.prerequisites.verificationSteps.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ul>
        <p className='dld'>
          <strong>Download Link:</strong>{" "}
          <a href={reactGuide.prerequisites.downloadLink} target="_blank" >
            {reactGuide.prerequisites.downloadLink}
          </a>
        </p>
        <p>{reactGuide.prerequisites.downloadNote}</p>
      </section>


      {/* Installation Section */}
      <section className='section'>
        <h2><MdInstallDesktop className='iconh2'/>{reactGuide.installation.title}</h2>
        <p>{reactGuide.installation.para}</p>
        {reactGuide.installation.install.map((method) => (
          <div key={method.id} className="installation">
            <h3>{method.method}</h3>
            <ul>
              {method.steps.map((step, idx) => (
                <li key={idx}>{step.list}
                <pre> {step.link}</pre>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Folder Structure Section */}
      <section className='section'>
        <h2><TbFolder className='iconh2'/>{reactGuide.folderStructure.title}</h2>
        <p>{reactGuide.folderStructure.description}</p>
        <ul>
          {reactGuide.folderStructure.structure.map((folder, idx) => (
            <li key={idx}>
              <strong>{folder.name}</strong>: {folder.description}
            </li>
          ))}
        </ul>
        <div  className='code'>
        {
          reactGuide.folderStructure.code.map((codes,idx)=>(
              <pre >{codes}</pre>
          ))
        }
        </div>
      </section>

      {/* Commands Section */}
      <section className='section'>
        <h2><FaCode className='iconh2'/>{reactGuide.commands.title}</h2>
        <ul>
          {reactGuide.commands.commandObj.map((cmd) => (
            <li key={cmd.id}>
              <code>{cmd.command}</code>: {cmd.description}
            </li>
          ))}
        </ul>
      </section>

      {/* Additional Configurations */}
      <section className='section'>
        <h2><GrConfigure className='iconh2'/>Additional Configurations</h2>
        {reactGuide.additionalConfigurations.map((config) => (
          <div key={config.id} className="config-section">
            <h3>{config.icon} {config.title}</h3>
            <ul>
              {config.steps.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      <button className="scroll-to-top" onClick={scrollToTop}><RxDoubleArrowUp /></button>

    </div>
  )
}

export default GettingStarted