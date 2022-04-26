import { useContext } from "react";
import { AuthContext } from "../context/Auth"

export const Navbar = () => {
    const { IsAuth, toggleAuth } = useContext(AuthContext);
   
    return (
        <nav>
            <li style={{ listStyleType: "none" }}>
                <button onClick={toggleAuth}>
                    {IsAuth ? "Log Out" : "Log In"}
                </button>
            </li>
        </nav>
    )
}

