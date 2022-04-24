import { View, Text,Image } from 'react-native'
import React from 'react'

export default function Splash() {
  return (
    <View style={{flex:1, justifyContent:"center", alignItems:'center'}}>
      <View style={{height:300,marginTop:50}}>
      <Image source={require('../assets/logo.jpg')} style={{height:100,width:100}}/>
      </View>
     
      
    </View>
  )
}