import React, { useEffect } from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import { BiLink } from "react-icons/bi";
import AOS from 'aos';
import 'aos/dist/aos.css';

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center',
        margin: "50px 20px 20px 20px",
        backgroundColor: "#D4B5B0",
        width: theme.spacing(40),
        height: theme.spacing(25),
        color: "#383E56",
        overflow: "hidden",
        opacity: 0.8,
        '&:hover': {
            backgroundColor: "#EEDAD1",
        },
    },
    projecttitle: {
        opacity: 1,
        paddingTop: "20px",
        textAlign: "left",
        padding: "12px",
        margin: "0px",
        fontSize: "18px",
        fontFamily: "Times New Roman"
    },
    description: {
        fontSize: "15px",
        fontFamily: "Times New Roman",
        opacity: 1,
        textAlign: "left",
        height: "100px",
        padding: "12px",
        margin: "0px",
    },
    projectlink: {
        paddingLeft: "12px",
        fontSize: "14px",
        textAlign: "left",
        marginTop: "-2px"
    },
    language: {
        float: "left",
        fontSize:"13px",
        paddingLeft: "12px",
        display: "block",
        textAlign: "left",
        color: "#383E56"
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
        <Paper elevation={5} className={classes.root} data-aos='fade-up'>
            <a href={props.value.html_url} target="_blank" style={{ textDecoration: "none", overflow: "hidden", color:"#383E56" }} rel="noopener noreferrer" >
                <h3 className={classes.projecttitle}>{props.value.name}</h3>
            </a>
            <p className={classes.description}>{props.value.description}</p>

            {props.value.language && <p className={classes.language}>{props.value.language}</p>}
            <p className={classes.projectlink}>{props.value.homepage && <a href={props.value.homepage} target="_blank" style={{ textDecoration: "none", color: "#F69E7B" }}  rel="noopener noreferrer" ><BiLink /></a>}</p>
            {/* <p>{color[props.value.language]} <span>{props.value.language}</span></p> */}
        </Paper>
    )
}

export default ProjectCard;
