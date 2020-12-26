import React from 'react';
import './ProjectsList.css';
import ProjectList from './ProjectList';

class ProjectsList extends React.Component {
  renderProjects() {
    return this.props.projects.map((item, index) => {
      return (
        <ProjectList info={item} key={index}/>
      )
    })
  }

  render() {
    return (
      <div className="projects-list-container">
        {this.renderProjects()}
      </div>
    );
  }
}

export default ProjectsList
