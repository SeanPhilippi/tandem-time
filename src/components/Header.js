import React from 'react';

class Header extends React.Component {

  styling = {
    paddingTop: '10px',
    paddingBottom: '10px',
    marginBottom: '20px',
    border: 'black 2px',
    backgroundColor: 'gray',
    height: '50px'
  }

  render() {
    return (
      <div className="header" style={this.styling}>

      </div>
    )
  }
}

export default Header;