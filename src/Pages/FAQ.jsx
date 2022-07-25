import React from "react";

export default class FAQ {
  render() {
      <div>FAQ</div>
      const [active, setActive] = useState(false);

  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
  }, [contentRef, active]);

  const toggleAccordion = () => {
    setActive(!active);
  };
  return (
    <>
      
        <div>
          <button
            className={`question-section ${active}`}
            onClick={toggleAccordion}
          >
            <div>
              <div className="question-align">
                <h4 className="question-style">
                  Where do you get your plushies?
                </h4>
              </div>
              <div
                ref={contentRef}
                className={active ? `answer answer-divider` : `answer`}
              >
                <p>The soft kind! Just kidding. We are partnered with Sanrio Japan and get special releases every three months.</p>
              </div>
            </div>
          </button>
          <button
            className={`question-section ${active}`}
            onClick={toggleAccordion}
          >
            <div>
              <div className="question-align">
                <h4 className="question-style">
                  Where do you get your plushies?
                </h4>
              </div>
              <div
                ref={contentRef}
                className={active ? `answer answer-divider` : `answer`}
              >
                <p>The soft kind! Just kidding. We are partnered with Sanrio Japan and get special releases every three months.</p>
              </div>
            </div>
          </button>
        </div>
      </>
      
    
    )
  }
}

