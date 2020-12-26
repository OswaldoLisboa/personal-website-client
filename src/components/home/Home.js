import React from 'react';
import './Home.css';
import LanguageContext from '../../contexts/LanguageContext';
import ProjectsCards from '../projects-subcomponents/ProjectsCards';
import { Link } from 'react-router-dom';

const backgroundStyle = {
  backgroundImage: 'url(/img/pics/code.jpeg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}

const title = {
  english: 'Full Stack Developer',
  spanish: 'Desarrollador Full Stack',
  portuguese: 'Desenvolvedor Full Stack'
}

const projects = {
  english: {
    title: 'Projects',
    more: 'Full List'
  },
  spanish: {
    title: 'Proyectos',
    more: 'Lista Completa'
  },
  portuguese: {
    title: 'Projetos',
    more: 'Lista Completa'
  }
}

class Home extends React.Component {
  static contextType = LanguageContext;
  render() {
    const language = this.context.language;

    return (
      <div className="home">
        <div className="banner">
          <div className="banner-image" style={ backgroundStyle }></div>
          <div className="banner-text">
            <div className="home-title title">
              <h1>Oswaldo Lisboa</h1>
              <h2>{title[language]}</h2>
            </div>
          </div>
        </div>
        <h1 className="projects-sample-title title">{projects[language].title}</h1>
        <ProjectsCards/>
        <Link to='/projects'>
          <div className="projects-sample-more">
            <h4 className="button">{projects[language].more}</h4>
          </div>
        </Link>
      </div>
    );
  }
}

export default Home;
