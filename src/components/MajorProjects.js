import React from 'react'
import ProjectCard from './ProjectCard.js';
import { Data } from '../Data'
import { makeStyles } from '@material-ui/core/styles'
import '../App.css';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    textAlign: "center",
    justifyContent: "center",
    boxSizing: "inherit"
  }
}))

function MajorProjects() {
  const classes = useStyles();
  return (
    <>
      <div className="major-projects-div">
        <h1 className="page-title">Major Projects</h1>
        <div className={classes.root}>
          {Data.map((item, key) => {
            return (
              <>
                <ProjectCard value={item} key={key} />
              </>
            )
          })}
        </div>
      </div>
    </>
  );
}

export default MajorProjects;