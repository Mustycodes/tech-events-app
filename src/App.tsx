import { useState, useRef } from 'react';
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import EventsPage from "./pages/eventsPage";
import EventDetailsPage from "./pages/eventDetailsPage";
import CreateEventPage from "./pages/createEventPage";
import Error404Page from "./pages/error404Page";
import LoginPage from "./pages/loginPage";
import SignUpPage from "./pages/signUpPage";
import ProfilePage from "./pages/profilePage";

import Header from "./components/Header";
import Burger from './components/navbar/Burger';
import Menu from './components/navbar/Menu'
import Overlay from './components/navbar/Overlay'
import {useOnClickAway} from './components/navbar/hooks'

function App() {
  const [open, setOpen] = useState(false);

  const navbarRef = useRef(null);
  useOnClickAway(navbarRef, () => setOpen(false));
  const appRoutes = [
    { path: "/", component: <h1>HOME PAGE</h1> },
    { path: "/events", component: <EventsPage /> },
    { path: "/events/new", component: <CreateEventPage /> },
    { path: "/events/:id", component: <EventDetailsPage /> },
    { path: "/login", component: <LoginPage /> },
    { path: "/signup", component: <SignUpPage /> },
    { path: "/user/profile", component: <ProfilePage /> },
    { path: "", component: <Error404Page /> },
  ];

  return (
    <div className=" lg:mx-36 text-white">
      {/* Page Overlay */}
       <Overlay open={open} />
      <Header />
      <div className="block md:hidden" ref={navbarRef}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={() => setOpen(false)} />
      </div>
      
      
      <Switch>
        {appRoutes.map((route) => (
          <Route exact path={route.path}>
            {route.component}
          </Route>
        ))}
      </Switch>
      <ToastContainer hideProgressBar newestOnTop autoClose={3000} toastStyle={{backgroundColor: 'rgba(110, 231, 183', color: 'rgba(255, 255, 250)'}}/>
    </div>
  );
}

export default App;
