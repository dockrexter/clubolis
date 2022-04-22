import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Screens/Login/Login';
import Login2 from '../Screens/Login2/Login2';
import SignUp from '../Screens/SignUp/SignUp';



const Stack = createStackNavigator();


const StackNavigation= ()=> {

  return (
    <Stack.Navigator
        initialRouteName={"Login"}
        screenOptions={{
            gestureEnabled:true,
            headerShown:false,

        }}
    >
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Login2" component={Login2}/>
      <Stack.Screen name="SignUp" component={SignUp}/>
    </Stack.Navigator>
  );
}
export default StackNavigation;