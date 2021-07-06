import React from 'react'
import Shopnow from '../images/Shopnow.jpg';
import '../../src/Home.css';






const Home = () => {
    return (
        <div className="container">  
            <h1 className="bgcolor-home">Sale</h1>
            <img className="img-size" src={Shopnow} alt="sf"/>
      </div>
      
    )
}

export default Home
