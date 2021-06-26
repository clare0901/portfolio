import React from 'react';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    root: {
        color: "white",
        border: "2px solid #A500EA",
        boxShadow: "1px 1px 2px 0px black",
        padding: "5px 18px 5px 18px",
        display: "inline-block",
        marginRight: "12px",
        textAlign: "center",
        borderRadius: "10px",
        '&:hover': {
            backgroundColor: "#e0c5e2",
            color: "black",
            fontWeight: "bold"
        }
    },
}))

function Skills(props) {
    const classes = useStyles();

    return (
        <div>
            {props.value.map(item => {
                return (
                    <p className={classes.root}>{item}</p>
                )
            })}
        </div>
    )
}

export default Skills
