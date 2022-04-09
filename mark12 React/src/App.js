import "./App.css";
import { Home } from "./Pages/Home";
import { ValidTriangle } from "./Pages/ValidTriangle";
import { Hypotenuse } from "./Pages/Hypotenuse";
import { Area } from "./Pages/Area";
import { ThirdAngle } from "./Pages/ThirdAngle";
import { Quiz } from "./Pages/Quiz";
import { Link, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/valid-triangle">Valid Triangle</Link>
          </li>
          <li>
            <Link to="/hypotenuse">Hypotenuse</Link>
          </li>
          <li>
            <Link to="/area">Area</Link>
          </li>
          <li>
            <Link to="/third-angle">ThirdAngle</Link>
          </li>
          <li>
            <Link to="/quiz">Quiz</Link>
          </li>
        </nav>
      </header>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/valid-triangle">
          <ValidTriangle />
        </Route>
        <Route path="/hypotenuse">
          <Hypotenuse />
        </Route>
        <Route path="/area">
          <Area />
        </Route>
        <Route path="/third-angle">
          <ThirdAngle />
        </Route>
        <Route path="/quiz">
          <Quiz />
        </Route>
      </Switch>
      <footer>
        <p>
          © | <span className="year">{new Date().getFullYear()}</span> |
          Muthukumar M
        </p>

        <div className="socials">
          <a href="https://www.instagram.com/muthukumar_4420/" target="_blank">
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100005672054689"
            target="_blank"
          >
            <i className="fab fa-facebook-square"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/muthu-kumar-b56466190/"
            target="_blank"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/Muthukumar-Muthu" target="_blank">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://twitter.com/Muthuku91451976" target="_blank">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
