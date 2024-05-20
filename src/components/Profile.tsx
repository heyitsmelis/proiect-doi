import React from "react";
import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";

type RouteParams = {
    email: string;
    password: string;
};

const ProfilePage = () => {
    const route = useRoute();
    const { email, password } = route.params as RouteParams;

    return (
        <View>
            <Text>Email: {email}</Text>
            <Text>Password: {password}</Text>
        </View>
    );
};

export default ProfilePage;

