import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Ikshan</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              Built multiple web development projects including a personal
              portfolio website using modern frontend technologies. Focused 
              on creating responsive layouts, smooth navigation, and clean 
              UI design using HTML, CSS, and JavaScript.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Full Stack Developer</h4>
                <h5>Monocept (Max Life Insurance)</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Practicing Data Structures and Algorithms regularly using Java.
              Solved various coding problems related to arrays, strings, recursion, 
              and other core programming concepts to strengthen problem-solving and 
              logical thinking skills.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Logic Loop</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Actively learning modern frontend development technologies including 
              React.js and improving knowledge of full-stack development. Building 
              projects and exploring tools like Git and GitHub to manage and showcase 
              development work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
