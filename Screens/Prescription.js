import {StyleSheet, View, Text ,Image,TouchableOpacity,TextInput, ScrollView,NavigationContainer,} from 'react-native'
import React from 'react'
import { FontAwesome5,Entypo,AntDesign,FontAwesome,EvilIcons,MaterialCommunityIcons  } from '@expo/vector-icons';
// import Nav from './Screens/Nav.js';

// export default function Prescription(){
//     return(
//         <Nav/>
//     );
// }

export default function Prescription() { 
  return (
    <View style={styles.container}>
    
        <View style={styles.img}>
            
        <Image source={require('../assets/s.png')} style={styles.image}/>
        <View style={styles.img2}>
        <TouchableOpacity>
        <Entypo name="menu" size={30} color="#fff" style={styles.menu}/>
        </TouchableOpacity>
        
        <Image source={require('../assets/ca.jpg')}style={styles.img3} />
        {/* <View style={styles.capsules}>
        <FontAwesome5 name="capsules" size={30} color="#fff" style={styles.capsule}/>
        </View> */}
            <AntDesign name="shoppingcart" size={30} color="#fff" style={styles.shoppingcart}/>
        <TouchableOpacity>
            <FontAwesome name="bell-o" size={24} color="#fff" style={styles.bell}/>
            
            </TouchableOpacity>
            <View style={styles.inputsearch}>
                <EvilIcons name="search" size={24} color="#999" style={styles.search}/>
                <TextInput placeholder="Search Medicine & Healthcare Products" styles={styles.searchtext}/>
            </View>
        </View>
        </View>
       
       <View style={styles.upload}>
        <Entypo name="camera" size={30} color="#fff"  style={styles.camera}/>
        <Text style={styles.text}>Upload your prescription</Text>
        </View>
        <View style={styles.header}>
            <Text style={styles.h1}>Shop by Health Concern</Text>
         <TouchableOpacity>
         <Text style={styles.h2}>View all</Text>
         </TouchableOpacity>
        </View>
        <View style={styles.scroll}>
            {/* scrollview starts here*/}
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.sc}>
            <View style={styles.categories}>
                <View style={styles.well}>
                    <Image source={require('../assets/wellness.jpg')} style={styles.wellness}/>
                    <Text style={styles.txt}>Wellness</Text>
                </View>
                <View style={styles.ayur}>
                    <Image source={require('../assets/ayurveda.jpg')} style={styles.ayurveda}/>
                    <Text style={styles.txt}>Ayurveda</Text>
                </View>
                <View style={styles.vit}>
                    <Image source={require('../assets/vitamins.jpg')} style={styles.vitamins}/>
                    <Text style={styles.txt}>Vitamins</Text>
                </View>
                <View style={styles.opathy}>
                    <Image source={require('../assets/homeopathy.jpg')} style={styles.homeopathy}/>
                    <Text style={styles.txt}>Homeopathy</Text>
                </View>
                <View style={styles.prot}>
                    <Image source={require('../assets/proteins.jpg')} style={styles.proteins}/>
                    <Text style={styles.txt}>Proteins</Text>
                </View>
                

            </View>
       
        </ScrollView>
        {/* scrollview ends here */}
       
        </View>
        <Text style={styles.txt1}>Deals $ Offers</Text>
        <Text style={styles.txt2}>Get special discounts and offers on Medicine</Text>
        <View style={styles.vv}>
        <View style={styles.v1}></View>
        <View style={styles.v2}>
            <Image source={require('../assets/consult.jpg')} style={styles.consult}/>
            <Text style={styles.t}>60% OFF</Text>
            <Text style={styles.t2}>On prescription Drugs</Text>
        </View>
        <View style={styles.v3}></View>
        </View>
        {/* <NavigationContainer>
        <MaterialCommunityIcons name="home-outline" size={24} color="black" />
        </NavigationContainer> */}
        {/* <NavigationContainer>
      <Tab.Navigator>
          
        <Tab.Screen name="Home" component={HomeScreen} options={{
            tabBarIcon:() =>(<MaterialCommunityIcons name="home" size={30} color="#555" />)
        }} 
        />
        <Tab.Screen name="Articles" component={ArticlesScreen}
        options={{
            tabBarIcon:() =>(<MaterialIcons name="article" size={30} color="black" />)
        }} 
        />
        <Tab.Screen name="Myorders" component={MyordersScreen}
        options={{
            tabBarIcon:() =>(<Foundation name="clipboard-notes" size={30} color="black" />)
        }} 
        />
        <Tab.Screen name="Messages" component={MessagesScreen}
        options={{
            tabBarIcon:() =>(<MaterialIcons name="sms" size={30} color="black" />)
        }} 
        />
        <Tab.Screen name="Profile" component={ProfileScreen}
        options={{
            tabBarIcon:() =>(<AntDesign name="user" size={30} color="black" />)
        }}
         />
      </Tab.Navigator>
    </NavigationContainer>
         */}
    
       
        </View>
       
        

       
  )
//   return(
//     <Nav/>
//   );
  
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        
    },
        top:{
        height:300,
        // backgroundColor:'#017CC7',
        borderBottomEndRadius:185,
        borderBottomStartRadius:185,
        
    },
    img:{
        borderBottomLeftRadius:100,
    },
    image:{
        
        height:280,
        width:450,
        // borderBottomLeftRadius:185,
        // borderBottomRadius:185,
        borderBottomLeftRadius:140,
        borderBottomRightRadius:200
    },
    img2:{
        position:'absolute',
        // height:80,
        // width:80,
        // borderRadius:80,
    },
    img3:{
        position:'absolute',
        height:80,
        width:80,
        top:70,
        left:80,
        borderRadius:40
    },
    menu:{
        position:'absolute',
        top:40,
        left:10,
    },
    shoppingcart:{
        position:'absolute',
        top:40,
        marginLeft:320,
    },
    bell:{
        position:'absolute',
        top:42,
        marginLeft:370
    },
    capsules:{
        position:'absolute',
    },
    inputsearch:{
        flexDirection:'row',
        position:'absolute',
        top:180,
        height:40,
        width:320,justifyContent:'center',alignItems:'center',
        backgroundColor:'#f2f2f2',
        left:60,
        borderRadius:10,
    },
    search:{
        paddingRight:60,
        overflow:'hidden',
        fontSize:30,
        fontWeight:'bold'
    },
    searchtext:{
        fontSize:30,
        fontWeight:'bold',
        paddingRight:60
    },
    upload:{
        height:50,
        width:320,
        backgroundColor: '#CB4335',
        marginTop:20,
        marginLeft:40,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        elevation:20,
        
    },
    camera:{
        position:'absolute',
        paddingRight:220
    },
    text:{
        fontSize:20,
        fontWeight:'bold',
        color:'#fff',
        position:'absolute',
        paddingLeft:40
    },
    header:{
        flexDirection:'row',
        marginTop:40,
        marginLeft:20
    },
    h1:{
        fontSize:24,
        fontWeight:'bold'
    },
    h2:{
        paddingLeft:120,
        fontSize:18,
        color:'#616A6B',
        fontWeight:'bold'
    },
    scroll:{
        height:150,

       

    },
    sc:{
        marginHorizontal:10,
    }, 
       

   
    categories:{
        height:150,
        flexDirection:'row',
        marginTop:10,
        justifyContent:'space-evenly',
        marginLeft:20,
        // elevation:30
        
        
    },
    well:{
        borderWidth:1,
        height:70,
        width:70,
        borderRadius:10,
        borderColor:'#EEF2F3'
        
       
    },
    wellness:{
        height:60,
        width:60,
        marginLeft:4,
        marginTop:3
        
     },
    ayur:{
        borderWidth:1,
        height:70,
        width:70,
        borderRadius:10,
        marginLeft:20,
        borderColor:'#EEF2F3'
    

    },
    ayurveda:{
        height:60,
        width:60,
        marginLeft:4,
        marginTop:3
        

    },
    vit:{
        borderWidth:1,
        height:70,
        width:70,
        borderRadius:10,
        marginLeft:20,
        borderColor:'#EEF2F3'
    },
    vitamins:{
        height:60,
        width:60,
        marginLeft:4,
        marginTop:3
        

    },
    opathy:{
        borderWidth:1,
        height:70,
        width:70,
        borderRadius:10,
        marginLeft:20,
        borderColor:'#EEF2F3'
    },
    homeopathy:{
        height:60,
        width:60,
        marginLeft:4,
        marginTop:3
    },
    prot:{
        borderWidth:1,
        height:70,
        width:70,
        borderRadius:10,
        marginLeft:20,
        borderColor:'#EEF2F3'
    },
    proteins:{
        height:60,
        width:60,
        marginLeft:4,
        marginTop:3
    },
    txt:{
        marginTop:20,
        marginLeft:2,
        fontSize:14,
        fontWeight:'bold'
    },
    txt1:{
        marginTop:10,
        marginLeft:20,
        fontSize:24,
        fontWeight:'bold'
    },
    txt2:{
        marginTop:5,
        marginLeft:20,
        fontSize:18,
        color:'#999'
        
    },
    vv:{
        flexDirection:'row',
        marginTop:20
    },
    v1:{
        marginTop:10,
        backgroundColor:'#3c624B',
        height:100,
        width:20,
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
        elevation:10
    },
    v2:{
        marginLeft:20,
        height:120,
        width:340,
        backgroundColor: '#2874A6',
        // marginTop:-100,
        borderRadius:10,
        elevation:10
    },
    consult:{
        position:'absolute',
        height:90,
        width:90,
        borderRadius:50,
        left:220,
        top:16
    },
    t:{
        position:'absolute',
        top:20,
        left:20,
        fontSize:28,
        color:'#fff',
        fontWeight:'bold'
    },
    t2:{
        position:'absolute',
        top:58,
        left:20,
        fontSize:18,
        color:'#fff' 
    },
    v3:{
        backgroundColor: '#CB4335',
        height:100,
        width:30,
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
        elevation:10,
        left:10,
        marginTop:10
    },
   

   
});