import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import '../styles/Text.css'
const useStyles = makeStyles((theme) => ({
    root: {
        padding: "50px",
        // display: "flex",
        // alignItems: "center",
        // justifyContent: "center",
        // height: "100%",
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },

    text: {
        margin: "0 auto",
    }
}));
const Settings = () => {
    const classes = useStyles();

    return (
        <div className="container">
            <Typography variant="h6" className = "center">
                2020 SPARCS 신입생 프로젝트
            </Typography>
            <Typography variant="h5" className="center">
                샴푸없어 by retro
            </Typography>
        </div>
    );
};

export default Settings;