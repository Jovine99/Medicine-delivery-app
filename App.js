import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Screens/Home';
import Splash from './Screens/Splash';
import Show from './Screens/Show';
import Med from './Screens/Med';
import Cart from './Screens/Cart';
import Signin from './Screens/Signin';
import Pwd from './Screens/Pwd';
import Response from './Screens/Response';
import Signup from './Screens/Signup';
import Location from './Screens/Location';
import Enable from './Screens/Enable';
import Prescription from './Screens/Prescription.js';
import Nav from './Screens/Nav.js';




export default function App() {
  return (
    // <Home />
    // <Splash />
    //  <Show />
    // <Med/>
    // <Cart/>
    // <Signin/>
    // <Pwd/>
    // <Response/>
    // <Signup/>
    // <Location/>
    // <Enable/>
    // <Prescription/>
    <Nav/>
    
    
   
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
