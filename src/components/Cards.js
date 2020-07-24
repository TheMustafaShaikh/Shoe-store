import React,{ useContext,useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import "./../App.css"
import {Link} from "react-router-dom"
import cartDetails from "./context"

const useStyles = makeStyles((theme)=>({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 200,
      backgroundColor:"#F6F6F6"
    },
    button:{
        backgroundColor:"black",
        fontFamily:"Anton",
        color: "white",
        width:"1200px",
        '&:hover':{
            backgroundColor: "#282c34",
            color:"white"
        }
    },
    fontfamily:{
        fontFamily:"Anton"
    }
    
  }));


export default function Cards({name,img,description,price,id}) {
    const classes = useStyles();
    let globalCart = useContext(cartDetails);


    return (
        <div>
  
            <Card className={classes.root}>
      <Link to={`/productitem/${id}`} className="linkset">        
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
             <strong>{name}</strong>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
                {description}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2" className={classes.fontfamily}>
             <strong>Price {price}</strong>
          </Typography>
        </CardContent>
      
      </CardActionArea>
      </Link>
      <CardActions>
      <Button
         color="secondary"
         className={classes.button}
        startIcon={<AddShoppingCartIcon />}
        onClick={()=> {globalCart[1]([...globalCart[0],{name,img,description,price,id}])}}
      >
        Add to cart
      </Button>
      
      </CardActions>
    </Card>

        </div>
    )
}