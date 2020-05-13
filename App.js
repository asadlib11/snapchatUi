import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {Content, Container} from 'native-base';
import Swiper from 'react-native-swiper';
import CameraComponent from './Components/Camera';

export default function App() {
  const [outerScrollEnabled, setOuterScrollEnabled] = useState(true);
  const verticalScroll = ( index ) => {
    if(index !== 1){
      setOuterScrollEnabled(false);
    } else {
      setOuterScrollEnabled(true);
    }
  }
  return (
    <Container>
      <Content>
        <Swiper
          loop={false}
          showsPagination = {false}
          index={1}
        >
        
          <View style={styles.slideDefault}>
            <Text>Chat</Text>
          </View>

          <Swiper
            loop={false}
            showsPagination = {false}
            horizontal = {false}
            index={1}
            onIndexChanged={(index)=>{ 
              verticalScroll(index)
            }}
          >
            <View style={styles.slideDefault}>
              <Text>Search</Text>
            </View>
            <View style={{flex:1}}>
              <CameraComponent></CameraComponent>
            </View>
            <View style={styles.slideDefault}>
              <Text>Memories</Text>
            </View>
          </Swiper>

          <View style={styles.slideDefault}>
            <Text>Stories</Text>
          </View>
        
        </Swiper>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  slideDefault:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  text:{
    color: 'white',
    fontSize: 30,
    fontWeight:'bold',

  }
});
