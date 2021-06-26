import React, { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard.js';
import '../App.css';
import NavButton from './NavButton';
import Footer from './Footer';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        textAlign: "center",
        justifyContent: "center",
        boxSizing: "inherit"
    }
}))

function Projects() {
    const classes = useStyles();
    const [repo, setRepos] = useState();

    useEffect(() => {
        try {
            fetch("https://api.github.com/users/clare0901/repos")
                .then((response => response.json()))
                .then(response => { setRepos(response) })
        } catch (error) {
            console.log("Error", error)
        }
    }, [])

    return (
        <>
            <div className="major-projects-div">
                <h1 className="page-title">Projects</h1>
                <div className={classes.root}>
                    {repo && repo.map((item, key) => {
                        return (<ProjectCard value={item} key={key} />)
                    })}
                </div>
            </div>
            <NavButton />
            <Footer />
        </>
    );
}

export default Projects;