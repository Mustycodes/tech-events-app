import { Link } from "react-router-dom";
import { NavItemProps } from "../shared/types/types";
const Header = () => {
  const NavItem:React.FC<NavItemProps> = ({to, children}) => (
    <li>
      <Link className="py-2.5 px-2" to={to}>
        {children}
      </Link>
    </li>
  );
  return (
    <header className="text-gray-400 flex justify-between py-6 items-center">
      <div className="logo">
        <Link className="font-bold text-2xl text-purple-300" to="/">
          TechEvents
        </Link>
      </div>
      <nav>
        <ul className="flex">
         <NavItem to="/events">All Events</NavItem>
         <NavItem to="/events/new">Create Event</NavItem>
         <NavItem to="/">Events</NavItem>
        </ul>
      </nav>
      <form>
        <input
          className="p-2 bg-gray-200 outline-none rounded-l-full"
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
      <ul className="flex">
        <li className="py-3">
          <Link
            className="border-r border-b border-purple-400 hover:bg-purple-500 hover:text-white py-2.5 px-5 mx-1"
            to="/"
          >
            Log In
          </Link>
        </li>
        <li className="py-3">
          <Link
            className="border-l border-b border-purple-400 hover:bg-purple-500 hover:text-white py-2.5 px-5 mx-1 mr-0"
            to="/"
          >
            Sign Up
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
