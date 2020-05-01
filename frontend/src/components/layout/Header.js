import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className='ui container'>
        <div className='ui segment teal inverted'>
          <div className='ui pointing teal inverted top attached menu ' style={{ borderRadius: '0' }}>
            <a className='item'>Home</a>
            <div className='right menu' style={{ borderRadius: '0' }}>
              <a className='item'>Sign up</a>
              <a className='item'>Sign in</a>
            </div>
          </div>
        </div>
        <div className='ui hidden fitted divider'></div>
      </div>
    );
  }
}

export default Header;
