import { Link} from "react-router-dom";
import Container from "../Utils/Container";
import Logo from "../../assets/images/logo.png"
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <ScrollLink

          to="/"
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'text-blue-600' : ''
          }
        >
          Home
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          to="products"
          spy={true}
          smooth={true}
          offset={-70} // Adjust the offset according to your layout
          duration={500}
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }
        >
          Products
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          to="aboutus"
          spy={true}
          smooth={true}
          offset={-70} // Adjust the offset according to your layout
          duration={500}
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }
        >
          About Us
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          to="contact"
          spy={true}
          smooth={true}
          offset={-70} // Adjust the offset according to your layout
          duration={500}
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }
        >
          Contact Us
        </ScrollLink>
      </li>
    </>
  );
  
  return (
    <div className="border-b-[3px] border-blue-600">
      <Container>
        <div className="navbar">
          <div className="navbar-start flex-1">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navLinks}
              </ul>
            </div>
            <div className="hidden lg:block">
            <Link to={'/'}>
            <img src={Logo} className="w-[70px]" alt="" />
            </Link>
            </div>
          </div>
          <div className="navbar-center lg:hidden">
          <Link to={'/'}>
            <img src={Logo} className="w-[70px]" alt="" />
            </Link>
          </div>
          <div className="hidden lg:flex navbar-end ">
            <ul className="menu menu-horizontal px-1">{navLinks}</ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
