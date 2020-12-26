import React from 'react';
import LanguageContext from '../../contexts/LanguageContext';
import './Education.css';

class Education extends React.Component {
  static contextType = LanguageContext;

  render() {
    const language = this.context.language;

    return (
      <div className="education-item">
        <span className="edu-period">{this.props.info[language].period}</span>
        <span className="edu-name">{this.props.info[language].name}</span>
        <span className="edu-location">{this.props.info[language].location}</span>
      </div>
    );
  }
}

export default Education;
