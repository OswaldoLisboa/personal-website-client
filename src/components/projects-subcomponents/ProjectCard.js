import React from 'react';
import LanguageContext from '../../contexts/LanguageContext';
import linksText from './linksText';
import './ProjectCard.css';

class Project extends React.Component {
  constructor() {
    super();
    this.state = {
      backgroundStyle : {}
    }
  }

  static contextType = LanguageContext;

  componentDidMount() {
    this.setState({ backgroundStyle: {
        backgroundImage: `url(${this.props.info.imgLink})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }
    })
  }

  render() {
    const language = this.context.language;
    const info = this.props.info;

    return (
      <div className="project-card-container">
        {/* <img className="project-card-background-image" src={info.imgLink} alt={info[language].name}></img> */}
        <div className="project-card-background-image" style={this.state.backgroundStyle} alt={info[language].name}></div>
        <div className="project-card">
          <h1 className="project-card-title title">{info[language].name}</h1>
          <p className="project-card-description">{info[language].description}</p>
          <div className="project-card-tags-links">
            <span className="project-card-tags">{info.tags}</span>
            <span className="project-card-links">
              <a className="project-card-link button" href={info.liveLink} target="_blank" rel="noreferrer">{linksText[language].live}</a>
              <a className="project-card-link button" href={info.codeLink} target="_blank" rel="noreferrer">{linksText[language].code}</a>
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default Project;
