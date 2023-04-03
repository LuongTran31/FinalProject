import React from "react";
import Featured from "../../components/featured/Featured";
import "./home.scss"
import { Link } from "react-router-dom";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import { cards} from "../../data";
import Slide from "../../components/slide/slide";
import CatCard from "../../components/catCard/CatCard";
const Home = () =>{
    return (
        <div className="home"> 
            <Featured/>
            <TrustedBy/>
            <Slide slidesToShow={4} arrowsScroll={3}>
           {cards.map((card) => (
            <CatCard key={card.id} card={card} />
            ))}
            </Slide>
       
    
         </div>
    )
}

export default Home