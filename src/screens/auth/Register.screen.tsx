import React from "react"
import Register from "../../components/Register"
import { register } from "../../api"
import { useAuth } from "../../hooks/authContext"

const RegisterScreen = () => {
    const auth = useAuth()
    return <Register onSubmit={auth.register}/>
}

export default RegisterScreen;