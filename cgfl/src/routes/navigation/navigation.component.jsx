import { NavLink } from 'react-router-dom';
import { Outlet } from "react-router-dom";

const Navigation = () => {
    return(
        <div>
            <h2>Creative Garden</h2>
            <br/>
            <h4>for Learning</h4>
            <NavLink to="/">
                <p>Home</p>
            </NavLink>
            <NavLink to="game">
                <p>Game</p>
            </NavLink>
            <Outlet />
        </div>
    )

}

export default Navigation;