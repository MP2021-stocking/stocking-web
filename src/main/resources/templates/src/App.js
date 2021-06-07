import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {SignupPage} from "./components/5.pages/SignupPage/SignupPage";
import {LoginPage} from "./components/5.pages/LoginPage/LoginPage";
import {MainPage} from "./components/5.pages/MainPage/MainPage";

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/login" component={LoginPage}/>
                    <Route exact path="/signup" component={SignupPage}/>
                    <Route exact path="/main" component={MainPage}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
