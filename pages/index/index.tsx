import React, { Component } from 'react';
import Header from '../../components/Header';
import 'rsuite/dist/styles/rsuite.min.css';
// import anime from 'animejs';
import Head from 'next/head';
import './index.css';

class Index extends Component {
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
        }}
        onScroll={e => {
          //@ts-ignore
          if (e.target.scrollTop === 0) {
            alert('topped');
          }
        }}
        id="container"
      >
        <Header />
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
            background: 'linear-gradient(#0c0032, rgb(255,255,255) 100%)',
            paddingTop: 100,
          }}
        >
          <h1>Work, play, share</h1>
          <h3>But most importantly have fun</h3>
        </section>
      </div>
    );
  }
}

export default Index;
