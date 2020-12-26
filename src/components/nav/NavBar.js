import React from 'react';
import { Link } from 'react-router-dom';
import LanguageContext from '../../contexts/LanguageContext'
import Languages from './Languages';
import './NavBar.css';

const options = {
  english: {
    about: 'ABOUT',
    projects: 'PROJECTS',
    contact: 'CONTACT'
  },
  spanish: {
    about: 'SOBRE',
    projects: 'PROYECTOS',
    contact: 'CONTACTO'
  },
  portuguese: {
    about: 'SOBRE',
    projects: 'PROJETOS',
    contact: 'CONTATO'
  }
}

class NavBar extends React.Component {
  static contextType = LanguageContext;

  render() {
    const language = this.context.language;
    return (
      <div className="nav">
        <Link className="nav-left nav-link title" to="/">OSWALDO LISBOA</Link>
        <div className="nav-right">
          <Link className="nav-link title" to="/about">{options[language].about}</Link>
          <Link className="nav-link title" to="/projects">{options[language].projects}</Link>
          <Link className="nav-link title" to="/contact">{options[language].contact}</Link>
          <Languages />
        </div>
      </div>
    );
  }
}

export default NavBar;
