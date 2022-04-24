import { View, Text,Image } from 'react-native'
import React from 'react'

export default function Home() {
  return (
    <View style={{flex:1,marginTop:50}}>
      <View style={{height:500,alignItems:'center',backgroundColor:'#ffff'}}>
          <Image source={require('../assets/doc.png')} style={{height:250,width:250,marginTop:100}}/>
      </View>
      <View style={{paddingLeft:40, }}>
          <Text style={{fontSize:40,fontWeight:'bold'}}>Upload your</Text>
          <Text style={{fontSize:40,fontWeight:'bold'}}>Prescription</Text>
          <Text style={{fontSize:18,color:'#717381',marginTop:30}}>Just upload your prescription image &</Text>
          <Text style={{fontSize:18,color:'#717381'}}>confirm the medicine name. All medicine</Text>
          <Text style={{fontSize:18,color:'#717381'}}>will add automatically to the cart list.</Text>
      </View>
      <View></View>
    </View>
  )
}