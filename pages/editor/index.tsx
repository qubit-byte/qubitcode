import React, { Component } from 'react';
import Header from '../../components/Header';
import dynamic from 'next/dynamic';
const AceEditor = dynamic(() => import('../../components/AceEditor'), {
  ssr: false,
});
const MonacoEditor = dynamic(() => import('../../components/MonacoEditor'), {
  ssr: false,
});
import { withRouter } from 'next/router';

class Editor extends Component<any, {}> {
  editor: any;
  constructor(props: any) {
    super(props);
    this.editor = null;
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100vw',
          maxWidth: '100vw',
          height: '100vh',
        }}
      >
        <Header />
        <div
          style={{
            flex: 1,
            display: 'flex',
            width: '100vw',
            paddingTop: 10,
            backgroundColor: 'rgb(32,33,36)',
          }}
        >
          {this.props.router.query.min === 'true' ? <AceEditor /> : <MonacoEditor />}
        </div>
      </div>
    );
  }
}

export default withRouter(Editor);
