import React from 'react'
import {Link, Outlet} from 'react-router-dom'   

const Books = () => {
  return (
        <div>
          Books
          <nav>
            <Link to="/">Hello</Link> |{" "}
            <Link to="/books/comedy">Comedy</Link> |{" "}
            <Link to="/books/thriller">Thriller</Link> |{" "}
            <Link to="/books/kids">Kids</Link> |{" "}
          </nav>
          <Outlet></Outlet>
        </div>           
      );
  
}

export default Books