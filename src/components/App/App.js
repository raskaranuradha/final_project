import Home from "../Home/Home";
import "./App.css"
import { Routes,Route, BrowserRouter,NavLink } from "react-router-dom";
import RecipeInfo from "../RecipeInfo/RecipeInfo";
import Meal from "../Meal/Meal";
import About from "../About/About";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <NavLink to="/">Home</NavLink>
        {'|'}
        <NavLink to="/Meal">Find a Meal</NavLink>
        {'|'}
        <NavLink to="/about">About</NavLink>      
      </nav>
      <Routes>
        <Route path="*" element={<center> Something went wrong... Page Not Found</center>} /> 
        <Route path="/" element={<Home />} />
        <Route path="/meal" element={<Meal />} />
        <Route path="/meal/:idMeal" element={<RecipeInfo />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;