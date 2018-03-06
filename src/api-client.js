const URL = 'https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=c9c310b95635473826e9edf65b05f3e3&format=json'

function getArtists(){
  return fetch( URL )
    .then( rsp  => rsp.json() )
    .then( data => data.artists.artist )
    .then( artists => artists.map( artist => {
      return {
        name  : artist.name,
        imguri: artist.image[3]['#text']
      }
    }))
    .catch( e => {
      console.warn('error:', e)
    })
}

export { getArtists }
