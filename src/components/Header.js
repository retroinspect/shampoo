import React from 'react';
import { NavLink } from 'react-router-dom'

import HeaderAppBar from './HeaderAppBar'

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HistoryIcon from '@material-ui/icons/History';
import SettingsIcon from '@material-ui/icons/Settings';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        backgroundColor: '#00796b',
    },

});

export default function Header() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Paper square className={classes.root} elevation="0">
           <HeaderAppBar/>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                indicatorColor="black"
                textColor="secondary"
                aria-label="icon label tabs"
            >
                <Tab component={NavLink} to="/" icon={<ShoppingCartIcon />} label="쇼핑리스트" />
                <Tab component={NavLink} to="/Record" icon={<HistoryIcon />} label="내역" />
                <Tab component={NavLink} to="/Settings" icon={<SettingsIcon />} label="설정" />
            </Tabs>
        </Paper>
    );
}
