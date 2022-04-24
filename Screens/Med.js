import { View, Text,Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

export default function Med() {
  return (
    <View style={{flex:1,marginTop:40}}>
      <View style={{marginTop:50, height:300,width:300,borderRadius:300 ,alignItems:'center'}}>
        <Image source={require('../assets/cher.jpg')} style={{marginLeft: 80,height: 250, width: 250, borderRadius: 300}}/>
        <TouchableOpacity style={{position: 'absolute', top: 100, left: 160}}>
        <AntDesign name="play" size={50} color="#363637"  />
        </TouchableOpacity>
      
      </View>
      <View style={{alignItems:'center',marginTop:10}}>
        <Text style={{fontSize:30,fontWeight:'bold',marginTop:40}}>View & Buy Medicine online</Text>
        <Text style={{marginTop:20,color:'#969997', fontSize:19}}>Pharm easy app is complete online medical store</Text>
        <Text style={{color:'#969997', fontSize:19}}>& Health app for all your medical needs</Text>
        <TouchableOpacity style={{marginTop:100,justifyContent:'center', backgroundColor:'#3c624B',width:300,height:50,borderRadius:20,alignItems:'center'}}>
          <Text style={{fontSize:30,fontWeight:'bold',color:'#fff'}}>Next</Text>
        </TouchableOpacity>
        
      </View>
     
      
    </View>
  )
}