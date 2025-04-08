import React, { Fragment } from 'react'
import './introduction.css'
import { FaArrowRight, FaBalanceScale, FaBalanceScaleLeft, FaBrain, FaCode, FaExclamationTriangle, FaHighlighter, FaReact, FaRegLightbulb, FaSync } from "react-icons/fa";
import { RiMarkPenFill } from 'react-icons/ri';
import { MdCompareArrows, MdDisplaySettings, MdOutlineClosedCaptionDisabled } from 'react-icons/md';
import { VscGitCompare } from 'react-icons/vsc';
import { GiBookmark, GiBookmarklet, GiCycle } from 'react-icons/gi';
import { GoHistory } from 'react-icons/go';
import { BsBrilliance } from 'react-icons/bs';
import { IoIosArrowDropupCircle } from 'react-icons/io';
import { RxDoubleArrowUp } from 'react-icons/rx';

import framework from '../../../assets/intro/framework.png'
import history from '../../../assets/intro/history.png'
import why_react from '../../../assets/intro/why_react.png'
import advantage_react from '../../../assets/intro/advantage_react.png'
import disadvantage_react from '../../../assets/intro/disadvantage_react.webp'
import lifecycle_spa_mpa from '../../../assets/intro/lifecycle_spa_mpa.gif'
import spa from '../../../assets/intro/spa.jpg'
import mpa from '../../../assets/intro/mpa.jpg'



const introData = {
  title:'Introduction To React js',
  icontop:<FaRegLightbulb className='iconh1'/>,
  subTopic:[
    {
    id:1,
    icon:<FaReact className='iconh2'/>,
    heading:'What is ReactJS?',
    para:['ReactJS is a component-based JavaScript library used to build dynamic and interactive user interfaces. It simplifies the creation of single-page applications (SPAs) with a focus on performance and maintainability.'],
    list:['It is developed and maintained by Facebook and has gained significant popularity due to its efficient rendering techniques, resuable compopnents and active community support.', 'Uses a virtual DOM for faster updates.', 'Supports a declarative approach to designing UI components.', 'Ensures better application control with one-way data binding.'],
    image:''
   },
    {
    id:2,
    icon:<GiBookmark className='iconh2'/>,
    heading:'Framework vs library vs package vs module',
    para:['As a software developer, this is one of the questions that is often asked, and one of a big source of confusion. The difference between frameworks, libraries, packages and modules, what does each one of them represent.'],
    topics: [
      {
        id: 1,
        in_head: "Module",
        description:
          "Is the smallest piece of software. A module is a set of methods or functions ready to be used somewhere else.",
      },
      {
        id: 2,
        in_head: "Package",
        description:
          "Is a collection of modules. What a package does, is gather a number of modules holding in general the same functional purpose. Making it easier to include all the related modules at once.",
      },
      {
        id: 3,
        in_head: "Library",
        description:
          "Well, a library at its core, is a collection of packages. Its purpose is to offer a set of functionalities ready to use without worrying about the subsequent packages. So a library is what you include when you want to add some functionality to your code. It does not force any coding style on you either.",
      },
      {
        id: 4,
        in_head: "Framework",
        description:
          "It's a set of libraries. But this time, the framework does not just offer functionalities, but it also provides an architecture for the development work.",
      }],
    image:framework
   },
   {
    id:3,
    icon:<GoHistory className='iconh2'/>,
    heading:'History and evolution of React',
    para:['ReactJS is a component-based JavaScript library used to build dynamic and interactive user interfaces. It simplifies the creation of single-page applications (SPAs) with a focus on performance and maintainability.'],
    list:['Current version of React.JS is V18.0.0 (April 2022).', 'Initial Release to the Public (V0.3.0) was in July 2013.', "Facebook Software Engineer, Jordan Walke, created it.", 'Current version of create-react-app is v5.0.1 (April 2022).','create-react-app includes built tools such as webpack, Babel, and ESLint.'],

    floatImage:history,

    para2:['Facebook faced a challenging task in 2011 when it wanted to build a faster, more responsive, and more dynamic user interface to offer users a richer user experience. ', 'The React framework was created by one of Facebook’s software engineers to simplify the development process by providing a more organized and structured way to build dynamic and interactive user interfaces. ', "Since its release to the open-source community, React quickly gained popularity in JavaScript’s ecosystem due to its revolutionary approach to DOM manipulation and user interfaces."]
   },
   {
    id:4,
    icon:<FaExclamationTriangle className="iconh2" />,
    heading:'Why choose React?',
    para:['Today, React dominates all other front-end development frameworks. Here’s why:'],
    list:['Creating dynamic web applications is easier with React since it requires less coding and provides more functionality than JavaScript, where coding can get very complex very quickly.', "Improved performance: React uses Virtual DOM, resulting in faster web applications. A Virtual DOM compares the components’ previous states and updates only the items that have changed, rather than updating all components, as conventional web applications do.", 'Reusable components: Components are the building blocks of any React application, and a single application typically consists of multiple components. Reusing these components throughout the application dramatically reduces development time since they have logic and controls.'],

    floatImage:why_react,

    list2:['A React app is designed with a unidirectional data flow. An application’s data flows in a single direction, so debugging errors and identifying where a problem occurs at any given moment is easier.', 'There is a small learning curve with React, as it mainly combines HTML and JavaScript concepts with some beneficial additions.', 'A framework called React Native, derived from React itself, is prevalent and is used for building beautiful mobile applications. Therefore, it can be used to create both web and mobile applications.', 'Facebook has released a Chrome extension that makes it easier and faster to debug React web applications.']
   },
   {
      id:5,
      icon:<FaCode className='iconh2'/>,
      heading:'How does React Works?',
      para:['React creates a VIRTUAL DOM in memory.', "Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.",
        "React only changes what needs to be changed. React finds out what changes have been made, and changes only what needs to be changed.", "You will learn the various aspects of how React does this in the rest of the notes."
      ],
      list:['It is developed and maintained by Facebook and has gained significant popularity due to its efficient rendering techniques, resuable compopnents and active community support.', 'Uses a virtual DOM for faster updates.', 'Supports a declarative approach to designing UI components.', 'Ensures better application control with one-way data binding.']
   },
   {
     id:6,
     icon:<MdDisplaySettings className='iconh2'/>,
     heading:'Advantages of React JS',
     list:["React.js builds a customized virtual DOM. Because the JavaScript virtual DOM is quicker than the conventional DOM, this will enhance the performance of apps.", "It makes a unique UI possible.",
      "Search engine friendly ReactJS.", "Modules and valid data make larger apps easier to manage by increasing readability."
    ],
    list2:["React makes the entire scripting environment process simpler.", "React integrates various architectures.", "It makes advanced maintenance easier and boosts output.","Guarantees quicker rendering", "The availability of a script for developing mobile apps is the best feature of React.", "A large community supports ReactJS."],
    floatImage:advantage_react
  },
  {
    id:7,
    icon:<MdOutlineClosedCaptionDisabled className='iconh2'/>,
    heading:'Disadvantages of React JS',
    list:["Steep learning curve: React’s concepts and abstractions can be challenging to understand, especially for developers new to front-end development.","Over-reliance on third-party libraries: React is often used with many third-party libraries, making it difficult to understand and debug the codebase.", "Poor server-side rendering performance: React’s server-side rendering performance can be slower than other options, such as Angular, due to its virtual DOM.", "Inconsistent documentation: React’s documentation is extensive, but it can be challenging to find the information you need, and some parts of the documentation may be outdated."
    ],
    list2:["Large bundle size: React applications can have a large JavaScript bundle size, affecting performance on slower devices or for users with low bandwidth.", "The complexity of state management: React’s simplicity can make it challenging to manage the state of large applications, especially when using its features, such as hooks, in complex ways."],
    floatImage:disadvantage_react,
    para2:["Despite these limitations, React remains a popular choice for front-end development, and its benefits often outweigh its limitations for many developers and organizations."]
  },
  {
    id:8,
    icon:<FaBalanceScaleLeft className='iconh2'/>,
    heading:'React vs. Other Frameworks (Angular, Vue)',
    para:["Here is the comparison between three frontend frameworks: React, Angular, and Vue. We’ll delve into their key features, architecture, performance, popularity, and community support."],
    columns: ["Criteria", "React", "Angular", "Vue"],
    tableData: [
      {
        criteria: "Popularity",
        React:
        "Highly popular, used by Uber, Airbnb, Netflix, Yahoo!, and The New York Times.",
        Angular:
        "Popular among enterprise applications, used by Google, Upwork, and MS Office.",
        Vue: "Rapidly growing, used by UpWork, Netflix, and Nintendo. Highly rated on GitHub.",
      },
      {
        criteria: "Architecture",
        React:
        "Component-based, flexible design pattern, third-party integrations for state management, routing, etc.",
        Angular:
        "Follows MVC architecture, component-based, includes modules, templates, and services.",
        Vue: "Follows MVVM pattern, supports Single File Components (SFCs) for better modularity.",
      },
      {
        criteria: "Ecosystem",
        React:
        "Strong third-party ecosystem, React Native for mobile apps, uses JSX for UI templates.",
        Angular:
        "Supports Redux-like state management, integrates with NativeScript, includes Angular Material UI components.",
        Vue: "Vuex for state management, integrates with Laravel, acts as both a library and framework.",
      }],
      para2:["React, Angular, or Vue, all of these frameworks are based purely on JavaScript thus, they’re not dependent on any third-party tools. Each framework has unique features that can be used by developers whenever required. So, instead of giving a conclusion on going for one framework, it totally depends on you which framework you want to go for. Use the right framework based on the requirement of the project."]
    },
    
    {
       id:9,
       icon:<BsBrilliance className='iconh2' />,
       heading:'What is an Single Page Applications(SPAs)?',
       para:["As the names suggests, it is a single page where all information is available on the same page. It is even known as a type of web application architecture used to manage the components of a web app.", "A single-page application (SPA) is a web application that loads a single HTML page and updates it dynamically with JavaScript. This means that users don't need to wait for the entire page to reload when they click a link or submit a form."
       ],
      para2:["This approach enables faster transitions, mimicking the fluidity of native mobile apps. SPAs offer responsive and seamless user experiences by leveraging technologies like Angular, React.js, and Vue.js. They're ideal for creating interactive and rapid web applications.", "Examples include Gmail, Google Maps, Paypal, and Airbnb. ", "If you seek a fast, responsive, and easy-to-maintain web application, SPAs are an excellent choice. To delve deeper, explore our comprehensive guide on SPAs, covering their workings and advantages, and providing a precise understanding of the concept."],
      floatImage:spa
    },
    {
      id:'10',
      icon:<GiBookmarklet className='iconh2'/>,
      heading:"The Pros of SPAs",
      list:["Smooth User Experience: SPAs provide seamless navigation without full page reloads, resulting in a more fluid and desktop-like feel for users.","	Smooth User Experience: SPAs provide seamless navigation without full page reloads, resulting in a more fluid and desktop-like feel for users.","Faster Load Times: Initial loading of the SPA occurs once, and subsequent interactions fetch data via APIs, reducing load times.","Rich Interactivity: SPAs leverage JavaScript frameworks to create dynamic interfaces with real-time updates.","•	Better for Web Apps: Ideal for web applications that require high interactivity, such as social media platforms, dashboards, and collaboration tools."]
    },
    {
      id:'11',
      icon:<GiBookmarklet className='iconh2'/>,
      heading:"The Cons of SPAs",
      list:["Initial Load Time : The initial load can be slower due to loading JavaScript frameworks and dependencies.", "SEO Challenges : SPAs may face SEO difficulties since search engines traditionally index separate HTML pages.","Complexity : Developing SPAs involves managing client-side routing, state management, and handling asynchronous data fetching.","Back Button Behavior : Handling browser history and the back button can be tricky in SPAs."]
    },
    {
      id:"12",
      icon:<BsBrilliance className='iconh2' />,
      heading:"What is Multi Page Applications(MPA)?",
      para:["A Multi-Page Application, or MPA, is a type of website or web application where each page is separately created and sent to our web browser by a server."],
      floatImage:mpa,
      para2:["A multi-page application is a form of web application in which each user action causes a new page to load from the server. MPAs are made up of multiple static pages, each with a specific purpose, such as a homepage, product catalog, contact form, or user profile. These pages typically have unique layouts and functionalities tailored to their specific roles.","Examples of MPAs include eBay, Amazon, Facebook, and Twitter.", "They offer users a familiar browsing experience akin to navigating through different sections of a traditional website, with each page providing a dedicated interface for various tasks and content."]
    },
    {
      id:13,
      icon:<GiBookmarklet className='iconh2'/>,
      heading:"The Pros of MPAs",
      list:["Modularity : MPAs divide functionality into separate pages, making it easier to manage and maintain code.", "SEO-Friendly : Each page can be optimized for certain keywords to increase search engine visibility.",
      "Back Button Behavior : MPAs naturally handle browser history and back button navigation.", "Graceful Degradation : If JavaScript fails to load, MPAs still display content."]
    },
    {
      id:14,
      icon:<GiBookmarklet className='iconh2'/>,
      heading:"The Cons of MPAs",
      list:["Page Reloads : MPAs require full page reloads when navigating between sections, impacting user experience.", "Slower Interactions : Loading new pages can be slower compared to SPAs’ dynamic updates.",
      "Server Load : Each page request hits the server, potentially increasing server load.", "Complex Navigation Logic : Managing navigation across multiple pages can be intricate."]
    },
    {
      id:15,
      icon:<FaBalanceScaleLeft className='iconh2'/>,
      heading:"Differences between SPA and MPA",
      para:[ "Here is a comparison between Single Page Applications (SPA) and Multi-Page Applications (MPA). This table highlights the key differences between them based on various features like performance, SEO, server load, and use cases."],
      columns: ["Feature", "Single Page Application (SPA)", "Multi-Page Application (MPA)"],
      tableSpaMpa: [
        {
          feature: "Definition",
          SPA: "Loads a single HTML page and dynamically updates content without refreshing the page.",
          MPA: "Consists of multiple pages where each page loads separately from the server.",
        },
        {
          feature: "Performance",
          SPA: "Fast user experience as only data is fetched and rendered dynamically.",
          MPA: "Slower due to full page reloads and multiple server requests.",
        },
        {
          feature: "Development Complexity",
          SPA: "More complex due to heavy reliance on JavaScript frameworks like React, Angular, or Vue.js.",
          MPA: "Simpler to develop using traditional server-side rendering techniques.",
        },
        {
          feature: "SEO",
          SPA: "Challenging due to dynamic content, requires additional SEO optimizations.",
          MPA: "Better SEO as each page has a unique URL and is easily crawled by search engines.",
        },
        {
          feature: "Server Load",
          SPA: "Reduced load on the server as most of the processing happens on the client-side.",
          MPA: "Higher server load as each request reloads a new page.",
        },
        {
          feature: "Navigation",
          SPA: "Smooth transitions using JavaScript without full page reloads.",
          MPA: "Requires full page reloads, leading to a slower navigation experience.",
        },
        {
          feature: "Use Cases",
          SPA: "Best for dynamic web applications like social media platforms and dashboards.",
          MPA: "Suitable for content-heavy websites like blogs, e-commerce sites, and news portals.",
        },
      ]
    },
    {
      id:16,
      icon:<GiCycle className='iconh2'/>,
      heading:"Lifecycle of SPAs",
      para:["In a Single Page Application (SPA) lifecycle, the initial page load involves fetching all necessary JavaScript and HTML, then subsequent user interactions trigger only data updates through AJAX requests, dynamically rendering content within the same page without full reloads."],
      list2:["Initial Page Load: User visits the website, the browser fetches the initial HTML, CSS, and JavaScript files. ", "User Interaction: User clicks a link on the page, triggering an AJAX request to the server.", "Data Fetching: Server sends back only the necessary data related to the new content.", "Client-Side Rendering: JavaScript on the client-side updates the DOM with the new data, dynamically changing the page content without a full reload."],
      floatImage:lifecycle_spa_mpa
    },
    {
      id:17,
      icon:<GiCycle className='iconh2'/>,
      heading:"Lifecycle of MPAs",
      para:["Multi-Page Application (MPA) lifecycle, each navigation to a new page results in a complete server request and full page reload, sending a new HTML document with all required assets to the client every time."],
      list:["Initial Page Load: User visits the website, the browser fetches the initial HTML page. ", "User Navigation: User clicks a link to navigate to a new page.", "Server Request: The browser sends a new request to the server for the new HTML page.", "Full Page Reload: Server sends the complete new HTML page, causing the browser to fully refresh the page."]
    }
  ]
  
}


 
const Introduction = ({scrollToTop}) => {

  return (
      <div className='container'>
        <h1>{introData.icontop}{introData.title}</h1>
        <hr />
          {
          introData.subTopic.map((ele,index)=>{
            return (
             <Fragment key={index}>
               <section className='section'>
              <h2>{ele.icon}{ele.heading}</h2>
              {
                ele.para ?(
                  <div className='para'>{ele.para.map((paraItem, idx) => <p key={idx}>{paraItem}</p>)}</div>
                ):("")
              }
              {
               ele.list  ? (
               <ul>
                {ele.list.map((item, idx) => <li key={idx}>{item}</li>)}
               </ul>
               ) : ("")
              }
              {
              ele.topics ?(
                <>
                {ele.topics.map((topic) => (
                <div key={topic.id}>
                 <h4>
                  <RiMarkPenFill className="iconh1" /> {topic.in_head}
                 </h4>
                <p>{topic.description}</p>
                </div>
                ))}
                </>
              ):("")
            }
              {
              ele.image ?(
                <center><img src={ele.image} alt="" /></center>
              ):("")
            }
              {
              ele.floatImage ?(
                  <div className={`para-image ${index % 2 === 0 ? 'left-image' : 'right-image'}`}>
                  <div className="image">
                  <img src={ele.floatImage} alt="" />
                  </div>
                  <div className="para">
                  {
                    ele.list2  ? (
                    <ul>
                     {ele.list2.map((itemlist2, idx) => <li key={idx}>{itemlist2}</li>)}
                    </ul>
                    ) : ("")
                  }    
                  {
                    ele.para2  ? (
                      <div className='para2'>{ele.para2.map((itemp, idx) => <p key={idx}>{itemp}</p>)}</div>
                    ) : ("")
                  }    
                  </div>
                  </div> 
                 ):("")
               }
               {/* difference of React,Angular,Vue */}
                    {
                    ele.tableData ?(
                      <table className="comparison-table">
                   <thead>
                     <tr>
                       {ele.columns.map((col, index) => (
                         <th key={index}>{col}</th>
                       ))}
                     </tr>
                   </thead>
                   <tbody>
                     {ele.tableData.map((row, index) => (
                       <tr key={index}>
                         <td><strong>{row.criteria}</strong></td>
                         <td>{row.React}</td>
                         <td>{row.Angular}</td>
                         <td>{row.Vue}</td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
                    ):("")
                  }
                  {/* difference of spa and mpa */}
                  {
                    ele.tableSpaMpa ?(
                      <table>
                        <thead>
                         <tr>
                         {ele.columns.map((col, index) => (
                        <th key={index}>{col}</th>
                        ))}
                         </tr>
                       </thead>
                       <tbody>
                         {ele.tableSpaMpa.map((row, index) => (
                           <tr key={index}>
                             <td><strong>{row.feature}</strong></td>
                             <td>{row.SPA}</td>
                             <td>{row.MPA}</td>
                           </tr>
                         ))}
                       </tbody>
                     </table>
                    ):("")
                  }

                         
              </section>
             </Fragment>
            )
          })
        }

       <button className="scroll-to-top" onClick={scrollToTop}><RxDoubleArrowUp /></button>
        
      </div>
      
  )
}

export default Introduction