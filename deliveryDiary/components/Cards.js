import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

class List extends Component {
    
    state = {
        names: [
            {
                id: 0,
                pickAddress: 'pickup Address',
                deliveryAddress: 'delivery address',

            }

        ]
    }
    alertItemName = (item) => {
        alert(item.pickAddress)
        alert(item.deliveryAddress)
    }
    render() {
        return (
            <View>
                {
                    this.state.names.map((item, index) => (
                        <TouchableOpacity
                            key={item.id}
                            style={styles.container}
                            onPress={() => this.alertItemName(item)}>
                            <Text style={styles.pickupStyle}>
                                {item.pickAddress}
                            </Text>
                            <Text style={styles.deliveryStyle}>
                                {item.deliveryAddress}
                            </Text>
                        </TouchableOpacity>
                    ))
                }
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
        
    }


})