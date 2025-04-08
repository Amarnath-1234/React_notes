import React, { useState } from 'react'
import {  NavLink } from 'react-router-dom'
import "./styles/sidebar.css"
import Search from './Search'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
     <button className={`arrow-btn ${isOpen ? 'open' : ''}`} onClick={toggleSidebar}>
        {isOpen ? '❮' : '❯'}
      </button>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <Search/>
      
        {/* Introduction */}
        <h2>Introduction</h2>
        <div className='subtopic'>
        <NavLink id='link' onClick={toggleSidebar} className={({isActive}) => (isActive ? "active" : '')} >Introduction</NavLink>
        <NavLink className='link' onClick={toggleSidebar} to="gettingstarted">Installation</NavLink>
        <NavLink className='link' onClick={toggleSidebar} to="features">Features</NavLink>
        <NavLink className='link' onClick={toggleSidebar} to="component">Components</NavLink>
        <NavLink className='link' onClick={toggleSidebar} to="jsx">JSX</NavLink>

        </div>
        {/* fragments */}

        <h2>Fragments</h2>

        <div className='subtopic'>
        <NavLink className='link' onClick={toggleSidebar} to="fragments">Fragments</NavLink>
        </div>

        {/* props */}
        <h2>Props</h2>
        <div className='subtopic'>
        <NavLink className='link' onClick={toggleSidebar} to="props">Props</NavLink>

        </div>
        <h2>Conditional Rendering</h2>

        <div className="subtopic">
        <NavLink className='link' onClick={toggleSidebar} to="conditional">Conditional Rendering</NavLink>
        </div>


        {/* hooks */}
        <h2>Hooks</h2>

        <div className='subtopic'>
        <NavLink className='link' onClick={toggleSidebar} to="hooks">Hooks</NavLink>
        <NavLink className='link' onClick={toggleSidebar} to="usestate">useState</NavLink>
        <NavLink className='link' onClick={toggleSidebar} to="useref">useRef</NavLink>
        <NavLink className='link' onClick={toggleSidebar} to="useeffect">useEffect</NavLink>
        <NavLink className='link' onClick={toggleSidebar} to="usecontext">useContext</NavLink>
        <NavLink className='link' onClick={toggleSidebar} to="forwardref">forwardRef</NavLink>
        <NavLink className='link' onClick={toggleSidebar} to="usememo">useMemo</NavLink>
        <NavLink className='link' onClick={toggleSidebar} to="usecallback">useCallback</NavLink>
        <NavLink className='link' onClick={toggleSidebar} to="usenavigate">useNavigate</NavLink>
        <NavLink className='link' onClick={toggleSidebar} to="usereducer">useReducer</NavLink>

        </div>
        {/* form handling */}

        <h2>Forms</h2>
        <div className='subtopic'>
        <NavLink className='link' onClick={toggleSidebar} to="formhandling">Form Handling</NavLink>
        </div>

        {/* routing */}

        <h2>Routing</h2>
        <div className="subtopic">
          <NavLink className='link' onClick={toggleSidebar} to="routing">Routing</NavLink>
        </div>

        {/* advance concept */}

       <h2>Advance Concept</h2>
       <div className='subtopic'>
       <NavLink className='link' onClick={toggleSidebar} to="advanceconcept">Advance Concept</NavLink>
        <NavLink className='link' onClick={toggleSidebar} to="reactmemo">ReactMemo</NavLink>
        <NavLink className='link' onClick={toggleSidebar} to="axios">Axios</NavLink>
        <NavLink className='link' onClick={toggleSidebar} to="hoc">HOC</NavLink>
        <NavLink className='link' onClick={toggleSidebar} to="privaterouting">Private Routing</NavLink>
       </div>
        
    </div>
    </>
  )
}

export default Sidebar