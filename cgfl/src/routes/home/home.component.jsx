import { Outlet } from "react-router-dom";

const Home = () => {
    return(
        <div>
            <h1>This is the home component</h1>
            <Outlet />
        </div>
    )

}

export default Home;