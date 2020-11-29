
import './App.css';
import Dashboard from './components/Dashboard';
import ProfilePage from './pages/ProfilePage';
import {BrowserRouter,Switch, Route, 
  Redirect, withRouter} from 'react-router-dom'
import NavBar from './components/NavBar';
import ProfileBody from './components/ProfileBody'
import "leaflet/dist/leaflet.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ProfilePage/>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
