import React from 'react';
import './Projects.css';
import ProjectsList from '../projects-subcomponents/ProjectsList';
import LanguageContext from '../../contexts/LanguageContext';

const projects = {
  english: {
    title: 'Projects',
    more: 'Full List',
    filter: 'Filter by tag:',
    all: 'All tags'
  },
  spanish: {
    title: 'Proyectos',
    more: 'Lista Completa',
    filter: 'Filtar por etiquetas:',
    all: 'Todas las etiquetas'
  },
  portuguese: {
    title: 'Projetos',
    more: 'Lista Completa',
    filter: 'Filtrar por tags:',
    all: 'Todas as tags'
  }
}

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      tags: []
    }

    this.onTagChange = this.onTagChange.bind(this);
  }

  static contextType = LanguageContext;

  async componentDidMount() {
    try {
      const response = await fetch('https://ol-personal-website-server.herokuapp.com/projects');
      const data = await response.json();
      this.setState({ projects: data.projects,  tags: data.tags });
    } catch(error) {
      console.log(error)
    }
  }

  renderTags() {
    return this.state.tags.map((item, index) => {
      return (
        <option value={item} key={index}>{item}</option>
      )
    })
  }

  async onTagChange(event) {
    const tag = event.target.value;
    try {
      const response = await fetch(`https://ol-personal-website-server.herokuapp.com/projects/${tag}`);
      const projects = await response.json();
      this.setState({ projects });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const language = this.context.language;

    return (
      <div className="projects">
        <h1 className="projects-title title">{projects[language].title}</h1>
        <label className="filter-tags">{projects.[language].filter}</label>
        <select className="dropdown" name="tags" id="tags" onChange={this.onTagChange}>
          <option value="all" defaultValue>{projects.[language].all}</option>
          {this.renderTags()}
        </select>
        <ProjectsList projects={this.state.projects}/>
      </div>
    );
  }
}

export default Projects;
