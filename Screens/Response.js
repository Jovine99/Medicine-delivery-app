import { View, Text,TouchableOpacity, TextInput} from 'react-native'
import React from 'react'
import { AntDesign,Fontisto,Entypo,Ionicons } from '@expo/vector-icons';


export default function Response() {
  return (
    <View style={{flex:1}}>
         <View style={{height:900,backgroundColor:'#B2BABB'}}>
         <TouchableOpacity style={{height:50,marginLeft:30,marginTop:60}}>
<AntDesign name="arrowleft" size={24} color="black" />
</TouchableOpacity>

<View style={{width:90,height:90,borderRadius:90,borderColor:'#1D1C1A', borderWidth: 2,justifyContent:'center',alignItems:'center',marginLeft:150}}>
<View style={{justifyContent:'center',alignItems:'center',paddingTop:10,position:'absolute'}}>
<Fontisto name="unlocked" size={30} color="#5B5D59" />
<Entypo name="dots-three-horizontal" size={35} color="black" style={{marginTop:10}}/>
</View>
</View>
<View style={{justifyContent:'center',alignItems:'center',marginTop:80}}>
    <Text style={{fontSize:30,fontWeight:'bold'}}>Forgot Password</Text>
    <Text style={{fontSize:20,marginTop:20,color:'4D4E4C'}}>Enter your Email or Phone number.You will</Text>
    <Text style={{fontSize:20,marginTop:5,color:'4D4E4C'}}>receive a code to create a new password.</Text>
</View>
<View style={{flexDirection:'row',marginTop:80,borderRadius:10,justifyContent:'center',alignItems:'center',overflow:'hidden',height:50,width:300,marginRight:50,marginLeft:50,backgroundColor:'#B2BABB'}}>
    <TextInput style={{fontSize:20,paddingLeft:30,marginLeft:-40}}>Email or Phone number</TextInput>
    <TouchableOpacity>
    <Fontisto name="email" size={24} color="black" style={{marginLeft:60}} />
    </TouchableOpacity>
</View>
<TouchableOpacity style={{marginLeft:60,marginTop:100,justifyContent:'center', backgroundColor:'#3c624B',width:300,height:50,borderRadius:20,alignItems:'center'}}>
  <Text style={{fontSize:30,fontWeight:'bold',color:'#fff'}}>Confirm</Text>
</TouchableOpacity>
<View style={{height:300,backgroundColor:'#f2f2f2',marginTop:390,position:'absolute',width:320,height:320,marginLeft:45,borderRadius:25,justifyContent:'center',alignItems:'center'}}>
   <View style={{position:'absolute',top:10}}>
   <Ionicons name="checkmark-circle-outline" size={100} color="#3c624B"  />
   </View>
   <View style={{justifyContent:'center',alignItems:'center',marginTop:80,overflow:'hidden'}}>
       <Text style={{fontSize:28,fontWeight:'bold'}}>A message has been sent!</Text>
       <Text style={{fontSize:18,marginTop:10}}>You'll shortly receive a message with</Text>
       <Text style={{fontSize:18}}>instructions to set up your password</Text>
   </View>
  <View>
  <TouchableOpacity style={{marginTop:40,justifyContent:'center', backgroundColor:'#3c624B',width:300,height:50,borderRadius:20,alignItems:'center'}}>
  <Text style={{fontSize:30,fontWeight:'bold',color:'#fff'}}>Done</Text>
</TouchableOpacity>
  </View>

 </View>




</View>



      
    </View>

  )
}