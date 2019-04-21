import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import DraggableFlatList from 'react-native-draggable-flatlist'

class List extends Component {
    state = {
        
        data: [...Array(10)].map((d, index) => ({
          key: `item-${index}`,
                pickAddress: 'Pickup Address '+ index,
                deliveryAddress: 'Delivery Address ' +index,
          backgroundColor: '#D3D3D3',
        }))
      }
     
      renderItem = ({ item, move, moveEnd }) => {
        return (
          <TouchableOpacity
            style={styles.container}
            onLongPress={move}
            onPressOut={moveEnd}
          >
          <Text style={styles.pickupStyle}>
                                {item.pickAddress}
                            </Text>
                                <TouchableOpacity>
                                <View style={styles.circle}
                                onPress={() => this.alertItemName(item)}>
                                </View>
                                </TouchableOpacity>

                           
                            <Text style={styles.deliveryStyle}>
                                {item.deliveryAddress}
                            </Text>
          </TouchableOpacity>
        )
      }
     
      render() {
        return (
          <View style={{ flex: 1 }}>
            <DraggableFlatList
              data={this.state.data}
              renderItem={this.renderItem}
              keyExtractor={(item) => `draggable-item-${item.key}`}
              scrollPercent={5}
              onMoveEnd={({ data }) => this.setState({ data })}
            />
          </View>
        )
      }
    }
export default List

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        marginTop: 3,
        backgroundColor: '#D3D3D3',
    },
    pickupStyle: {
        color: '#4f603c',
        marginLeft: 3,
    },
    deliveryStyle: {
        color: '#4f603c',
        marginRight: 3

    },
    circle: {
        width: 50,
        height: 50,
        borderRadius: 2 / 2,
        backgroundColor: 'red'
    }



})