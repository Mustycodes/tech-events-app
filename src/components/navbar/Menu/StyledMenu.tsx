import { Link } from 'react-router-dom'
export const StyledMenu = ({open, children}: any) => (
  <nav className={`flex flex-col justify-center bg-gray-600 h-screen text-left p-8 absolute top-0 left-0 transition-transform duration-300 ease-in-out w-full md:w-8/12 z-40 transform ${open ? "translate-x-0" : "-translate-x-full"}`}>
    {children}
  </nav>
)

export const StyledLink = ({to, children}:any) => (
  <Link to={to} className="text-2xl md:text-3xl text-center md:text-left uppercase py-8 px-0 font-bold tracking-wider text-gray-100 no-underline transition-colors">{children}</Link>
)