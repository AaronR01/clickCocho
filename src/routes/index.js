import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Welcome from '../pages/welcome'
import SigIn from '../pages/SignIn'
import Camera from '../pages/Camera'
import LogIn from '../pages/LogIn';
import Menu from '../pages/Menu';
import Cadastro from '../pages/Cadastro'

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
                name='LogIn'
                component={LogIn}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name='Menu'
                component={Menu}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name='Camera1'
                component={Camera}
                options={{ headerShown: false}}
            />
            <Stack.Screen
                name='Cadastro'
                component={Cadastro}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}