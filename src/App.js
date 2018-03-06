import React, { Component } from 'react';

import {
  StyleSheet,
  View
} from 'react-native'

import ArtistList from './components/ArtistList'
import { getArtists } from './api-client'

export default class App extends Component {
  state = {
    artists: []
  }
  componentDidMount(){
    getArtists().then(
      data => {
        this.setState({
          artists: data
        })
      }
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <ArtistList
          artists = {this.state.artists}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#eee'
  }
})
