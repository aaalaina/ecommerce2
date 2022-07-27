import React, {useState} from 'react';
import emailjs from 'emailjs-com';
//import { init } from 'emailjs-com';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

const submit = () => {

    if (name && email && message) {
        const serviceId = 'service_id';
        const templateId = 'template_id';
        const userId = 'user_id';
        const templateParams = {
            name,
            email,
            message
        };

        emailjs.send(serviceId, templateId, templateParams, userId)
            .then(response => console.log(response))
            .then(error => console.log(error));

        setName('');
        setEmail('');
        setMessage('');
        setEmailSent(true);
    }
    else
    alert('Please fill out the entire form!')
}
    
  return (
    <div className='contact-form'>
       <input type='text' className='inputs' placeholder="What's your name?" value={name} onChange={e => setName(e.target.value)}/>
       <input type='email'className='inputs' placeholder="What's your email?" value={email} onChange={e => setEmail(e.target.value)}/>
       <textarea textarea='Send us a message!' className='textareainput' value ={message} onChange={e => setMessage(e.target.value)}/>
       <button onClick={submit}>Send Message</button>
       <span className={emailSent ? 'visible' : null}>Thanks so much! Talk to you soon!</span>
        
    </div>
  )
}
