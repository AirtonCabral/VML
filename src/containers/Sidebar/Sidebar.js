import React, { Component } from 'react';

import ProjCard from '../../components/ProjCard/ProjCard'
import classes from './SideBar.css';
import axios from 'axios';


class SideBar extends Component {
    state= {
        projects: [
        {
            title: 'Projeto X',
            Stars: 4,
            branches: 25,
            Contributors: 3
        }
    ]
    }

    componentDidMount(){
        axios.get('https://api.github.com/users/globocom/repos')
            .then( response => {
                this.setState({projects: response.data});
            });
    }

    projectClicked = (project) => {
        const selectedProject = {
            name: project.name,
            forks: project.forks_count,
            stars: project.stargazers_count
        };
        sessionStorage.setItem('selectedProject', JSON.stringify(selectedProject));
        this.props.history.push({
            pathname: '/container',
            search: '?' + project.name
        });
    }
    render(){
        const projects = this.state.projects.map( (project, index) => {
            return <ProjCard
                    name={project.name}
                    language={project.language}
                    clicked={() => this.projectClicked(project)}
                    key={index}
                    />
        })
        return(
            <div>
                <div className={classes.Sidebar}>
                <p> Lista de projetos </p>
                    {projects}
                </div>
            </div>
        );
    }
}

export default SideBar;