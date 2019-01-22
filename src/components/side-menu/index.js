import React from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom/Link';
import compose from 'recompose/compose';
import withStyles from '@material-ui/core/styles/withStyles';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandIcon from '@material-ui/icons/ChevronRight';
import ContractIcon from '@material-ui/icons/ChevronLeft';
import menuItems from './menuItems';
import withContainer from './container';

const styles = {
  root: {
    width: '100%',
    height: 'fit-content',
    backgroundColor: 'black',
    display: 'flex',
    marginBottom: 8,
  },
  menu: {
    display: 'flex',
  },
  icon: {
    color: 'white',
    fontSize: 32,
  },
  primaryText: {
    color: '#fff',
  },
  imgContainer: {
    display: 'none',
  },
  '@media (min-width: 640px)': {
    root: {
      height: '100vh',
      width: 'fit-content',
    },
    imgContainer: {
      display: 'block',
      width: 60,
      height: 60,
      margin: '16px 8px',
    },
    img: {
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      border: '3px solid white',
    },
    menuExpandIconContainer: {
      backgroundColor: '#fff',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
    },
    menuToggleIcon: {
      color: 'black',
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
      marginTop: 8,
      '&:hover': {
        backgroundColor: 'grey',
      },
    },
  },
};

const SideMenu = ({
  active, classes, expanded, expandMenu,
}) => (
  <div className={classes.root}>
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
      <div className={classes.imgContainer}>
        <img
          src="images/jack.jpg"
          alt=""
          className={classes.img}
        />
      </div>
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
  </div>
);

SideMenu.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  expanded: PropTypes.bool.isRequired,
  expandMenu: PropTypes.func.isRequired,
  active: PropTypes.string.isRequired,
};

export default compose(
  withStyles(styles),
  withContainer,
)(SideMenu);
