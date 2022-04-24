import { View, Text,Image,TextInput,TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome5,Entypo,FontAwesome } from '@expo/vector-icons';
// import {Checkbox} from 'native-base';


export default function Signin() {
  return (
    <View style={{flex:1}}>
      {/* start of top view */}
       <View style={{height:450,backgroundColor:'#3c624B',overflow:'hidden',marginBottom:450}}>

         {/* top screen icons starts here */}
       <View style={{flexDirection:'row',marginTop:50,justifyContent:'space-between',marginLeft:20,marginRight:20}}>
      <FontAwesome5 name="shopping-cart" size={40} color="white"  />
      <FontAwesome5 name="capsules" size={40} color="white" />
      </View>
      {/* end of top screen icons */}

      {/* top scren text starts here*/}
        <View style={{justifyContent:'center',alignItems:'center',marginTop:30}}>
          <Text style={{color:'#ffff',fontSize:40}}>BEST ONLINE</Text>
          <Text style={{marginTop:5,color:'#8DAF03', fontSize:70}}>MEDICINE</Text>
          <Text style={{marginTop:5,color:'#ffff',fontSize:40}}>DELIVERY APP</Text>
        </View>
        {/* end of top screen text */}

       </View>
       {/* end of top view */}

       {/* body view starts here */}
       <View style={{flexDirection:'row',position:'absolute',marginTop:300,backgroundColor:'#fff',height:600,marginRight:20,borderTopRightRadius:50,borderTopLeftRadius:40,width:420}}>

         {/* image view starts here */}
         <View style={{justifyContent:'center',alignItems:'center'}}>
         <Image source={require('../assets/tag.jpg')}style={{height:80,width:80,marginTop:-460,marginLeft:160}} />
         </View>
         {/* image view ends here */}
         <View style={{justifyContent:'center',alignItems:'center',marginTop:-150,marginLeft:-180}}>
           <TextInput style={{height:50,width:300,fontSize:18,marginTop:-50,paddingTop:5,backgroundColor:'#f2f2f2',paddingLeft:20}}>Email address</TextInput>
           <TextInput style={{height:50,width:300,marginTop:20,fontSize:18,backgroundColor:'#f2f2f2',paddingLeft:20}}>Password</TextInput>

           

         </View>
         <View>
           {/* <Checkbox value="test" accessibilityLabel='Remember me'></Checkbox> */}

         </View>
         
         {/* sign in button starts here */}
         <TouchableOpacity style={{marginTop:320,justifyContent:'center', backgroundColor:'#3c624B',width:300,height:50,borderRadius:20,alignItems:'center',marginLeft:-300}}>
          <Text style={{fontSize:30,fontWeight:'bold',color:'#fff'}}>Sign in</Text>
        </TouchableOpacity>
        {/* end sign in button */}

        <View style={{flexDirection:'row'}}>
          <Text style={{marginTop:380,marginLeft:-300,paddingTop:20,fontSize:18}}>Don't have an account?</Text>
          
        </View>

        {/* sign up text starts here */}
        <TouchableOpacity style={{marginTop:400,marginLeft:-147,paddingTop:0.5}}>
            <Text style={{fontSize:18,color:'#FFC300',fontWeight:'bold'}}>sign up</Text>
          </TouchableOpacity>
          {/* end of sign up */}

          {/* sign in options starts here */}
        <View>
        <Text style={{paddingTop:14,marginLeft:-120,fontSize:18,marginTop:420}}>Or sign with</Text>
        </View>
        {/* end of sign in options */}

        {/* social view starts here*/}
         <View style={{flexDirection:'row',marginTop:490,marginLeft:-200,justifyContent:'space-between'}}>
         <Entypo name="facebook" size={30} color="#0449C1" style={{width:100,paddingLeft:-50}}/>
         <Text style={{color:'#0449C1',marginLeft:-60,fontSize:20,fontWeight:'bold',marginTop:10}}>Facebook</Text>
         <FontAwesome name="twitter-square" size={30} color="#2894C2"style={{width:100,marginLeft:80}} />
         <Text style={{color:'#2894C1',fontSize:20,fontWeight:'bold',marginTop:10,marginLeft:-70}}>Twitter</Text>
         </View>
         {/* end social view */}
         
           

       </View>

    </View>
  )
}