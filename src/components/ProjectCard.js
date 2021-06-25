import React from 'react';
import {Link} from 'react-router-dom'
import { Paper } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme)=>({
    
    root: {
        textAlign: 'center',
        margin: "50px 20px 20px 20px",
        backgroundColor: "#2A1F3D",
        width: theme.spacing(40),
        height: theme.spacing(22),
        color: "white",
        opacity:0.8,
        '&:hover': {
            backgroundColor: "#3a2d52",
        },
        
    },
    projecttitle : {
        opacity: 1,
        paddingTop:"20px",
        height: "65px",
        textAlign: "left",
        padding: "12px",
        margin: "0px",
        fontSize: "20px",
        fontFamily: "Times New Roman"
    },
    description :{
        fontSize: "16px",
        fontFamily: "Times New Roman",
        opacity: 1,
        textAlign: "left",
        padding: "12px",
        margin: "0px",
    },
}))

function ProjectCard(props) {
    // console.log(props)

    const classes = useStyles();
    return(
        <Link to={{ pathname: `${props.value.html_url}` }} target="_blank" style={{textDecoration:"none"}}>
            <Paper elevation={5} className={classes.root}>
                <h3 className={classes.projecttitle}>{props.value.name}</h3>
                <p className={classes.description}>{props.value.description}</p>
            </Paper>
        </Link>

    )
}

export default ProjectCard;