import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { UserRouteNames } from './route-names';
import { Text } from 'react-native';
import UserScreen from '../screens/user/User.screen';

const UserStack = createNativeStackNavigator()



const userRoutes = (
    <UserStack.Navigator>
        <UserStack.Screen name = {UserRouteNames.PROFILE} component={UserScreen} options={{headerTitle: (props) => <Text {...props}> User Page </Text>}}/>
        
    </UserStack.Navigator>
)

export default userRoutes;