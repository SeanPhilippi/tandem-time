import React from 'react';
import Button from './Button';

class GameDetail extends React.Component {

  displayDetails = () => {
    const { id } = this.props.game.id;
    const id = id;
    fetch(`http://localhost:3001/games/${id}`)
      .then(res => {
        res.json().then(data => {
          console.log(data);
          return this.set
        })
      })
    console.log(data);
  }

  render() {

    const { name, releaseDate, description, tags } = this.props.game.id;

    return (
      <div className="game" >
        <h4 className="name"><a href="">{name}</a>
        </h4>
        <p>{description}</p>
        <div className="ratings">
          <p>{releaseDate}</p>
          <p>{tags}</p>
        </div>
        <Button onClick={displayDetails} />
      </div>
    )
  }
}

export default GameDetail;

