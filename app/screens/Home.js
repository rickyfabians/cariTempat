import React from 'react'
import { View, FlatList, TouchableOpacity, ScrollView, Image, StatusBar } from 'react-native'
import { View as ViewAnimated } from 'react-native-animatable'
import { Paragraph, Text } from 'react-native-paper'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import data from '../models/events'
import category from '../models/category'

// Component
import HeaderHome from '../components/HeaderHome'
import ItemCard from '../components/ItemCard'

const Home = props => {
  const { navigation } = props

  return <ScrollView style={{ flex: 1 }}>
    <StatusBar translucent backgroundColor='transparent' />
    <HeaderHome />
    <View>
      <FlatList
        numColumns={4}
        data={category}
        style={{ width: '100%', padding: 10 }}
        renderItem={({ item }) =>
          <TouchableOpacity onPress={() => navigation.navigate('ProductCatalogue')} style={{ width: '25%', alignItems: 'center', padding: 10 }}>
            <Image source={{ uri: item.imageUrl }} style={{ width: 32, height: 32, marginBottom: 8 }} />
            <Paragraph style={{ textAlign: 'center' }}>{item.name}</Paragraph>
          </TouchableOpacity>}
        keyExtractor={(item, index) => index}
      />
    </View>
    <View style={{ paddingVertical: 20 }}>
      <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 5, alignItems: 'center' }}>
        <Text style={{ fontSize: 20 }}>Deals of the Day</Text>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold', color: '#6550c6' }}>SEE ALL</Text>
          <MaterialIcons name={'keyboard-arrow-right'} size={25} color={'#6550c6'} />
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        data={data}
        renderItem={({ item, index }) =>
          <ViewAnimated delay={index} useNativeDriver animation='fadeInRight' easing='ease-out-expo' style={{ margin: 5 }}>
            <ItemCard item={item} />
          </ViewAnimated>}
        keyExtractor={(item, index) => `${index}${item}`}
      />
    </View>
    <View style={{ paddingVertical: 20 }}>
      <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 5, alignItems: 'center' }}>
        <Text style={{ fontSize: 20 }}>Popular Places in Jakarta</Text>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold', color: '#6550c6' }}>SEE ALL</Text>
          <MaterialIcons name={'keyboard-arrow-right'} size={25} color={'#6550c6'} />
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        data={data}
        renderItem={({ item, index }) =>
          <ViewAnimated delay={index} useNativeDriver animation='fadeInRight' easing='ease-out-expo' style={{ margin: 5 }}>
            <ItemCard item={item} />
          </ViewAnimated>}
        keyExtractor={(item, index) => `${index}${item}`}
      />
    </View>
  </ScrollView>
}

export default Home
