import { View, Text ,Image} from 'react-native'
import React from 'react'

export default function Show() {
  return (
    <View style={{flex:1,marginTop:50,backgroundColor:'#f2f2f2'}}>
       <View style={{marginTop:40,alignItems:'center'}}>
       <Image source={require('../assets/tag.jpg')} style={{height:300,width:300,marginTop:100}}/>
       </View>
       <View style={{flexDirection:'row',alignItems:'center'}}>
           <Text style={{color:'#03984E',paddingLeft:40,marginTop:30,fontSize:40,fontWeight:'bold'}}>Medical Pharmacy</Text>
           <Text style={{paddingLeft:5,marginTop:30,color:'#040976',fontSize:40,fontWeight:'bold'}}>App</Text>
           
       </View>
       <View style={{alignItems:'center'}}>
           <Text style={{marginTop:10,fontSize:18,color:'#8F8F92'}}>YOUR SLOGAN GOES HERE</Text>
       </View>
     
        
        

      
    </View>
  )
}