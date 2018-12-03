import React from 'react';

class Footer extends React.Component {

  styling = {
    backgroundColor: 'grey',
    height: '80px',
    marginTop: '100px',
  }

  render() {
    return (
      <div className="footer" style={this.styling}>

      </div>
    )
  }
}

export default Footer;