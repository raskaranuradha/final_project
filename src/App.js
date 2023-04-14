//import Meal from "./components/Meal";
import Home from "./components/Home";
import "./App.css"
import { Routes,Route, BrowserRouter,NavLink } from "react-router-dom";
import RecipeInfo from "./components/RecipeInfo/RecipeInfo";
import Meal from "./components/Meal/Meal";
import About from "./components/About";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <NavLink to="/">Home</NavLink>
        {'|'}
        <NavLink to="/Meal">Find Meal</NavLink>
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