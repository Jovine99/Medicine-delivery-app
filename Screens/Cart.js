import { View, Text,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';




export default function Cart() {
  return (
    <View style={{flex:1}}>
      <View style={{height:450,backgroundColor:'#3c624B',marginBottom:450,borderBottomLeftRadius:200,borderBottomRightRadius:200}}>
      <View style={{flexDirection:'row',marginTop:50,justifyContent:'space-between',marginLeft:20,marginRight:20}}>
      <FontAwesome5 name="shopping-cart" size={40} color="white"  />
      <FontAwesome5 name="capsules" size={40} color="white" />
      </View>
       
        <View style={{justifyContent:'center',alignItems:'center',marginTop:50}}>
          <Text style={{color:'#ffff',fontSize:40}}>BEST ONLINE</Text>
          <Text style={{marginTop:5,color:'#8DAF03', fontSize:70}}>MEDICINE</Text>
          <Text style={{marginTop:5,color:'#ffff',fontSize:40}}>DELIVERY APP</Text>
        </View>
        <View style={{marginTop:250,justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:30,fontWeight:'bold'}}>Online Medical & Healthcare</Text>
          <Text style={{fontSize:18,color:'#797979'}}>Pharm easy app is complete app for all</Text>
          <Text style={{fontSize:18,color:'#797979'}}> your medical needs.Book lab tests & Health</Text>
          <Text style={{fontSize:18,color:'#797979'}}> check-ups, and Consult Doctors online</Text>
          <TouchableOpacity style={{marginTop:40,height:50,width:300,borderRadius:20,backgroundColor:'#3c624B',justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:'#fff',fontSize:18,fontWeight:'bold'}}>Get started</Text>
          </TouchableOpacity>
          
        </View>


      </View>
    
    </View>
  )
}