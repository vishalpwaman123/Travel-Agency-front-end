import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import store from "./Redux/store";

import signUp from "./Components/SignUp/Signup";
import signIn from "./Components/SignIn/signIn";
import forgetPassword from "./Components/ForgetPassword/ForgetPassword";
import resetPassword from "./Components/ResetPassword/ResetPassword";
import dashBoard from "./Components/Admin/DashBoard/DashBoard";
import Header from "./Components/Admin/DashBoard/Header/Header";

import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Provider store={store}>
            <Route exact path="/" component={signUp} />
            <Route exact path="/signIn" component={signIn} />
            <Route exact path="/forgetPassword" component={forgetPassword} />
            <Route exact path="/resetPassword" component={resetPassword} />
            <Route exact path="/adminDashBoard" component={dashBoard} />
            <Route exact path="/Header" component={Header} />
          </Provider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
