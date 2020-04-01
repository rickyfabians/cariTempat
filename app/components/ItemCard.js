import React from 'react'
import { Title, Card, Divider, Button, Caption, Text } from 'react-native-paper'

// component
import HeaderItem from './HeaderItem'
import Slot from './Slot'

const ItemCard = props => {
  const { item } = props
  return <Card onPress={() => null} style={{ overflow: 'hidden' }} >
    <HeaderItem item={item} />
    <Card.Content>
      <Title>{item.name}</Title>
      <Text style={{ opacity: 0.6 }}>{item.area}</Text>
      <Caption>{item.tag}</Caption>
    </Card.Content>
    <Slot item={item} />
    <Divider />
    <Button>BOOK NOW</Button>
  </Card>
}

export default ItemCard
