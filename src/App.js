import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

let defaultStyle ={
  color: "white"
};

let fakeServerData = {
  user: {
    name: 'Bogdan',
    playlists: [
      {
        name: 'My favories',
        songs: [
          {name:'Nimeni Altu', duration: 1234},
          {name:'Parazitii', duration: 1432},
          {name:'Omu Gnom', duration: 1562}
        ]
      },
      {
        name: 'Hip-Hop',
        songs: [
          {name:'Cumicu', duration: 1452},
          {name:'Nimeni Altu', duration: 1654}
        ]
      },
      {
        name: 'Rock',
        songs: [
          {name:'Phoenix', duration: 2412},
          {name:'Sum41', duration: 1564}
        ]
      },
      {
        name: "muie Manele",
        songs: [
          {name:"muie Guta", duration: 2675},
          {name:"copilul de argint", duration: 1532}
        ]
      }
    ]
  }
};

class PlaylistCounter extends Component {
  render() {
    return (
      <div style={{ ...defaultStyle, width: '40%', display: 'inline-block'}}>
        <h2>{this.props.playlists.length} playlists </h2>
      </div>
    );
  }
}

class HoursCounter extends Component {
  render() {
    let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
      return songs.concat(eachPlaylist.songs)
    }, []);

    let totalDirection = allSongs.reduce((sum, eachSong) => {
      return sum + eachSong.duration;
    }, 0);

    return (
      <div style={{ ...defaultStyle, width: '40%', display: 'inline-block'}}>
        <h2>{Math.round(totalDirection / 60)} hours </h2>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    return (
      <div style={defaultStyle}>
        <img></img>
        <input type="text" onKeyUp={event =>
          this.props.onTextChange(event.target.value)}
        />
      </div>
    )
  }
}

class Playlist extends Component {
  render() {
    let playlist = this.props.playlist
    return (
      <div style={{ ...defaultStyle, display:'inline-block', width: "25%" }}>
        <img></img>
        <h3>{playlist.name}</h3>
        <ul>
          {playlist.songs.map(song =>
            <li>{song.name}</li>
          )}
        </ul>
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      serverData: {},
      filterString: ''
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({serverData: fakeServerData});
    }, 1000);
  }

  render() {

    let playlistToRender = this.state.serverData.user ? this.state.serverData.user.playlists
      .filter(playlist =>
        playlist.name.toLowerCase()
        .includes(this.state.filterString.toLowerCase())
      ) : []

    return (
      <div className="App">
      {this.state.serverData.user ?
        <div>

          {
            // TITLE
          }
          <h1 style={{ ...defaultStyle }}>
            {this.state.serverData.user.name} Playlist
          </h1>

          {
            //PLAYLIST COUNTER
          }
          <PlaylistCounter playlists={playlistToRender}/>

          {
            //HOUR COUNTER
          }
          <HoursCounter playlists={playlistToRender}/>

          {
            //FILTER
          }
          <Filter onTextChange={text => this.setState({filterString: text})}/>

          {
          // PLAYLISTS
          }
          {
            playlistToRender.map(playlist =>
                <Playlist playlist={playlist}/>)
          }

          {
          //LOADING
          }
        </div> : <h1 style={defaultStyle}>Loading...</h1>

      }
      </div>
    );
  }
}

export default App;
