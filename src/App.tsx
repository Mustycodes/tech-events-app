import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import EventsPage from "./pages/eventsPage";
import EventDetailsPage from "./pages/eventDetailsPage";
import CreateEventPage from "./pages/createEventPage";
import Error404Page from "./pages/error404Page";
import LoginPage from "./pages/loginPage";
import SignUpPage from "./pages/signUpPage";
import ProfilePage from "./pages/profilePage";

function App() {
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
    <div className="lg:mx-36 text-white">
      {/* <Header /> */}
      
      <Switch>
        {appRoutes.map((route) => (
          <Route exact path={route.path}>
            {route.component}
          </Route>
        ))}
      </Switch>
    </div>
  );
}

export default App;
