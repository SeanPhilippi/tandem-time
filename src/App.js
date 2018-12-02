import React, { Component } from 'react';
import './App.css';
import GameDetail from './components/GameDetail';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  // array of objects w id and name
  state = {
    games: []
  }

  componentDidMount() {
    fetch('http://localhost:3001/games', { mode: 'no-cors' })
      .then(data => {
        console.log(data);
        return this.setState({ games: data })
      })
      .catch(console.error);
  }

  renderGames = () => {
    return this.state.games.map(game => {
      return (
        <GameDetail game={game} />
      )
    })
  }

  render() {

    console.log(this.state)
    return (
      <div className="App">
        <Header />
        {this.renderGames()}
        <Footer />
      </div>
    );
  }
}

export default App;
