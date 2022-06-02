import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CreatePost from "./Components/CreatePost/CreatePost";

import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";

import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Signup from "./Components/Signup/Signup";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/sign-up" component={Signup} />
          <Route exact path="/sign-in" component={Login} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/create-post" component={CreatePost} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
