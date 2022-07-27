import React from "react";
import {useState} from "react";
export default function FAQ() {
  const [selected, setSelected] = useState();
  const toggle = (i) => {
    if(selected === i) {
      return setSelected(null)
    }
setSelected();
  }
   
  return (
   
      <div className="wrapper">
       
        <div className="accordion">

          {qna.map((item, i )=> (
            <div className="item">
              <div className="title" onClick={() => toggle(i)}>
                <h2>{item.question}</h2>
                <span>{selected === i ? '-' : '+'}</span>
              </div>
              <div className="content">
              <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      
    
    )
  }
const qna = [
  {
    question: 'Where do you get your plushies?',
    answer: 'We are partnered with Sanrio Japan and get special releases for the United States every three months.',
  },
  {
    question: 'Where do you deliver?',
    answer: 'We ship anywhere in the continental United States! Including Hawaii and Alaska. US territories i.e. Puerto Rico, Guam, US Virgin Islands, Northern Mariana Islands only have free standard shipping options so the package arrival times may be a little longer.'
  },
  {
    question: 'Do you have a subscription service to get notified for new releases?',
    answer: 'Not quite yet! We are in the process of building one. Contact us through our contact form and we will put you on our waitlist.'
  },
  {
    question: 'Is this a real e-commerce site?',
    answer: "LOL, of course not! But it's definitely nice to browse, isn't it?"
  }

]

