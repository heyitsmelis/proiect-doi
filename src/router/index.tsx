import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import authRoutes from "./auth.router";
import { useAuth } from "../hooks/authContext";
import userRoutes from "./user.router";

const Router: React.FC = () => {
    const auth = useAuth();
    return (
        <NavigationContainer>
            {auth.token? userRoutes : authRoutes}
        </NavigationContainer>
    )
}

export default Router;