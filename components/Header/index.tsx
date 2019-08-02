import React, { Component } from 'react';
import Router from 'next/router';
import { withRouter } from 'next/router';

interface IProps {
  bgColor: string;
}

interface NextRouter {
  router: typeof Router;
}

type Props = IProps & NextRouter;

class Header extends Component<Props, any> {
  render() {
    return (
      <div
        style={{
          height: this.props.router.pathname === '/editor' ? 40 : 80,
          display: 'flex',
          maxWidth: '100vw',
          boxShadow:
            this.props.router.pathname === '/editor'
              ? '0 1px 3px black'
              : this.props.bgColor !== 'transparent'
              ? '0 1px 3px black'
              : undefined,
          alignItems: 'center',
          paddingLeft: this.props.router.pathname === '/editor' ? '5vw' : '10vw',
          paddingRight: this.props.router.pathname === '/editor' ? '5vw' : '10vw',
          backgroundColor: this.props.bgColor,
          zIndex: 10,
          transition: '0.5s',
          position: this.props.router.pathname === '/editor' ? 'relative' : 'absolute',
          width: '100vw',
        }}
      >
        <img
          src={
            this.props.router.pathname === '/editor' ? '/static/Logo.png' : '/static/TitleLogo.png'
          }
          style={{
            height: this.props.router.pathname === '/editor' ? '60%' : '50%',
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
