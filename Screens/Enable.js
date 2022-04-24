import { View, Text,Image,TextInput,TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign,FontAwesome,Ionicons,FontAwesome5,EvilIcons,MaterialIcons,MaterialCommunityIcons,Foundation,Entypo   } from '@expo/vector-icons';

export default function Location() {
  return (
    <View style={{flex:1,marginTop:40,backgroundColor:'#B2BABB'}}>
        <View style={{height:900}}>
            <View style={{flexDirection:'row'}}>
            <Image source={require('../assets/logo.jpg')} style={{height:80,width:80,backgroundColor:'#B2BABB'}}/>
            <Text style={{marginTop:18,marginLeft:-10,fontSize:30,color:'#3c624B',fontWeight:'bold'}}>Pharmacy</Text>
            <Text style={{marginTop:18,fontSize:30,color:'#030B3D',fontWeight:'bold'}}>App</Text>
            <TouchableOpacity>
            <AntDesign name="shoppingcart" size={30} color="black" style={{marginLeft:80,marginTop:25}}/>
            <View style={{backgroundColor:'#F8C471',height:15,width:15,borderRadius:20,position:'absolute',top:25,left:95}}>
              <Text style={{position:'absolute',left:4,justifyContent:'center',alignItems:'center',color:'#fff'}}>3</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <FontAwesome name="bell-o" size={24} color="black" style={{marginTop:28,marginLeft:25}} />
            
            </TouchableOpacity>
           
           
            </View >
            <View style={{marginTop:2}}>
                <Text style={{fontSize:16,color:'#999',marginLeft:20}}>Your location</Text>
                <View style={{flexDirection:'row',marginTop:10}}>
                <Ionicons name="location-sharp" size={24} color="#CB4335" style={{marginLeft:20}} />
                <Text style={{fontSize:25,fontWeight:'bold'}}>Nairobi City</Text>
                <FontAwesome name="location-arrow" size={16} color="#3c624B" style={{marginLeft:160,marginTop:10}} />
                <TouchableOpacity>
                <Text style={{marginLeft:10,marginTop:10,color:'#3c624B',fontWeight:'bold'}}>CHANGE</Text>
                </TouchableOpacity>
                </View>
               <View style={{flexDirection:'row',marginTop:10,backgroundColor:'#f2f2f2',height:40,width:320,justifyContent:'center',alignItems:'center',marginLeft:40}}>
               <EvilIcons name="search" size={24} color="#999" style={{paddingRight:1}}/>
               <TextInput style={{fontSize:18,color:'#999'}}>Search Medicine & Healthcare Products</TextInput>
               </View>
                
            </View>
            <View style={{height:410,width:360,position:'absolute',backgroundColor:'#f2f2f2',marginLeft:30,marginTop:210,borderRadius:20}}>
                <View style={{height:100,width:100,borderWidth:5,borderRadius:100,borderColor:'#CB4335',position:'absolute',top:40,left:120,justifyContent:'center',alignItems:'center'}}>
                    <Ionicons name="location-sharp" size={50} color="#CB4335" style={{position:'absolute'}} /> 
                   
                </View>
                <View style={{position:'absolute',top: 50,left:100}}>
                <Text style={{top:120,fontSize:30,fontWeight:'bold',left:-30}}>Enable your Location</Text> 
                <Text style={{fontSize:18,color:'#999',fontWeight:'bold',marginTop:140,left:-40}}>Please allow to use your location to find</Text>
                <Text style={{fontSize:18,color:'#999',fontWeight:'bold',marginTop:5,left:-40}}>Nearby provider services on the map</Text>
                <TouchableOpacity style={{marginTop:20,left:-60,justifyContent:'center', backgroundColor:'#3c624B',width:300,height:50,borderRadius:20,alignItems:'center'}}>
                <Text style={{fontSize:30,fontWeight:'bold',color:'#fff'}}>Enable</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row',marginTop:20}}>
                    <Text style={{fontSize:20,fontWeight:'bold',marginLeft:20,color:'#999'}}>No thanks</Text>
                    <Entypo name="emoji-happy" size={20} color="#f8c471" style={{marginLeft:10}}/>
                </TouchableOpacity>
            
                </View>

            </View>
          





            <View style={{marginTop:15}}>
                <Text style={{marginLeft:20,fontSize:20,fontWeight:'bold'}}>Top </Text>
            </View>
            {/* <View style={{flexDirection:'row',marginTop:15}}> 
           <View style={{height:60,width:60,borderRadius:60,backgroundColor:'#413D78',marginLeft:25}}>
           <AntDesign name="appstore-o" size={30} color="#fff" style={{position:'absolute',top:15,justifyContent:'center',alignItems:'center',paddingLeft:15}}/>

           </View> 
            <Text style={{marginTop:70,marginLeft:-60,fontSize:17,fontWeight:'bold'}}>All categories</Text>
            <View style={{marginLeft:20,height:60,width:60,borderRadius:60,backgroundColor:'#CB4335'}}>
            <MaterialIcons name="pregnant-woman" size={40} color="#fff"  style={{position:'absolute',top:5,paddingLeft:10}}/> 
             <FontAwesome5 name="mortar-pestle" size={24} color="black" /> 
             </View>
            <Text style={{marginTop:70,marginLeft:-50,fontSize:17,fontWeight:'bold'}}>Wellness</Text>
            <View style={{backgroundColor:'#17A589',height:60,width:60,borderRadius:60,marginLeft:35}}>
           
            <FontAwesome5 name="mortar-pestle" size={30} color="#fff" style={{position:'absolute',top:10,paddingLeft:16}} />
            </View>
            <Text style={{marginTop:70,marginLeft:-60,fontSize:17,fontWeight:'bold'}}>Ayurveda</Text>
            <View style={{backgroundColor:'#2E86C1',width:60,height:60,borderRadius:60,marginLeft:50}}>
            <MaterialCommunityIcons name="diabetes" size={40} color="#fff" style={{position:'absolute',top:10,paddingLeft:10}}/>


            </View>
            <Text style={{marginTop:70,marginLeft:-60,fontSize:17,fontWeight:'bold'}}>Diabetes</Text>
            </View>  */}
            {/* <View>
             <View style={{flexDirection:'row'}}>
             <Text style={{marginTop:10,marginLeft:20,fontSize:30,fontWeight:'bold'}}>Trending products</Text>
            
             <TouchableOpacity>
              <Text style={{marginTop:20,marginLeft:130,fontSize:18,color:'#616A6B',fontWeight:'bold'}}>View all</Text>
             </TouchableOpacity>
             </View> */}
             
              {/* <View style={{marginLeft:20,marginTop:60,flexDirection:'row',position:'absolute',borderWidth:1,borderColor:'#f3f3f3',borderRadius:15,height:220,width:260}}>
                <Image source={require('../assets/powder.jpg')} style={{height:120,width:100,borderRadius:5,justifyContent:'center',alignItems:'center',top:20,left:20}}/>
                <Text style={{color:'#04BD52',fontSize:18,fontWeight:'bold',position:'absolute',top:20,left:180}}>15% OFF</Text>
                <Text style={{fontSize:30,fontWeight:'bold',left:50,top:60}}>$260.50</Text>
                <Text style={{position:'absolute',top: 140,left:15,fontSize:18,fontWeight:'bold'}}>Dabur charwanyprash 1kg [Get</Text>
                <Text style={{position:'absolute',top: 160,left:15,fontSize:18,fontWeight:'bold'}}>Dabur Honey 50g...Free]</Text>
                <Text style={{position:'absolute',top: 190,left:15,fontSize:16,color:'#999'}}>Jar of 3KG Paste</Text>
              
              </View> */}
              {/* <View style={{borderWidth:1,borderColor:'#f2f2f2',height:220,width:220,marginLeft:295,borderRadius:20,marginTop:18}}>
                <Image source={require('../assets/d.jpg')} style={{height:110,width:130,position:'absolute',top:20,left:10}}/>
                <Text style={{position:'absolute',top:140,left:5,fontSize:18,fontWeight:'bold'}}>Zedex Plus Cough</Text>
                <Text style={{position:'absolute',top:160,left:5,fontSize:18,fontWeight:'bold'}}>Free</Text>
                <Text style={{position:'absolute',top:180,left:5,fontWeight:'bold',color:'#999',fontSize:16}}>Bottle of 100ml syrup</Text>
              </View>

            </View> */}

            <View style={{marginTop:400,marginLeft:20}}>
              <Text style={{fontSize:30,fontWeight:'bold'}}>Special Deals & Offers</Text>
              <Text style={{fontSize:18,color:'#999',marginTop:5}}>Get special discounts and offers on medicine</Text>
            </View>
            <View style={{flexDirection:'row',marginTop:20}}>
              <View style={{backgroundColor:'#17A589',height:50,width:20,borderTopRightRadius:10,marginTop:19}}></View>
              <View style={{backgroundColor:'#2E86C1',height:70,width:350,marginLeft:10,borderTopRightRadius:20,borderTopLeftRadius:20}}>
                <Image source={require('../assets/girl.jpeg')} style={{height:50,width:90,position:'absolute',left:220,borderRadius:2,top:20}}/>
                <Text style={{fontSize:35,position:'absolute',top:25,left:20,color:'#fff',fontWeight:'bold'}}>60% OFF</Text>
              </View>
              <View style={{backgroundColor:'#CB4335',height:50,width:40,borderTopLeftRadius:10,marginTop:18,marginLeft:10}}></View>
            </View>
            <View style={{flexDirection:'row',marginTop:2,marginLeft:15}}>
            <TouchableOpacity>
            <MaterialCommunityIcons name="home-outline" size={35} color="#797D7F" />
            <Text style={{fontSize:16,color:'#999'}}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft:40}}>
            <MaterialIcons name="book-online" size={30} color="#797D7F" />
            <Text style={{fontSize:16,color:'#999'}}>Articles</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft:40}}>
            <Foundation name="clipboard-notes" size={30} color="#797D7F" style={{marginLeft:10}} />
            <Text style={{fontSize:16,color:'#999'}}>My orders</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft:40}}>
            <MaterialCommunityIcons name="message-processing-outline" size={30} color="#797D7F" />
            <Text style={{fontSize:16,color:'#999'}}>Message</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft:40}}>
            <AntDesign name="user" size={30} color="#797D7F" />
            <Text style={{fontSize:16,color:'#999'}}>Profile</Text>
            </TouchableOpacity>
            </View>
  
            
            

    

        </View>
    </View>
  )
}