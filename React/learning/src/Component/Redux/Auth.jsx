import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { toggleAuth } from "../Action/authAction"

const Auth = () => {

    const auth = useSelector((state) => state.auth)
    const dispatch = useDispatch()

    const handleAuth = () => {
        dispatch(toggleAuth())
    }

    return (
        <div>
            <button onClick={handleAuth} className="btn btn-info">{auth.isLoggedIn ? "LogOut" : "Login"}</button>
        </div>
    )
}

export default Auth