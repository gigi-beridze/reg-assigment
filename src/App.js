import MainMenu from "./mainMenu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RightRegisterForm from "./components/rightRegisterForm";
import './index.css'
import Registered from './components/registered'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element = {<MainMenu />} />
          <Route path="/register" element = {<RightRegisterForm />} />
          <Route path="/registered" element = {<Registered />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
