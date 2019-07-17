import React, { Component } from 'react';
import Header from '../../components/Header';
import 'rsuite/dist/styles/rsuite.min.css';
import anime from 'animejs';
import SplitText from 'react-pose-text';
import { Button } from 'rsuite';

class Index extends Component {
  componentDidMount() {
    anime({
      targets: '#interconnect',
      opacity: 1,
      duration: 1000,
      easing: 'easeInOutSine',
    });
  }
  render() {
    const charPoses = {
      exit: { opacity: 0, y: 20 },
      enter: {
        opacity: 1,
        y: 0,
        //@ts-ignore
        delay: d => d.charIndex * 40,
      },
    };
    return (
      <div
        style={{
          background: 'linear-gradient(rgb(18,58,135), rgb(14,21,91))',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Header />
        <div
          style={{
            width: '100%',
            padding: 200,
            display: 'flex',
            paddingLeft: '10vw',
            paddingRight: '10vw',
            color: 'white',
            fontFamily: 'raleway',
            fontSize: '5em',
            fontWeight: 700,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            alignItems: 'center',
            height: 'calc(100vh - 70px)',
          }}
        >
          <div>
            <div>
              <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                Create the Future
              </SplitText>
            </div>
            <h3 style={{ opacity: 0 }} id="interconnect">
              Where ideas interconnect
            </h3>
            <Button color="blue" size="lg" href="/signup">
              Get started now
            </Button>
          </div>
          <div
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
          >
            <div style={{}}>
              <img
                src="https://gw.alipayobjects.com/mdn/prod_resou/afts/img/A*QT3DQZcBDqwAAAAAAAAAAABjARQnAQ"
                style={{ width: '40vw', objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
