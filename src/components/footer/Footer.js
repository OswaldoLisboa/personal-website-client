import React from 'react';
import LanguageContext from '../../contexts/LanguageContext'
import SocialMedia from './SocialMedia';
import './Footer.css';

const options = {
  english: {
    madeBy: 'Made by Oswaldo Lisboa'
  },
  spanish: {
    madeBy: 'Hecho por Oswaldo Lisboa'
  },
  portuguese: {
    madeBy: 'Feito por Oswaldo Lisboa'
  }
}

class Footer extends React.Component {
  static contextType = LanguageContext;

  render() {
    const language = this.context.language;

    return (
      <div className="footer">
        <SocialMedia/>
        <div className="copyright">{options[language].madeBy}</div>
      </div>
    )
  }
}

export default Footer;
