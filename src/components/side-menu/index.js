import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Paper, MenuList, MenuItem, ListItemIcon, ListItemText, makeStyles, Avatar,
} from '@material-ui/core';
import ExpandIcon from '@material-ui/icons/ChevronRight';
import ContractIcon from '@material-ui/icons/ChevronLeft';
import menuItems from './menuItems';
import withContainer from './container';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    display: 'flex',
    marginBottom: theme.spacing(1),
    animation: '.6s ease-in 0s 1 slideInFromLeft',
  },
  menu: {
    display: 'flex',
  },
  icon: {
    color: 'cyan',
    fontSize: 32,
  },
  primaryText: {
    color: '#fff',
  },
  avatar: {
    display: 'none',
  },
  menuExpandIconContainer: {
    display: 'none',
  },
  '@media (min-width: 640px)': {
    root: {
      height: '100vh',
      width: 'fit-content',
    },
    avatar: {
      display: 'block',
      width: 60,
      height: 60,
      border: '3px solid cyan',
      margin: '8px 16px',
    },
    menuExpandIconContainer: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: theme.palette.grey[50],
    },
    menuToggleIcon: {
      color: '#000',
      fontSize: 32,
      cursor: 'pointer',
    },
    menuParent: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100%',
    },
    menu: {
      height: '100%',
      flexDirection: 'column',
    },
    menuItem: {
      display: 'flex',
      alignItems: 'center',
      marginTop: theme.spacing(1),
      '&:hover': {
        backgroundColor: 'grey',
      },
    },
    listItemText: {
      animation: '.6s ease-in 0s 1 slideInFromLeft',
    },
  },
}));

const SideMenu = ({
  active, expanded, expandMenu,
}) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root} elevation={0} square>
      <div className={classes.menuParent}>
        <MenuList className={classes.menu}>
          {
            Object.entries(menuItems).map(([name, value], index) => {
              const reactKey = `${name}-${index}`;
              const { ActiveIcon, InactiveIcon, linkTo } = value;
              return (
                <MenuItem
                  className={classes.menuItem}
                  component={Link}
                  to={linkTo}
                  key={reactKey}
                >
                  <ListItemIcon>
                    {
                      active === linkTo
                        ? <ActiveIcon className={classes.icon} />
                        : <InactiveIcon className={classes.icon} />
                    }
                  </ListItemIcon>
                  {
                    expanded
                    && (
                      <ListItemText
                        className={classes.listItemText}
                        classes={{ primary: classes.primaryText }}
                        primary={name}
                        inset
                      />
                    )
                  }
                </MenuItem>
              );
            })
          }
        </MenuList>
        <Avatar
          alt="JK"
          src="images/jack.jpg"
          className={classes.avatar}
          component={Link}
          to=""
        />
      </div>
      <div className={classes.menuExpandIconContainer}>
        {
        expanded
          ? (
            <ContractIcon
              className={classes.menuToggleIcon}
              onClick={() => { expandMenu(false); }}
            />
          )
          : (
            <ExpandIcon
              className={classes.menuToggleIcon}
              onClick={() => { expandMenu(true); }}
            />
          )
      }
      </div>
    </Paper>
  );
};

SideMenu.propTypes = {
  expanded: PropTypes.bool.isRequired,
  expandMenu: PropTypes.func.isRequired,
  active: PropTypes.string.isRequired,
};

export default withContainer(SideMenu);
