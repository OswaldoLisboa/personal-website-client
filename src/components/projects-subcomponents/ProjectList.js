import React from 'react';
import LanguageContext from '../../contexts/LanguageContext';
import linksText from './linksText';
import './ProjectList.css';

class ProjectList extends React.Component {
  static contextType = LanguageContext;

  renderLive() {
    if (this.props.info.liveLink) {
      return (
        <a className="project-list-link button" href={this.props.info.liveLink} target="_blank" rel="noreferrer">{linksText[this.context.language].live}</a>
      )
    }
    return '';
  }

  render() {
    const language = this.context.language;

    return (
      <div className="project-list-container">
        <div className="project-list">
          <h1 className="project-list-title title">{this.props.info[language].name}</h1>
          <p className="project-list-description">{this.props.info[language].description}</p>
          <div className="project-list-tags-links">
            <span className="project-list-tags">{this.props.info.tags}</span>
            <span className="project-list-links">
              {this.renderLive()}
              <a className="project-list-link button" href={this.props.info.codeLink} target="_blank" rel="noreferrer">{linksText[language].code}</a>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectList
