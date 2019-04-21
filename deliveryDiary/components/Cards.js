import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import DraggableFlatList from "react-native-draggable-flatlist";
import CallToActionBox from "react-native-plus-button-box";

class List extends Component {
  state = {
    data: [...Array(10)].map((d, index) => ({
      key: `item-${index}`,
      pickAddress: "Pickup Address " + index,
      deliveryAddress: "Delivery Address " + index
    }))
  };

  renderItem = ({ item, move, moveEnd }) => {
    return (
      <TouchableOpacity
        style={styles.container}
        onLongPress={move}
        onPressOut={moveEnd}
      >
        <View style={styles.textContainer}>
          <Text>{item.pickAddress}</Text>
          <TouchableOpacity>
            <View
              style={styles.circle}
              onPress={() => this.alertItemName(item)}
            />
          </TouchableOpacity>
          <Text>{item.deliveryAddress}</Text>
        </View>

        <Text style={styles.info}>Here is some information</Text>
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <DraggableFlatList
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={item => `draggable-item-${item.key}`}
          scrollPercent={5}
          onMoveEnd={({ data }) => this.setState({ data })}
        />
        <CallToActionBox
          style={styles.plusButton}
          actions={[
            {
              key: "test",
              text: "Test me",
              onPress: () => Alert.alert("Hello")
            },
            {
              key: "test2",
              text: "Test me again",
              onPress: () => Alert.alert("Hello to you too")
            }
          ]}
        />
      </View>
    );
  }
}
export default List;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 10,
    marginTop: 3,
    backgroundColor: "#D3D3D3",
    elevation: 2
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    color: "#4f603c",
    paddingHorizontal: 3,
  },
  info: {
    alignSelf: 'flex-start',
    
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 2 / 2,
    backgroundColor: "red"
  },
  plusButton: {
    elevation: 8
  }
});
