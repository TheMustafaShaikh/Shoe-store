import React,{useContext,useState,useEffect} from 'react'
import Navbar from "./navbar"
import CartDetails from "./context"
import "./../App.css"




export default function Cart() {
    let globalCart = useContext(CartDetails);
    var fullprice = 0;  
    let [fullPrice,setFullPrice] = useState(0); 

    useEffect(()=>{
        
        globalCart[0].forEach((element,index)=>{
            const getPrice = element.price;
            const convertedPrice = getPrice.split("$");
            fullprice += parseInt(convertedPrice[0]);    
        })

        setFullPrice(fullprice)
        setFullPrice(fullprice)
        

    },[globalCart[0]])



    return (
        <div>
            <Navbar />
            <div className="cartDetails">
    {globalCart[0].map((cartValue)=>(
    <div className="showcartDetails">    
    <h4>{cartValue.name}</h4>
    <button onClick={()=>globalCart[1](globalCart[0].filter(element =>element !=cartValue))}>Delete</button>
    </div>
    ))} 
        <br/>
        <hr/>
    <h5>Price : {fullPrice}$</h5>
           
    </div>



        </div>
    )
}
