import React,{useContext} from 'react'
import Navbar from "./navbar"
import {useParams} from "react-router-dom"
import Grid from '@material-ui/core/Grid';
import Shoe from "./../shoe.json"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import "./../App.css"
import CartDetails from "./context"


const useStyles = makeStyles((theme) => ({
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    button:{
        backgroundColor:"black",
        fontFamily:"Anton",
        color: "white",
        width:"400px",
        '&:hover':{
            backgroundColor: "#282c34",
            color:"white"
        }
    }
  }));


export default function Productitem() {
    const classes = useStyles();
    const {id} = useParams();
    console.log(Shoe[id].img)
    let globalCart = useContext(CartDetails)


    return (
        <div>
            <Navbar/>
           <Grid container>
            <Grid xm={12} sm={6}>
              <div className="Image">
              <img src={Shoe[id].img} alt="Shoe image" width={500}/>  
              </div>
            </Grid>
            <Grid xm={12} sm={6} className="showDesc">
                <div className="paddingL">
                    <h1>{Shoe[id].name}</h1>
                    <p>{Shoe[id].description}</p>
                    <br />
                    <br />
                    <br />
                    <h2>Price: {Shoe[id].price}</h2>
                    <br/>
                    <br/>
                    <Button
         color="secondary"
         className={classes.button}
         onClick={()=>{globalCart[1]([...globalCart[0],Shoe[id]])}}
        startIcon={<AddShoppingCartIcon />}
      >
        Add to cart
      </Button>
      </div>
      
            </Grid>

           </Grid>
            
        </div>
    )
}
