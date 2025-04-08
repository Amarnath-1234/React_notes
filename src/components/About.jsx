import React from 'react'
import "./styles/about.css"
import Lottie from 'lottie-react'
import reactAnimation from '../assets/react-animation.json'
import learningAnimation from '../assets/learning animation.json'
import { FaBookOpen, FaSearch, FaSun, FaCode, FaLaptop, FaChalkboardTeacher, FaUserGraduate, FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb } from 'react-icons/si'
import { IoLogoCss3 } from 'react-icons/io'
import { Link } from 'react-router-dom'

const About = () => {
    const features = [
        {
          id: 1,
          icon: <FaBookOpen />,
          title: "Structured Notes",
          description: "Organized and easy-to-follow notes for every React concept.",
        },
        {
          id: 2,
          icon: <FaSearch />,
          title: "Quick Search",
          description: "Find any topic instantly with a powerful search feature.",
        },
        {
          id: 3,
          icon: <FaSun />,
          title: "Dark Mode",
          description: "Switch between light and dark themes for better readability.",
        },
        {
          id: 4,
          icon: <FaCode />,
          title: "Code Examples",
          description: "Practical examples to help you understand each concept.",
        },
      ];

      const audience = [
        {
          id: 1,
          icon: <FaUserGraduate />,
          title: "Students",
          description: "Perfect for students who want structured React learning resources.",
        },
        {
          id: 2,
          icon: <FaChalkboardTeacher />,
          title: "Educators",
          description: "A great reference for teachers and mentors to guide their students.",
        },
        {
          id: 3,
          icon: <FaCode />,
          title: "Developers",
          description: "Useful for both beginners and experienced developers learning React.",
        },
        {
          id: 4,
          icon: <FaLaptop />,
          title: "Self-Learners",
          description: "For individuals who love learning React at their own pace.",
        },
      ];

      const techs = [
        { id: 1, name: "React", image: <FaReact /> },
        { id: 2, name: "Node.js", image: <FaNodeJs /> },
        { id: 3, name: "MongoDB", image: <SiMongodb /> },
        { id: 4, name: "Express.js", image: <SiExpress /> },
        { id: 5, name: "CSS", image: <IoLogoCss3 /> },
      ];
      const teamMembers = [
        {
          id: 1,
          name: "Sushree",
          image: "src/assets/profilepicture/Sushree1.jpg",
        },
        {
          id: 2,
          name: "Bibek",
          image: "src/assets/profilepicture/Bibek.jpg",
        },
        {
          id: 3,
          name: "Amarnath",
          image: "src/assets/profilepicture/Amarnath.jpg",
        },
        {
          id: 4,
          name: "Anup",
          image: "src/assets/profilepicture/Anup.jpg",
        },
        {
          id: 5,
          name: "Amarjeet",
          image: "src/assets/profilepicture/Amarjeet.jpg",
        },
        {
          id: 6,
          name: "Aryan",
          image: "src/assets/profilepicture/Aryan.jpg",
        },
      ];
      
      
  return (
    <div className='about-container'>
        <section className="about-intro">
      <div className="intro-content">
        <h2 className='sh_h2'>Welcome to <span>ReactNotes 📘</span></h2>
        <p className='sh_p'>
          A well-structured platform to help developers and students master 
          ReactJS from the basics to advanced concepts.  
          Learn with interactive examples, organized notes, and real-world projects.
        </p>
        <button className="cta-button"><Link to="/home" className='link1'>Start Learning Now</Link></button>
      </div>
      <div className="intro-visual">
        <Lottie animationData={reactAnimation} loop={true} />
      </div>
    </section>

    <section className="purpose-section">
        <div className="purpose-content">
            <h2 className='sh_h2'>Why <span>ReactNotes?</span></h2>
            <p className='sh_p'>
                Learning React can be overwhelming. With scattered resources, outdated articles, 
                and long documentation, beginners often struggle to find a *clear learning path*.
            </p>
            <p className='sh_p'>
                <strong>ReactNotes</strong> was built to provide *structured, easy-to-understand, and regularly updated notes*, 
                making React learning seamless for students and developers.
            </p>
            <p className='sh_p'>🚀 *Mission:* Make React learning simpler and accessible for everyone!</p>
        </div>
        <div className="purpose-visual">
        <Lottie animationData={learningAnimation} loop={true} />
        </div>
        </section>

        <section className="key-features">
            <h2 className='sh_h2'>🔹 Key <span>Features</span></h2>
            <div className="features-grid">
                {features.map((feature) => (
                <div className="feature-card" key={feature.id}>
                <div className="icon">{feature.icon}</div>
                <h3 className='sh_h3'>{feature.title}</h3>
                <p className='sh_p'>{feature.description}</p>
            </div>))}
        </div>
    </section>

    <section className="target-audience">
      <h2 className='sh_h2'>🎯 Who <span>Can Use ReactNotes?</span></h2>
      <div className="audience-grid">
        {audience.map((user) => (
          <div className="audience-card" key={user.id}>
            <div className="icon">{user.icon}</div>
            <h3 className='sh_h3'>{user.title}</h3>
            <p className='sh_p'>{user.description}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="tech-stack">
      <h2 className='sh_h2'>⚡ Tech <span>Stack</span></h2>
      <div className="tech-grid">
        {techs.map((techs) => (
          <div className="tech-card" key={techs.id}>
            <div className="icon">{techs.image}</div>
            <p className='sh_p'>{techs.name}</p>
          </div>
        ))}
      </div>
    </section>
    <section className="team-section">
      <h2 className='sh_h2'>
        <span className="animated-text">🚀 Explore Our Team</span>
      </h2>
      <div className="team-grid">
        {teamMembers.map((member) => (
          <div className="team-card" key={member.id}>
            <img src={member.image} alt={member.name} className="team-image" />
            <h3 className="sh_h3">{member.name}</h3>
          </div>
        ))}
      </div>
    </section>

    </div>
  )
}

export default About