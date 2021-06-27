import React, { useEffect } from 'react';
// import {useState} from 'react';
import { Link } from 'react-router-dom'
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import { BiLink } from "react-icons/bi";
import AOS from 'aos';
import 'aos/dist/aos.css';

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center',
        margin: "50px 20px 20px 20px",
        backgroundColor: "#2A1F3D",
        width: theme.spacing(40),
        height: theme.spacing(25),
        color: "white",
        overflow: "hidden",
        opacity: 0.8,
        '&:hover': {
            backgroundColor: "#3a2d52",
        },
    },
    projecttitle: {
        opacity: 1,
        paddingTop: "20px",
        textAlign: "left",
        padding: "12px",
        margin: "0px",
        fontSize: "20px",
        fontFamily: "Times New Roman"
    },
    description: {
        fontSize: "16px",
        fontFamily: "Times New Roman",
        opacity: 1,
        textAlign: "left",
        height: "100px",
        padding: "12px",
        margin: "0px",
    },
    projectlink: {
        paddingLeft: "12px",
        fontSize: "18px",
        textAlign: "left",
        marginTop: "-2px"
    },
    language: {
        float: "left",
        paddingLeft: "12px",
        display: "block",
        textAlign: "left",
        color: "lightblue"
    }
}))

function ProjectCard(props) {

    // color according to languages is remaining
    // const [color, setColor] = useState();

    useEffect(() => {
        AOS.init({ duration: 1000 })

        // fetch("https://raw.githubusercontent.com/ozh/github-colors/master/colors.json")
        //     .then(( response => response.json()))
        //     .then(response => { setColor(response)})

    }, [])

    const classes = useStyles();
    return (
        <Paper elevation={5} className={classes.root}>
            <a href={props.value.html_url} target="_blank" style={{ textDecoration: "none", overflow: "hidden", color:"white" }} data-aos='fade-up'>
                <h3 className={classes.projecttitle}>{props.value.name}</h3>
            </a>
            <p className={classes.description}>{props.value.description}</p>
            {props.value.language && <p className={classes.language}>{props.value.language}</p>}
            <p className={classes.projectlink}>{props.value.homepage && <a href={props.value.homepage} target="_blank" style={{ textDecoration: "none", color: "white" }} ><BiLink /></a>}</p>
            {/* <p>{color[props.value.language]} <span>{props.value.language}</span></p> */}
        </Paper>
    )
}

export default ProjectCard;