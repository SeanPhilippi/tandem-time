import React from 'react';

class GameDetail extends React.Component {

  state = {
    details: null,
    show: 'show'
  }

  styling = {
    marginBottom: '15px',
    marginTop: '10px'
  }

  fetchDetails = (id) => {
    this.setState({
      show: 'hide'
    });
    const { details } = this.state;
    if (!details) {
      const fetch = require('node-fetch');
      fetch(`http://localhost:3001/games/${id}`)
        .then(res => {
          res.json().then(data => {
            console.log('data', data);
            this.setState({ details: data });
          })
        })
    } else if (details) {
      this.setState({
        details: null,
        show: 'show'
      });
    }
  }

  renderDetails = () => {
    // set this.state.details to details var
    const { details, show } = this.state;
    if (!details) return;
    return (
      <div className="details" >
        <h4>details</h4>
        <p>{details.description}</p>
        <p>{details.releaseDate}</p>
        <p>{details.tags}</p>
      </div>
    )
  }

  render() {

    const { name, releaseDate, description, tags, id } = this.props.game;
    const { show } = this.state;
    return (
      <div className="game">
        {name} <br />
        {this.renderDetails()}
        <button onClick={() => this.fetchDetails(id)} style={this.styling}>
          {show} details
        </button>
      </div >
    )
  }
}

export default GameDetail;

