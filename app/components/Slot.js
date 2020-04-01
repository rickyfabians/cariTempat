import React, { Component } from 'react'
import { View, Image, ScrollView } from 'react-native'
import { Caption, Subheading } from 'react-native-paper'
import { View as ViewAnimated } from 'react-native-animatable'

export default class Slot extends Component {
  render () {
    const { item } = this.props
    return (
      <ScrollView horizontal>
        {item.slot.map((item, index) => (
          <ViewAnimated delay={index} useNativeDriver animation='fadeInRight' easing='ease-out-expo' style={{ margin: 5, alignItems: 'center' }}>
            <Subheading style={{ color: item.color }}>{item.default_discount}%</Subheading>
            <Image source={{ uri: item.icon }} style={{ width: 20, height: 25 }} />
            <View style={{ shadowColor: '#000', shadowOffset: { width: 0, height: 11 }, shadowOpacity: 0.55, shadowRadius: 14.78, elevation: 22 }}>
              <Caption>{item.hour_start} - {item.hour_end}</Caption>
            </View>
          </ViewAnimated>
        ))}
      </ScrollView>
    )
  }
}
