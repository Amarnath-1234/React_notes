import React, { useRef, forwardRef, useImperativeHandle, createRef, Component } from "react";
// import "./forwardref.css";
import { FaArrowRight, FaCode, FaLightbulb, FaExclamationTriangle, FaCheck } from "react-icons/fa";
import { RxDoubleArrowUp } from "react-icons/rx";

const ForwardRef = ({scrollToTop}) => {
  const data = {
    title: "Forward Ref in React",
    sections: [
      {
        title: "What is Forward Ref?",
        content: "Forward Ref in React is a technique that allows a parent component to pass a reference (ref) to a child component’s DOM element. Normally, refs can only be assigned to DOM elements inside the same component. However, using React.forwardRef(), we can pass the ref to a child component from its parent."
      },
      {
        title: "Why is Forward Ref Needed?",
        content: "By default, React does not allow passing refs to child components. If a parent wants to access a child component’s input, button, or any DOM element, it cannot do so directly.",
        points: [
          "Problem Without Forward Ref: If we try to pass a ref to a custom component, React will not forward it to the actual input field inside.",
          "Solution: Use React.forwardRef() to explicitly pass the ref to the child component."
        ]
      },
      {
        title: "How Forward Ref Works?",
        content: "To enable ref forwarding, React provides the React.forwardRef() function.",
        code: `const ComponentWithRef = React.forwardRef((props, ref) => {
  return <input ref={ref} {...props} />;
});`
      },
      {
        title: "Example Without Forward Ref (Does Not Work)",
        content: "Ref does not reach the input element inside the child component.",
        code: `import React, { useRef } from 'react';

const CustomInput = () => {
  return <input type="text" />;
};

const ParentComponent = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus(); // ❌ ERROR
  };

  return (
    <div>
      <CustomInput ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default ParentComponent;`
      },
      {
        title: "Solution: Using Forward Ref",
        code: `import React, { useRef } from 'react';

const CustomInput = React.forwardRef((props, ref) => {
  return <input type="text" ref={ref} {...props} />;
});

const ParentComponent = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <CustomInput ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default ParentComponent;`
      },
      {
        title: "Forward Ref with Class Components",
        code: `import React, { Component, createRef } from 'react';

class CustomInput extends Component {
  render() {
    return <input type="text" ref={this.props.forwardedRef} />;
  }
}

const ForwardedInput = React.forwardRef((props, ref) => {
  return <CustomInput {...props} forwardedRef={ref} />;
});

class ParentComponent extends Component {
  constructor() {
    super();
    this.inputRef = createRef();
  }

  focusInput = () => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <div>
        <ForwardedInput ref={this.inputRef} />
        <button onClick={this.focusInput}>Focus Input</button>
      </div>
    );
  }
}

export default ParentComponent;`
      },
      {
        title: "Forward Ref with Hooks (useImperativeHandle)",
        code: `import React, { useRef, useImperativeHandle, forwardRef } from 'react';

const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus(),
    clear: () => (inputRef.current.value = '')
  }));

  return <input ref={inputRef} type="text" />;
});

const ParentComponent = () => {
  const inputRef = useRef();

  return (
    <div>
      <CustomInput ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
      <button onClick={() => inputRef.current.clear()}>Clear</button>
    </div>
  );
};

export default ParentComponent;`
      }
    ]
  };

  return (
    <div className="container">
      <h1 className="title"><FaCode className="icon" /> {data.title}</h1>
      <hr />
      {data.sections.map((section, index) => (
        <section key={index} className="section">
          <h2><FaLightbulb className="icon" /> {section.title}</h2>
          <p>{section.content}</p>
          {section.points && (
            <ul>
              {section.points.map((point, i) => (
                <li key={i}><FaArrowRight className="icon" /> {point}</li>
              ))}
            </ul>
          )}
          {section.code && (
            <pre>
            {section.code}
            </pre>
          )}
        </section>
      ))}
      <button className="scroll-to-top" onClick={scrollToTop}><RxDoubleArrowUp /></button>

    </div>
  );
};

export default ForwardRef;
