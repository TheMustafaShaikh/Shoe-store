import React from 'react'
import "./../App.css"
import Navbar from "./navbar"
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Cards from "./Cards"
import Shoes from "./../shoe.json"





export default function Product() {

  return (
  
    <div className="product-full">
      
      <Navbar />
      <Container>
      <h1 className="Head-1">PRODUCTS</h1>
      <Grid container spacing={3}>
      {
        Object.keys(Shoes).map((element)=> <Grid item xs={12} sm={4} key={element}><Cards name={Shoes[element].name} img={Shoes[element].img} description={Shoes[element].description} price={Shoes[element].price} id={element}/></Grid>)
      }       
      
      </Grid>

      </Container>
      
    </div>
  
  );
}
