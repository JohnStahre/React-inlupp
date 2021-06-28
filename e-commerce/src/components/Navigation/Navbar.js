// import {useRef, useEffect, useState} from 'react'
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

    // test nedan för att se om den renderas om man lägger på class

    // const [text, setText] = useState('')

    // let renders = useRef(0)

    // useEffect (() => {
    //     renders.current ++
    //     console.log(renders.current)
    // })

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><i className="fas fa-place-of-worship"> JohnShop </i></Link>
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item"> 
                    <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
                </li>
                
                <li className="nav-item"> 
                    <NavLink className="nav-link " aria-current="page" to="/products">Products</NavLink>
                </li>
               

                {/* dropdown icon */}
                <li className="nav-item me-3 me-lg-0 dropdown">
                    <span
                    className="nav-link dropdown-toggle hidden arrow"
                    id="navbarDropdown"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                    >
                    <i className="fas fa-shopping-cart"></i>
                    </span>
                    <ul className="dropdown-menu dropdown-menu-lg-end" aria-labelledby="navbarDropdown">
                        Shopping cart
                    </ul>
                </li>

                {/* Renderar inte om man lägger på en klass test
                <input type="text" value={text} onChange={e => setText(e.target.value)} /> */}
              
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar
