import React from 'react';
import './ProjectsCards.css';
import ProjectCard from './ProjectCard';
import cards from './highlightedProjects';

class ProjectsSample extends React.Component {
  render() {
    return (
      <div className="projects-cards">
        <ProjectCard info={cards[0]}/>
        <ProjectCard info={cards[1]}/>
        {/* <ProjectCard/> */}
      </div>
    );
  }
}

export default ProjectsSample;
