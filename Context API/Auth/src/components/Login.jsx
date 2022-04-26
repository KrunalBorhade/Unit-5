import { useContext } from "react"
import { AuthContext } from "../context/Auth"

export const LoginStatus = () => {
    const { IsAuth, token } = useContext(AuthContext);
    return (
        <div>
            {IsAuth ? "User is logged in" : "User is not logged in"}
            <br></br>
            {IsAuth ? `Token: ${token}` : null}
        </div>
    )
}

