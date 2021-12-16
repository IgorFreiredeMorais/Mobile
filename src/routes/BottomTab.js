import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons} from "@expo/vector-icons";
import { MaterialCommunityIcons} from "@expo/vector-icons";

import TelaCampo from '../views/TelaCampo';
import TelaQuadra from '../views/TelaQuadra';
import Home from '../views/Home';

const Tab = createBottomTabNavigator();

export default () => {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Home" tabBarOptions={{ activeBackgroundColor:"#000", inactiveBackgroundColor:"#fafafa", activeTintColor:"#fafafa", inactiveTintColor:"#000" }} >
            <Tab.Screen name="Home" component={Home} options={{tabBarIcon:(props) => <MaterialIcons name="home" {...props}/>}} />
                <Tab.Screen name="Tela campos" component={TelaCampo} options={{tabBarIcon:(props) => <MaterialCommunityIcons name="soccer-field" {...props}/>}} />
                <Tab.Screen name="Tela quadras" component={TelaQuadra} options={{tabBarIcon:(props) => <MaterialCommunityIcons name="soccer-field" {...props}/>}} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}


