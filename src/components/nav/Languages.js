import React from 'react';
import LanguageContext from '../../contexts/LanguageContext';
import './Languages.css';

class Languages extends React.Component {
  static contextType = LanguageContext;

  onChangeLanguage(language) {
    this.context.changeLanguage(language);
  }

  render() {
    return (
      <div className="flags">
        {this.context.language !== 'english'
          ? <img className="flag" src="./img/flags/en.png" title="English" alt="English" onClick={() => {this.onChangeLanguage('english')}}/>
          : ''
        }
        {this.context.language !== 'spanish'
          ? <img className="flag" src="./img/flags/es.png" title="Español" alt="Español" onClick={() => {this.onChangeLanguage('spanish')}}/>
          : ''
        }
        {this.context.language !== 'portuguese'
          ? <img className="flag" src="./img/flags/pt.png" title="Português" alt="Português" onClick={() => {this.onChangeLanguage('portuguese')}}/>
          : ''
        }
      </div>
    )
  }
}

export default Languages;
