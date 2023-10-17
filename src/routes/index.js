import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Welcome from '../pages/welcome'
import SigIn from '../pages/SignIn'
import Camera from '../pages/Camera'
import LogIn from '../pages/LogIn';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='Welcome'
                component={Welcome}
                options={{ headerShown: false}}
            />
            <Stack.Screen
                name='SignIn'
                component={SigIn}
                options={{ headerShown: false}}
            />
            <Stack.Screen
                name='Camera1'
                component={Camera}
                options={{ headerShown: false}}
            />
            <Stack.Screen
                name='LogIn'
                component={LogIn}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}