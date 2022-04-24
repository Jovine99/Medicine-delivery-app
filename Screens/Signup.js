import { View, Text,TouchableOpacity,Image,TextInput} from 'react-native'
import React from 'react'
import { AntDesign,Fontisto,Entypo,Ionicons ,EvilIcons} from '@expo/vector-icons';


export default function Signup() {
  return (
    <View style={{flex:1,marginTop:40}}>
     <View style={{height:500}}>
     <TouchableOpacity style={{height:50,marginLeft:30,marginTop:60}}>
        <AntDesign name="arrowleft" size={24} color="black" />
    </TouchableOpacity>
    <View style={{justifyContent:'center',alignItems:'center'}}>
         <Image source={require('../assets/tag.jpg')}style={{height:140,width:140,marginTop:-70}} />
         </View>
         <View style={{justifyContent:'center',alignItems:'center',marginTop:80}}>
             <Text style={{fontSize:30,fontWeight:'bold'}}>Sign up to Browse online</Text>
             <Text style={{fontSize:30,fontWeight:'bold'}}>Medicine near by location </Text>
         </View>
         <View style={{flexDirection:'row',marginTop:30,marginLeft:40,backgroundColor:'#f2f2f2',height:40,width:300,justifyContent:'center',alignItems:'center'}}>
         <TextInput style={{fontSize:20,color:'#999'}}>Full name</TextInput>
         <AntDesign name="user" size={24} color="#999" style={{marginLeft:160}} />
         </View>
         <View style={{flexDirection:'row',marginTop:20,marginLeft:40,backgroundColor:'#f2f2f2',height:40,width:300,justifyContent:'center',alignItems:'center'}}>
             <TextInput style={{fontSize:20,color:'#999'}}>Email address</TextInput>
             <Fontisto name="email" size={24} color="#999" style={{marginLeft:130}}/>
         </View>
         <View>
        
         </View >
         <View style={{flexDirection:'row',marginTop:20,marginLeft:40,backgroundColor:'#f2f2f2',height:40,width:300,justifyContent:'center',alignItems:'center'}}>
           <TextInput style={{fontSize:20,color:'#999'}}>Date of birth</TextInput>
           <EvilIcons name="calendar" size={40} color="#999" style={{marginLeft:130}}/>
         </View>
         <View style={{flexDirection:'row',marginTop:20,marginLeft:40,backgroundColor:'#f2f2f2',height:40,width:300,justifyContent:'center',alignItems:'center'}}>
           <TextInput style={{fontSize:20,color:'#999'}}>Password</TextInput>
           <AntDesign name="eyeo" size={30} color="#999" style={{marginLeft:150}} />
         </View>
         <TouchableOpacity style={{marginLeft:40,marginTop:60,justifyContent:'center', backgroundColor:'#3c624B',width:300,height:50,borderRadius:20,alignItems:'center'}}>
          <Text style={{fontSize:30,fontWeight:'bold',color:'#fff'}}>Sign up</Text>
        </TouchableOpacity>
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
           <View>
           <Text style={{paddingTop:40,fontSize:18}}>Already have an account?</Text>
           </View>
         
          <TouchableOpacity style={{paddingTop:40}}>
            <Text style={{fontSize:18,color:'#FFC300',fontWeight:'bold'}}>Log in</Text>
          </TouchableOpacity>
          
        </View>

     </View>
    </View>
  )
}