import React from 'react'
import { ImageBackground, Dimensions, TouchableOpacity } from 'react-native'
import { Title, Subheading } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const { width } = Dimensions.get('screen')
const HeaderHome = props => {
  return <ImageBackground source={{ uri: 'https://tempat.com/img/Home.png' }} resizeMode={'stretch'} style={{ width, height: width * 0.6, justifyContent: 'center', alignItems: 'center' }}>
    <Title style={{ color: 'white', paddingBottom: 10 }}> Cari deal terbaik di sekitarmu </Title>
    <TouchableOpacity onPress={() => console.log('Pressed')} style={{ backgroundColor: 'white', justifyContent: 'center', flexDirection: 'row', width: width * 0.6, borderRadius: 18, paddingVertical: 4, alignItems: 'center' }}>
      <Icon name='map-marker-outline' color={'#6550c6'} size={18} />
      <Subheading>Jakarta</Subheading>
    </TouchableOpacity>
  </ImageBackground>
}

export default HeaderHome
