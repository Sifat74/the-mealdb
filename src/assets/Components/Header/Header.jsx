import { NavLink } from "react-router-dom";
import './Header.css'
const Header = () => {
    return (
        <nav className="flex justify-between mt-10 items-center border-b-2 pb-4">
            <div className="text-4xl font-bold text-yellow-500">The Meal<span className="text-yellow-800 font-extrabold">DB</span></div>
            <div className="flex gap-10 font-semibold text-yellow-800">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/category">Category</NavLink>
                <NavLink to="/areas">Area</NavLink>
            </div>
        </nav>


    );
};

export default Header;