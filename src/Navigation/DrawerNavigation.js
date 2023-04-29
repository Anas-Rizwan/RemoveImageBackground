import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import DreamApi from '../Screens/DreamApi/DreamApi';
import Rm_img_bg from '../Screens/Image_bg/Rm_img_bg';
import PrivacyPolicy from '../Screens/Privacy/PrivacyPolicy';
import Proplans from '../Screens/ProPlans/Proplans';

const Drawer = createDrawerNavigator();


const DrawerNavigation = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Rm_img_bg">
                <Drawer.Screen name="Rm_img_bg" component={Rm_img_bg} options={{headerShown:false}} />
                <Drawer.Screen name="Proplans" component={Proplans} />
                <Drawer.Screen name="DreamApi" component={DreamApi} />
                <Drawer.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};


export default DrawerNavigation;
