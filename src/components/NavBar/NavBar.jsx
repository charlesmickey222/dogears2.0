import { Link } from "react-router-dom";

const NavBar = () => {
  return ( 
    <>
      <header>
        <Link to='/book-bank'>Book Bank</Link>
      </header>
    </>
  );
}

export default NavBar;