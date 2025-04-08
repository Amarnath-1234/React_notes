import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
import "./styles/contact.css"
import ReactTypingEffect from 'react-typing-effect';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

//     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
//       .then((result) => {
//           console.log(result.text);
//           alert('Message sent successfully!');
//       }, (error) => {
//           console.log(error.text);
//           alert('Failed to send the message, please try again.');
//       });
  };

  return (
    <div className="contact">
       <h2 className="fade-slide-up">
       If you have any{' '}
      <ReactTypingEffect
        text={['questions', 'feedback', 'suggestions']}
        speed={130}
        eraseSpeed={50}
        eraseDelay={2000}
        typingDelay={500}
        cursor={'|'}
        displayTextRenderer={(text, i) => {
          return (
            <span>
              {text.split('').map((char, i) => {
                const key =` ${i}`;
                return (
                  <span key={key} style={{ color: '#29017a', fontWeight: "600" }} className='typingtext'>
                    {char}
                  </span>
                );
              })}
            </span>
          );
        }}
      />{' '}
      <br /> please don't <span className="glow-text">hesitate</span><br /><span> to </span>   
      <span className="word word-reach">reach</span>{' '}
  <span className="word word-out">out</span>{' '}
  <span className="word word-to">to</span>{' '}
  <span className="word word-us">us</span>.

 </h2>

            <form ref={form} 
    onSubmit={sendEmail}
    >
      <h2 className='form-heading'>Contact Us</h2>
       
       <div className="input-container">
    <input type="text" name="user_name" required />
    <label>Name</label>
  </div>
  <div className="input-container">
    <input type="email" name="user_email" required />
    <label>Email</label>
  </div>
  <div className="input-container">
    <textarea name="message" required />
    <label>Message</label>
  </div>
  <input type="submit" value="Send" />
    </form>
    </div>

  );
};

export default ContactForm;