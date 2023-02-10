import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import NavBar from './Component/NavBar';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import SideBar from './Component/SideBar';

function App() {

  return (
    <Router>
      <div>
        <NavBar /> {/*Component1 */}
        <div className='com2'>{/*Component2 */}

          <SideBar />  {/*Component2.1 */}
          <div style={{ padding: "10px" }}>
            <Switch>{/*Component2.2 */}
              <Route path='/' exact component={Home} />
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
            </Switch>

          </div>

        </div>
      </div>
    </Router>
  );
}

export default App;
