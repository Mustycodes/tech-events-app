import { Link, NavLink } from "react-router-dom";
import { RootStateOrAny, useSelector } from "react-redux";
import { NavItemProps } from "../shared/types/types";
import profileImg from "../assets/images/monsieur.png";



const Header = () => {
  const{ isAuthenticated, name} = useSelector(
    (state: RootStateOrAny) => state.user
  );
  

  const NavItem: React.FC<NavItemProps> = ({ to, children }) => (
    <li>
      <NavLink
        exact
        activeClassName="text-purple-500 border-b border-purple-500"
        className="py-2.5 px-2 hover:bg-gray-800"
        to={to}
      >
        {children}
      </NavLink>
    </li>
  );
  return (
    <header className="hidden md:flex text-gray-400 justify-between py-6 items-center">
      <div className="logo">
        <Link className="font-bold text-2xl text-purple-300" to="/">
          TechEvents
        </Link>
      </div>
      <nav>
        <ul className="flex">
          <NavItem to="/events">All Events</NavItem>
          <NavItem to="/events/new">Create Event</NavItem>
          <NavItem to="/vrfr">Events</NavItem>
        </ul>
      </nav>
      <form>
        <input
          className="p-2 bg-gray-200 bg-opacity-30 text-gray-100 outline-none rounded-l-full"
          type="search"
          name="search-event"
          id="search-event"
          placeholder="Search for event"
        />
        <button
          className="border-none p-2 outline-none bg-gray-900 hover:bg-gray-800 rounded-r-full"
          type="submit"
        >
          Search
        </button>
      </form>
      {isAuthenticated ? (
        <ul className="flex items-center">
          <li>
            <p className="font-bold mr-4">Welcome {name}</p>
          </li>
          <li>
            <Link to="/user/profile"><img src={profileImg} alt="" className="w-14 h-14 rounded-full" /></Link>
          </li>
        </ul>
      ) : (
        <ul className="flex">
          <li className="py-3">
            <Link
              className="border-r border-b border-purple-400 hover:bg-purple-500 hover:text-white py-2.5 px-5 mx-1"
              to="/login"
            >
              Log In
            </Link>
          </li>
          <li className="py-3">
            <Link
              className="border-l border-b border-purple-400 hover:bg-purple-500 hover:text-white py-2.5 px-5 mx-1 mr-0"
              to="/signup"
            >
              Sign Up
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
