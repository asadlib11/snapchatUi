import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Image} from 'react-native'
import { Camera } from 'expo-camera';
import {Container, Content, Header, Item, Icon, Input, Button} from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const CameraComponent = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [photograph, setPhotograph] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    
    const snap = async () => {
        if (this.camera) {
          let photo = await this.camera.takePictureAsync();
          setPhotograph(photo);
          console.log(photograph);
          console.log(photo);
        }
      };

    useEffect(() => {
        (async () => {
          const { status } = await Camera.requestPermissionsAsync();
          setHasPermission(status === 'granted');
        })();
      }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    
    return (
        <View style={{flex:1}} >
            <Camera
              ref={ref => {
                this.camera = ref;
              }}
              style={{flex:1, justifyContent:'space-between'}}
              type={type}
            >
                <Header searchBar rounded
                  style={{position:'absolute', backgroundColor:'transparent', left: 0, top: 0, right:0, alignItems:'center', zIndex:100}}
                >
                    <View
                      style={{flexDirection:'row', flex:4}}
                    >
                        <Icon name='logo-snapchat' style={{color: 'white'}} />
                        <Item style={{backgroundColor:'transparent'}}>
                            <Icon name="ios-search" style={{color:'white', fontSize:24, fontWeight:'bold'}}></Icon>
                            <Input placeholder="Search" placeholderTextColor="white" />
                        </Item>
                    </View>

                    <View style={{flexDirection:'row', justifyContent:"space-around", flex:2}}>
                        <Icon name='ios-flash' style={{color: 'white', fontWeight:'bold'}} />
                        <Icon 
                          name='ios-reverse-camera'
                          style={{color: 'white', fontWeight:'bold'}}
                          onPress={()=>{
                              if (type === Camera.Constants.Type.back){
                                  setType(Camera.Constants.Type.front);
                              } else {
                                  setType(Camera.Constants.Type.back);
                              }
                          }}
                        />
                    </View>
                   
                </Header>
                
                <View 
                  style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal:10, marginBottom:22, alignItems:"flex-end"}}
                >
                    <MaterialCommunityIcons name="message-reply" size={36} color="white" />
                    <View style={{flexDirection:'column', alignItems:'center'}}>
                        <MaterialCommunityIcons name="circle-outline" size={100} onPress={snap} color="white" />
                        <Icon name="ios-images" style={{color:'white', fontSize: 36}} />
                    </View>
                    <MaterialCommunityIcons name="google-circles-communities" size={36} color="white" />
                </View>
            </Camera>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
});
  
export default CameraComponent;