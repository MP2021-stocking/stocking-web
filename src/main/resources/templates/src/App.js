import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {LoginForm} from "./components/2.molecules/LoginForm/LoginForm"

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/login_form" component={LoginForm}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
