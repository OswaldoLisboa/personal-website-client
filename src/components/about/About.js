import React from 'react';
// import { Link } from 'react-router-dom';
import LanguageContext from '../../contexts/LanguageContext';
import './About.css';
import aboutText from './aboutText';
import Education from './Education';

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      education: []
    }
  }

  static contextType = LanguageContext;

  async componentDidMount() {
    try {
      const response = await fetch('https://ol-personal-website-server.herokuapp.com/about');
      const education = await response.json();
      this.setState({ education, loaded: true });
    } catch(error) {
      console.log(error)
    }
  }

  renderEducation() {
    return this.state.education.map((item, index) => {
      return (
        <Education info={item} key={index}/>
      )
    })
  }

  render() {
    const language = this.context.language;

    return (
      <div className="about">
        <div className="bio">
          <img className="bio-image" src={`${process.env.PUBLIC_URL}/img/pics/oswaldolisboa.JPG`} alt="Oswaldo Lisboa"></img>
          <div className="bio-text">
            <p>{aboutText[language].bio1}</p>
            <p>{aboutText[language].bio2}</p>
          </div>
        </div>
        <div className="education">
          <h1 className="section-title title">{aboutText[language].education}</h1>
          <div className="education-items">
            <img className="spinner" src={`${process.env.PUBLIC_URL}/img/loading/spinner.gif`} alt="Loading" style={{display: this.state.loaded ? 'none' : 'block'}}></img>
            {this.renderEducation()}
          </div>
        </div>
        {/* <Link className="download button" to={`${process.env.PUBLIC_URL}/cv/OswaldoLisboa_${language}.pdf`} target="_blank" download>
          {aboutText[language].download}
        </Link> */}
      </div>
    )
  }
}

export default About;
