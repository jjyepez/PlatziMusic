import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList
} from 'react-native';

import ArtistBox from './ArtistBox'

export default class ArtistList extends Component {
  constructor( props ){
    super( props )
  }
  render() {
    return (
      <FlatList
        data       = { this.props.artists }
        renderItem = { artist => <ArtistBox artist = {artist} /> }
      />
    );
  }
}
