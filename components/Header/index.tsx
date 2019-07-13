import React, { Component } from 'react';
import Router from 'next/router';
import { withRouter } from 'next/router';

class Header extends Component<any, any> {
  render() {
    return (
      <div
        style={{
          height: this.props.router.pathname === '/editor' ? 40 : 70,
          display: 'flex',
          width: '100%',
          boxShadow: '0 2px 20px gray',
          alignItems: 'center',
          paddingLeft: this.props.router.pathname === '/editor' ? '5vw' : '10vw',
          paddingRight: this.props.router.pathname === '/editor' ? '5vw' : '10vw',
          backgroundColor: 'white',
          zIndex: 10,
        }}
      >
        <img
          src={
            this.props.router.pathname === '/editor'
              ? '/static/Logo.png'
              : '/static/TitleLogoLight.png'
          }
          style={{ height: '60%', objectFit: 'cover', outline: 'none', cursor: 'pointer' }}
          onClick={() => Router.push('/')}
        />
      </div>
    );
  }
}

export default withRouter(Header);
