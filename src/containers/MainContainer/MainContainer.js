import React, { Component } from 'react';

import classes from './MainContainer.css';

class MainContainer extends Component {
    state = {
        project: "ta chamando!",
        selectedProject: null
    };

    getStorage = () => {
        const selectedProject = JSON.parse(sessionStorage.getItem("selectedProject"));
        this.setState({ selectedProject: selectedProject});
    };
    render() {
        return (
        <div>
            <div>
                <button onClick={this.getStorage}> Aqui </button>
                Selecionado: {JSON.stringify(this.state.selectedProject)}
            </div>
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
        </div>
      )
    }
}

export default MainContainer;