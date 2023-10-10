import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import Info from '../Screens/Info';
import AddEmployee from '../Screens/AddEmployee';

const Stack = createNativeStackNavigator();

const Container = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false

            }}>
            <Stack.Screen name="AddEmployee" component={AddEmployee} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Info" component={Info} />
        </Stack.Navigator>

    );
}
export default Container;