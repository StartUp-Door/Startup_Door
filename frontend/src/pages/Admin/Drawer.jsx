import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar}  from '@material-ui/core';
import GroupIcon from '@material-ui/icons/Group';
import ContactsIcon from '@material-ui/icons/Contacts';

import { Home, Timeline, Message, Business, Settings, Build} from '@material-ui/icons'
import logo from '../../components/admin/image/logo.png'

import AdminHome from './AdminHome'
import {Link} from 'react-router-dom'
import Popover from '@material-ui/core/Popover';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  linkText: {
    textDecoration : "none",
    color: "inherit",
  }
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // ----------
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const openPopOver = Boolean(anchorEl);
  const id = openPopOver ? 'simple-popover' : undefined;

  // ---------------------------------------
  const [profile, setProfile] = React.useState(null);

  const handleProfileClick = (event) => {
    setProfile(event.currentTarget);
  };

  const handleProfileClose = () => {
    setProfile(null);
  };

  const openProfilePopOver = Boolean(profile);
  const profileId = openPopOver ? 'simple-popover' : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <img src={logo} alt="logo of the startup door" width="100px" height="100px"/> 
          <Typography variant="h6" noWrap>
            Welcome Admin | STARTUP DOOR
          </Typography>
        <div style={{position: "absolute", right: 50, top: 20,}}>
            <IconButton color="inherit" aria-label="Go to messages" onClick={handleClick}>
                <MessageIcon/>
            </IconButton>

            <IconButton color="inherit" aria-label="Notifications" onClick={handleClick}>
                <NotificationsIcon/>
            </IconButton>
            
            {/* Popping content for notifications */}
            <Popover
              id={id}
              open={openPopOver}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <div style={{padding: 20,}}>
                <Typography variant="P">This is the pop over for notifications </Typography>
              </div>
            </Popover>  

            <IconButton color="inherit" aria-label="Profile" onClick={handleProfileClick}>
                <Avatar aria-controls="customized-menu" aria-haspopup="true">
                    H
                </Avatar>
            </IconButton>
            
              <Popover
                id={profileId}
                open={openProfilePopOver}
                anchorEl={profile}
                onClose={handleProfileClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                <div>
                  <Link to="/settings" className={classes.linkText}>
                    <ListItem button onClick={<Settings/>}>
                        <ListItemText primary="Update Account" />
                    </ListItem>
                  </Link>
                  <Link to="/settings" className={classes.linkText}>
                    <ListItem button>
                        <ListItemText primary="Logout" />
                    </ListItem>
                  </Link>
                </div>
              </Popover> 
        </div>         
        </Toolbar>   
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link to="/" className={classes.linkText}>
            <ListItem button onClick={<AdminHome/>}>
                <ListItemIcon><Home/></ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItem>
          </Link>
          
          <Link to="stats" className={classes.linkText}>
            <ListItem button>
                <ListItemIcon><Timeline/></ListItemIcon>
                <ListItemText primary="Statistics" />
              </ListItem>
          </Link>
            
          <Link to="messages" className={classes.linkText}>
            <ListItem button>
                <ListItemIcon><Message/></ListItemIcon>
                <ListItemText primary="Messages" />
            </ListItem>
          </Link>
            
        </List>

        <Divider />

        <List>
          <Link to="/reviewServices" className={classes.linkText}>
            <ListItem button>
                <ListItemIcon><Business/></ListItemIcon>
                <ListItemText primary="Reviews on Services" />
              </ListItem>
          </Link>
        </List>

        <Divider/>

        <List>

          <Link to="/techApprovals" className={classes.linkText}>
            <ListItem button>
              <ListItemIcon><Build/></ListItemIcon>
              <ListItemText primary="Technicians' Approvals" />
            </ListItem>
          </Link>

        </List>
        <Divider/>

        <List>

          <Link to="/serviceTypes" className={classes.linkText}>
            <ListItem button>
              <ListItemIcon><ContactsIcon/></ListItemIcon>
              <ListItemText primary="Manage Service Types" />
            </ListItem>
          </Link>

          <Link to="/manageUsers" className={classes.linkText}>
            <ListItem button>
              <ListItemIcon><GroupIcon/></ListItemIcon>
              <ListItemText primary="Manage Users" />
            </ListItem>
          </Link>

        </List>
        <Divider/>
        <List>

          <Link to="settings" className={classes.linkText}>
            <ListItem button>
              <ListItemIcon><Settings/></ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
          </Link>

        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
 
      </main>
    </div>
  );
}