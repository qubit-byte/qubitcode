import React, { Component } from 'react';
import Header from '../../components/Header';
import 'rsuite/dist/styles/rsuite.min.css';
// import anime from 'animejs';
import Head from 'next/head';
import './index.css';
import Router from 'next/router';

interface State {
  headerBGColor: string;
}

class Index extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      headerBGColor: 'transparent',
    };
  }
  effect: any;
  componentDidMount() {
    window.requestAnimationFrame(() => {
      this.createVanta();
    });
  }

  createVanta() {
    //@ts-ignore
    this.effect = window.VANTA.BIRDS({
      el: '#vanta',
      colorMode: 'variance',
      separation: 40.0,
      quantity: 3.0,
      backgroundColor: 0x0c0032,
    });
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          overflow: 'scroll',
          backgroundColor: '#0c0032',
        }}
        onScroll={e => {
          //@ts-ignore
          if (e.target.scrollTop === 0) {
            this.setState({ headerBGColor: 'transparent' });
            return;
          }
          this.setState({ headerBGColor: '#140055' });
        }}
      >
        <Header bgColor={this.state.headerBGColor} />
        <Head>
          <script src="/static/three.min.js" />
          <script src="/static/vanta.rings.min.js" />
          <script src="/static/vanta.birds.min.js" />
        </Head>
        <div
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            filter: this.state.headerBGColor === 'transparent' ? undefined : 'blur(2px)',
            transition: '0.5s',
          }}
          id="vanta"
        />
        <section
          style={{
            height: 'calc(100vh)',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            padding: '15vw',
            zIndex: 1,
            minHeight: 'calc(100vh)',
          }}
        >
          <div>
            <h3
              style={{
                color: 'white',
                fontFamily: 'Darker Grotesque',
                margin: 0,
                fontSize: '2.5em',
                fontWeight: 500,
              }}
            >
              We've inherited the past, now let's
            </h3>
            <h2
              style={{
                color: 'white',
                fontFamily: 'Darker Grotesque',
                margin: 0,
                fontSize: '4em',
                fontWeight: 700,
                marginTop: 20,
              }}
            >
              create
            </h2>
            <h1
              style={{
                color: 'white',
                fontWeight: 600,
                fontSize: '8em',
                fontFamily: 'Prompt',
                marginTop: 20,
                marginBottom: 50,
              }}
            >
              the Future with code
            </h1>
            <button
              onClick={() => Router.push('/signup')}
              style={{
                fontSize: '1.3em',
                fontWeight: 600,
              }}
            >
              Get started
            </button>
          </div>
        </section>
        <section
          style={{
            zIndex: 3,
            background: 'linear-gradient(#0c0032, #1C0074)',
            padding: '15vw',
            paddingTop: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <h1
            style={{
              fontSize: '5em',
              color: 'white',
              fontWeight: 700,
              fontFamily: 'Prompt',
            }}
          >
            Work. Play. Share.
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: 50 }}>
            <h3
              style={{
                fontFamily: 'Darker Grotesque',
                color: 'white',
                opacity: 0.7,
                fontSize: '1.5em',
                fontWeight: 600,
                margin: 0,
              }}
            >
              But most importantly
            </h3>
            <h2
              style={{
                fontFamily: 'Prompt',
                fontWeight: 700,
                fontSize: '2.5em',
                margin: 0,
                color: 'white',
              }}
            >
               have fun 🎉
            </h2>
          </div>
        </section>
      </div>
    );
  }
}

export default Index;
