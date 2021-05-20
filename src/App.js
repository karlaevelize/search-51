import './App.css';
import { Switch, Route } from "react-router-dom"
import Search from "./pages/Search"
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        {/* added the "?", this means the searchTerm might be there or not */}
        <Route path="/search/:searchTerm?" component={Search}/>
      </Switch>
    </div>
  );
}

export default App;