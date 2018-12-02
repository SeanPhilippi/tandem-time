import React from 'react';

class GameDetail extends React.Component {

  render() {

    const { name, id } = this.props.game;

    return (
      <div className="game" >
        <h4 className="name"><a href="">{name}</a>
        </h4>
        <p>description</p>
        <div className="ratings">
          <p>reviews</p>
          <p>stars</p>
        </div>
        <button>
          like
        </button>
      </div>
    )
  }
}

export default GameDetail;

