import React, { Component } from 'react';
import Aux from '../../hoc/Aux';

import classes from './MainContainer.css';

class MainContainer extends Component {
    state = {
        project: "ta chamando!",
        selectedProject: null
        };

    getStorage = () => {
        debugger
        const selectedProject = JSON.parse(sessionStorage.getItem("selectedProject"));
        this.setState({ selectedProject: selectedProject});
        console.log(this.state.selectedProject);
        console.log(this.state.project);
    };
    render() {
        return (
        <Aux>
            <button onClick={this.getStorage.bind()}> Aqui </button>
            <div className={classes.MainContainer}>
                <h1> MainContainer </h1>
                <p>bla bla bla bla bla bla bla bla bla bla bla bla bla
                    bla bla bla bla bla bla bla bla bla bla bla bla bla
                    bla bla bla bla bla bla blabla bla bla bla bla bla
                    bla bla bla bla bla</p>

                <div className={classes.CardCommit}>
                    <strong>Commit tche tche</strong>
                    <br />
                    <span>huuhauhhauhauhauhahuahu
                        ahuhauuhauhahuahuauh
                        uhahuahuauhahuhuahuauhauhauha
                        huauhahuahuahuaauh
                    </span>
                </div>
            </div>
        </Aux>
      )
    }
}

export default MainContainer;