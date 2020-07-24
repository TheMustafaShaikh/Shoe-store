import React,{useContext} from 'react';
import "./../App.css"
import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import Badge from '@material-ui/core/Badge';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from "react-router-dom"
import CartDetails from "./context"




const useStyles = makeStyles((theme) => ({
   
    grow: {
      flexGrow: 1,
      backgroundColor: "#F6F6F6",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      
        display: 'block',
        fontFamily: "Anton",
        fontWeight: 600,
        color: "#f44336",
        letterSpacing: 2,
        fontStyle:"italic",
        
    },
    btnDisplay: {
        display: "block"
    },
   

    inputRoot: {
      color: 'inherit',
    },
    list: {
        width: 250,
        backgroundColor: '#16171f',
        color: "white",
        fontFamily: "Anton",
        fontWeight:"bold",
        height: '100vh'
      },
      fullList: {
        backgroundColor: '#16171f',
        width: 'auto',
      
      },
      
  }));

export default function Navbar() {
    const classes = useStyles();
    const [state, setState] = React.useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
    });
  
    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    
      const list = (anchor) => (
        <div
          className={clsx(classes.list, {
            [classes.fullList]: anchor === 'top' || anchor === 'bottom',
          })}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List className="list-color">
              <Link to="/" className="linktag">
              <ListItem button className={classes.btnDisplay}>
                <ListItemText primary="Product" className="textbtn"/>
              </ListItem>
              </Link>

              <Link to="/cart" className="linktag">
              <ListItem button className={classes.btnDisplay}>
                <ListItemText primary="Cart"  className="textbtn"/>
              </ListItem>
              </Link>

              <Link to="/contact" className="linktag">
              <ListItem button className={classes.btnDisplay}>
                <ListItemText primary="Contact us" className="textbtn"/>
              </ListItem>
              </Link>
            
          </List>
          
       
        </div>
      );

    let globalCart = useContext(CartDetails);
          // const numberofCarts =()=>{
          //   if(globalCart[0].length == 0)
          //     return 0;
          //   else return globalCart[0].length;  
          // }

    
    return (
        <div className={classes.grow}>
      <AppBar position="static" color="#FFFFFF" style={{boxShadow:"none"}}>
        <Toolbar>   
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >

<Button onClick={toggleDrawer('left', true)}> <MenuIcon /></Button>
          <SwipeableDrawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
            onOpen={toggleDrawer('left', true)}
          >
              {list('left')}
          </SwipeableDrawer>

           
          </IconButton>
          <Typography className={classes.title} variant="h6" >
            SHOE STORE
          </Typography>
         
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Link to="/cart" className="cartClick">
            <IconButton aria-label="show 21 new notifications" color="inherit">
              <Badge badgeContent={globalCart[0].length} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            </Link>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-haspopup="true"
              color="inherit"
            >
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

    </div>
    )
}
