import React, { Component } from 'react';
import Router from 'next/router';
import { withRouter } from 'next/router';

class Header extends Component<any, any> {
  render() {
    return (
      <div
        style={{
          height: this.props.router.pathname === '/editor' ? 40 : 100,
          display: 'flex',
          maxWidth: '100vw',
          boxShadow: this.props.router.pathname === '/editor' ? '0 1px 3px black' : undefined,
          alignItems: 'center',
          paddingLeft: this.props.router.pathname === '/editor' ? '5vw' : '10vw',
          paddingRight: this.props.router.pathname === '/editor' ? '5vw' : '10vw',
          backgroundColor: this.props.router.pathname === '/editor' ? '#2c3e50' : 'clear',
          zIndex: 10,
          position: this.props.router.pathname === '/editor' ? 'relative' : 'absolute',
        }}
      >
        <img
          src={
            this.props.router.pathname === '/editor' ? '/static/Logo.png' : '/static/TitleLogo.png'
          }
          style={{
            height: this.props.router.pathname === '/editor' ? '60%' : '40%',
            objectFit: 'cover',
            outline: 'none',
            cursor: 'pointer',
          }}
          onClick={() => Router.push('/')}
        />
      </div>
    );
  }
}

export default withRouter(Header);
