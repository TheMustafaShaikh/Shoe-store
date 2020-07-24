import React,{useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";


import Product from "./components/product";
import Contact from "./components/contact";
import Cart from './components/cart';
import Productitem from "./components/productitem"
import CartDetails from "./components/context"




export default function Routeconfig() {
    let cart = useState([])
    return (
        <CartDetails.Provider value={cart}>
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Product}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/productitem/:id" component={Productitem}/>

                </Switch>
            </Router>
            
        </div>
        </CartDetails.Provider>
    )
}
