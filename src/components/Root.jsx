import React from 'react'
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom'

import Dashboard from './Dashboard'
import Login from './Login'
import SignUp from './SignUp'

import Introduction from './topics/basics/Introduction'
import Comp from './topics/basics/Comp'
import ConditionalRendering from './topics/ConditionalRendering/ConditionalRendering'
import Features from './topics/basics/Features'
import GettingStarted from './topics/basics/GettingStarted'
import JsxComp from './topics/basics/JsxComp'

import Hooks from './topics/hooks/Hooks'
import Usestate from './topics/hooks/Usestate'
import Forwardref from './topics/hooks/Forwardref'
import Usecallback from './topics/hooks/Usecallback'
import Usecontext from './topics/hooks/Usecontext'
import Useeffect from './topics/hooks/Useeffect'
import Usememo from './topics/hooks/Usememo'
import Usenavigate from './topics/hooks/Usenavigate'
import Usereducer from './topics/hooks/Usereducer'
import Useref from './topics/hooks/Useref'

import Formhandling from './topics/form/Formhandling'
import Fragments from './topics/fragment/Fragment'
import Props from './topics/props/Props'

import Advanceconcept from './topics/advanceconcept/Advanceconcept'
import Axios from './topics/advanceconcept/Axios'
import Hoc from './topics/advanceconcept/Hoc'
import PrivateRouting from './topics/advanceconcept/PrivateRouting'
import Reactmemo from './topics/advanceconcept/Reactmemo'
import FirstPage from './FirstPage'
import Home from './Home'

import Routing from './topics/router/Router'
import ContactForm from './Contact'
import About from './About'

const scrollToTop = () => {
  document.querySelector('.container').scrollTo({ top: 0, behavior:'smooth' });
  // document.querySelector('.footer').scrollTo({ top: 0, behavior:'smooth' });
};
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      { path: "", element: <FirstPage /> },
      {
        path: "home",
        element: <Home />,
        children: [
          {
            path: "",
            element: <Introduction scrollToTop={scrollToTop}/>,
            
          },
          { path: "component", element: <Comp scrollToTop={scrollToTop}/> },
          { path: "conditional", element: <ConditionalRendering scrollToTop={scrollToTop}/> },
          { path: "features", element: <Features scrollToTop={scrollToTop}/> },
          { path: "gettingstarted", element: <GettingStarted scrollToTop={scrollToTop}/> },
          { path: "jsx", element: <JsxComp scrollToTop={scrollToTop}/> },
          { path: "formhandling", element: <Formhandling scrollToTop={scrollToTop}/> },
          { path: "fragments", element: <Fragments scrollToTop={scrollToTop}/> },
          { path: "props", element: <Props scrollToTop={scrollToTop}/> },
          {
            path: "hooks",
            element: <Hooks scrollToTop={scrollToTop}/>,
          },
          { path: "usestate", element: <Usestate scrollToTop={scrollToTop}/> },
              { path: "forwardref", element: <Forwardref scrollToTop={scrollToTop}/> },
              { path: "usecallback", element: <Usecallback scrollToTop={scrollToTop}/> },
              { path: "usecontext", element: <Usecontext scrollToTop={scrollToTop}/> },
              { path: "useeffect", element: <Useeffect scrollToTop={scrollToTop}/> },
              { path: "usememo", element: <Usememo scrollToTop={scrollToTop}/> },
              { path: "usenavigate", element: <Usenavigate scrollToTop={scrollToTop}/> },
              { path: "usereducer", element: <Usereducer scrollToTop={scrollToTop}/> },
              { path: "useref", element: <Useref scrollToTop={scrollToTop}/> },
          {
            path: "advanceconcept",
            element: <Advanceconcept scrollToTop={scrollToTop}/>,
           
          },
          { path: "axios", element: <Axios scrollToTop={scrollToTop}/> },
          { path: "hoc", element: <Hoc scrollToTop={scrollToTop}/> },
          { path: "privaterouting", element: <PrivateRouting scrollToTop={scrollToTop}/> },
          { path: "reactmemo", element: <Reactmemo scrollToTop={scrollToTop}/> },
          {
            path: "routing",
            element: <Routing scrollToTop={scrollToTop}/>

          }
        ]
      },
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },
      {
        path : "contact",element: <ContactForm/>,
      },
      {
        path: "about",
        element : <About/>
      }
    ]
  }
])

const Root = () => {
  return <RouterProvider router={routes} />
}

export default Root
