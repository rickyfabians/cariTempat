import React from 'react'
import { Text, View, ImageBackground, Dimensions, TouchableOpacity } from 'react-native'
import { Badge } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const { width } = Dimensions.get('screen')
const HeaderItem = props => {
  const { item } = props
  return <ImageBackground source={{ uri: item.imageUrl }} resizeMode={'cover'} style={{ width: width * 0.5, height: width * 0.5, justifyContent: 'space-between' }}>
    <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
      <Badge size={22} style={{ margin: 5, paddingHorizontal: 10, color: 'white', fontWeight: 'bold' }}>
        <Icon name='star' /> {item.rating}
      </Badge>
      <TouchableOpacity style={{ margin: 5 }} onPress={() => console.log('press')}>
        <Icon name='heart-outline' size={20} color='white' />
      </TouchableOpacity>
    </View>
    <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
      <Text style={{ fontSize: 15, backgroundColor: item.activity.group_color, color: 'white', paddingHorizontal: 8, borderTopRightRadius: 15 }}>{item.activity.group_name}</Text>
    </View>
  </ImageBackground>
}

export default HeaderItem
