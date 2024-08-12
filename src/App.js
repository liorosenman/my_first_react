import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      APP
      <nav>
        <Link to="/">Hello</Link> |{" "}
        <Link to="/school">School</Link> |{" "}
        <Link to="/home">IKEA</Link> |{" "}
        <Link to="/books">Books</Link> |{" "}
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
