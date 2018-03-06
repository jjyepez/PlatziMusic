import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'

export default class ArtistBox extends Component {
  render() {
    const { imguri, likes, comments, name } = this.props.artist.item
    return (
      <View style={styles.artistBox}>
        <Image
          style = {styles.image}
          source = {{uri: imguri}}
        />
        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.row}>
            <View style={styles.dato}>
              <Icon name="ios-heart-outline" size={36} color="grey"/>
              <Text style={styles.count}>{likes}</Text>
            </View>
            <View style={styles.dato}>
              <Icon name="ios-chatboxes-outline" size={36} color="grey"/>
              <Text style={styles.count}>{comments}</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  image:{
    width: 150,
    height: 150
  },
  artistBox:{
    flexDirection: 'row',
    backgroundColor: 'white',
    elevation: 2,
    margin: 5
  },
  count: {
    color: 'grey'
  },
  row: {
    flexDirection: 'row'
  },
  dato:{
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20
  },
  info: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  name:{
    fontSize: 16,
    marginBottom: 8
  }
});
