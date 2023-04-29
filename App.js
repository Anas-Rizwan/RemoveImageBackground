//import liraries
import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import DrawerNavigation from './src/Navigation/DrawerNavigation'
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  
  useEffect(()=>{
    setTimeout(()=>{
      SplashScreen.hide()
    },1500)
  },[])
  return (
    
    <DrawerNavigation />

  );
};


export default App;
