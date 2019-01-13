import React from 'react';
import Link from 'react-router-dom/Link';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import menuItems from './menuItems';

const styles = {
    root: {
        height: '92.8vh',
        width: 50,
        backgroundColor: 'pink',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 16,
        paddingBottom: 32,
        alignItems: 'center'
    },

    icon: {
        color: 'white',
        marginTop: 16,
    }
}

const SideMenu = ({classes, dispatch}) => (
    <Paper square className={classes.root}>
        {
            Object.entries(menuItems).map(([name, value], index) => {
                const reactKey = `${name}-${index}`;
                const { Icon, linkTo } = value;
                return (
                    <IconButton
                        component={Link}
                        to={linkTo}
                        key={reactKey}
                    >
                        <Icon 
                            className={classes.icon} 
                        />
                    </IconButton>
                )
            })
        }
    </Paper>
)

export default compose(
    withStyles(styles),
    connect(),
)(SideMenu);