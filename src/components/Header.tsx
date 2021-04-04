import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <header className="text-gray-400 flex justify-between py-6 items-center">
      <div className="logo">
        <Link className="font-bold text-2xl text-purple-300" to="/">TechEvents</Link>
      </div>
      <nav>
        <ul className="flex">
          <li><Link className="py-2.5 px-2" to="/">All Events</Link></li>
          <li><Link className="py-2.5 px-2" to="/">Create Event</Link></li>
          <li><Link className="py-2.5 px-2" to="/">Events</Link></li>
        </ul>
      </nav>
      <form>
        <input className="p-2 bg-gray-200 outline-none rounded-l-full" type="search" name="search-event" id="search-event" placeholder="Search for event"/>
        <button className="border-none p-2 outline-none bg-gray-900 hover:bg-gray-800 rounded-r-full" type="submit">Search</button>
      </form>
      <ul className="flex">
        <li className="py-3"><Link className="border-r border-b border-purple-400 hover:bg-purple-500 hover:text-white py-2.5 px-5 mx-1" to="/">Log In</Link></li>
        <li className="py-3"><Link className="border-l border-b border-purple-400 hover:bg-purple-500 hover:text-white py-2.5 px-5 mx-1 mr-0" to="/">Sign Up</Link></li>
      </ul>
    </header>
  )
}

export default Header
